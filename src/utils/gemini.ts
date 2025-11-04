/**
 * OpenAI API utility functions
 */

import { config } from '../constants/config';
import { services, technologies, experiences, testimonials, projects } from '../constants/index';

interface OpenAIMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface OpenAIRequest {
  model: string;
  messages: OpenAIMessage[];
  temperature?: number;
}

interface OpenAIResponse {
  choices: Array<{
    message: {
      role: string;
      content: string;
    };
  }>;
  error?: {
    message: string;
    type: string;
  };
}

/**
 * Build personalized system prompt with portfolio information
 */
function buildSystemPrompt(): string {
  const techList = technologies.map(t => t.name).join(', ');
  const serviceList = services.map(s => s.title).join(', ');
  const projectList = projects.map(p => `- ${p.name}: ${p.description}`).join('\n');
  const experienceList = experiences.map(exp => 
    `- ${exp.title} at ${exp.companyName} (${exp.date}): ${exp.points.join(' ')}`
  ).join('\n');

  return `You are an AI assistant for Muhammad Tahir's portfolio website. Your role is to help visitors learn about Muhammad Tahir's skills, experience, projects, and services. Answer questions about him in a friendly, professional, and informative manner.

**About Muhammad Tahir:**
${config.sections.about.content}

**Contact Information:**
- Name: ${config.html.fullName}
- Email: ${config.html.email}
- GitHub: https://github.com/tahir121-web
- LinkedIn: https://www.linkedin.com/in/tahir-dev
- WhatsApp: +92 340 5767156

**Professional Title:**
${config.hero.p.join(' ')}

**Services Offered:**
${serviceList}

**Technologies & Skills:**
${techList}

**Work Experience:**
${experienceList}

**Projects:**
${projectList}

**Testimonials:**
${testimonials.map(t => `- ${t.name} (${t.designation} at ${t.company}): "${t.testimonial}"`).join('\n')}

**Important Guidelines:**
- Always answer questions about Muhammad Tahir based on the information provided above
- Be concise and helpful
- If asked about something not in the portfolio, politely redirect to what you know about him
- Maintain a professional yet friendly tone
- Encourage visitors to contact Muhammad Tahir for more information or project inquiries
- For contact information, direct them to use the contact form on the website or provide his email (${config.html.email})
- When asked about social links, provide the GitHub, LinkedIn, and WhatsApp information above`;
}

/**
 * Send a message to OpenAI API and get a response
 */
export async function sendMessageToGemini(
  message: string,
  conversationHistory: Array<{ role: 'user' | 'assistant'; content: string }> = []
): Promise<string> {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error('OpenAI API key is not configured. Please set VITE_OPENAI_API_KEY in your .env file.');
  }

  // Build system prompt with portfolio information
  const systemPrompt = buildSystemPrompt();

  // Convert conversation history to OpenAI format
  const messages: OpenAIMessage[] = [
    {
      role: 'system',
      content: systemPrompt,
    },
    ...conversationHistory.map((msg) => ({
      role: (msg.role === 'assistant' ? 'assistant' : 'user') as 'user' | 'assistant',
      content: msg.content,
    })),
  ];

  // Add the current user message
  messages.push({
    role: 'user',
    content: message,
  });

  // Try different models in order of preference
  const modelsToTry = [
    'gpt-4o-mini',
    'gpt-4-turbo',
    'gpt-4',
    'gpt-3.5-turbo',
  ];

  let lastError: Error | null = null;

  for (const model of modelsToTry) {
    try {
      const requestBody: OpenAIRequest = {
        model,
        messages,
        temperature: 0.7,
      };

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const errorData: OpenAIResponse = await response.json().catch(() => ({}));
        lastError = new Error(
          errorData.error?.message || `API request failed with status ${response.status} for model ${model}`
        );
        // Continue to next model if this one fails
        continue;
      }

      const data: OpenAIResponse = await response.json();

      if (!data.choices || data.choices.length === 0) {
        lastError = new Error(`No response from OpenAI API for model ${model}`);
        continue;
      }

      const responseText = data.choices[0].message.content;
      return responseText;
    } catch (error) {
      if (error instanceof Error) {
        lastError = error;
      } else {
        lastError = new Error(`Failed to communicate with OpenAI API for model ${model}`);
      }
      // Continue to next model
      continue;
    }
  }

  // If all models failed, throw the last error
  throw lastError || new Error('All OpenAI models failed. Please check your API key and model availability.');
}

