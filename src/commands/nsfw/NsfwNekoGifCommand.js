const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = class BanCommand extends BaseCommand {
    constructor() {
        super('nsfwnekogif', 'nsfw', []);
    }

    async run(client, message, args) {
        if (!message.guild) return;
        async function nsfwnekogif() {
            const GIF = await neko.nsfw.nekoGif();
            const embed = new Discord.MessageEmbed()
                .setColor('#202225')
                .setTitle(`${message.author.tag} here's a random nsfw neko gif`)
                .setImage(GIF.url)
            message.channel.send(embed);
        }
        nsfwnekogif();
    }
}