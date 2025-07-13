
import { useState, useEffect } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { QuestDashboard } from '@/components/QuestDashboard';
import { WalletHealth } from '@/components/WalletHealth';
import { Leaderboard } from '@/components/Leaderboard';
import { UserProfile } from '@/components/UserProfile';
import { Navigation } from '@/components/Navigation';
import { Interactive3DBackground } from '@/components/Interactive3DBackground';
import { CursorEffects } from '@/components/CursorEffects';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [userLevel, setUserLevel] = useState(3);
  const [userXP, setUserXP] = useState(1250);
  const [walletScore, setWalletScore] = useState(68);

  const renderSection = () => {
    switch (activeSection) {
      case 'hero':
        return <HeroSection onStartQuest={() => setActiveSection('quests')} />;
      case 'quests':
        return <QuestDashboard userLevel={userLevel} userXP={userXP} />;
      case 'wallet':
        return <WalletHealth score={walletScore} />;
      case 'leaderboard':
        return <Leaderboard />;
      case 'profile':
        return <UserProfile level={userLevel} xp={userXP} />;
      default:
        return <HeroSection onStartQuest={() => setActiveSection('quests')} />;
    }
  };

  useEffect(() => {
    // Remove any existing script to avoid duplicates
    const existing = document.getElementById('omnidimension-web-widget');
    if (existing) existing.remove();
    // Create script
    const script = document.createElement('script');
    script.id = 'omnidimension-web-widget';
    script.async = true;
    script.src = 'https://backend.omnidim.io/web_widget.js?secret_key=5daab618b778a116d76e5605e4006428';
    document.body.appendChild(script);
    // Cleanup on unmount
    return () => {
      script.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden cursor-none">
      <Interactive3DBackground />
      <CursorEffects />
      
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
      
      <main className="relative z-10">
        {renderSection()}
        {/* Omnidimension Chatbot Widget will be injected via useEffect */}
      </main>
    </div>
  );
};

export default Index;
