import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  console.log('[Genie API] Request received');
  try {
    const { messages } = await req.json();
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      console.error('[Genie API] Missing OpenAI API key');
      return NextResponse.json({ error: 'Missing OpenAI API key' }, { status: 500 });
    }
    // Add system prompt if not present
    const systemPrompt = {
      role: 'system',
      content: 'You are Genie, an expert LLC setup assistant who helps users with filing, EINs, and operating agreements.'
    };
    let openAIMessages = messages || [];
    if (!openAIMessages.some((m: any) => m.role === 'system')) {
      openAIMessages = [systemPrompt, ...openAIMessages];
    }
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
    const data = await response.json();
    const aiMessage = data.choices?.[0]?.message?.content || 'Sorry, I could not generate a response.';
    console.log('[Genie API] Response returned:', aiMessage);
    return NextResponse.json({ message: aiMessage });
  } catch (error) {
    console.error('[Genie API] Error:', error);
    return NextResponse.json({ message: 'Sorry, I could not generate a response.' }, { status: 500 });
  }
} 