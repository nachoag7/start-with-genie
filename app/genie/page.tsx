'use client'

import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import { Button } from '../../components/ui/Button'
import { motion } from 'framer-motion'
import Navbar from '../../components/Navbar'

const GENIE_AVATAR = '/ChatGPT Image.png'; // Custom avatar (ensure this file is in /public)

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export default function GeniePage() {
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

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

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
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: data.message,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 2).toString(),
          text: "Sorry, I couldn't connect to Genie. Please try again later.",
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

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-neutral-50 flex flex-col items-center justify-center px-4 py-12 pt-20">
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="w-full max-w-2xl bg-white rounded-xl shadow-md p-10 flex flex-col gap-8"
        >
          <h1 className="font-semibold text-3xl text-neutral-900 text-center">Genie Assistant</h1>
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-gray-50">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[75%] px-4 py-2 rounded-2xl shadow-sm ${msg.isUser ? 'bg-blue-600 text-white' : 'bg-white text-gray-900 border border-gray-200'}`}>
                  {!msg.isUser && (
                    <div className="flex items-center mb-1 gap-2">
                      <img src={GENIE_AVATAR} alt="Genie" className="h-6 w-6 rounded-full border" />
                      <span className="font-semibold text-primary-700 text-sm">Genie</span>
                    </div>
                  )}
                  <div className="whitespace-pre-line text-base">{msg.text}</div>
                  <div className="text-xs text-gray-400 mt-1 text-right">{msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[75%] px-4 py-2 rounded-2xl bg-white text-gray-900 border border-gray-200 shadow-sm animate-pulse">
                  Genie is typing...
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
          <div className="p-4 border-t border-gray-200 bg-white">
            <form
              className="flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
            >
              <input
                type="text"
                className="flex-1 rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Type your question for Genie..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isLoading}
                autoFocus
              />
              <Button
                type="submit"
                className="text-sm flex items-center gap-1"
                disabled={!inputValue.trim() || isLoading}
              >
                <Send className="h-5 w-5 text-white" />
                <span className="hidden sm:inline">Send</span>
              </Button>
            </form>
          </div>
        </motion.section>
      </main>
    </>
  );
} 
 
 
 
 