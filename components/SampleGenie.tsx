"use client";

import { useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; text: string; id: string };

const SAMPLE_BIZ = "Prairie Tech Solutions LLC";
const SAMPLE_STATE = "North Dakota";

const SCRIPTS: { test: RegExp; answer: string }[] = [
  {
    test: /(how|steps|file|filing|register).*(north dakota|nd)|north dakota.*(file|filing|steps)/i,
    answer:
      `Here's a simple overview for ${SAMPLE_STATE}:\n` +
      `1) Choose your LLC name and confirm it's available\n` +
      `2) File Articles of Organization with the ${SAMPLE_STATE} Secretary of State\n` +
      `3) Get your EIN from the IRS\n` +
      `4) Create and keep your Operating Agreement\n\n` +
      `In your full dashboard, you'll get a personalized, step-by-step plan with the exact forms, links, fees, and timelines for ${SAMPLE_STATE}.`,
  },
  {
    test: /(ein|tax id|irs)/i,
    answer:
      `Your EIN comes directly from the IRS. In your full dashboard you'll get a guided checklist and the official IRS link so you can apply in minutes—no third-party upsells, no confusion.`,
  },
  {
    test: /(operating agreement|oa|agreement)/i,
    answer:
      `You'll get a customizable Operating Agreement template pre-filled for ${SAMPLE_BIZ}. You can tweak membership, ownership, and management structure—then save a clean, ready-to-sign PDF.`,
  },
  {
    test: /(cost|price|how much|49)/i,
    answer:
      `It's a flat $49 for the complete launch kit—state filing instructions, EIN guide, and a customizable Operating Agreement—plus 24/7 access to Genie. No hidden fees from us.`,
  },
];

const DEFAULT_ANSWER =
  `I can help with filing steps, EIN, and your Operating Agreement. In the full dashboard, I'll tailor everything to your state and business and keep you moving with clear next steps.`;

export default function SampleGenie() {
  const [messages, setMessages] = useState<Msg[]>([
    {
      id: "seed-1",
      role: "assistant",
      text:
        `Hi! I'm Genie, your LLC setup assistant.\n` +
        `This is a preview—ask me anything about forming ${SAMPLE_BIZ}, getting an EIN, or your Operating Agreement. ` +
        `Your full dashboard includes personalized steps for ${SAMPLE_STATE}.`,
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [exchanges, setExchanges] = useState(0);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, loading]);

  function matchAnswer(q: string) {
    const found = SCRIPTS.find(s => s.test.test(q));
    return found ? found.answer : DEFAULT_ANSWER;
  }

  async function send() {
    const q = input.trim();
    if (!q || loading) return;

    const userMsg: Msg = { id: crypto.randomUUID(), role: "user", text: q };
    setMessages(m => [...m, userMsg]);
    setInput("");
    setLoading(true);

    const answer = matchAnswer(q);

    // fake typing delay for premium feel
    await new Promise(r => setTimeout(r, Math.min(1200 + q.length * 10, 2200)));

    const assistantMsg: Msg = { id: crypto.randomUUID(), role: "assistant", text: answer };
    setMessages(m => [...m, assistantMsg]);
    setLoading(false);
    setExchanges(x => x + 1);

    // after 2 exchanges, nudge the upsell
    if (exchanges + 1 >= 2) {
      await new Promise(r => setTimeout(r, 600));
      setMessages(m => [
        ...m,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          text:
            `Want the full experience? Unlock your personalized dashboard for $49 to download documents and get step-by-step guidance tailored to ${SAMPLE_STATE}.\n\n` +
            `→ Get My Dashboard`,
        },
      ]);
    }
  }

  function onKey(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <div className="rounded-2xl border border-black/10 bg-white/70 p-4 md:p-5 shadow-[0_6px_30px_rgba(0,0,0,0.06)] backdrop-blur">
      <div className="text-[15px] font-medium text-neutral-900">Your Genie Assistant</div>
      <div className="text-sm text-neutral-500">AI-powered guidance for your LLC setup.</div>

      <div className="mt-4 space-y-3 max-h-[380px] overflow-auto pr-1">
        {messages.map(m => (
          <Bubble key={m.id} role={m.role} text={m.text} />
        ))}
        {loading && <Typing />}
        <div ref={endRef} />
      </div>

      <div className="mt-3 flex items-end gap-2">
        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={onKey}
          rows={1}
          placeholder={`Ask Genie anything about starting your LLC in ${SAMPLE_STATE}…`}
          className="min-h-[44px] w-full resize-none rounded-xl border border-black/10 bg-white/80 px-3 py-2 text-[15px] leading-6 text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-black/20"
        />
        <button
          onClick={send}
          disabled={!input.trim() || loading}
          className="select-none rounded-xl bg-[#3b82f6] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#2f6fe0] disabled:opacity-50"
        >
          Send
        </button>
      </div>

      {/* small note for preview mode */}
      <p className="mt-2 text-xs text-neutral-500">
        Preview mode. Replies are examples. Your full dashboard unlocks personalized answers, downloads, and saved progress.
      </p>
    </div>
  );
}

function Bubble({ role, text }: { role: "user" | "assistant"; text: string }) {
  const isUser = role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={[
          "max-w-[80%] whitespace-pre-wrap rounded-2xl px-3 py-2 text-[15px] leading-6 shadow-sm",
          isUser
            ? "bg-neutral-900 text-white"
            : "bg-[#3b82f6] text-white",
        ].join(" ")}
      >
        {text.includes("→ Get My Dashboard") ? (
          <span>
            {text.replace("→ Get My Dashboard", "")}
            <a
              href="/start"
              className="ml-1 underline decoration-white/60 underline-offset-4 hover:decoration-white"
            >
              → Get My Dashboard
            </a>
          </span>
        ) : (
          text
        )}
      </div>
    </div>
  );
}

function Typing() {
  return (
    <div className="flex justify-start">
      <div className="rounded-2xl bg-[#3b82f6] px-3 py-2 text-white shadow-sm">
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