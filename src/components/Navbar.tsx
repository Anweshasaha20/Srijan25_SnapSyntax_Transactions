import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router";

interface NavItem {
  label: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Skills", href: "/skills" },
    { label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-1/2 -translate-x-1/2 mt-4 w-[85%] mx-auto z-50 transition-all duration-300 rounded-4xl font-sans ${
        scrolled
          ? "bg-card/95 shadow-lg shadow-background/20 backdrop-blur-sm py-2"
          : "bg-background/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo or Portfolio Name */}
        <div className="text-xl font-bold font-heading">
          <Link to="/" className="transition duration-300">
            John Doe
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg transition duration-300 ${
                  isActive
                    ? "text-accent font-semibold bg-muted/50"
                    : "text-foreground hover:text-primary hover:bg-muted/30"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="focus:outline-none focus:ring-2 focus:ring-primary/40 rounded-lg p-1.5 text-foreground hover:text-primary transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-sm shadow-lg shadow-background/20 absolute top-full left-0 right-0 mt-2 py-2 rounded-lg font-medium">
          <div className="container mx-auto px-4 flex flex-col">
            {navItems.map((item) => (
              <NavLink
                to={item.href}
                key={item.label}
                className={({ isActive }) =>
                  `py-3 px-4 rounded-md my-1 transition-all ${
                    isActive
                      ? "bg-muted text-accent font-medium"
                      : "text-foreground hover:bg-muted/50 hover:text-primary"
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
