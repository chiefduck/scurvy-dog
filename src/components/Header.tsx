import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Anchor } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/artists', label: 'Artists' },
    { path: '/aftercare', label: 'Aftercare' },
    { path: '/merch', label: 'Merch' },
    { path: '/contact', label: 'Book Now' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-black/95 backdrop-blur-sm border-b border-accent-teal/20">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Anchor className="w-8 h-8 text-accent-teal transform group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 blur-xl bg-accent-teal/30 group-hover:bg-accent-teal/50 transition-all duration-300"></div>
            </div>
            <div>
              <h1 className="text-2xl font-display font-bold text-secondary-bone leading-tight">
                Scurvy Dog
              </h1>
              <p className="text-xs text-accent-teal uppercase tracking-wider">Tattoo</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium uppercase tracking-wider transition-all duration-300 relative group ${
                  isActive(link.path)
                    ? 'text-accent-teal'
                    : 'text-secondary-bone/80 hover:text-accent-teal'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent-teal transform origin-left transition-transform duration-300 ${
                    isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-accent-teal hover:bg-accent-teal/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-accent-teal/20">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 px-4 text-sm font-medium uppercase tracking-wider transition-colors ${
                  isActive(link.path)
                    ? 'text-accent-teal bg-accent-teal/10'
                    : 'text-secondary-bone/80 hover:text-accent-teal hover:bg-accent-teal/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
