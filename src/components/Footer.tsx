import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Linkedin, Instagram } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-stratex-bg border-t border-stratex-border pt-20 pb-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <Logo className="h-10 w-10" />
              <span className="font-bold text-xl text-white tracking-tight">
                Satyaveni Industries
              </span>
            </Link>
            <p className="text-gray-400 font-medium leading-relaxed max-w-sm mb-8">
              Satyaveni Industries – Committed to Sustainable Packaging Solutions. Helping businesses switch to eco-friendly alternatives for a better future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/[0.08] transition-all">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/[0.08] transition-all">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-bold text-sm mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">Products</Link></li>
              <li><Link to="/sustainability" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">Sustainability</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-sm mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-gray-500 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400 font-medium">[Add Address]</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gray-500 shrink-0" />
                <span className="text-sm text-gray-400 font-medium">[Add Number]</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gray-500 shrink-0" />
                <span className="text-sm text-gray-400 font-medium">[Add Email]</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-stratex-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 font-medium">
            &copy; {new Date().getFullYear()} Satyaveni Industries. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500 font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
