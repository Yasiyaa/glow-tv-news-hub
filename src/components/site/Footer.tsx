import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin } from "lucide-react";
import logoAsset from "@/assets/glow-tv-logo.png.asset.json";
const logo = logoAsset.url;

const Footer = () => (
  <footer className="bg-background border-t border-border/60 pt-20 pb-8 mt-10">
    <div className="container-news">
      <div className="grid lg:grid-cols-12 gap-12 mb-14">
        <div className="lg:col-span-4">
          <img src={logo} alt="GLOW TV" width={180} height={60} className="h-14 w-auto mb-5" loading="lazy" />
          <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
            GLOW TV — the trusted home of Australian and Sri Lankan news, community stories, and culture. Telling stories that matter to our community.
          </p>
          <div className="flex gap-3 mt-6">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social" className="h-10 w-10 rounded-full glass flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary/50 transition-all">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h4 className="font-display text-base font-bold mb-4 text-primary">About</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            {["About Us", "Our Team", "Careers", "Press", "Ethics"].map((x) => (
              <li key={x}><Link to="/" className="hover:text-primary transition-colors">{x}</Link></li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="font-display text-base font-bold mb-4 text-primary">Categories</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            {["Australia", "Sri Lanka", "World", "Business", "Lifestyle"].map((x) => (
              <li key={x}><Link to="/" className="hover:text-primary transition-colors">{x}</Link></li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h4 className="font-display text-base font-bold mb-4 text-primary">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3"><MapPin size={16} className="text-primary mt-0.5 shrink-0" /> Level 12, 1 Martin Place, Sydney NSW 2000</li>
            <li className="flex items-start gap-3"><Mail size={16} className="text-primary mt-0.5 shrink-0" /> newsroom@glowtv.com.au</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} GLOW TV Media. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/" className="hover:text-primary transition-colors">Privacy</Link>
          <Link to="/" className="hover:text-primary transition-colors">Terms</Link>
          <Link to="/" className="hover:text-primary transition-colors">Cookies</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
