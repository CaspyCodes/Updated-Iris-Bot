const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = class BanCommand extends BaseCommand {
  constructor() {
    super('boobs', 'nsfw', []);
  }

  async run(client, message, args) {
    if (!message.guild) return;
    async function boobs() {
      const GIF = await neko.nsfw.boobs();
      const embed = new Discord.MessageEmbed()
        .setColor('#202225')
        .setTitle(`${message.author.tag} here's a random boobs image/gif`)
        .setImage(GIF.url)
      message.channel.send(embed);
    }
    boobs();
  }
}