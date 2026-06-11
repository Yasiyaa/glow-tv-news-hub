import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Mail, MapPin } from "lucide-react";
import logo from "@/assets/Logo.png";

const TikTokIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
  >
    <path d="M16.6 5.82a5.2 5.2 0 0 0 3.03 1.04V10a8.3 8.3 0 0 1-3.03-.58v5.66a5.92 5.92 0 1 1-5.92-5.92c.35 0 .7.03 1.03.09v3.23a2.78 2.78 0 1 0 1.75 2.58V2h3.14v3.82Z" />
  </svg>
);

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com/share/1EMMr5Lq4U/?mibextid=wwXIfr", icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com/_glowtv_?utm_source=qr", icon: Instagram },
  { label: "TikTok", href: "https://www.tiktok.com/@_glow.tv_?_r=1&_t=ZS-972HEqopjLs", icon: TikTokIcon },
  { label: "YouTube", href: "https://youtube.com/@glowtv26?si=dU0dpFF1hIVWLFvZ", icon: Youtube },
];

const Footer = () => (
  <footer className="bg-background border-t border-border/60 pt-20 pb-8 mt-10">
    <div className="container-news">
      <div className="grid lg:grid-cols-12 gap-12 mb-14">
        <div className="lg:col-span-4">
          <img src={logo} alt="Glow TV" width={180} height={180} className="h-24 w-auto mb-5 drop-shadow-[0_0_30px_hsl(var(--primary)/0.4)]" loading="lazy" />
          <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
            Glow TV — the trusted home of Australian and Sri Lankan news, community stories, and culture. Telling stories that matter to our community.
          </p>
          <div className="flex gap-3 mt-6">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer" className="h-10 w-10 rounded-full glass flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary/50 transition-all">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h4 className="font-display text-base font-bold mb-4 text-primary">Explore</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
            <li><Link to="/news" className="hover:text-primary transition-colors">Latest News</Link></li>
            <li><Link to="/events" className="hover:text-primary transition-colors">Upcoming Events</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="font-display text-base font-bold mb-4 text-primary">Follow</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-primary transition-colors">Facebook</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">YouTube</a></li>
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h4 className="font-display text-base font-bold mb-4 text-primary">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
<<<<<<< HEAD
            <li className="flex items-start gap-3"><MapPin size={16} className="text-primary mt-0.5 shrink-0" /> Level 23, 727 Collins St, Docklands VIC 3008</li>
            <li className="flex items-start gap-3"><Mail size={16} className="text-primary mt-0.5 shrink-0" /> Info@glowtv.com.au</li>
=======
            <li className="flex items-start gap-3"><MapPin size={16} className="text-primary mt-0.5 shrink-0" /> Level 12, 1 Martin Place, Sydney NSW 2000</li>
            <li className="flex items-start gap-3"><Mail size={16} className="text-primary mt-0.5 shrink-0" /> <a href="mailto:newsroom@glowtv.com.au" className="hover:text-primary transition">newsroom@glowtv.com.au</a></li>
>>>>>>> b7661caf92121d553e54033a0d921e07e0746543
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Glow TV Media. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/about" className="hover:text-primary transition-colors">About</Link>
          <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
          <Link to="/news" className="hover:text-primary transition-colors">News</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
