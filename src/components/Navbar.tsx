import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen } from "lucide-react";

const navLinks = [
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Explore Books", path: "/explore" },
  { name: "Know Authors", path: "/authors" },
  { name: "Favourites", path: "/favourites" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <BookOpen className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
            <span className="text-2xl font-heading font-bold text-foreground">
              My<span className="text-primary">Lib</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link text-sm font-medium ${
                  location.pathname === link.path ? "text-primary" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Login Button */}
          <div className="hidden md:block">
            <Link to="/login">
              <Button variant="hero" size="default">
                Log In
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium py-2 ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-foreground/80"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <Button variant="hero" size="default" className="w-full mt-2">
                  Log In
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
