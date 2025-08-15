"use client";

import * as React from "react";
import { useEffect, useRef, useState } from "react";

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
};

export default function LimitedGenieChat({
  initialMessages = [],
  onSend,
  isLoading = false,
  avatarSrc = "/genie-preview.png",
  userName,
  userState,
}: GenieChatProps) {
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
    setMessages([
      {
        id: 'welcome',
        role: 'assistant',
        content: getWelcomeMessage(),
        createdAt: new Date(),
      },
    ]);
  }, [isMobile]);

  const getWelcomeMessage = () => {
    if (isMobile) {
      return "Hi! I'm Genie. Ask me anything about your LLC!";
    }
    return "Hi! I'm Genie, your LLC setup assistant. This is a preview—ask me anything about forming your LLC, getting an EIN, or your Operating Agreement!";
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
    if (!bottomRef.current || !scrollRef.current) return;
    const el = bottomRef.current;
    const container = scrollRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => setIsNearBottom(entry.isIntersecting),
      { root: container, rootMargin: "80px", threshold: 0.01 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Smart scroll function
  function scrollToBottom(smooth = true) {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    
    rafRef.current = requestAnimationFrame(() => {
      if (bottomRef.current) {
        bottomRef.current.scrollIntoView({
          behavior: smooth ? 'smooth' : 'auto',
          block: 'end',
        });
      }
    });
  }

  function scheduleScroll() {
    if (isNearBottom) {
      scrollToBottom(true);
    }
  }

  // Auto-resize textarea
  function autosize() {
    if (!taRef.current) return;
    if (isMobile) {
      taRef.current.style.height = "16px"; // Fixed height for mobile - just enough for placeholder
      return;
    }
    taRef.current.style.height = 'auto';
    taRef.current.style.height = Math.min(taRef.current.scrollHeight, 120) + 'px';
  }

  function getPlaceholder() {
    if (messageCount >= 1) {
      if (isMobile) {
        return "Preview mode - unlock full access!";
      }
      return "Preview mode - get your full dashboard for unlimited access!";
    }
    
    if (isMobile) {
      return "Ask Genie anything...";
    }
    
    return "Ask Genie anything about starting your LLC...";
  }

  async function handleSend() {
    const trimmed = input.trim();
    if (!trimmed || sending || messageCount >= 1) return;

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
    <div
      className="
        rounded-2xl border border-gray-200
        bg-gradient-to-b from-white to-slate-50
        backdrop-blur-sm
        shadow-sm
        p-5 sm:p-6
        space-y-4
        motion-soft
        hover:shadow-[0_12px_40px_rgba(2,6,23,0.08)] hover:-translate-y-0.5
        pb-safe relative
      "
    >
      {/* Header */}
      <div>
        <h2 className="text-sm sm:text-base font-semibold text-gray-900">Your Genie Assistant</h2>
        <p className="text-xs sm:text-sm text-gray-500">
          AI-powered guidance for your LLC setup.
        </p>
      </div>

      {/* Messages */}
      <div
        ref={scrollRef}
        className="
          space-y-3
          max-h-[380px] sm:max-h-[420px]
          overflow-y-auto
          scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent
          pr-1
        "
      >
        {messages.map((msg) => (
          <MessageBubble key={msg.id} msg={msg} avatarSrc={avatarSrc} />
        ))}
        
        {sending && <AssistantTyping avatarSrc={avatarSrc} />}
        
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="flex items-end gap-2">
        <textarea
          ref={taRef}
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            autosize();
          }}
          onKeyDown={onKeyDown}
          placeholder={getPlaceholder()}
          disabled={messageCount >= 1}
          className={`
            flex-1
            resize-none
            rounded-xl
            border border-gray-200
            bg-white/80
            px-3
            text-sm sm:text-[15px]
            text-gray-900 text-center
            placeholder:text-gray-400
            focus:border-blue-300 focus:outline-none focus:ring-1 focus:ring-blue-300
            disabled:opacity-50 disabled:cursor-not-allowed
            transition-colors
            ${isMobile ? 'min-h-[16px] max-h-[16px] py-0 leading-tight' : 'min-h-[44px] max-h-[120px] py-2 leading-6'}
          `}
          rows={1}
        />
        <button
          onClick={handleSend}
          disabled={!input.trim() || sending || messageCount >= 1}
          className="
            select-none
            rounded-xl
            bg-blue-600
            px-4 py-2
            text-sm font-medium
            text-white
            transition
            hover:bg-blue-700
            disabled:opacity-50 disabled:cursor-not-allowed
            disabled:hover:bg-blue-600
          "
        >
          Send
        </button>
      </div>

      {/* Preview mode notice */}
      {messageCount >= 1 && (
        <p className="text-xs text-gray-500 text-center">
          Preview mode. Get your full dashboard for unlimited access to Genie.
        </p>
      )}
    </div>
  );
}

function MessageBubble({ msg, avatarSrc }: { msg: ChatMessage; avatarSrc: string }) {
  const isUser = msg.role === 'user';
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} gap-2`}>
      {!isUser && (
        <img
          src={avatarSrc}
          alt="Genie"
          className="w-6 h-6 rounded-full flex-shrink-0 mt-1"
        />
      )}
      
      <div
        className={`
          max-w-[80%] sm:max-w-[75%]
          rounded-2xl px-3 py-2
          text-sm sm:text-[15px] leading-6
          shadow-sm
          ${isUser 
            ? 'bg-gray-900 text-white' 
            : 'bg-blue-600 text-white'
          }
        `}
      >
        <RichText content={msg.content} />
      </div>
    </div>
  );
}

function RichText({ content }: { content: string }) {
  return <div className="whitespace-pre-wrap">{content}</div>;
}

function AssistantTyping({ avatarSrc }: { avatarSrc: string }) {
  return (
    <div className="flex justify-start gap-2">
      <img
        src={avatarSrc}
        alt="Genie"
        className="w-6 h-6 rounded-full flex-shrink-0 mt-1"
      />
      <div className="rounded-2xl bg-blue-600 px-3 py-2 text-white shadow-sm">
        <span className="inline-flex gap-1 align-middle">
          <Dot /> <Dot style={{ animationDelay: "120ms" }} /> <Dot style={{ animationDelay: "240ms" }} />
        </span>
      </div>
    </div>
  );
}

function Dot(props: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      {...props}
      className="inline-block h-1.5 w-1.5 animate-pulse-slow rounded-full bg-white/90"
    />
  );
} 