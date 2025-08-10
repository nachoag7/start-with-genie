"use client";

import { StaggerReveal, Item } from "./reveal";

type Item = {
  title: string;
  subtitle?: string;
};

export default function PremiumChecklist({
  items,
  className = "",
  ariaLabel = "Key points",
}: {
  items: Item[];
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <StaggerReveal>
      <ul
        role="list"
        aria-label={ariaLabel}
        className={["space-y-5", className].join(" ")}
      >
        {items.map((it, i) => (
          <Item key={i}>
            <li className="flex items-start">
              <div className="min-w-0">
                <div className="text-[15px] font-medium leading-6 text-neutral-900">
                  {it.title}
                </div>
                {it.subtitle && (
                  <div className="mt-0.5 text-sm leading-6 text-neutral-500">
                    {it.subtitle}
                  </div>
                )}
              </div>
            </li>
          </Item>
        ))}
      </ul>
    </StaggerReveal>
  );
} 