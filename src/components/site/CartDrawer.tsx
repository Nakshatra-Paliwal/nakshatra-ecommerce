import { AnimatePresence, motion } from "framer-motion";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import type { Product } from "./ProductCard";

export interface CartItem extends Product {
  qty: number;
}

interface Props {
  open: boolean;
  onClose: () => void;
  items: CartItem[];
  setQty: (id: string, delta: number) => void;
}

export function CartDrawer({ open, onClose, items, setQty }: Props) {
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/70 backdrop-blur-sm z-[60]"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            className="fixed top-0 right-0 bottom-0 z-[70] w-full sm:w-[420px] glass-strong border-l border-border flex flex-col"
          >
            <header className="flex items-center justify-between p-5 border-b border-border">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-4 w-4" />
                <h3 className="font-display text-lg">Your Cart</h3>
              </div>
              <button onClick={onClose} aria-label="Close" className="h-9 w-9 grid place-items-center rounded-full hover:bg-muted">
                <X className="h-4 w-4" />
              </button>
            </header>
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {items.length === 0 && (
                <div className="text-center text-sm text-muted-foreground py-20">Your cart is empty.</div>
              )}
              {items.map((i) => (
                <motion.div
                  layout
                  key={i.id}
                  className="glass rounded-2xl p-3 flex gap-3 items-center"
                >
                  <div className="h-16 w-16 rounded-xl bg-muted/50 grid place-items-center overflow-hidden shrink-0">
                    <img src={i.image} alt={i.name} className="h-full w-full object-contain" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">{i.name}</div>
                    <div className="text-xs text-muted-foreground">${i.price.toFixed(2)}</div>
                  </div>
                  <div className="flex items-center gap-1 glass rounded-full px-1">
                    <button onClick={() => setQty(i.id, -1)} className="h-7 w-7 grid place-items-center" aria-label="Decrease"><Minus className="h-3 w-3" /></button>
                    <span className="text-xs w-5 text-center">{i.qty}</span>
                    <button onClick={() => setQty(i.id, 1)} className="h-7 w-7 grid place-items-center" aria-label="Increase"><Plus className="h-3 w-3" /></button>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="p-5 border-t border-border space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-semibold">${total.toFixed(2)}</span>
              </div>
              <button className="w-full h-12 rounded-full bg-[var(--gradient-primary)] text-primary-foreground font-medium hover:glow-primary transition-shadow">
                Checkout
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}