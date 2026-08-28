import { User, VolumeX, Search, MoreHorizontal, Star, FolderOpen, Link2, Bell, ShieldOff, X } from 'lucide-react';
import Avatar from './Avatar';
import { mediaSwatches } from '../data/mockData';

export default function DetailsPanel({ chat, onClose }) {
  if (!chat) return null;

  return (
    <aside className="details">
      <div className="details__header">
        <h2>Details</h2>
        <button className="details__close" onClick={onClose} aria-label="Close details">
          <X size={16} />
        </button>
      </div>

      <div className="details__profile">
        <Avatar initials={chat.initials} color={chat.avatarColor} size={84} ring />
        <span className="details__name">{chat.name}</span>
        <span className={`details__status${chat.online ? ' details__status--online' : ''}`}>
          {chat.online ? 'Online' : 'Offline'}
        </span>
      </div>

      <div className="details__quickactions">
        <button><User size={16} /><span>Profile</span></button>
        <button><VolumeX size={16} /><span>Mute</span></button>
        <button><Search size={16} /><span>Search</span></button>
        <button><MoreHorizontal size={16} /><span>More</span></button>
      </div>

      <div className="details__section">
        <div className="details__section-head">
          <span>Media, Links and Files</span>
          <button className="details__viewall">View all</button>
        </div>
        <div className="details__media-grid">
          {mediaSwatches.map((color, i) =>
            i === mediaSwatches.length - 1 ? (
              <div key={i} className="details__media-more" style={{ background: `${color}22` }}>+12</div>
            ) : (
              <div key={i} className="details__media-tile" style={{ background: `linear-gradient(135deg, ${color}, ${color}55)` }} />
            )
          )}
        </div>
      </div>

      <div className="details__list">
        <button>
          <span className="details__list-icon"><Star size={16} /></span>
          <span className="details__list-label">Pinned Messages</span>
          <span className="details__list-count">12</span>
        </button>
        <button>
          <span className="details__list-icon"><FolderOpen size={16} /></span>
          <span className="details__list-label">Shared Files</span>
          <span className="details__list-count">8</span>
        </button>
        <button>
          <span className="details__list-icon"><Link2 size={16} /></span>
          <span className="details__list-label">Shared Links</span>
          <span className="details__list-count">6</span>
        </button>
        <button>
          <span className="details__list-icon"><Bell size={16} /></span>
          <span className="details__list-label">Notifications</span>
          <span className="details__toggle details__toggle--on" />
        </button>
        <button className="details__list-danger">
          <span className="details__list-icon"><ShieldOff size={16} /></span>
          <span className="details__list-label">Block Contact</span>
        </button>
      </div>
    </aside>
  );
}