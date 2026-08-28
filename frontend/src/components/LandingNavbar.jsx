import { MessageCircle } from 'lucide-react';

const LINKS = ['Features', 'How it works', 'Pricing', 'Blog'];

export default function LandingNavbar() {
  return (
    <header className="landingnav">
      <div className="landingnav__brand">
        <div className="landingnav__logo">
          <MessageCircle size={18} strokeWidth={2.4} />
        </div>
        <span>VibeSocial</span>
      </div>

      <nav className="landingnav__links">
        {LINKS.map((link) => (
          <a key={link} href="#">{link}</a>
        ))}
      </nav>

      <button className="landingnav__cta">Get Started</button>
    </header>
  );
}