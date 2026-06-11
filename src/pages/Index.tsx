import Header from "@/components/site/Header";
import Ticker from "@/components/site/Ticker";
import Hero from "@/components/site/Hero";
import Footer from "@/components/site/Footer";
<<<<<<< HEAD
<<<<<<< HEAD
import {
  AboutUs, ContactUs, LatestNews, Newsletter,
} from "@/components/site/Sections";
=======
import { LatestNews, Newsletter } from "@/components/site/Sections";

const EventsTeaser = () => (
  <section className="py-20 bg-card/30 border-y border-border/40">
    <div className="container-news flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="h-px w-8 bg-primary" />
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">What's On</span>
        </div>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-3">Upcoming Events</h2>
        <p className="text-muted-foreground max-w-xl">
          Festivals, forums, and community gatherings across Australia and Sri Lanka.
        </p>
      </div>
      <Link
        to="/events"
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-full font-semibold text-sm uppercase tracking-wider amber-glow-sm hover:amber-glow transition-all"
      >
        <Calendar size={16} /> View all events <ArrowRight size={14} />
      </Link>
    </div>
  </section>
);
>>>>>>> b7661caf92121d553e54033a0d921e07e0746543
=======
import {
  LatestNews, Categories, Videos,
  EditorsPicks, Newsletter,
} from "@/components/site/Sections";
>>>>>>> parent of b7661ca (Refined nav/hero/contact)

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <Hero />
      <Ticker />
      <AboutUs />
      <LatestNews />
<<<<<<< HEAD
<<<<<<< HEAD
=======
      <EventsTeaser />
>>>>>>> b7661caf92121d553e54033a0d921e07e0746543
=======
      <Categories />
      <Videos />
      <EditorsPicks />
>>>>>>> parent of b7661ca (Refined nav/hero/contact)
      <Newsletter />
      <ContactUs />
    </main>
    <Footer />
  </div>
);

export default Index;
