const HEADLINES = [
  "PM announces new Australia–Sri Lanka education partnership",
  "Colombo Stock Exchange hits record high amid investor optimism",
  "Sydney Vesak Festival 2026 draws over 40,000 attendees",
  "Renewable energy projects break ground across the North",
  "GLOW TV Exclusive: Inside the diaspora's $1B startup wave",
  "Cricket: Sri Lanka clinches historic series victory in Adelaide",
];

const Ticker = () => {
  const items = [...HEADLINES, ...HEADLINES];
  return (
    <div className="relative bg-primary text-primary-foreground overflow-hidden border-y border-primary/40">
      <div className="flex items-center">
        <div className="shrink-0 px-5 py-3 bg-foreground text-background font-bold text-xs uppercase tracking-[0.25em] flex items-center gap-2">
          <span className="live-dot h-2 w-2 rounded-full bg-primary inline-block" />
          Breaking
        </div>
        <div className="overflow-hidden flex-1">
          <div className="ticker-track flex gap-12 whitespace-nowrap py-3 text-sm font-medium">
            {items.map((h, i) => (
              <span key={i} className="flex items-center gap-3">
                <span className="opacity-50">•</span>
                {h}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticker;
