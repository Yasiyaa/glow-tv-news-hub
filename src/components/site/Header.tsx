import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import logo from "@/assets/glow-tv-logo.png";

const NAV = [
  "Home", "Latest News", "Australia", "Sri Lanka", "World",
  "Business", "Community", "Lifestyle", "Videos", "Contact"
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const today = new Date().toLocaleDateString("en-AU", {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  });

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "glass-strong shadow-elegant" : "bg-transparent"}`}>
      {/* Top utility bar */}
      <div className="hidden md:block border-b border-border/40">
        <div className="container-news flex items-center justify-between py-2 text-xs text-muted-foreground">
          <span className="tracking-wider uppercase">{today}</span>
          <div className="flex items-center gap-2">
            <span className="live-dot h-2 w-2 rounded-full bg-primary inline-block" />
            <span className="uppercase tracking-[0.2em] text-primary font-semibold">Live</span>
            <span className="ml-3">Sydney 22°C · Colombo 29°C</span>
          </div>
        </div>
      </div>

      {/* Logo row */}
      <div className="container-news flex items-center justify-between py-4">
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <Link to="/" className="mx-auto md:mx-0 flex items-center gap-2 group">
          <img
            src={logo}
            alt="GLOW TV — Australian Sri Lankan news and media"
            width={180}
            height={60}
            className="h-10 md:h-12 w-auto transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        <button aria-label="Search" className="p-2 text-foreground/70 hover:text-primary transition-colors">
          <Search size={20} />
        </button>
      </div>

      {/* Centered nav */}
      <nav className="hidden md:flex justify-center border-t border-border/40 py-3">
        <ul className="flex items-center gap-7 lg:gap-9">
          {NAV.map((item) => (
            <li key={item}>
              <Link to={item === "Home" ? "/" : "/"} className="nav-link">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden glass-strong border-t border-border/40 animate-fade-in">
          <ul className="flex flex-col py-4">
            {NAV.map((item) => (
              <li key={item}>
                <Link
                  to="/"
                  onClick={() => setOpen(false)}
                  className="block px-6 py-3 text-sm uppercase tracking-wider text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
