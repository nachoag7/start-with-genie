import Link from "next/link";

export default function SampleCard({
  title,
  desc,
  href,
  action = "View",
}: { title: string; desc: string; href: string; action?: string }) {
  return (
    <article className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm
                        hover:shadow-[0_6px_20px_rgba(0,0,0,0.06)] transition">
      <h3 className="text-[15px] font-medium">{title}</h3>
      <p className="mt-1 text-sm text-neutral-600 leading-snug">{desc}</p>

      <div className="mt-3 pt-3 border-t border-black/10">
        <Link
          href={href}
          className="inline-flex items-center gap-1 text-sm text-neutral-900 hover:opacity-80"
        >
          {action} <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </article>
  );
}