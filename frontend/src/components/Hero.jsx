import { Apple, PlayCircle } from 'lucide-react';
import { chats } from '../data/mockData';

const previewChats = chats.slice(0, 5);

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__copy">
        <span className="hero__badge">✨ Voice &amp; video calls are here!</span>
        <h1 className="hero__heading">
          Connect.<br />
          Chat.<br />
          <span className="hero__heading-accent">Stay close.</span>
        </h1>
        <p className="hero__subtext">
          VibeSocial is a modern messaging app that helps you connect with people,
          share moments and build real relationships.
        </p>
        <div className="hero__actions">
          <button className="hero__cta-primary">Get Started</button>
          <button className="hero__cta-secondary">Explore Features</button>
        </div>
        <div className="hero__available">
          <span>Available on</span>
          <div className="hero__available-icons">
            <Apple size={16} />
            <PlayCircle size={16} />
          </div>
        </div>
      </div>

      <div className="hero__phone">
        <div className="hero__phone-frame">
          <div className="hero__phone-notch" />
          <div className="hero__phone-screen">
            <div className="hero__phone-header"><span>Chats</span></div>
            <div className="hero__phone-search">Search chats...</div>
            <div className="hero__phone-list">
              {previewChats.map((c) => (
                <div className="hero__phone-row" key={c.id}>
                  <div className="hero__phone-avatar" style={{ background: `linear-gradient(135deg, ${c.avatarColor}, ${c.avatarColor}99)` }}>
                    {c.initials}
                  </div>
                  <div className="hero__phone-row-text">
                    <span>{c.name}</span>
                    <small>{c.lastMessage}</small>
                  </div>
                  {c.unread > 0 && <span className="hero__phone-unread">{c.unread}</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}