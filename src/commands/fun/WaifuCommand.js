const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = class BanCommand extends BaseCommand {
  constructor() {
    super('waifu', 'fun', []);
  }

    async run(client, message, args){
        if (!message.guild) return;
            async function waifu() {
            const GIF = await neko.sfw.waifu();
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setTitle(`${message.author.tag} here's a random waifu image`)
            .setImage(GIF.url)
            message.channel.send(embed);
            }
            waifu();
    }
}