import { MessageSquare, PhoneCall, ShieldCheck } from 'lucide-react';

const FEATURES = [
  { icon: MessageSquare, title: 'Real-time Messaging', description: 'Send texts, photos, videos and files instantly.' },
  { icon: PhoneCall, title: 'Voice & Video Calls', description: 'High quality calls with your friends and groups.' },
  { icon: ShieldCheck, title: 'Secure & Private', description: 'End-to-end encryption to keep your chats safe.' },
];

export default function FeatureCards() {
  return (
    <section className="features">
      {FEATURES.map(({ icon: Icon, title, description }) => (
        <div className="features__card" key={title}>
          <div className="features__icon">
            <Icon size={20} strokeWidth={2.2} />
          </div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      ))}
    </section>
  );
}