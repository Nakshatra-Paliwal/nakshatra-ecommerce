import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ShoppingBag, Heart, Menu, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  onCartOpen: () => void;
  cartCount: number;
}

export function Navbar({ onCartOpen, cartCount }: Props) {
  const [searchOpen, setSearchOpen] = useState(false);
  const links = ["Shop", "Collection", "Tech", "About"];

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4"
    >
      <nav className="glass-strong mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 sm:px-6 py-3">
        <a href="#" className="flex items-center gap-2">
          <div className="relative h-8 w-8 rounded-lg bg-[var(--gradient-primary)] grid place-items-center">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
            <div className="absolute inset-0 rounded-lg blur-md bg-[var(--gradient-primary)] opacity-50 -z-10" />
          </div>
          <span className="font-display text-lg font-semibold tracking-tight">NEXUS</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l}>
              <a
                href="#"
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {l}
                <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-[var(--gradient-primary)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <div className="hidden sm:flex items-center">
            <motion.div
              animate={{ width: searchOpen ? 200 : 36 }}
              className="overflow-hidden flex items-center glass rounded-full h-9"
            >
              <button
                onClick={() => setSearchOpen((v) => !v)}
                className="h-9 w-9 grid place-items-center shrink-0 text-muted-foreground hover:text-foreground"
                aria-label="Search"
              >
                <Search className="h-4 w-4" />
              </button>
              {searchOpen && (
                <input
                  autoFocus
                  placeholder="Search products…"
                  className="bg-transparent outline-none text-sm pr-3 w-full"
                />
              )}
            </motion.div>
          </div>
          <Button variant="ghost" size="icon" className="rounded-full" aria-label="Wishlist">
            <Heart className="h-4 w-4" />
          </Button>
          <button
            onClick={onCartOpen}
            className="relative h-9 px-3 rounded-full glass hover:glow-primary transition-shadow flex items-center gap-2"
            aria-label="Cart"
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="text-xs font-medium">{cartCount}</span>
          </button>
          <Button variant="ghost" size="icon" className="md:hidden rounded-full" aria-label="Menu">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </nav>
    </motion.header>
  );
}