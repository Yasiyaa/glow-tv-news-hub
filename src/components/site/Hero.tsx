import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { articles } from "@/data/articles";

const Hero = () => {
  const featured = articles.find((a) => a.featured)!;
  return (
    <section className="relative pt-44 md:pt-52 pb-20 overflow-hidden">
      {/* background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={featured.image}
          alt=""
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-background/30" />
      </div>

      <div className="container-news grid lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-8 animate-fade-up">
          <span className="category-pill mb-6">
            <span className="live-dot h-1.5 w-1.5 rounded-full bg-primary" />
            {featured.category}
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-glow mb-6">
            {featured.title}
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed mb-8">
            {featured.summary}
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <Link
              to={`/article/${featured.slug}`}
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-full font-semibold text-sm uppercase tracking-wider amber-glow-sm hover:amber-glow transition-all duration-300"
            >
              Read Full Story
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{featured.author}</span>
              <span>·</span>
              <span className="flex items-center gap-1"><Clock size={13} /> {featured.readTime}</span>
            </div>
          </div>
        </div>

        {/* Side cards — glass */}
        <div className="lg:col-span-4 grid gap-4 animate-fade-in">
          {articles.slice(1, 3).map((a) => (
            <Link
              to={`/article/${a.slug}`}
              key={a.id}
              className="news-card flex gap-4 p-3"
            >
              <img
                src={a.image}
                alt={a.title}
                loading="lazy"
                width={120}
                height={120}
                className="h-24 w-24 object-cover rounded-lg shrink-0"
              />
              <div className="min-w-0">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary">{a.category}</span>
                <h3 className="text-sm font-semibold leading-snug mt-1.5 line-clamp-3 font-sans">{a.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
