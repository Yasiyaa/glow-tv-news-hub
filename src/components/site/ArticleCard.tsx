import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import type { Article } from "@/data/articles";

const ArticleCard = ({ a, large = false }: { a: Article; large?: boolean }) => (
  <Link to={`/article/${a.slug}`} className="news-card group block">
    <div className={`relative overflow-hidden ${large ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
      <img
        src={a.image}
        alt={a.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
      <span className="category-pill absolute top-4 left-4">{a.category}</span>
    </div>
    <div className="p-5">
      <h3 className={`font-display font-bold leading-tight group-hover:text-primary transition-colors ${large ? "text-2xl" : "text-lg"}`}>
        {a.title}
      </h3>
      <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{a.summary}</p>
      <div className="flex items-center gap-3 mt-4 text-xs text-muted-foreground">
        <span className="font-medium text-foreground/90">{a.author}</span>
        <span>·</span>
        <span>{a.date}</span>
        <span>·</span>
        <span className="flex items-center gap-1"><Clock size={11} /> {a.readTime}</span>
      </div>
    </div>
  </Link>
);

export default ArticleCard;
