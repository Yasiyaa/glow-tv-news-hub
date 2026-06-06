import { useParams, Link, Navigate } from "react-router-dom";
import { Clock, Facebook, Twitter, Linkedin, Link2, ArrowLeft, MessageCircle } from "lucide-react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import ArticleCard from "@/components/site/ArticleCard";
import { articles, getArticleBySlug } from "@/data/articles";

const Article = () => {
  const { slug } = useParams();
  const article = getArticleBySlug(slug || "");
  if (!article) return <Navigate to="/" replace />;

  const related = articles.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <article className="pt-32 md:pt-40">
        {/* Cover */}
        <div className="relative h-[55vh] min-h-[420px] w-full overflow-hidden">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          <div className="absolute inset-x-0 bottom-0 pb-12">
            <div className="container-news">
              <Link to="/" className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-primary mb-5 transition-colors">
                <ArrowLeft size={14} /> Back to home
              </Link>
              <span className="category-pill mb-5">{article.category}</span>
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold max-w-4xl leading-tight text-glow">
                {article.title}
              </h1>
            </div>
          </div>
        </div>

        <div className="container-news max-w-4xl py-12">
          {/* Meta */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border/60">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center font-display font-bold text-primary">
                {article.author.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <div className="font-semibold text-foreground">{article.author}</div>
                <div className="text-xs text-muted-foreground flex items-center gap-2">
                  {article.date} <span>·</span> <Clock size={11} /> {article.readTime}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {[Facebook, Twitter, Linkedin, Link2].map((Icon, i) => (
                <button key={i} aria-label="Share" className="h-10 w-10 rounded-full glass flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary/50 transition-all">
                  <Icon size={15} />
                </button>
              ))}
            </div>
          </div>

          {/* Body */}
          <div className="prose prose-invert max-w-none mt-10 space-y-6 text-lg leading-relaxed text-foreground/85">
            <p className="text-xl text-foreground/95 font-medium leading-relaxed">{article.summary}</p>
            <p>
              In a moment widely regarded as a turning point for diplomatic and cultural ties, leaders gathered in Sydney
              this week to outline an ambitious vision for the decade ahead. The agreement, signed against the backdrop
              of Sydney Harbour, brings together commitments on trade, education, and community exchange.
            </p>
            <blockquote className="border-l-4 border-primary pl-6 italic text-2xl font-display text-foreground/90 my-10">
              "This is more than a deal — it's the beginning of a new chapter for our two nations."
            </blockquote>
            <p>
              Industry leaders welcomed the news, citing the potential for thousands of new jobs across both economies.
              Community representatives also praised the inclusion of cultural exchange programs that will allow young
              Australians and Sri Lankans to study, work, and create together.
            </p>
            <h2 className="font-display text-3xl font-bold mt-12 mb-4">What Happens Next</h2>
            <p>
              The first wave of initiatives is expected to roll out in the coming months, with a joint task force
              meeting in Colombo before the end of the year. Glow TV will continue to follow this story as it develops.
            </p>
          </div>

          {/* Comments placeholder */}
          <div className="mt-16 p-8 glass rounded-2xl">
            <h3 className="font-display text-xl font-bold mb-2 flex items-center gap-2">
              <MessageCircle size={18} className="text-primary" /> Join the Conversation
            </h3>
            <p className="text-sm text-muted-foreground mb-4">Comments are loading — be the first to share your thoughts.</p>
            <textarea
              placeholder="Share your thoughts respectfully..."
              rows={3}
              className="w-full bg-input border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 resize-none"
            />
            <button className="mt-3 bg-primary text-primary-foreground rounded-full px-5 py-2.5 text-sm font-semibold uppercase tracking-wider amber-glow-sm hover:amber-glow transition-all">
              Post Comment
            </button>
          </div>
        </div>

        {/* Related */}
        <section className="container-news py-16 border-t border-border/60">
          <h2 className="font-display text-3xl font-bold mb-8">Related Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((a) => <ArticleCard key={a.id} a={a} />)}
          </div>
        </section>
      </article>
      <Footer />
    </div>
  );
};

export default Article;
