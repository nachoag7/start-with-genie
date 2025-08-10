"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function DashboardActions() {
  const [open, setOpen] = useState(false);

  async function onLogout() {
    try {
      await supabase.auth.signOut();
    } finally {
      window.location.href = "/";
    }
  }

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setOpen(true)}
        className="px-3 py-1.5 text-xs font-medium
                   text-gray-500 hover:text-gray-700
                   hover:bg-gray-50 rounded-md
                   transition-colors"
      >
        Help
      </button>
      <button
        onClick={onLogout}
        className="px-3 py-1.5 text-xs font-medium
                   text-gray-500 hover:text-gray-700
                   hover:bg-gray-50 rounded-md
                   transition-colors"
      >
        Log out
      </button>

      {open && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />
          <div className="relative mx-auto mt-24 w-full max-w-md rounded-2xl
                          bg-white shadow-xl
                          border border-neutral-200 p-6">
            <h2 className="text-lg font-semibold mb-1">Need help?</h2>
            <p className="text-sm text-neutral-600 mb-4">
              Email us and we'll get back quickly.
            </p>
            <div className="text-center">
              <a
                href="mailto:info@startwithgenie.com?subject=Support%20Request"
                className="text-blue-600 hover:text-blue-700 hover:underline"
              >
                info@startwithgenie.com
              </a>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="mt-3 w-full rounded-xl px-4 py-2.5
                         bg-neutral-100 hover:bg-neutral-200
                         text-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}