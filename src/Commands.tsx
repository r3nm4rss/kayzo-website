import React, { useState, useEffect } from 'react';
import { Bot, Search, ChevronDown, ChevronUp, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { commandCategories } from './data/commands';
import type { Command } from './types/commands';

function Commands() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [foundCommand, setFoundCommand] = useState<string | null>(null);

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryName)
        ? prev.filter(name => name !== categoryName)
        : [...prev, categoryName]
    );
  };

  const isCommandVisible = (command: Command) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      command.name.toLowerCase().includes(searchLower) ||
      command.description.toLowerCase().includes(searchLower) ||
      command.usage.toLowerCase().includes(searchLower)
    );
  };

  useEffect(() => {
    if (searchTerm) {

      for (const category of commandCategories) {
        const matchingCommand = category.commands.find(isCommandVisible);
        if (matchingCommand) {

          if (!expandedCategories.includes(category.name)) {
            setExpandedCategories(prev => [...prev, category.name]);
          }

          setFoundCommand(matchingCommand.name);
          break;
        }
      }
    } else {
      setFoundCommand(null);
    }
  }, [searchTerm]);


  useEffect(() => {
    if (foundCommand) {
      const element = document.getElementById(foundCommand);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });

        element.classList.add('highlight-command');

        setTimeout(() => {
          element.classList.remove('highlight-command');
        }, 2000);
      }
    }
  }, [foundCommand]);

  return (
    <div className="min-h-screen bg-mesh text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 blur-lg opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <Bot className="w-8 h-8 text-blue-500 relative z-10 transform group-hover:rotate-12 transition-transform" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Razor Commands
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-20 max-w-6xl mx-auto px-4">
        {/* Search */}
        <div className="mb-12">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-50"></div>
            <div className="relative glass rounded-lg">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search commands..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-transparent text-white placeholder-gray-400 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Commands List */}
        <div className="space-y-6">
          {commandCategories.map((category) => {
            const visibleCommands = category.commands.filter(isCommandVisible);
            if (visibleCommands.length === 0) return null;

            const isExpanded = expandedCategories.includes(category.name);
            const Icon = category.icon;

            return (
              <div key={category.name} className="glass rounded-lg overflow-hidden">
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(category.name)}
                  className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-white/5">
                      <Icon className="w-6 h-6 text-blue-500" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-semibold">{category.name}</h3>
                      <p className="text-sm text-gray-400">{category.description}</p>
                    </div>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>

                {/* Commands */}
                {isExpanded && (
                  <div className="border-t border-white/10">
                    {visibleCommands.map((command, index) => (
                      <div
                        key={command.name}
                        id={command.name}
                        className={`p-6 transition-colors duration-300 ${
                          index !== visibleCommands.length - 1 ? 'border-b border-white/10' : ''
                        }`}
                      >
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <code className="text-blue-400 font-mono">{command.name}</code>
                            {command.permissions && (
                              <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/5 text-xs">
                                <Shield className="w-3 h-3" />
                                <span>{command.permissions.join(', ')}</span>
                              </div>
                            )}
                          </div>
                          <p className="text-gray-300">{command.description}</p>
                          <div className="text-sm">
                            <span className="text-gray-400">Usage: </span>
                            <code className="text-gray-300">{command.usage}</code>
                          </div>
                          {command.examples && (
                            <div className="text-sm">
                              <span className="text-gray-400">Examples: </span>
                              <code className="text-gray-300">{command.examples.join(', ')}</code>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {commandCategories.every(category => 
            category.commands.every(cmd => !isCommandVisible(cmd))
          ) && (
            <div className="text-center py-12">
              <p className="text-gray-400">No commands found matching your search</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Commands;