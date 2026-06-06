import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroProduct from "@/assets/hero-product.png";

export function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center pt-32 pb-20 overflow-hidden">
      {/* background fx */}
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute -top-40 -left-20 h-[500px] w-[500px] rounded-full bg-neon-purple/30 blur-[120px] animate-pulse-glow" />
      <div className="absolute -bottom-40 -right-20 h-[600px] w-[600px] rounded-full bg-neon-blue/30 blur-[140px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center w-full">
        {/* copy */}
        <div className="relative z-10 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-neon-purple animate-pulse" />
            New Drop — Nexus Sonic v2 Now Live
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[0.95] tracking-tight"
          >
            Experience the <br />
            <span className="text-gradient animate-gradient">Future of Shopping</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-muted-foreground"
          >
            Curated drops of premium tech, fashion and smart devices — wrapped in cinematic 3D experiences you can feel.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start"
          >
            <Button size="lg" className="rounded-full bg-[var(--gradient-primary)] hover:opacity-90 glow-primary h-12 px-7 text-base">
              Shop Now <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full glass border-border h-12 px-7 text-base">
              <Play className="mr-1 h-4 w-4" /> Explore Collection
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-10 flex items-center gap-8 justify-center lg:justify-start"
          >
            {[
              { v: "2.4M+", l: "Happy customers" },
              { v: "180+", l: "Countries served" },
              { v: "4.9★", l: "Avg rating" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl font-semibold text-gradient">{s.v}</div>
                <div className="text-xs text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* product visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
          className="relative h-[420px] sm:h-[560px] flex items-center justify-center"
        >
          {/* halo rings */}
          <div className="absolute inset-0 grid place-items-center">
            <div className="absolute h-[420px] w-[420px] rounded-full border border-foreground/10 animate-spin-slow" />
            <div className="absolute h-[320px] w-[320px] rounded-full border border-foreground/5 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "20s" }} />
            <div className="absolute h-[240px] w-[240px] rounded-full bg-[var(--gradient-glow)]" />
          </div>
          <motion.img
            src={heroProduct}
            alt="Nexus Sonic Headphones"
            width={620}
            height={620}
            className="relative z-10 w-[80%] max-w-[520px] drop-shadow-[0_30px_60px_rgba(120,80,255,0.45)] animate-float"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />

          {/* floating chips */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute left-2 top-10 glass-strong rounded-2xl p-3 hidden sm:block"
          >
            <div className="text-[10px] text-muted-foreground">Noise Cancel</div>
            <div className="text-sm font-semibold">Adaptive · 32dB</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 }}
            className="absolute right-2 bottom-16 glass-strong rounded-2xl p-3 hidden sm:block"
          >
            <div className="text-[10px] text-muted-foreground">Battery</div>
            <div className="text-sm font-semibold">72h · Fast Charge</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}