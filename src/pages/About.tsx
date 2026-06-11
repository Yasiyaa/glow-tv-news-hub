import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { Award, Globe2, Users } from "lucide-react";

const About = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-44 md:pt-52 pb-20">
      <section className="container-news max-w-4xl">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">About Glow TV</span>
        <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6 text-glow">
          Stories that connect <span className="gradient-text">two nations</span>.
        </h1>
        <p className="text-lg text-foreground/80 leading-relaxed mb-6">
          Glow TV is an independent news and media platform dedicated to the Australian and Sri Lankan
          communities. We tell stories that matter — from breaking news and politics to culture,
          business, sport, and the everyday voices shaping our diaspora.
        </p>
        <p className="text-lg text-foreground/80 leading-relaxed">
          Our mission is to inform, inspire, and bring people together through honest journalism and
          beautifully told stories.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {[
            { icon: Globe2, title: "Two Nations, One Voice", text: "Covering Australia and Sri Lanka with depth and nuance." },
            { icon: Users, title: "Community First", text: "We amplify the voices of our diaspora and the people behind the headlines." },
            { icon: Award, title: "Independent Journalism", text: "Trusted reporting, free from influence." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="news-card p-6">
              <Icon className="text-primary mb-3" size={26} />
              <h3 className="font-display font-bold text-lg mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default About;
