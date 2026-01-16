import { Database, Mail, Phone } from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Database className="w-8 h-8 text-blue-500" />
              <span className="text-xl font-bold text-white">Bayanati</span>
            </div>
            <p className="text-slate-400 text-sm">
              Enabling secure, trusted, and permission-based data sharing between SMEs and enterprises across the Gulf.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
                Home
              </Link>
              <Link to="/services" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
                Services
              </Link>
              <Link to="/contact" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
                Contact
              </Link>
              <Link to="/book-meeting" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
                Book a Meeting
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <div className="flex flex-col gap-3">
              <a href="mailto:Bayanati.data@gmail.com" className="flex items-center gap-2 text-slate-400 hover:text-blue-400 text-sm transition-colors">
                <Mail className="w-4 h-4" />
                Bayanati.data@gmail.com
              </a>
              <a href="tel:+97336515175" className="flex items-center gap-2 text-slate-400 hover:text-blue-400 text-sm transition-colors">
                <Phone className="w-4 h-4" />
                +973 36515175
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800/50 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Bayanati. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
