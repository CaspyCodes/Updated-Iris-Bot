const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }
  async run(client, message, args) {
    const botStatus = [
      `${client.guilds.cache.size} servers!`,
      'i!help',
      `My ${client.users.cache.size} users!`,
    ];
  
    setInterval(() => {
      const status = botStatus[Math.floor(Math.random() * botStatus.length)];
      client.user.setActivity(status, { type: 'WATCHING' });
    }, 5000);
  
    client.user.setUsername('Iris.'); // sets the bots name
    client.user.setStatus('idle'); // sets the bots status
  
    console.log(`Hello ${client.user.username} is now online!`); // consoles logs this when bot is turned on
  };
}