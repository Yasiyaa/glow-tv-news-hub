import { Link } from "react-router-dom";
import { Play, TrendingUp, ArrowRight, Mail, Award } from "lucide-react";
import ArticleCard from "./ArticleCard";
import { articles } from "@/data/articles";

const SectionHeader = ({ kicker, title, link }: { kicker: string; title: string; link?: string }) => (
  <div className="flex items-end justify-between mb-10">
    <div>
      <div className="flex items-center gap-2 mb-3">
        <span className="h-px w-8 bg-primary" />
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">{kicker}</span>
      </div>
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">{title}</h2>
    </div>
    {link && (
      <Link to="/" className="hidden md:inline-flex items-center gap-2 text-sm uppercase tracking-wider text-foreground/70 hover:text-primary transition-colors">
        View all <ArrowRight size={14} />
      </Link>
    )}
  </div>
);

export const LatestNews = () => (
  <section className="py-20 container-news">
    <SectionHeader kicker="Latest" title="Today's Top Stories" link="/" />
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.slice(1, 7).map((a) => <ArticleCard key={a.id} a={a} />)}
    </div>
  </section>
);

const CATS = [
  { name: "Australia", count: 124 },
  { name: "Sri Lanka", count: 98 },
  { name: "World", count: 87 },
  { name: "Business", count: 65 },
  { name: "Community", count: 51 },
  { name: "Lifestyle", count: 43 },
];

export const Categories = () => (
  <section className="py-20 bg-card/30 border-y border-border/40">
    <div className="container-news">
      <SectionHeader kicker="Explore" title="Featured Categories" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {CATS.map((c) => (
          <Link key={c.name} to="/" className="news-card p-6 text-center group">
            <div className="text-3xl font-display font-bold gradient-text mb-1">{c.count}</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">{c.name}</div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export const Videos = () => (
  <section className="py-20 container-news">
    <SectionHeader kicker="Watch" title="Video News" link="/" />
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.slice(2, 5).map((a) => (
        <div key={a.id} className="news-card group cursor-pointer">
          <div className="relative aspect-video overflow-hidden">
            <img src={a.image} alt={a.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-background/40 flex items-center justify-center">
              <div className="h-16 w-16 rounded-full bg-primary/95 flex items-center justify-center amber-glow-sm group-hover:scale-110 transition-transform">
                <Play size={22} className="text-primary-foreground fill-current ml-1" />
              </div>
            </div>
            <span className="absolute bottom-3 right-3 text-xs bg-background/80 backdrop-blur px-2 py-1 rounded text-foreground font-medium">04:32</span>
          </div>
          <div className="p-5">
            <span className="category-pill mb-2">{a.category}</span>
            <h3 className="font-display text-lg font-bold mt-2 group-hover:text-primary transition-colors">{a.title}</h3>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export const Trending = () => (
  <section className="py-20 bg-card/30 border-y border-border/40">
    <div className="container-news">
      <SectionHeader kicker={<><TrendingUp className="inline" size={12} /> Trending</> as any} title="Most Read This Week" />
      <div className="grid md:grid-cols-2 gap-x-10 gap-y-5">
        {articles.slice(0, 6).map((a, i) => (
          <Link key={a.id} to={`/article/${a.slug}`} className="group flex items-center gap-5 p-4 rounded-xl hover:bg-card/60 transition-colors border border-transparent hover:border-border">
            <span className="font-display text-5xl font-black gradient-text leading-none w-12 text-center">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">{a.category}</span>
              <h3 className="font-display text-lg font-bold leading-snug mt-1 group-hover:text-primary transition-colors">{a.title}</h3>
              <p className="text-xs text-muted-foreground mt-1">{a.author} · {a.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export const EditorsPicks = () => (
  <section className="py-20 container-news">
    <SectionHeader kicker={<><Award className="inline" size={12} /> Curated</> as any} title="Editor's Picks" link="/" />
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <ArticleCard a={articles[8]} large />
      </div>
      <div className="grid gap-6">
        {articles.slice(6, 8).map((a) => <ArticleCard key={a.id} a={a} />)}
      </div>
    </div>
  </section>
);

export const Community = () => (
  <section className="py-20 bg-card/30 border-y border-border/40">
    <div className="container-news">
      <SectionHeader kicker="Spotlight" title="Community Stories" link="/" />
      <div className="grid md:grid-cols-3 gap-6">
        {articles.slice(4, 7).map((a) => <ArticleCard key={a.id} a={a} />)}
      </div>
    </div>
  </section>
);

export const Newsletter = () => (
  <section className="py-24 container-news">
    <div className="relative overflow-hidden rounded-2xl glass-strong p-10 md:p-16 text-center">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-60 w-[480px] bg-primary/20 blur-[120px] rounded-full" />
      <div className="relative">
        <Mail className="mx-auto text-primary mb-5" size={32} />
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">Stay in the <span className="gradient-text">Know</span></h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-lg">
          The most important Australian and Sri Lankan stories — delivered to your inbox every morning.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            required
            placeholder="your@email.com"
            className="flex-1 bg-input border border-border rounded-full px-5 py-3.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all"
          />
          <button className="bg-primary text-primary-foreground rounded-full px-6 py-3.5 font-semibold text-sm uppercase tracking-wider amber-glow-sm hover:amber-glow transition-all">
            Subscribe
          </button>
        </form>
        <p className="text-xs text-muted-foreground mt-4">No spam. Unsubscribe anytime.</p>
      </div>
    </div>
  </section>
);
