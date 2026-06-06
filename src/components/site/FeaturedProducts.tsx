import { motion } from "framer-motion";
import { ProductCard, type Product } from "./ProductCard";
import heroProduct from "@/assets/hero-product.png";
import watch from "@/assets/product-watch.png";
import sneaker from "@/assets/product-sneaker.png";
import vr from "@/assets/product-vr.png";

const products: Product[] = [
  { id: "1", name: "Sonic v2 Headphones", category: "Audio", price: 349, rating: 4.9, image: heroProduct },
  { id: "2", name: "Orbit Smart Watch", category: "Wearables", price: 499, rating: 4.8, image: watch },
  { id: "3", name: "Flux Runner X", category: "Footwear", price: 229, rating: 4.7, image: sneaker },
  { id: "4", name: "Vision Pro Lite", category: "XR", price: 1299, rating: 4.9, image: vr },
];

export function FeaturedProducts({ onAdd }: { onAdd: (p: Product) => void }) {
  return (
    <section className="relative py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="text-sm text-neon-blue uppercase tracking-widest">Featured</p>
            <h2 className="text-4xl sm:text-5xl font-semibold mt-2">This week's drops</h2>
          </div>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">View all →</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1 }}
            >
              <ProductCard product={p} onAdd={onAdd} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}