import { CommandCategory } from '../../types/commands';
import { BadgeMinus, BadgeInfo, BadgeHelp } from 'lucide-react';
import { friendsCommands } from './friends.ts';
import { customCommands } from './custom.ts';
import { basicCommands } from './basic.ts';

export const commandCategories: CommandCategory[] = [
  {
    icon: BadgeMinus,
    name: "Friends",
    description: "Automatic friends remove",
    commands: friendsCommands
  },
  {
    icon: BadgeInfo,
    name: "Custom",
    description: "Customization for skin checks",
    commands: customCommands
  },
  {
    icon: BadgeHelp,
    name: "Basic",
    description: "Login and interactive commands",
    commands: basicCommands
  }
];