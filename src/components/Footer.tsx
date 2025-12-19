import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-charcoal border-t border-accent-teal/20">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-display font-bold text-accent-teal mb-4">
              Scurvy Dog Tattoo
            </h3>
            <p className="text-secondary-bone/70 text-sm leading-relaxed">
              Premium custom tattoo work with a rebellious edge. Where art meets the high seas.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-secondary-bone mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/artists"
                  className="text-secondary-bone/70 hover:text-accent-teal text-sm transition-colors"
                >
                  Meet Our Artists
                </Link>
              </li>
              <li>
                <Link
                  to="/aftercare"
                  className="text-secondary-bone/70 hover:text-accent-teal text-sm transition-colors"
                >
                  Aftercare Guide
                </Link>
              </li>
              <li>
                <Link
                  to="/merch"
                  className="text-secondary-bone/70 hover:text-accent-teal text-sm transition-colors"
                >
                  Shop Merch
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-secondary-bone/70 hover:text-accent-teal text-sm transition-colors"
                >
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-secondary-bone mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-secondary-bone/70 text-sm">
                <MapPin className="w-4 h-4 text-accent-teal mt-0.5 flex-shrink-0" />
                <span>123 Anchor Street, Port City, PC 12345</span>
              </li>
              <li className="flex items-center gap-2 text-secondary-bone/70 text-sm">
                <Phone className="w-4 h-4 text-accent-teal flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-secondary-bone/70 text-sm">
                <Mail className="w-4 h-4 text-accent-teal flex-shrink-0" />
                <span>info@scurvydog.tattoo</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-secondary-bone mb-4">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-accent-teal/10 border border-accent-teal/30 flex items-center justify-center text-accent-teal hover:bg-accent-teal hover:text-primary-black transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-accent-teal/10 border border-accent-teal/30 flex items-center justify-center text-accent-teal hover:bg-accent-teal hover:text-primary-black transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-accent-teal/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-bone/60 text-sm">
            &copy; {currentYear} Scurvy Dog Tattoo. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="text-secondary-bone/60 hover:text-accent-teal text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-secondary-bone/60 hover:text-accent-teal text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
