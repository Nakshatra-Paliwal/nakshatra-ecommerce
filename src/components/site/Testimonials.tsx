import { motion } from "framer-motion";

const reviews = [
  { name: "Aria Chen", role: "Designer · Tokyo", text: "The unboxing alone felt like a future Apple keynote. Every detail is obsessed over.", avatar: "AC" },
  { name: "Mateo Rivera", role: "Founder · Madrid", text: "The 3D previews replaced my entire research process. I knew exactly what I was buying.", avatar: "MR" },
  { name: "Priya Sharma", role: "Engineer · Berlin", text: "Nexus feels less like a store and more like a portal. The AI picks have been uncanny.", avatar: "PS" },
  { name: "Jordan Blake", role: "Creator · NYC", text: "Sleek, fast, and just the right amount of weird. My favorite ecom experience this year.", avatar: "JB" },
];

export function Testimonials() {
  const loop = [...reviews, ...reviews];
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="text-center mb-12 px-6">
        <p className="text-sm text-neon-pink uppercase tracking-widest">Loved worldwide</p>
        <h2 className="text-4xl sm:text-5xl font-semibold mt-2">Voices from the Nexus</h2>
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="flex gap-5 animate-marquee w-max">
          {loop.map((r, i) => (
            <motion.div
              key={i}
              className="glass rounded-3xl p-6 w-[340px] shrink-0"
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-[var(--gradient-primary)] grid place-items-center text-sm font-semibold text-primary-foreground">
                  {r.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed">"{r.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}