import { Search, SquarePen } from 'lucide-react';
import Avatar from './Avatar';

export default function ChatListPanel({ chats, activeChatId, onSelectChat, query, onQueryChange }) {
  const filtered = chats.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="chatlist">
      <div className="chatlist__header">
        <h1>Chats</h1>
        <button className="chatlist__compose" aria-label="New chat">
          <SquarePen size={16} />
        </button>
      </div>

      <div className="chatlist__search">
        <Search size={15} className="chatlist__search-icon" />
        <input
          type="text"
          placeholder="Search chats..."
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
        />
        <kbd>⌘K</kbd>
      </div>

      <div className="chatlist__items">
        {filtered.map((chat) => {
          const active = chat.id === activeChatId;
          return (
            <button
              key={chat.id}
              className={`chatlist__item${active ? ' chatlist__item--active' : ''}`}
              onClick={() => onSelectChat(chat.id)}
            >
              <Avatar initials={chat.initials} color={chat.avatarColor} size={46} online={chat.online} />
              <div className="chatlist__item-body">
                <div className="chatlist__item-row">
                  <span className="chatlist__item-name">{chat.name}</span>
                  <span className="chatlist__item-time">{chat.time}</span>
                </div>
                <div className="chatlist__item-row">
                  <span className="chatlist__item-preview">{chat.lastMessage}</span>
                  {chat.unread > 0 && <span className="chatlist__item-unread">{chat.unread}</span>}
                </div>
              </div>
            </button>
          );
        })}
        {filtered.length === 0 && <p className="chatlist__empty">No chats match "{query}".</p>}
      </div>
    </section>
  );
}