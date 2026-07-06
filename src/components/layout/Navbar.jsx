import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import Container from './Container';
import { classNames } from '../../utils/classNames';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const connectLinks = [
  { name: 'GitHub', url: '#' },
  { name: 'LinkedIn', url: '#' },
  { name: 'X', url: '#' },
  { name: 'Email', url: 'mailto:#' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={classNames(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-bg-dark/70 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      )}
    >
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center justify-center w-10 h-10 border border-white/10 rounded-xl text-sm font-semibold hover:bg-white/5 transition-colors"
        >
          VK
        </Link>

        {/* Center Links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => classNames(
                'text-sm transition-colors hover:text-white',
                isActive ? 'text-white font-medium' : 'text-text-secondary'
              )}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Connect Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="px-4 py-2 text-sm font-medium border border-white/10 rounded-full hover:bg-white/5 transition-colors"
          >
            Connect
          </button>
          
          <AnimatePresence>
            {dropdownOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setDropdownOpen(false)} />
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-full mt-2 w-48 bg-surface border border-white/10 rounded-2xl p-2 shadow-xl z-50"
                >
                  {connectLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-2.5 text-sm text-text-secondary hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                    >
                      {link.name}
                      <FiExternalLink className="opacity-50" />
                    </a>
                  ))}
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </header>
  );
}
