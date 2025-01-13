import { Command } from '../../types/commands';

export const customCommands: Command[] = [
  {
    name: '/change',
    description: 'Change the pictures theme',
    usage: '/change version:<v1|v2>'
  },
  {
    name: '/change_logo',
    description: 'Change the logo in footer',
    usage: '/change_logo'
  },
  {
    name: '/change_link',
    description: 'Change the link in footer',
    usage: '/change_link'
  },
  {
    name: '/reset',
    description: 'Reset your custom logo and text to default values',
    usage: '/reset'
  }
];