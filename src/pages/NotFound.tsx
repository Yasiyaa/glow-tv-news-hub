import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import logo from "@/assets/Logo.png";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted">
      <div className="text-center">
        <Link to="/" className="inline-block mb-8 group">
          <img
            src={logo}
            alt="Glow TV — Australian Sri Lankan news and media"
            width={180}
            height={180}
            className="h-20 w-auto mx-auto transition-all duration-300 group-hover:scale-105 drop-shadow-[0_0_25px_hsl(var(--primary)/0.45)]"
          />
        </Link>
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-8 text-xl text-muted-foreground">Oops! Page not found</p>
        <Link to="/" className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
