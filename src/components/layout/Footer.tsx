import React from 'react';
import { Bot, Github, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 mb-6">
            <Bot className="w-6 h-6 text-blue-500" />
            <span className="font-bold">Kayzo</span>
          </div>
          
          <div className="flex gap-6 mb-6">
            <a href="https://github.com/r3nm4rss" className="text-gray-400 hover:text-white">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://discord.gg/QeAyQGU7vU" className="text-gray-400 hover:text-white">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
          
          <div className="flex gap-6 mb-6 text-sm text-gray-400">
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/commands" className="hover:text-white transition-colors">
              Commands
            </Link>
          </div>
          
          <div className="text-center text-sm text-gray-400">
            <p className="mb-2">© 2025 Kayzo. All rights reserved.</p>
            <a 
              href="https://kayzo.github.io" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 hover:text-blue-400 transition-colors"
            >
              Made by Casper
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}