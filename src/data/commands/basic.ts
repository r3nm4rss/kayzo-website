import { Command } from '../../types/commands';

export const basicCommands: Command[] = [
  {
    name: '/help',
    description: 'Show the list of available commands',
    usage: '/help'
  },
  {
    name: '/start',
    description: 'Show bot main menu',
    usage: '/start'
  },
  {
    name: '/login',
    description: 'Log in and check out your Fortnite account',
    usage: '/login'
  },
  {
    name: '/launch',
    description: 'Launch your Fortnite account',
    usage: '/launch'
  }
];