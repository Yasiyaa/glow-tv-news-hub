import heroSydney from "@/assets/hero-sydney.jpg";
import srilanka from "@/assets/news-srilanka.jpg";
import melbourne from "@/assets/news-melbourne.jpg";
import business from "@/assets/news-business.jpg";
import community from "@/assets/news-community.jpg";
import lifestyle from "@/assets/news-lifestyle.jpg";
import world from "@/assets/news-world.jpg";
import cricket from "@/assets/news-cricket.jpg";
import interview from "@/assets/news-interview.jpg";

export type Article = {
  id: string;
  slug: string;
  title: string;
  category: string;
  summary: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  featured?: boolean;
};

export const articles: Article[] = [
  {
    id: "1",
    slug: "sydney-summit-australia-srilanka-trade",
    title: "Historic Sydney Summit Unlocks New Era of Australia–Sri Lanka Trade",
    category: "Breaking",
    summary:
      "Leaders signed a landmark agreement at Sydney Harbour aimed at doubling bilateral trade and expanding cultural exchange over the next decade.",
    image: heroSydney,
    author: "Anjali Perera",
    date: "Jun 6, 2026",
    readTime: "6 min read",
    featured: true,
  },
  {
    id: "2",
    slug: "colombo-skyline-investment-boom",
    title: "Colombo Skyline Reshaped by $2.4B Foreign Investment Surge",
    category: "Sri Lanka",
    summary: "Tourism, fintech and renewable energy projects fuel the capital's fastest growth cycle since 2018.",
    image: srilanka,
    author: "Dineth Fernando",
    date: "Jun 5, 2026",
    readTime: "5 min read",
  },
  {
    id: "3",
    slug: "melbourne-cultural-renaissance",
    title: "Melbourne's Multicultural Renaissance: Inside the New Laneway Scene",
    category: "Australia",
    summary: "How a new generation of South Asian-Australian creators is reshaping Melbourne's nightlife and food culture.",
    image: melbourne,
    author: "Sarah O'Brien",
    date: "Jun 5, 2026",
    readTime: "7 min read",
  },
  {
    id: "4",
    slug: "diaspora-startups-record-funding",
    title: "Diaspora-Led Startups Raise Record Funding Across the Indo-Pacific",
    category: "Business",
    summary: "Investor confidence in cross-border ventures hits an all-time high, with Sri Lankan founders at the forefront.",
    image: business,
    author: "Rohan Mendis",
    date: "Jun 4, 2026",
    readTime: "4 min read",
  },
  {
    id: "5",
    slug: "sydney-vesak-festival-2026",
    title: "Sydney Vesak Festival Draws Record Crowds Celebrating Heritage",
    category: "Community",
    summary: "Over 40,000 attended the city's largest cultural gathering, marking a milestone for the diaspora community.",
    image: community,
    author: "Nimasha Silva",
    date: "Jun 3, 2026",
    readTime: "3 min read",
  },
  {
    id: "6",
    slug: "slow-living-ceylon-tea-revival",
    title: "The Ceylon Tea Revival: Slow Living's Most Elegant Trend",
    category: "Lifestyle",
    summary: "From Bondi to Brisbane, single-estate Ceylon tea is becoming the centerpiece of the new wellness movement.",
    image: lifestyle,
    author: "Maya Wickramasinghe",
    date: "Jun 2, 2026",
    readTime: "6 min read",
  },
  {
    id: "7",
    slug: "global-climate-accord-pacific",
    title: "Pacific Nations Forge Bold Climate Accord Ahead of UN Summit",
    category: "World",
    summary: "A unified Pacific bloc demands faster action and pledges $1B for regional resilience programs.",
    image: world,
    author: "James Carter",
    date: "Jun 1, 2026",
    readTime: "5 min read",
  },
  {
    id: "8",
    slug: "cricket-historic-test-series",
    title: "Sri Lanka Stuns Australia in Historic Test Series Comeback",
    category: "Sports",
    summary: "A breathtaking final-day partnership delivers one of the great upsets in modern Test cricket.",
    image: cricket,
    author: "Tharindu Jayasuriya",
    date: "May 31, 2026",
    readTime: "4 min read",
  },
  {
    id: "9",
    slug: "exclusive-interview-young-changemakers",
    title: "Exclusive: The Young Changemakers Redefining Our Communities",
    category: "Interview",
    summary: "GLOW TV sits down with three under-30 leaders driving social impact across two continents.",
    image: interview,
    author: "Priya Kumar",
    date: "May 30, 2026",
    readTime: "9 min read",
  },
];

export const getArticleBySlug = (slug: string) => articles.find((a) => a.slug === slug);
