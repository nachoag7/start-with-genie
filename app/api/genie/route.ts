import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  console.log('[Genie API] Request received');
  try {
    const { messages } = await req.json();
    const apiKey = process.env.OPENAI_API_KEY;
    
    // Check if OpenAI API key is configured
    if (!apiKey || typeof apiKey !== 'string' || !apiKey.startsWith('sk-')) {
      console.error('[Genie API] Missing or invalid OpenAI API key');
      return NextResponse.json({ 
        message: 'Hi! I\'m Genie, your LLC setup assistant. I\'m currently in training mode and can help you with basic questions about LLC formation, EIN applications, and Operating Agreements. For now, I can provide general guidance, but for specific legal advice, please consult with a qualified attorney or accountant. What would you like to know about setting up your LLC?' 
      }, { status: 200 });
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
    // Simple fallback responses for common questions
    const fallbackResponses: { [key: string]: string } = {
      'ein': 'To get your EIN (Employer Identification Number), visit the IRS website at irs.gov and search for "EIN application." You can apply online for free, and you\'ll receive your EIN immediately. You\'ll need it to open a business bank account, hire employees, or file business taxes.',
      'llc': 'To file your LLC, you\'ll need to submit formation documents to your state\'s Secretary of State office. The process varies by state, but generally involves filing Articles of Organization and paying a filing fee. Check your state\'s official website for specific requirements and fees.',
      'operating agreement': 'An Operating Agreement is a legal document that outlines how your LLC will be managed, how profits and losses are distributed, and what happens if a member leaves. While not required in all states, it\'s highly recommended as it protects your personal assets and clarifies business relationships.',
      'bank account': 'To open a business bank account, you\'ll need your LLC formation documents, EIN, and a signed Operating Agreement. Most banks require these documents to verify your business structure and tax status.',
      'tax': 'LLCs have flexible tax options. By default, single-member LLCs are taxed as sole proprietorships, and multi-member LLCs are taxed as partnerships. You can also elect to be taxed as a corporation by filing Form 8832 with the IRS.',
      'cost': 'LLC formation costs vary by state, typically ranging from $50 to $500 for filing fees. Additional costs may include registered agent services ($50-300/year), Operating Agreement preparation, and ongoing compliance requirements.',
      'help': 'I\'m here to help with your LLC setup! I can assist with questions about filing your LLC, getting an EIN, understanding your Operating Agreement, opening a business bank account, and more. What specific aspect would you like to know more about?'
    };

    let aiMessage = 'I\'m here to help with your LLC setup! What would you like to know about forming your LLC, getting an EIN, or your Operating Agreement?';
    
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
        // Use fallback responses when OpenAI is unavailable
        const lastMessage = messages[messages.length - 1]?.content?.toLowerCase() || '';
        for (const [keyword, response] of Object.entries(fallbackResponses)) {
          if (lastMessage.includes(keyword)) {
            aiMessage = response;
            break;
          }
        }
        return NextResponse.json({ message: aiMessage }, { status: 200 });
      }
      const data = await response.json();
      aiMessage = data.choices?.[0]?.message?.content || aiMessage;
      console.log('[Genie API] Response returned:', aiMessage);
      return NextResponse.json({ message: aiMessage });
    } catch (openaiError) {
      console.error('[Genie API] Error calling OpenAI:', openaiError);
      // Use fallback responses when OpenAI fails
      const lastMessage = messages[messages.length - 1]?.content?.toLowerCase() || '';
      for (const [keyword, response] of Object.entries(fallbackResponses)) {
        if (lastMessage.includes(keyword)) {
          aiMessage = response;
          break;
        }
      }
      return NextResponse.json({ message: aiMessage }, { status: 200 });
    }
  } catch (error) {
    console.error('[Genie API] General error:', error);
    return NextResponse.json({ message: 'Hmm, I couldn\'t respond right now. Try again in a moment.' }, { status: 500 });
  }
} 