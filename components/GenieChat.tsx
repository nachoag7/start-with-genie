"use client";

import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { SectionReveal } from "./reveal";

type ChatMessage = {
  id: string;
  role: "assistant" | "user" | "system";
  content: string;
  createdAt?: string | number | Date;
};

// Adapter types
type GenieChatProps = {
  initialMessages?: ChatMessage[];
  onSend?: (input: string) => Promise<void> | void;
  isLoading?: boolean;
  avatarSrc?: string;
  userName?: string;
  userState?: string;
  maxMessages?: number;
  disableScroll?: boolean;
  compact?: boolean;
};

export default function GenieChat({
  initialMessages = [],
  onSend,
  isLoading = false,
  avatarSrc = "/genie-preview.png",
  userName,
  userState,
  maxMessages,
  disableScroll = false,
  compact = false,
  isDemo = false,
}: GenieChatProps & { isDemo?: boolean }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Set initial messages after mobile detection
  useEffect(() => {
    if (isDemo) {
      setMessages([
        {
          id: 'welcome',
          role: 'assistant',
          content: getWelcomeMessage(),
          createdAt: new Date(),
        },
        {
          id: 'demo-question',
          role: 'user',
          content: "How do I get an EIN for my LLC?",
          createdAt: new Date(),
        },
        {
          id: 'demo-answer',
          role: 'assistant',
          content: "Getting an EIN is straightforward! Here's the step-by-step process:\n\n1. Go to IRS.gov and search for 'EIN Application'\n2. Click 'Apply Online Now'\n3. Select 'Limited Liability Company' as your entity type\n4. Fill out the application with your LLC details\n5. Submit and you'll get your EIN immediately\n\nYou'll need your LLC formation documents handy. The whole process takes about 10 minutes and it's completely free!\n\nWould you like me to walk you through any specific part of this process?",
          createdAt: new Date(),
        },
        {
          id: 'demo-followup',
          role: 'user',
          content: "What documents do I need?",
          createdAt: new Date(),
        },
        {
          id: 'demo-followup-answer',
          role: 'assistant',
          content: "For your EIN application, you'll need:\n\n• Your LLC's legal name (exactly as filed with your state)\n• Your LLC's business address\n• The name and SSN of your LLC's responsible party (usually you)\n• Your LLC's formation date\n• The type of business you're starting\n\nThat's it! No complex paperwork needed. The IRS just wants to verify your LLC exists and identify who's responsible for tax matters.\n\nPro tip: Have your LLC formation confirmation from your state ready - it makes the process even smoother.",
          createdAt: new Date(),
        }
      ]);
    } else {
      setMessages([
        {
          id: 'welcome',
          role: 'assistant',
          content: getWelcomeMessage(),
          createdAt: new Date(),
        },
      ]);
    }
  }, [isMobile, isDemo]);

  const getWelcomeMessage = () => {
    if (isMobile) {
      return "Hi! I'm Genie. Ask me anything about your LLC!";
    }
    return "Hi! I'm Genie, your LLC setup assistant. Ask me anything about forming your LLC, getting an EIN, or your Operating Agreement!";
  };
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [messageCount, setMessageCount] = useState(0);
  
  // Premium scroll features
  const bottomRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isNearBottom, setIsNearBottom] = useState(true);
  
  // RAF throttling for smooth scrolling during streaming
  const rafRef = useRef<number | null>(null);
  
  // Textarea autosize
  const taRef = useRef<HTMLTextAreaElement | null>(null);

  // Near-bottom detector with IntersectionObserver
  useEffect(() => {
    if (disableScroll || !bottomRef.current || !scrollRef.current) return;
    const el = bottomRef.current;
    const container = scrollRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => setIsNearBottom(entry.isIntersecting),
      { root: container, rootMargin: "80px", threshold: 0.01 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [disableScroll]);

  // Smart scroll function
  function scrollToBottom(smooth = true) {
    if (disableScroll) return;
    bottomRef.current?.scrollIntoView({ 
      behavior: smooth ? "smooth" : "auto", 
      block: "end" 
    });
  }

  // Stream-aware autoscroll with throttling
  function scheduleScroll() {
    if (disableScroll) return;
    if (!isNearBottom) return;
    if (rafRef.current) return;
    
    rafRef.current = requestAnimationFrame(() => {
      scrollToBottom(true);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    });
  }



  // Autosize textarea function
  function autosize() {
    const ta = taRef.current;
    if (!ta) return;
    if (isMobile) {
      ta.style.height = "20px"; // Fixed height for mobile - enough for placeholder
      return;
    }
    ta.style.height = "0px";
    ta.style.height = Math.min(ta.scrollHeight, 160) + "px";
  }

  // Initialize autosize
  useEffect(() => { 
    autosize(); 
  }, [input]);

  // Generate dynamic placeholder based on user data
  function getPlaceholder() {
    if (maxMessages && messageCount >= maxMessages) {
      return "Unlock Genie in your dashboard";
    }
    
    if (isMobile) {
      return "Ask Genie anything...";
    }
    
    return "Ask Genie anything about starting your LLC...";
  }

  async function handleSend() {
    const trimmed = input.trim();
    if (!trimmed || sending || (maxMessages && messageCount >= maxMessages)) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: trimmed,
      createdAt: new Date(),
    };

    // Optimistic UI: immediately show user message and clear input
    setSending(true);
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setMessageCount(prev => prev + 1);
    
    // Keep focus on textarea
    taRef.current?.focus();

    // Prepare the conversation history for OpenAI
    const openAIMessages = [
      { role: 'system', content: "You are Genie, a friendly assistant for LLC setup. Answer clearly and helpfully." },
      ...messages.map((msg) => ({
        role: msg.role === 'user' ? 'user' : 'assistant',
        content: msg.content,
      })),
      { role: 'user', content: trimmed },
    ];

    try {
      const res = await fetch('/api/genie', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: openAIMessages }),
      });
      const data = await res.json();
      
      // Handle both successful responses and fallback responses
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.message,
        createdAt: new Date(),
      };
      
      setMessages((prev) => [...prev, aiResponse]);
      
      // Scroll on first assistant token (simulate)
      scheduleScroll();
      
      // Final scroll when stream ends
      setTimeout(() => {
        if (isNearBottom) scrollToBottom(true);
      }, 100);
      
    } catch (err) {
      console.error('Error calling Genie API:', err);
      
      // Error bubble
      setMessages((prev) => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          role: 'assistant',
          content: "Sorry, I couldn't send that. Please try again.",
          createdAt: new Date(),
        },
      ]);
    } finally {
      setSending(false);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <SectionReveal>
      <div
        className={`
          border border-gray-200
          bg-gradient-to-b from-white to-slate-50
          backdrop-blur-sm
          shadow-sm
          space-y-4
          motion-soft
          hover:shadow-[0_12px_40px_rgba(2,6,23,0.08)] hover:-translate-y-0.5
          pb-safe relative
          ${compact ? 'rounded-lg p-5 sm:p-6 lg:p-7 space-y-5' : 'rounded-2xl p-5 sm:p-6 space-y-4'}
        `}
      >
      {/* Header */}
      <div>
        <h2 className={`${compact ? 'text-sm sm:text-base' : 'text-sm sm:text-base'} font-semibold text-gray-900`}>Your Genie Assistant</h2>
        <p className={`${compact ? 'text-xs sm:text-sm' : 'text-xs sm:text-sm'} text-gray-500`}>
          AI-powered guidance for your LLC setup.
        </p>
      </div>

      {/* Messages */}
      <div
        ref={scrollRef}
        className={`${compact ? 'space-y-2' : 'space-y-3'} pr-1 bg-transparent relative ${
          isDemo ? 'overflow-hidden max-h-[400px]' : 'overflow-y-auto max-h-[400px]'
        }`}
        role="log" 
        aria-live="polite" 
        aria-relevant="additions"
        aria-busy={sending}
      >
        {messages
          .filter((m) => m.role !== "system")
          .map((m) => (
            <MessageBubble key={m.id} msg={m} avatarSrc={avatarSrc} />
          ))}
        {isLoading || sending ? (
          <AssistantTyping avatarSrc={avatarSrc} />
        ) : null}

        <div ref={bottomRef} />
      </div>



      {/* Input */}
      {!isDemo && (
                <div
          className={`
            flex items-center gap-2
            bg-white/80
            border border-gray-200
            rounded-full
            px-3
            shadow-sm
            ${isMobile ? 'py-0.5' : 'py-1.5'}
          `}
        >
          <textarea
            ref={taRef}
            id="genie-input"
            value={input}
            onChange={(e) => { 
              setInput(e.target.value); 
              autosize(); 
            }}
            onKeyDown={onKeyDown}
            placeholder={getPlaceholder()}
            disabled={maxMessages && messageCount >= maxMessages}
            rows={1}
            className={`
              flex-1 bg-transparent focus:outline-none
              text-sm text-gray-900 placeholder-gray-400
              resize-none
              disabled:opacity-50 disabled:cursor-not-allowed
              ${maxMessages && messageCount >= maxMessages ? 'animate-pulse cursor-pointer' : ''}
              ${isMobile ? 'py-1 leading-tight' : 'py-1 max-h-40'}
            `}
            style={{ minHeight: isMobile ? '20px' : '32px', maxHeight: isMobile ? '20px' : '160px' }}
          />
          <button
            onClick={handleSend}
            disabled={sending || isLoading || !input.trim() || (maxMessages && messageCount >= maxMessages)}
            className="
              px-3 py-1.5 rounded-full
              bg-gradient-to-r from-blue-600 to-blue-500
              text-white text-sm font-medium
              hover:from-blue-700 hover:to-blue-600
              motion-soft
              disabled:opacity-50 disabled:cursor-not-allowed
              flex-shrink-0
            "
          >
            Send
          </button>
        </div>
      )}
      
      {/* Preview Mode Notice */}
      {maxMessages && messageCount >= maxMessages && (
        <div className="
          flex items-center justify-center
          text-sm text-neutral-500
        ">
          <span>Preview mode. Get your full dashboard for unlimited access to Genie.</span>
        </div>
      )}
      
      {/* Demo Mode Notice */}
      {isDemo && (
        <div className="
          flex items-center justify-center
          text-sm text-neutral-500
        ">
          <span>Demo mode - Get full access in your dashboard</span>
        </div>
      )}
      </div>
    </SectionReveal>
  );
}

function MessageBubble({ msg, avatarSrc }: { msg: ChatMessage; avatarSrc: string }) {
  const isAssistant = msg.role === "assistant";
  return (
    <motion.div 
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
      className={`flex ${isAssistant ? "items-start" : "items-start justify-end"}`}
    >
      {isAssistant ? (
        <div className="flex items-start gap-3 max-w-[80%]">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
            <img src={avatarSrc} alt="Genie" className="w-6 h-6 rounded-full" />
          </div>
          <div className="rounded-3xl bg-blue-600 text-white px-5 py-3 shadow-md">
            <RichText content={msg.content} />
          </div>
        </div>
      ) : (
        <div className="max-w-[80%] rounded-3xl bg-gray-100 text-gray-900 px-5 py-3 shadow-sm">
          <RichText content={msg.content} />
        </div>
      )}
    </motion.div>
  );
}

// Minimal rich text (line breaks) without markdown libs
function RichText({ content }: { content: string }) {
  return (
    <div className="whitespace-pre-wrap leading-relaxed text-sm sm:text-[15px]">
      {content}
    </div>
  );
}

function AssistantTyping({ avatarSrc }: { avatarSrc: string }) {
  return (
    <div className="flex items-start gap-3 fade-in-up">
      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
        <img src={avatarSrc} alt="Genie" className="w-6 h-6 rounded-full" />
      </div>
      <div className="rounded-3xl bg-blue-600 text-white px-5 py-3 shadow-md flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-[pulse_1s_ease-in-out_infinite]" />
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-[pulse_1s_ease-in-out_infinite] delay-150" />
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-[pulse_1s_ease-in-out_infinite] delay-300" />
      </div>
    </div>
  );
}