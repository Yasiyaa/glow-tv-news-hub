import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { TrendingUp, ArrowRight, Mail, Globe2, Phone, Radio, Send, User, Users } from "lucide-react";
import ArticleCard from "./ArticleCard";
import { articles } from "@/data/articles";
import heroSydney from "@/assets/hero-sydney.jpg";

const SectionHeader = ({ kicker, title, link }: { kicker: ReactNode; title: string; link?: string }) => (
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
  <section id="latest-news" className="scroll-mt-40 py-20 container-news">
    <SectionHeader kicker="Latest" title="Today's Top Stories" link="/" />
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.slice(1, 7).map((a) => <ArticleCard key={a.id} a={a} />)}
    </div>
  </section>
);

const ABOUT_POINTS = [
  {
    icon: Radio,
    title: "Independent Newsroom",
    body: "Daily reporting, interviews, and video coverage shaped for Australian Sri Lankan audiences.",
  },
  {
    icon: Users,
    title: "Community First",
    body: "We spotlight local voices, cultural moments, and the stories that connect families across cities.",
  },
  {
    icon: Globe2,
    title: "Two Homes, One Lens",
    body: "Our coverage follows the issues, opportunities, and celebrations linking Australia and Sri Lanka.",
  },
];

export const AboutUs = () => (
  <section id="about" className="scroll-mt-40 py-20 bg-card/30 border-y border-border/40">
    <div className="container-news grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
      <div className="lg:col-span-6">
        <SectionHeader kicker="About us" title="Stories that keep our community connected" />
        <p className="text-lg leading-8 text-foreground/80">
          Glow TV is a digital newsroom and media platform built for the Australian Sri Lankan community. We cover breaking updates, business, culture, sport, lifestyle, and community milestones with a clear focus on relevance, trust, and representation.
        </p>
        <p className="mt-5 text-muted-foreground leading-7">
          From Sydney to Colombo and across the wider diaspora, our work brings viewers closer to the people, places, and decisions shaping their everyday lives.
        </p>
      </div>

      <div className="lg:col-span-6">
        <div className="relative overflow-hidden rounded-xl border border-border/60 min-h-[380px]">
          <img
            src={heroSydney}
            alt="Sydney skyline representing Glow TV's Australian Sri Lankan community coverage"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/10" />
          <div className="relative h-full min-h-[380px] flex flex-col justify-end p-6 md:p-8">
            <div className="grid sm:grid-cols-3 gap-3">
              {ABOUT_POINTS.map(({ icon: Icon, title, body }) => (
                <div key={title} className="glass p-4">
                  <Icon className="text-primary mb-3" size={22} />
                  <h3 className="font-display text-base font-bold mb-2">{title}</h3>
                  <p className="text-xs leading-5 text-muted-foreground">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const Trending = () => (
  <section className="py-20 bg-card/30 border-y border-border/40">
    <div className="container-news">
      <SectionHeader kicker={<><TrendingUp className="inline" size={12} /> Trending</>} title="Most Read This Week" />
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

const CONTACT_FIELDS = [
  { icon: User, label: "Name", type: "text", placeholder: "Your name", autoComplete: "name" },
  { icon: Mail, label: "Email", type: "email", placeholder: "your@email.com", autoComplete: "email" },
  { icon: Phone, label: "Contact number", type: "tel", placeholder: "+61 400 000 000", autoComplete: "tel" },
];

export const ContactUs = () => (
  <section id="contact" className="scroll-mt-40 py-20 bg-card/30 border-y border-border/40">
    <div className="container-news grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
      <div className="lg:col-span-5">
        <SectionHeader kicker="Contact" title="Talk to Glow TV" />
        <p className="text-lg leading-8 text-foreground/80">
          Send us your story ideas, partnership enquiries, community announcements, or feedback for the newsroom.
        </p>
        <div className="mt-8 space-y-4 text-sm text-muted-foreground">
          <p className="flex items-center gap-3">
            <Mail className="text-primary shrink-0" size={18} />
            Info@glowtv.com.au
          </p>
          <p className="flex items-center gap-3">
            <Phone className="text-primary shrink-0" size={18} />
            +61 2 9000 0000
          </p>
        </div>
      </div>

      <form className="lg:col-span-7 glass-strong rounded-xl p-6 md:p-8" onSubmit={(e) => e.preventDefault()}>
        <div className="grid md:grid-cols-2 gap-5">
          {CONTACT_FIELDS.map(({ icon: Icon, label, type, placeholder, autoComplete }) => (
            <label key={label} className={label === "Contact number" ? "md:col-span-2" : ""}>
              <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-primary">{label}</span>
              <span className="flex items-center gap-3 rounded-xl border border-border bg-input px-4 py-3.5 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/30 transition-all">
                <Icon className="text-muted-foreground" size={18} />
                <input
                  type={type}
                  required
                  placeholder={placeholder}
                  autoComplete={autoComplete}
                  className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                />
              </span>
            </label>
          ))}
        </div>
        <button className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground amber-glow-sm hover:amber-glow transition-all">
          Send Enquiry <Send size={16} />
        </button>
      </form>
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
