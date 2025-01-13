import React, { useEffect, useState } from 'react';
import { BotInfo } from './types/bot';
import { getBotInfo } from './services/botService';
import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { Features } from './components/home/Features';
import { Stats } from './components/home/Stats';
import { Updates } from './components/home/Updates';
import { Footer } from './components/layout/Footer';

export default function App() {
  const [stats, setStats] = useState<BotInfo | null>(null);

  useEffect(() => {
    let mounted = true;

    const fetchStats = async () => {
      try {
        const botInfo = await getBotInfo();
        if (mounted) {
          setStats(botInfo);
        }
      } catch (error) {
        console.error('Failed to fetch bot info:', error);
      }
    };

    fetchStats();

    const interval = setInterval(fetchStats, 30000);

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-mesh text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Stats stats={stats} />
        <Updates />
      </main>
      <Footer />
    </div>
  );
}
