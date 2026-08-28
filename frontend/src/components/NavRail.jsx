import {
  MessageCircle,
  Users,
  Phone,
  Contact,
  Bookmark,
  Bell,
  Settings,
  SquarePen,
  ChevronDown,
} from 'lucide-react';
import Avatar from './Avatar';
import { currentUser } from '../data/mockData';

const ICONS = {
  MessageCircle,
  Users,
  Phone,
  Contact,
  Bookmark,
  Bell,
  Settings,
};

export default function NavRail({ navItems, activeNav, onSelect }) {
  return (
    <aside className="navrail">
      <div className="navrail__brand">
        <div className="navrail__logo">
          <MessageCircle size={18} strokeWidth={2.4} />
        </div>
        <span className="navrail__brandname">VibeSocial</span>
        <ChevronDown size={14} className="navrail__brandchevron" />
        <button className="navrail__compose" aria-label="New message">
          <SquarePen size={15} />
        </button>
      </div>

      <nav className="navrail__list">
        {navItems.map((item) => {
          const Icon = ICONS[item.icon];
          const active = item.id === activeNav;
          return (
            <button
              key={item.id}
              className={`navrail__item${active ? ' navrail__item--active' : ''}`}
              onClick={() => onSelect(item.id)}
            >
              <Icon size={17} strokeWidth={2} />
              <span>{item.label}</span>
              {item.badge ? <span className="navrail__badge">{item.badge}</span> : null}
            </button>
          );
        })}
      </nav>

      <div className="navrail__footer">
        <Avatar initials={currentUser.initials} color={currentUser.avatarColor} size={36} online />
        <div className="navrail__footer-text">
          <span className="navrail__footer-name">{currentUser.name}</span>
          <span className="navrail__footer-status">{currentUser.status}</span>
        </div>
        <span className="navrail__footer-toggle" />
      </div>
    </aside>
  );
}