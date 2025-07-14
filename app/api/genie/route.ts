import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  console.log('[Genie API] Request received');
  try {
    const { messages } = await req.json();
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey || typeof apiKey !== 'string' || !apiKey.startsWith('sk-')) {
      console.error('[Genie API] Missing or invalid OpenAI API key');
      return NextResponse.json({ message: 'Genie is temporarily unavailable due to a server configuration issue. Please contact support.' }, { status: 500 });
    }
    // Add system prompt if not present
    const systemPrompt = {
      role: 'system',
      content: 'You are Genie, an expert LLC setup assistant who helps users with filing, EINs, and operating agreements.'
    };
    let openAIMessages = messages || [];
    if (!Array.isArray(openAIMessages)) {
      console.error('[Genie API] Invalid request: messages is not an array');
      return NextResponse.json({ message: 'Invalid request format.' }, { status: 400 });
    }
    if (!openAIMessages.some((m: any) => m.role === 'system')) {
      openAIMessages = [systemPrompt, ...openAIMessages];
    }
    let aiMessage = 'Hmm, I couldn\'t respond right now. Try again in a moment.';
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: openAIMessages,
          max_tokens: 500,
          temperature: 0.7,
        }),
      });
      if (!response.ok) {
        const errorText = await response.text();
        console.error('[Genie API] OpenAI API error:', response.status, errorText);
        return NextResponse.json({ message: 'Genie is having trouble connecting to OpenAI. Please try again later.' }, { status: 502 });
      }
      const data = await response.json();
      aiMessage = data.choices?.[0]?.message?.content || aiMessage;
      console.log('[Genie API] Response returned:', aiMessage);
      return NextResponse.json({ message: aiMessage });
    } catch (openaiError) {
      console.error('[Genie API] Error calling OpenAI:', openaiError);
      return NextResponse.json({ message: aiMessage }, { status: 500 });
    }
  } catch (error) {
    console.error('[Genie API] General error:', error);
    return NextResponse.json({ message: 'Hmm, I couldn\'t respond right now. Try again in a moment.' }, { status: 500 });
  }
} 