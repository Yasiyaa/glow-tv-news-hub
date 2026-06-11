import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import ArticleCard from "@/components/site/ArticleCard";
import { articles } from "@/data/articles";

const LatestNews = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-44 md:pt-52 pb-20">
      <section className="container-news">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Newsroom</span>
        <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-10 text-glow">Latest News</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((a) => <ArticleCard key={a.id} a={a} />)}
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default LatestNews;
