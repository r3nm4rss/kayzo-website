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

        res.json({
            totalUsers: totalUsers,
            totalServers: totalServers,
            ping: ping,
            command: command,
            channels: channels,
            versnode: versnode,
            uptime: uptime,
        });
    });

    app2.listen(port2, () => { 
      console.log(
        `${chalk.white.bold(
          `${dayjs().format("DD/MM/YYYY HH:mm:ss")}`
        )} - ${chalk.blue.bold(`Kayzo-Bot`)} => ${chalk.blue.bold(
          `Api`
        )} - Launched On: http://localhost:${port2}`
      );
    }).on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            console.error(`Port ${port2} already in use. Use a different port.`);
            process.exit(1);
        } else {
            console.error(`Unexpected error: ${err.message}`);
        }
    });
});