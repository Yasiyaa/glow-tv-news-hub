import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { articles } from "@/data/articles";

const ROTATION_MS = 8000; // change hero story every 8 seconds

const Hero = () => {
  // Build a rotation list: featured story first, then the rest
  const rotation = [
    articles.find((a) => a.featured)!,
    ...articles.filter((a) => !a.featured),
  ];

  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);

<<<<<<< HEAD
<<<<<<< HEAD
  const showStory = (nextIndex: number, delay = 300) => {
    if (fading || nextIndex === index) return;

    setFading(true);
    window.setTimeout(() => {
      setIndex((nextIndex + rotation.length) % rotation.length);
      setFading(false);
    }, delay);
=======
  const goTo = (next: number) => {
    setFading(true);
    setTimeout(() => {
      setIndex(((next % rotation.length) + rotation.length) % rotation.length);
      setFading(false);
    }, 300);
>>>>>>> b7661caf92121d553e54033a0d921e07e0746543
  };

=======
>>>>>>> parent of b7661ca (Refined nav/hero/contact)
  useEffect(() => {
    const id = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setIndex((i) => (i + 1) % rotation.length);
        setFading(false);
      }, 500);
    }, ROTATION_MS);
    return () => clearInterval(id);
  }, [rotation.length]);

  const featured = rotation[index];
  const sideStart = (index + 1) % rotation.length;
  const side = [
    rotation[sideStart],
    rotation[(sideStart + 1) % rotation.length],
  ];
  const previousIndex = (index - 1 + rotation.length) % rotation.length;
  const nextIndex = (index + 1) % rotation.length;

  return (
    <section className="relative pt-44 md:pt-52 pb-20 overflow-hidden">
      {/* background image */}
      <div className="absolute inset-0 -z-10">
        <img
          key={featured.id + "-bg"}
          src={featured.image}
          alt=""
          width={1920}
          height={1080}
          className={`w-full h-full object-cover opacity-50 transition-opacity duration-700 ${fading ? "opacity-0" : "opacity-50"}`}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-background/30" />
      </div>

      <button
        type="button"
        aria-label="Show previous hero story"
        onClick={() => showStory(previousIndex)}
        className="absolute left-3 md:left-6 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full glass text-foreground/80 hover:border-primary/50 hover:text-primary hover:amber-glow-sm transition-all lg:flex"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        type="button"
        aria-label="Show next hero story"
        onClick={() => showStory(nextIndex)}
        className="absolute right-3 md:right-6 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full glass text-foreground/80 hover:border-primary/50 hover:text-primary hover:amber-glow-sm transition-all lg:flex"
      >
        <ChevronRight size={24} />
      </button>

      <div className="container-news grid lg:grid-cols-12 gap-10 items-end">
        <div
          key={featured.id}
          className={`lg:col-span-8 transition-all duration-500 ${fading ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0 animate-fade-up"}`}
        >
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

          {/* Progress / pagination dots */}
          <div className="flex items-center gap-2 mt-8">
            {rotation.map((_, i) => (
              <button
                key={i}
                aria-label={`Show story ${i + 1}`}
<<<<<<< HEAD
<<<<<<< HEAD
                onClick={() => showStory(i)}
=======
                onClick={() => goTo(i)}
>>>>>>> b7661caf92121d553e54033a0d921e07e0746543
=======
                onClick={() => {
                  setFading(true);
                  setTimeout(() => {
                    setIndex(i);
                    setFading(false);
                  }, 300);
                }}
>>>>>>> parent of b7661ca (Refined nav/hero/contact)
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-primary amber-glow-sm" : "w-3 bg-foreground/25 hover:bg-foreground/50"
                }`}
              />
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3 lg:hidden">
            <button
              type="button"
              aria-label="Show previous hero story"
              onClick={() => showStory(previousIndex)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full glass text-foreground/80 hover:border-primary/50 hover:text-primary transition-all"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Show next hero story"
              onClick={() => showStory(nextIndex)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground amber-glow-sm hover:amber-glow transition-all"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Side cards — glass */}
        <div className={`lg:col-span-4 grid gap-4 transition-opacity duration-500 ${fading ? "opacity-0" : "opacity-100 animate-fade-in"}`}>
          {side.map((a) => (
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
