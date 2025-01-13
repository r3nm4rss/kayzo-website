# Razor Discord Bot Website 🤖

A modern, responsive website for the Razor Discord Bot built with React, TypeScript, and Tailwind CSS.

![Razor Bot](https://i.imgur.com/wEV1eBC.png)
![Premium Section](https://i.imgur.com/cR0dTxi.png)

## Features ✨

- **Modern Design**: Beautiful, responsive UI with smooth animations
- **Command Browser**: Searchable command list with categories
- **Real-time Stats**: Live bot statistics display
- **Premium Features**: Showcase of premium bot capabilities
- **Documentation**: Comprehensive command documentation
- **Mobile Responsive**: Fully responsive design for all devices

## Customization Guide 🎨

Here's where to find and modify key elements of the website:

### Links and URLs
- **Discord Invite**: Update in `src/components/home/Hero.tsx` and `src/pages/Premium.tsx`
- **GitHub Links**: Update in `src/components/layout/Footer.tsx`
- **Discord Server Link**: Update in `src/components/layout/Footer.tsx` (`https://discord.gg/NEUJAuhk9r`)

### API Configuration
- **API Endpoints**: Update in `src/config/api.ts`
  ```typescript
  export const API_CONFIG = {
    BASE_URL: 'https://tec-api.galaxyhub.lol',
    ENDPOINTS: {
      BOT_INFO: '/bot-info'
    }
  }
  ```

### Bot Information
- **Default Stats**: Update in `src/services/botService.ts`
  ```typescript
  const DEFAULT_BOT_INFO: BotInfo = {
    totalUsers: 15000,
    totalServers: 500,
    // ... other stats
  };
  ```

### Content
- **Features**: Update in `src/components/home/Features.tsx`
- **Premium Features**: Update in `src/pages/Premium.tsx`
- **Commands**: Update in `src/data/commands/` directory
- **Terms of Service**: Update in `src/pages/TermsOfService.tsx`
- **Privacy Policy**: Update in `src/pages/PrivacyPolicy.tsx`

### Branding
- **Bot Name**: Search for "Razor" across files and replace with your bot name
- **Copyright Year**: Update in `src/components/layout/Footer.tsx`
- **Support Email**: Update in `src/pages/PrivacyPolicy.tsx` and `src/pages/TermsOfService.tsx`

### Colors and Styling
- **Theme Colors**: Update in `src/index.css`
- **Background**: Modify `.bg-mesh` in `src/index.css`
- **Button Styles**: Update `.btn-primary` and `.btn-secondary` in `src/index.css`

## Tech Stack 🛠️

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide Icons
- React Router

## Getting Started 🚀

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Casper104s/Bot-WebSite.git
cd Casper104s/Bot-WebSite
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure 📁

```
src/
├── components/         # React components
│   ├── home/          # Home page components
│   ├── layout/        # Layout components
│   └── stats/         # Statistics components
├── data/              # Static data and configurations
│   └── commands/      # Command categories and definitions
├── pages/             # Page components
├── services/          # API services
├── types/             # TypeScript type definitions
└── utils/             # Utility functions
```

### 📄 API Code

Copy and paste the following code into your bot's main file at line 279 (`index.js`):
after implementing the api go to the bot directory open a cmd and run the command npm install cors

```javascript

const cors = require('cors');



const app2 = express();
const port2 = 4104;


app2.use(cors());


client.once('ready', () => {

    app2.get('/bot-info', (req, res) => {
        const totalUsers = client.users.cache.size;
        const totalServers = client.guilds.cache.size;
        const ping = client.ws.ping;
        const command = client.commands.size;
        const channels = client.channels.cache.size;
        const versnode = process.version;
        const uptime = client.uptime;

 
        const formatUptime = (ms) => {
            const seconds = Math.floor((ms / 1000) % 60);
            const minutes = Math.floor((ms / (1000 * 60)) % 60);
            const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
            return `${hours}h ${minutes}m ${seconds}s`;
        };


        res.json({
            totalUsers,
            totalServers,
            ping,
            command,
            channels,
            versnode,
            uptime: formatUptime(uptime),
        });
    });


    app2.listen(port2, () => {
        console.log(
            `${chalk.white.bold(dayjs().format('DD/MM/YYYY HH:mm:ss'))} - ${chalk.blue.bold('API')} available at: http://localhost:${port2}`
        );
    }).on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            console.error(`Port ${port2} is already in use. Please use a different port.`);
            process.exit(1);
        } else {
            console.error(`Unexpected error: ${err.message}`);
        }
    });
});
```

## Features in Detail 🔍

### Command System
- Searchable command interface
- Category-based organization
- Detailed command documentation
- Permission level indicators

### Premium Features
- Enhanced music capabilities
- Advanced security features
- Custom AI responses
- Premium image generation
- Economy boosts
- Priority support

### Real-time Statistics
- Server count
- User count
- Command usage
- Uptime tracking
- Response time monitoring

## Contributing 🤝

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License 📝

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact 📧

- Discord Server: [Join Here](https://discord.gg/22R64TAtvE)
- Website: [casper.104shop.xyz](https://casper.104shop.xyz)
- GitHub: [@Casper104s](https://github.com/Casper104s)

## Acknowledgments 🙏

- Icons by [Lucide](https://lucide.dev)
- Built with [React](https://reactjs.org)
- Styled with [Tailwind CSS](https://tailwindcss.com)
