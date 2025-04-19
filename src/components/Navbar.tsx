import React, { useState, useEffect } from "react";
import { Link } from "react-router";

interface NavItem {
  label: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems: NavItem[] = [
    { label: "Home", href: "" },
    { label: "About", href: "about" },
    { label: "Projects", href: "projects" },
    { label: "Skills", href: "skills" },
    { label: "Contact", href: "contact" },
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
      className={`fixed mt-6 w-[80vw] mx-auto z-50 transition-all duration-300 rounded-4xl ${
        scrolled ? "bg-background shadow-md py-2" : "bg-background/90 py-4"
      }`}
    >
      <div className="container mx-auto px-4 grid grid-cols-3 items-center">
        {/* Logo or Portfolio Name */}
        <div className="text-xl font-bold">
          <Link to="/" className="hover:text-primary/90 transition">
            <span className="text-primary">John</span>
            <span className="text-secondary">Doe</span>
          </Link>
        </div>

        {/* Desktop Navigation - Centered with Vertical Separators */}
        <nav className="hidden md:flex items-center justify-center">
          {navItems.map((item, index) => (
            <React.Fragment key={item.label}>
              <Link
                to={item.href}
                className="text-primary hover:text-primary/80 transition px-4 py-2"
              >
                {item.label}
              </Link>
              {index < navItems.length - 1 && (
                <span className="h-5 w-px bg-muted"></span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Empty div to maintain grid layout */}
        <div className="hidden md:block"></div>

        {/* Mobile Menu Button - Align to the right */}
        <div className="md:hidden col-start-3 flex justify-end">
          <button
            className="focus:outline-none text-primary"
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
        <div className="md:hidden bg-background shadow-lg absolute top-full left-0 right-0 py-3">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                href={item.href}
                key={item.label}
                className="block text-primary hover:text-primary/80 transition py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
