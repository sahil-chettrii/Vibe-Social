import { useState } from 'react';
import { Phone, Video, Search, MoreVertical, Smile, Paperclip, Mic, Send, Check, CheckCheck } from 'lucide-react';
import Avatar from './Avatar';

export default function ChatWindow({ chat, messages, onSend, onToggleDetails }) {
  const [draft, setDraft] = useState('');

  if (!chat) {
    return (
      <section className="chatwindow chatwindow--empty">
        <p>Select a chat to start messaging</p>
      </section>
    );
  }

  const handleSend = () => {
    if (!draft.trim()) return;
    onSend(draft.trim());
    setDraft('');
  };

  return (
    <section className="chatwindow">
      <header className="chatwindow__header">
        <button className="chatwindow__peer" onClick={onToggleDetails}>
          <Avatar initials={chat.initials} color={chat.avatarColor} size={40} online={chat.online} />
          <div className="chatwindow__peer-text">
            <span className="chatwindow__peer-name">{chat.name}</span>
            <span className="chatwindow__peer-status">{chat.online ? 'Online' : 'Offline'}</span>
          </div>
        </button>
        <div className="chatwindow__actions">
          <button aria-label="Call"><Phone size={17} /></button>
          <button aria-label="Video call"><Video size={17} /></button>
          <button aria-label="Search in chat"><Search size={17} /></button>
          <button aria-label="More options" onClick={onToggleDetails}><MoreVertical size={17} /></button>
        </div>
      </header>

      <div className="chatwindow__scroll">
        <div className="chatwindow__daydivider"><span>Today</span></div>
        {messages.map((m) => (
          <div key={m.id} className={`bubblerow${m.sender === 'me' ? ' bubblerow--me' : ''}`}>
            <div className={`bubble${m.sender === 'me' ? ' bubble--me' : ' bubble--them'}`}>
              <span className="bubble__text">{m.text}</span>
              <span className="bubble__meta">
                {m.time}
                {m.sender === 'me' && (m.read ? <CheckCheck size={13} /> : <Check size={13} />)}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="chatwindow__composer">
        <button aria-label="Emoji"><Smile size={19} /></button>
        <button aria-label="Attach file"><Paperclip size={19} /></button>
        <input
          type="text"
          placeholder="Type a message..."
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button aria-label="Voice message"><Mic size={19} /></button>
        <button className="chatwindow__send" aria-label="Send message" onClick={handleSend}>
          <Send size={17} />
        </button>
      </div>
    </section>
  );
}