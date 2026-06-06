import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Plus, Star, Eye } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
}

export function ProductCard({ product, onAdd }: { product: Product; onAdd: (p: Product) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), { stiffness: 200, damping: 20 });

  function onMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function reset() {
    mx.set(0);
    my.set(0);
    setHovered(false);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="group relative glass rounded-3xl p-5 cursor-pointer overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "radial-gradient(400px circle at var(--x,50%) var(--y,50%), oklch(0.7 0.22 295 / 0.18), transparent 60%)" }}
      />
      <div className="flex items-center justify-between text-xs">
        <span className="text-muted-foreground">{product.category}</span>
        <span className="flex items-center gap-1 text-foreground/80">
          <Star className="h-3 w-3 fill-neon-purple text-neon-purple" />
          {product.rating.toFixed(1)}
        </span>
      </div>

      <div className="relative my-6 aspect-square grid place-items-center">
        <div className="absolute inset-6 rounded-full bg-[var(--gradient-glow)] opacity-70" />
        <motion.img
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          loading="lazy"
          animate={hovered ? { scale: 1.15, y: -10, rotate: -4 } : { scale: 1, y: 0, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
          className="relative z-10 max-h-full max-w-full drop-shadow-[0_20px_30px_rgba(120,80,255,0.45)]"
          style={{ transform: "translateZ(40px)" }}
        />
        <button
          aria-label="Quick view"
          className="absolute top-2 right-2 z-20 h-9 w-9 grid place-items-center rounded-full glass-strong opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Eye className="h-4 w-4" />
        </button>
      </div>

      <div className="flex items-end justify-between gap-3">
        <div className="min-w-0">
          <h3 className="font-display text-lg truncate">{product.name}</h3>
          <p className="text-sm text-muted-foreground mt-0.5">${product.price.toFixed(2)}</p>
        </div>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.stopPropagation();
            onAdd(product);
          }}
          className="h-11 w-11 rounded-full bg-[var(--gradient-primary)] grid place-items-center text-primary-foreground hover:glow-primary transition-shadow shrink-0"
          aria-label="Add to cart"
        >
          <Plus className="h-5 w-5" />
        </motion.button>
      </div>
    </motion.div>
  );
}