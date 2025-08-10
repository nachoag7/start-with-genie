"use client";
import React from "react";

type Item = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  learnHref?: string;
};

export default function SetupChecklist({
  items,
  onToggle,
  stateLabel,
}: {
  items: Item[];
  onToggle?: (id: string, next: boolean) => void; // reuse existing handler
  stateLabel?: string | null;
}) {
  const total = items.length;
  const done = items.filter(i => i.completed).length;
  return (
    <section className="rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm p-5 sm:p-6 shadow-sm mt-6 fade-in-up-2">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base font-semibold text-gray-900">Setup Checklist</h3>
          <p className="text-sm text-gray-500">Complete these steps to officially launch your LLC.</p>
        </div>
        <div className="text-sm text-gray-600">{done} of {total} complete</div>
      </div>

      <div className="space-y-3">
        {items.map((it, idx) => (
          <article
            key={it.id}
            className={`group flex items-start gap-3 rounded-xl border border-gray-200 bg-gradient-to-b from-white to-slate-50 p-4 shadow-sm motion-soft hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(2,6,23,0.08)] ${idx===0?'fade-in-up':idx===1?'fade-in-up-2':'fade-in-up-3'}`}
          >
            {/* Checkbox with smooth tick */}
            <button
              onClick={() => onToggle?.(it.id, !it.completed)}
              aria-pressed={it.completed}
              className={`mt-0.5 w-5 h-5 rounded-md border motion-soft flex items-center justify-center ${it.completed ? 'bg-blue-600 border-blue-600' : 'bg-white border-gray-300 hover:border-gray-400'}`}
            >
              {it.completed && (
                <svg className="w-3.5 h-3.5 text-white pop" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>

            <div className="flex-1">
              <div className="flex flex-wrap items-baseline gap-2">
                <h4 className="text-sm font-medium text-gray-900">{it.title}</h4>
                {/* subtle state accent for state-specific task */}
                {stateLabel && /file your llc/i.test(it.title) && (
                  <span className="text-xs rounded-full bg-blue-50 text-blue-700 px-2 py-0.5">in {stateLabel}</span>
                )}
              </div>
              <p className="text-sm text-gray-600 mt-0.5">{it.description}</p>
              {it.learnHref && (
                <a href={it.learnHref} className="text-sm text-blue-600 hover:text-blue-700 motion-soft mt-1 inline-flex">Learn more</a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}