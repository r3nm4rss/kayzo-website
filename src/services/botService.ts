import { BotInfo } from '../types/bot';


export async function getBotInfo(): Promise<BotInfo> {

        return {
      totalUsers: 3284,
      totalServers: 68,
      ping: 0.4,
      command: 9,
      channels: 352,
      nodeVersion: "v18.20.5",
      uptime: 32
    };
  } 