export interface Command {
  name: string;
  description: string;
  usage: string;
  permissions?: string[];
  examples?: string[];
}

export interface CommandCategory {
  icon: React.ReactNode;
  name: string;
  description: string;
  commands: Command[];
}