"use client";

import Avatar from "./ui/Avatar";

type Review = {
  name: string;
  title: string;
  headline: string;
  body: string;
  avatar?: string; // optional: /reviewers/justin-g.jpg
};

const reviews: Review[] = [
  {
    name: "Dave G.",
    title: "Opening his first Etsy shop",
    headline: `Didn't know where to start until I found this.`,
    body: `I googled for a while and got nowhere. Gave this a shot and got it done for cheap so I recommend.`,
    avatar: "/reviewers/dave-g.jpg",
  },
  {
    name: "Mohammad A.",
    title: "Opening an online business",
    headline: `Honestly? Just made things simpler.`,
    body: `I didn't know what I was doing at all but the process was pretty clear so it wasn't that hard.`,
    avatar: "/reviewers/mohammad-a.png",
  },
  {
    name: "Justin G.",
    title: "First-time business owner",
    headline: `Helped me stop overthinking.`,
    body: `Saw this and figured I'd give it a try instead of paying other brands much more. I was satisfied and saved a lot.`,
    avatar: "/reviewers/justin-g.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <h2 className="text-center text-2xl font-semibold">
        From Overwhelmed to Officially Launched
      </h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((r, index) => (
          <article
            key={r.name}
            className={`rounded-2xl border border-black/10 bg-white p-6 shadow-sm flex flex-col h-full ${
              index === 2 ? 'sm:col-span-2 sm:mx-auto sm:max-w-sm lg:col-span-1 lg:mx-0 lg:max-w-none' : ''
            }`}
          >
            <div className="text-amber-500" aria-label="5 out of 5 stars">★★★★★</div>

            <h3 className="mt-3 text-lg font-medium leading-snug">"{r.headline}"</h3>
            <p className="mt-2 text-sm text-neutral-600 flex-grow">{r.body}</p>

            <div className="mt-6 flex items-center gap-3">
              <Avatar name={r.name} src={r.avatar} size="md" />
              <div>
                <div className="text-sm font-medium">{r.name}</div>
                <div className="text-xs text-neutral-500">{r.title}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}