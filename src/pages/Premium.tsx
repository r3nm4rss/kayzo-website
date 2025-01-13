import React from 'react';
import { Crown, Zap, Star, Blend, Bot, Shield, Image, Sparkles } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

const features = [
  {
    icon: Blend,
    title: 'Enhanced Version',
    description: 'High-quality themes and icons'
  },
  {
    icon: Shield,
    title: 'Advanced Security',
    description: 'Premium storage for your data'
  },
  {
    icon: Bot,
    title: 'Custom Text',
    description: 'Personalized text footer'
  },
  {
    icon: Image,
    title: 'Premium Images',
    description: 'Advanced image generation and manipulation'
  },
  {
    icon: Star,
    title: 'Custom Role',
    description: 'Get a custom role in the discord server'
  },
  {
    icon: Zap,
    title: 'Priority Support',
    description: 'Get faster responses and dedicated assistance'
  }
];

const premiumPerks = [
  'Extended accounts with unlimited storage',
  'Advanced customization capabilities',
  'Custom themes and icons',
  'Premium image generation and effects',
  'Accounts backups and restoration',
  'Custom footer and logo',
  'Priority support and assistance',
  'Custom role in discord server'
];

export default function Premium() {
  return (
    <div className="min-h-screen bg-mesh text-white">
      <Header />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 mb-6">
            <Crown className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Premium Features
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Unlock the full potential of Kayzo with exclusive features and enhanced capabilities
          </p>
        </div>

        {/* Features Grid */}
        <div className="max-w-6xl mx-auto px-4 mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="glass p-6 rounded-lg text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 mb-4">
                  <feature.icon className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Perks */}
        <div className="max-w-4xl mx-auto px-4 mb-20">
          <div className="glass p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-8 text-center">All Premium Perks</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {premiumPerks.map((perk, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                  <Star className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-gray-300">{perk}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="glass p-12 rounded-lg">
            <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Ready to Upgrade?</h2>
            <p className="text-gray-400 mb-8">
              Join thousands of servers already enjoying premium features
            </p>
            <a 
              href="https://discord.gg/NEUJAuhk9r"
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white font-medium px-8 py-3 rounded-lg transition-all duration-200"
            >
              Get Premium Now
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}