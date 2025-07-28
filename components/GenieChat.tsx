"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import { Button } from './ui/Button';

interface GenieChatProps {
  avatarSrc: string;
}

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export default function GenieChat({ avatarSrc }: GenieChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      text: "Hi! I'm Genie, your LLC setup assistant. Ask me anything about forming your LLC, getting an EIN, or your Operating Agreement!",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Prepare the conversation history for OpenAI
    const openAIMessages = [
      { role: 'system', content: "You are Genie, a friendly assistant for LLC setup. Answer clearly and helpfully." },
      ...messages.map((msg) => ({
        role: msg.isUser ? 'user' : 'assistant',
        content: msg.text,
      })),
      { role: 'user', content: inputValue },
    ];

    try {
      const res = await fetch('/api/genie', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: openAIMessages }),
      });
      const data = await res.json();
      
      // Handle both successful responses and fallback responses
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: data.message,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
    } catch (err) {
      console.error('Error calling Genie API:', err);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 2).toString(),
          text: "I'm here to help with your LLC setup! What would you like to know about forming your LLC, getting an EIN, or your Operating Agreement?",
          isUser: false,
          timestamp: new Date(),
        },
      ]);
    }
    setIsLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Remove auto-scroll to bottom when new messages arrive
  // useEffect(() => {
  //   chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  // }, [messages]);

  return (
    <div className="w-full flex flex-col h-full" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-2 py-4 space-y-3" style={{ minHeight: 0 }}>
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[75%] px-4 py-2 rounded-2xl shadow-sm ${msg.isUser ? 'bg-[#1E40AF] text-white' : 'bg-gray-50 text-gray-900 border border-gray-200'}`}>
              {!msg.isUser && (
                <div className="flex items-center mb-1 gap-2">
                  <img src={avatarSrc} alt="Genie" className="h-5 w-5 rounded-full" />
                  <span className="font-medium text-gray-700 text-sm">Genie</span>
                </div>
              )}
              <div className="whitespace-pre-line text-sm">{msg.text}</div>
              <div className={`text-xs mt-1 text-right ${msg.isUser ? 'text-blue-100' : 'text-gray-400'}`}>
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[75%] px-4 py-2 rounded-2xl bg-gray-50 text-gray-900 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-2">
                <img src={avatarSrc} alt="Genie" className="h-5 w-5 rounded-full" />
                <span className="font-medium text-gray-700 text-sm">Genie</span>
              </div>
              <div className="text-sm mt-1">Genie is typing...</div>
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Chat Input */}
      <div className="border-t border-gray-200 bg-white px-0 py-4 flex justify-center w-full" style={{ boxShadow: 'none' }}>
        <form
          className="flex gap-3 w-full max-w-2xl items-center justify-center"
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
        >
          <input
            id="genie-input"
            type="text"
            className="flex-1 px-4 py-3 border border-[#e5e5ea] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 bg-white shadow-sm"
            placeholder="Ask Genie anything..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
            style={{ minWidth: 0 }}
          />
          <Button
            type="submit"
            size="md"
            disabled={!inputValue.trim() || isLoading}
            className="text-white !text-white"
            style={{ minWidth: 44 }}
          >
            <Send className="w-4 h-4 text-white" />
            <span className="hidden sm:inline text-white">Send</span>
          </Button>
        </form>
      </div>
    </div>
  );
} 
 



