import Header from "@/components/site/Header";
import Ticker from "@/components/site/Ticker";
import Hero from "@/components/site/Hero";
import Footer from "@/components/site/Footer";
import {
  AboutUs, ContactUs, LatestNews, Newsletter,
} from "@/components/site/Sections";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <Hero />
      <Ticker />
      <AboutUs />
      <LatestNews />
      <Newsletter />
      <ContactUs />
    </main>
    <Footer />
  </div>
);

export default Index;
