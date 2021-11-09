const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = class BanCommand extends BaseCommand {
  constructor() {
    super('cumsluts', 'nsfw', []);
  }

  async run(client, message, args) {
    if (!message.guild) return;
    async function cumsluts() {
      const GIF = await neko.nsfw.cumsluts();
      const embed = new Discord.MessageEmbed()
        .setColor('#202225')
        .setTitle(`${message.author.tag} here's a random cumsluts image/gif`)
        .setImage(GIF.url)
      message.channel.send(embed);
    }
    cumsluts();
  }
}