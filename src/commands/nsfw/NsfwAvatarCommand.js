const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = class BanCommand extends BaseCommand {
    constructor() {
        super('nsfwavatar', 'nsfw', []);
    }

    async run(client, message, args) {
        if (!message.guild) return;
        async function nsfwavatar() {
            const GIF = await neko.nsfw.avatar();
            const embed = new Discord.MessageEmbed()
                .setColor('#202225')
                .setTitle(`${message.author.tag} here's a random nsfw avatar`)
                .setImage(GIF.url)
            message.channel.send(embed);
        }
        nsfwavatar();
    }
}