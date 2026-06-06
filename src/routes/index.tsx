import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { FeaturedProducts } from "@/components/site/FeaturedProducts";
import { Categories } from "@/components/site/Categories";
import { Features } from "@/components/site/Features";
import { Testimonials } from "@/components/site/Testimonials";
import { Newsletter } from "@/components/site/Newsletter";
import { Footer } from "@/components/site/Footer";
import { CartDrawer, type CartItem } from "@/components/site/CartDrawer";
import { Cursor } from "@/components/site/Cursor";
import type { Product } from "@/components/site/ProductCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexus — The Future of Shopping" },
      { name: "description", content: "Premium tech, fashion and smart devices, wrapped in cinematic 3D experiences. Curated drops engineered for tomorrow." },
      { property: "og:title", content: "Nexus — The Future of Shopping" },
      { property: "og:description", content: "Premium tech, fashion and smart devices, wrapped in cinematic 3D experiences." },
    ],
  }),
  component: Index,
});

function Index() {
  const [cartOpen, setCartOpen] = useState(false);
  const [items, setItems] = useState<CartItem[]>([]);

  function addToCart(p: Product) {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === p.id);
      if (existing) return prev.map((i) => (i.id === p.id ? { ...i, qty: i.qty + 1 } : i));
      return [...prev, { ...p, qty: 1 }];
    });
    setCartOpen(true);
  }
  function setQty(id: string, delta: number) {
    setItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0),
    );
  }
  const cartCount = items.reduce((s, i) => s + i.qty, 0);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Cursor />
      <Navbar onCartOpen={() => setCartOpen(true)} cartCount={cartCount} />
      <main>
        <Hero />
        <FeaturedProducts onAdd={addToCart} />
        <Categories />
        <Features />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} items={items} setQty={setQty} />
    </div>
  );
}
