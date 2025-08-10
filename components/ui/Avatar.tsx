"use client";

import Image from "next/image";

type Size = "sm" | "md" | "lg";

const PX: Record<Size, number> = { sm: 32, md: 40, lg: 48 };

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0]?.toUpperCase() || "")
    .slice(0, 2)
    .join("");
}

export default function Avatar({
  name,
  src,
  size = "md",
  className = "",
}: {
  name: string;
  src?: string;
  size?: Size;
  className?: string;
}) {
  const dim = PX[size];

  return (
    <div
      className={`relative shrink-0 rounded-full overflow-hidden bg-neutral-200 border border-black/10 ${className}`}
      style={{ width: dim, height: dim }}
      aria-label={`${name} avatar`}
    >
      {src ? (
        <Image
          src={src}
          alt={`Photo of ${name}`}
          fill
          sizes={`${dim}px`}
          className="object-cover object-center"
          priority={false}
        />
      ) : (
        <div className="grid h-full w-full place-items-center">
          <span className="text-[12px] font-medium text-neutral-700">
            {initials(name)}
          </span>
        </div>
      )}
    </div>
  );
}