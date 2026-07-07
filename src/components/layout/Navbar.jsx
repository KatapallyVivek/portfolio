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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out',
        scrolled ? 'bg-bg-dark/60 backdrop-blur-xl border-b border-white/5 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)]' : 'bg-transparent py-6'
      )}
    >
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center justify-center w-10 h-10 border border-white/10 rounded-xl text-sm font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-300"
        >
          VK
        </Link>

        {/* Center Links */}
        <nav className="hidden md:flex items-center gap-2">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className="relative px-4 py-2 text-sm transition-colors text-text-secondary hover:text-white"
            >
              {({ isActive }) => (
                <>
                  <span className={isActive ? 'text-white font-medium' : ''}>{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-white mx-4"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Connect Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="px-4 py-2 text-sm font-medium border border-white/10 rounded-full hover:bg-white/5 hover:border-white/20 transition-all duration-300"
          >
            Connect
          </button>
          
          <AnimatePresence>
            {dropdownOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setDropdownOpen(false)} />
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: 10, scale: 0.95, filter: 'blur(10px)' }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="absolute right-0 top-[calc(100%+0.5rem)] w-48 bg-[#111113]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-1 shadow-2xl z-50"
                >
                  {connectLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between px-3 py-2 text-sm text-text-secondary hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200"
                    >
                      {link.name}
                      <FiExternalLink className="opacity-0 group-hover:opacity-100 transition-opacity" />
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
