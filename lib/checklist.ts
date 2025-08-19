export function markChecklistStep(key: "llc"|"ein"|"oa", userId?: string | null) {
  try {
    const storageKey = `genie_checklist_${userId ?? "anon"}`;
    const raw = localStorage.getItem(storageKey);
    const data = raw ? JSON.parse(raw) : {};
    data[key] = true;
    localStorage.setItem(storageKey, JSON.stringify(data));
    window.dispatchEvent(new Event("storage")); // triggers update if needed
  } catch {}
} 