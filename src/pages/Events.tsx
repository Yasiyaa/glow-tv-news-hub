import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { Calendar, MapPin } from "lucide-react";

const events = [
  {
    title: "Sydney Vesak Lantern Festival 2026",
    date: "Saturday, 20 June 2026",
    location: "Tumbalong Park, Darling Harbour, Sydney",
    description: "A night of light, music, and culture celebrating the Sri Lankan community in Australia.",
  },
  {
    title: "Australia–Sri Lanka Business Forum",
    date: "Thursday, 10 July 2026",
    location: "ICC Sydney, Darling Drive",
    description: "Leaders, founders, and investors gather to explore cross-border opportunities.",
  },
  {
    title: "Melbourne Ceylon Food Festival",
    date: "Sunday, 3 August 2026",
    location: "Federation Square, Melbourne",
    description: "Authentic Sri Lankan cuisine, live cooking, and cultural performances.",
  },
  {
    title: "Glow TV Community Awards Night",
    date: "Saturday, 13 September 2026",
    location: "Sofitel Sydney Wentworth",
    description: "Celebrating young changemakers across the diaspora.",
  },
];

const Events = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-44 md:pt-52 pb-20">
      <section className="container-news max-w-5xl">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">What's On</span>
        <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-10 text-glow">Upcoming Events</h1>

        <div className="grid gap-5">
          {events.map((e) => (
            <article key={e.title} className="news-card p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
              <div className="md:w-1/3">
                <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                  <Calendar size={16} /> {e.date}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mt-2">
                  <MapPin size={14} /> {e.location}
                </div>
              </div>
              <div className="md:flex-1">
                <h2 className="font-display text-xl md:text-2xl font-bold mb-2">{e.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{e.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Events;
