import { motion } from "framer-motion";
import { Cpu, Shirt, Watch, Glasses } from "lucide-react";

const cats = [
  { name: "Tech", icon: Cpu, count: 128, color: "from-neon-blue/30 to-neon-purple/10" },
  { name: "Fashion", icon: Shirt, count: 96, color: "from-neon-pink/30 to-neon-purple/10" },
  { name: "Accessories", icon: Watch, count: 64, color: "from-neon-purple/30 to-neon-blue/10" },
  { name: "Smart Devices", icon: Glasses, count: 42, color: "from-neon-blue/30 to-neon-pink/10" },
];

export function Categories() {
  return (
    <section className="relative py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="text-sm text-neon-purple uppercase tracking-widest">Explore</p>
            <h2 className="text-4xl sm:text-5xl font-semibold mt-2">Shop by Category</h2>
          </div>
          <p className="text-muted-foreground max-w-sm">Worlds of curated drops — each one engineered for the future.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {cats.map((c, i) => (
            <motion.a
              key={c.name}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`group relative overflow-hidden rounded-3xl glass p-6 h-48 flex flex-col justify-between bg-gradient-to-br ${c.color}`}
            >
              <div className="h-12 w-12 rounded-2xl glass-strong grid place-items-center group-hover:glow-primary transition-shadow">
                <c.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-2xl font-display">{c.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{c.count} products</p>
              </div>
              <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-[var(--gradient-glow)] opacity-50 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}