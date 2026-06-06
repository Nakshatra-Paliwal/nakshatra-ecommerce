import { Twitter, Instagram, Github, Youtube, Sparkles } from "lucide-react";

export function Footer() {
  const cols = [
    { title: "Shop", links: ["New Arrivals", "Best Sellers", "Collections", "Sale"] },
    { title: "Company", links: ["About", "Careers", "Press", "Sustainability"] },
    { title: "Help", links: ["Contact", "Shipping", "Returns", "FAQ"] },
  ];
  return (
    <footer className="relative px-6 pt-20 pb-10 border-t border-border">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-[var(--gradient-primary)] grid place-items-center">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-display text-lg font-semibold">NEXUS</span>
          </div>
          <p className="text-sm text-muted-foreground mt-4 max-w-xs">Premium tech, fashion and smart devices — engineered for tomorrow.</p>
          <div className="flex gap-2 mt-6">
            {[Twitter, Instagram, Github, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="h-10 w-10 grid place-items-center rounded-full glass hover:glow-primary transition-shadow" aria-label="social">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="font-display text-sm mb-4">{c.title}</h4>
            <ul className="space-y-2.5">
              {c.links.map((l) => (
                <li key={l}><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto max-w-7xl mt-14 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
        <p>© 2026 Nexus Future Commerce. All rights reserved.</p>
        <p>Crafted in the metaverse · v2.4</p>
      </div>
    </footer>
  );
}