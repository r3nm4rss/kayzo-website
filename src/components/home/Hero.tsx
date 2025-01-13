import React from 'react';
import { Bot } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <Bot className="w-16 h-16 text-blue-500 mb-8" />
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
            Meet Kayzo
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl">
            A powerful Discord bot that brings advanced fortnite features and fortnite locker pictures.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#" className="btn-primary">
              Add to Discord
            </a>
            <Link to="/commands" className="btn-secondary">
              View Commands
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}