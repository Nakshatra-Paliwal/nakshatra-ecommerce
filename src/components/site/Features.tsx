import { motion } from "framer-motion";
import { Zap, Shield, Sparkles, Truck } from "lucide-react";

const features = [
  { icon: Truck, title: "Lightning Delivery", desc: "Same-day dispatch with zero-emission logistics across 180+ countries." },
  { icon: Sparkles, title: "Premium Quality", desc: "Hand-curated drops. Every product passes a 47-point inspection." },
  { icon: Shield, title: "Secure Payments", desc: "End-to-end encryption with biometric checkout — no friction." },
  { icon: Zap, title: "AI Recommendations", desc: "An on-device model learns your taste and curates your feed in real time." },
];

export function Features() {
  return (
    <section className="relative py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-sm text-neon-blue uppercase tracking-widest">Why Nexus</p>
          <h2 className="text-4xl sm:text-5xl font-semibold mt-2 max-w-2xl mx-auto">Built for the next decade of commerce</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative glass rounded-3xl p-6 overflow-hidden"
            >
              <div className="absolute inset-0 bg-[var(--gradient-glow)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="h-12 w-12 rounded-2xl bg-[var(--gradient-primary)] grid place-items-center mb-5 group-hover:scale-110 transition-transform">
                  <f.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-display">{f.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}