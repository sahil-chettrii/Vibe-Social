import { useState } from 'react';
import NavRail from './components/NavRail';
import ChatListPanel from './components/ChatListPanel';
import ChatWindow from './components/ChatWindow';
import DetailsPanel from './components/DetailsPanel';
import { chats as initialChats, messagesByChat, navItems } from './data/mockData';
import './App.css';

function timeNow() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

export default function App() {
  const [chats, setChats] = useState(initialChats);
  const [activeChatId, setActiveChatId] = useState(1);
  const [messages, setMessages] = useState(messagesByChat);
  const [query, setQuery] = useState('');
  const [activeNav, setActiveNav] = useState('chats');
  const [detailsOpen, setDetailsOpen] = useState(true);

  const activeChat = chats.find((c) => c.id === activeChatId) || null;
  const activeMessages = messages[activeChatId] || [];

  const handleSelectChat = (id) => {
    setActiveChatId(id);
    setChats((prev) => prev.map((c) => (c.id === id ? { ...c, unread: 0 } : c)));
  };

  const handleSend = (text) => {
    setMessages((prev) => ({
      ...prev,
      [activeChatId]: [
        ...(prev[activeChatId] || []),
        { id: Date.now(), sender: 'me', text, time: timeNow(), read: false },
      ],
    }));
    setChats((prev) =>
      prev.map((c) => (c.id === activeChatId ? { ...c, lastMessage: text, time: 'now' } : c))
    );
  };

  return (
    <div className="app">
      <NavRail navItems={navItems} activeNav={activeNav} onSelect={setActiveNav} />
      <ChatListPanel
        chats={chats}
        activeChatId={activeChatId}
        onSelectChat={handleSelectChat}
        query={query}
        onQueryChange={setQuery}
      />
      <ChatWindow
        chat={activeChat}
        messages={activeMessages}
        onSend={handleSend}
        onToggleDetails={() => setDetailsOpen((v) => !v)}
      />
      {detailsOpen && <DetailsPanel chat={activeChat} onClose={() => setDetailsOpen(false)} />}
    </div>
  );
}