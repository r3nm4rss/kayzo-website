import React, { useState, useEffect } from 'react';
import { BotInfo } from '../../types/bot';
import { Users, Server, Layout, Zap, Terminal, Clock } from 'lucide-react';
import { formatUptime } from '../../utils/time';

interface StatsProps {
  stats: BotInfo | null;
}

export function Stats({ stats }: StatsProps) {
  return (
    <section id="stats" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          Bot Statistics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <StatCard
            icon={<Users className="w-8 h-8" />}
            value={stats?.totalUsers}
            label="Active Users"
            color="from-blue-500 to-indigo-500"
            delay={0}
          />
          <StatCard
            icon={<Server className="w-8 h-8" />}
            value={stats?.totalServers}
            label="Total Servers"
            color="from-emerald-500 to-teal-500"
            delay={0.2}
          />
          <StatCard
            icon={<Layout className="w-8 h-8" />}
            value={stats?.channels}
            label="Active Channels"
            color="from-purple-500 to-pink-500"
            delay={0.4}
          />
          <StatCard
            icon={<Terminal className="w-8 h-8" />}
            value={stats?.command}
            label="Commands Executed"
            color="from-orange-500 to-red-500"
            delay={0.6}
          />
          <StatCard
            icon={<Zap className="w-8 h-8" />}
            value={stats?.ping}
            label="Current Ping"
            suffix="ms"
            color="from-yellow-500 to-orange-500"
            delay={0.8}
          />
          <StatCard
            icon={<Clock className="w-8 h-8" />}
            value={stats?.uptime}
            label="Uptime"
            formatter={(value) => formatUptime(value)}
            color="from-cyan-500 to-blue-500"
            delay={1}
          />
        </div>
      </div>
    </section>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  value: number | undefined;
  label: string;
  color: string;
  delay: number;
  suffix?: string;
  formatter?: (value: number) => string;
}

function StatCard({ icon, value, label, color, delay, suffix = "+", formatter }: StatCardProps) {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (value === undefined) {
      setIsLoading(true);
      return;
    }

    setIsLoading(false);
    
    const duration = 1000;
    const steps = 30;
    const stepValue = value / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setCount(Math.min(Math.floor(stepValue * currentStep), value));
      
      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div 
      className="stat-card group relative overflow-hidden"
      style={{
        animationDelay: `${delay}s`
      }}
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
      
      {/* Icon Background */}
      <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/5 rounded-full" />
      
      {/* Content */}
      <div className="relative">
        <div className={`text-gradient bg-gradient-to-r ${color} mb-4`}>
          {icon}
        </div>
        <div className="space-y-2">
          <div className="text-4xl font-bold tracking-tight">
            {isLoading ? (
              <div className="h-10 w-24 bg-white/10 rounded animate-pulse" />
            ) : formatter ? formatter(count) : (
              <>
                {count.toLocaleString()}
                <span className="text-gray-400 ml-1">{suffix}</span>
              </>
            )}
          </div>
          <div className="text-gray-400 text-sm uppercase tracking-wider">
            {label}
          </div>
        </div>
      </div>
    </div>
  );
}