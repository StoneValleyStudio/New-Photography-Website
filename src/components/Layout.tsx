import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Twitter, Facebook, Mail, MapPin } from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Journal', path: '/journal' },
    { name: 'Contact', path: '/contact' },
    { name: 'Client Access', path: import.meta.env.VITE_PIXIESET_URL || '#', external: true },
  ];

  return (
    <div className="min-h-screen bg-surface selection:bg-primary-fixed selection:text-white flex flex-col">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 z-50 w-full px-6 md:px-12 py-6 transition-all duration-500 ${
          scrolled || location.pathname !== '/' ? 'bg-surface/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-full mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-black/5 rounded-full transition-colors"
            >
              <Menu className="w-6 h-6 text-black" />
            </button>
            <Link to="/" className="font-headline italic tracking-tighter text-2xl md:text-3xl text-black">
              William Morris
            </Link>
          </div>

          <div className="hidden md:flex space-x-12">
            {navLinks.map((link) => (
              link.external ? (
                <a 
                  key={link.name} 
                  href={link.path} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-black/60 hover:text-primary-fixed text-xs uppercase tracking-widest transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className={`${
                    location.pathname === link.path 
                      ? 'text-primary-fixed font-bold underline decoration-2 underline-offset-8' 
                      : 'text-black/60 hover:text-primary-fixed'
                  } text-xs uppercase tracking-widest transition-colors`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="fixed inset-0 z-[60] bg-white p-12 flex flex-col"
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 left-8 p-2 hover:bg-black/5 rounded-full transition-colors"
            >
              <X className="w-8 h-8 text-black" />
            </button>
            
            <div className="mt-24 space-y-8">
              <Link 
                to="/"
                className="block font-display text-5xl hover:italic transition-all"
              >
                Home
              </Link>
              {navLinks.map((link) => (
                link.external ? (
                  <a 
                    key={link.name}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-display text-5xl hover:italic transition-all"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link 
                    key={link.name}
                    to={link.path}
                    className="block font-display text-5xl hover:italic transition-all"
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>

            <div className="mt-auto pt-12 border-t border-black/10 flex gap-6">
              <Instagram className="w-6 h-6 text-black/40 hover:text-black cursor-pointer" />
              <Twitter className="w-6 h-6 text-black/40 hover:text-black cursor-pointer" />
              <Facebook className="w-6 h-6 text-black/40 hover:text-black cursor-pointer" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
            <div>
              <h2 className="font-display text-7xl mb-12">Elevate Your Team's Image.</h2>
              <p className="font-sans text-white/40 mb-16 text-xl max-w-md leading-relaxed">
                Currently booking for the upcoming varsity and club seasons across Potsdam, NY and Upstate New York.
              </p>
              <div className="space-y-8">
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary-fixed transition-colors">
                    <Mail className="w-5 h-5 text-primary-fixed group-hover:text-white" />
                  </div>
                  <span className="font-sans text-sm tracking-widest uppercase">hello@williammorris.photo</span>
                </div>
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary-fixed transition-colors">
                    <MapPin className="w-5 h-5 text-primary-fixed group-hover:text-white" />
                  </div>
                  <span className="font-sans text-sm tracking-widest uppercase">Potsdam, New York</span>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <p className="font-display text-4xl">Ready to start?</p>
              <Link 
                to="/contact" 
                className="inline-block bg-white text-black py-6 px-12 font-sans text-xs uppercase font-bold tracking-widest-mega hover:bg-primary-fixed hover:text-white transition-all duration-500"
              >
                Send Inquiry
              </Link>
            </div>
          </div>

          <div className="mt-48 pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-2xl font-bold text-white uppercase tracking-widest">William Morris</div>
            <div className="flex gap-12 font-sans text-[10px] uppercase font-bold tracking-widest text-white/40">
              <Link className="hover:text-white transition-colors" to="/portfolio">Portfolio</Link>
              <Link className="hover:text-white transition-colors" to="/journal">Journal</Link>
              <Link className="hover:text-white transition-colors" to="/contact">Contact</Link>
              <a 
                className="hover:text-white transition-colors" 
                href={import.meta.env.VITE_PIXIESET_URL || '#'} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Client Access
              </a>
            </div>
            <p className="text-[10px] uppercase font-bold tracking-widest text-white/20">
              © 2024 William Morris Photography. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
