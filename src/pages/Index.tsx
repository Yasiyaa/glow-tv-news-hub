import Header from "@/components/site/Header";
import Ticker from "@/components/site/Ticker";
import Hero from "@/components/site/Hero";
import Footer from "@/components/site/Footer";
import {
  LatestNews, Categories, Videos,
  EditorsPicks, Newsletter,
} from "@/components/site/Sections";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <Hero />
      <Ticker />
      <LatestNews />
      <Categories />
      <Videos />
      <Trending />
      <EditorsPicks />
      <Community />
      <Newsletter />
    </main>
    <Footer />
  </div>
);

export default Index;
