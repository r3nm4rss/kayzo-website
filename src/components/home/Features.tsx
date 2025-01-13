import React from 'react';
import { BadgeInfo, BadgePlus, BadgeMinus, BadgeCheck, BadgeSwissFranc } from 'lucide-react';

const features = [
  {
    icon: BadgeMinus,
    title: "FRIENDS",
    description: "Powerful friends remover command"
  },
  {
    icon: BadgePlus,
    title: "THEMES",
    description: "Fully customizable settings and themes"
  },
  {
    icon: BadgeSwissFranc,
    title: "LAUNCH",
    description: "Lauch fortnite from discord"
  },
  {
    icon: BadgeCheck,
    title: "SECURITY",
    description: "Advanced encryption system for your datas"
  },
  {
    icon: BadgeInfo,
    title: "AUTO SETUP",
    description: "No need to setup the bot"
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-black/30">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          Features
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className="feature-icon text-blue-500 mb-4">
                {<feature.icon className="w-6 h-6" />}
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}