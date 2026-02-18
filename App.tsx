
import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const Header: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-light bg-white/95 backdrop-blur-sm">
      <div className="mx-auto max-w-[1200px] px-4 md:px-10 py-2">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src="logo.png" alt="Krabel Musicals Logo" className="h-12 w-auto object-contain" onError={(e) => {
              // Fallback if logo not found
              (e.target as HTMLImageElement).style.display = 'none';
              (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
            }} />
            <div className="hidden flex items-center gap-2">
               <span className="material-symbols-outlined text-primary text-3xl">piano</span>
               <h1 className="text-text-light text-lg font-bold tracking-tight">Krabel Musicals</h1>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path ? 'text-primary font-bold' : 'text-text-light'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="https://www.instagram.com/krabelmusicals" 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-10 px-6 flex items-center justify-center rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary-dark transition-all transform hover:scale-105 shadow-md"
            >
              Enroll Now
            </a>
          </nav>

          <button 
            className="md:hidden p-2 text-text-light"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-border-light px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="block text-base font-medium text-text-light py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="https://www.instagram.com/krabelmusicals" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full h-11 flex items-center justify-center rounded-lg bg-primary text-white text-base font-bold"
          >
            Enroll Now
          </a>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-brand text-white py-16 px-4 md:px-10">
      <div className="mx-auto max-w-[1200px] grid grid-cols-1 gap-12 md:grid-cols-4">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <img src="logo.png" alt="Krabel Musicals" className="h-16 w-auto brightness-200" />
          </div>
          <p className="text-gray-400 max-w-sm mb-8 font-noto">
            Raising confident, excellent, and godly musicians. Dedicated to excellence in music education and community service in Port Harcourt for over a decade.
          </p>
          <div className="flex gap-4">
            <a href="https://youtube.com/@krabelmusicals9930" target="_blank" rel="noopener noreferrer me" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" aria-label="YouTube - Krabel Musicals"><span className="material-symbols-outlined text-xl">smart_display</span></a>
            <a href="https://www.facebook.com/share/1BicmudxNr/" target="_blank" rel="noopener noreferrer me" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" aria-label="Facebook - Krabel Musicals"><span className="material-symbols-outlined text-xl">share</span></a>
            <a href="https://www.instagram.com/krabelmusicals" target="_blank" rel="noopener noreferrer me" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" aria-label="Instagram - Krabel Musicals"><span className="material-symbols-outlined text-xl">photo_camera</span></a>
            <a href="https://www.linkedin.com/in/temitope-elizabeth-omowumi-89218a124" target="_blank" rel="noopener noreferrer me" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" aria-label="LinkedIn - Krabel Musicals"><span className="material-symbols-outlined text-xl">work</span></a>
            <a href="https://www.tiktok.com/@krabelmusicals" target="_blank" rel="noopener noreferrer me" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" aria-label="TikTok - Krabel Musicals"><span className="material-symbols-outlined text-xl">music_note</span></a>
          </div>
        </div>
        <div>
          <h3 className="mb-6 text-lg font-bold">Quick Links</h3>
          <ul className="space-y-3 text-sm text-gray-400 font-noto">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            <li><a href="#" className="hover:text-primary transition-colors">Classes</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Shop</a></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-6 text-lg font-bold">Contact Info</h3>
          <ul className="space-y-4 text-sm text-gray-400 font-noto">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <span>Atilantic Events Hall, League Hotel<br/>Okilton Ada George, Port Harcourt, Nigeria</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">call</span>
              <a href="tel:+2348139391925" className="hover:text-primary transition-colors">+234 813 939 1925</a>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">mail</span>
              <a href="mailto:krabel247@gmail.com" className="hover:text-primary transition-colors">krabel247@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Krabel Musicals. All rights reserved.
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
