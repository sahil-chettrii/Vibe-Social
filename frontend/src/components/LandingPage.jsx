import LandingNavbar from './LandingNavbar';
import Hero from './Hero';
import FeatureCards from './FeatureCards';

export default function LandingPage({ onGetStarted }) {
  return (
    <div className="landing">
      <LandingNavbar onGetStarted={onGetStarted} />
      <Hero onGetStarted={onGetStarted} />
      <FeatureCards />
    </div>
  );
}