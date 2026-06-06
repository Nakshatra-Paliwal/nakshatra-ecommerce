import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <section className="relative py-24 px-6">
      <div className="relative mx-auto max-w-5xl glass-strong rounded-[2.5rem] p-10 sm:p-16 overflow-hidden">
        <div className="absolute -top-32 -left-20 h-80 w-80 rounded-full bg-neon-purple/30 blur-[100px]" />
        <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-neon-blue/30 blur-[100px]" />
        <div className="relative text-center">
          <h2 className="text-4xl sm:text-5xl font-semibold">Drops in your inbox.<br /><span className="text-gradient">Before everyone else.</span></h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">Join 240k members getting early access, secret drops, and member-only pricing.</p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
            className="mt-8 max-w-md mx-auto"
          >
            <div className="glass rounded-full p-1.5 flex items-center gap-2 focus-within:glow-primary transition-shadow">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@future.com"
                className="flex-1 bg-transparent outline-none px-4 text-sm"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="h-11 px-5 rounded-full bg-[var(--gradient-primary)] text-primary-foreground text-sm font-medium flex items-center gap-1.5"
              >
                {done ? (<><Check className="h-4 w-4" /> Subscribed</>) : (<>Subscribe <ArrowRight className="h-4 w-4" /></>)}
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}