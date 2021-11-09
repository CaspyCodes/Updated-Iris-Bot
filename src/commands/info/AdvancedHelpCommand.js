const pagination = require('discord.js-pagination');
const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')


module.exports = class PingCommand extends BaseCommand {
    constructor() {
        super('help', 'info', []);
    }

    async run(client, message, args) {

        const BotInfo = new Discord.MessageEmbed()
            .setColor(0xD866BE)
            .setTitle('Bot Information')
            .setThumbnail('https://i.pinimg.com/originals/57/55/bd/5755bd5abafbb743cd736348c0fa0aa3.jpg')
            .addField('**Prefix**', 'Bots prefix is: `i!`')
            .addField('**Pages**', '`1. Bot Information`, `2. Information`, `3. Fun`, `4. Moderation`, `5. Nsfw`')
            .addField('**Navigation Help**', 'Use the arrows below to look through the pages!')

        const Information = new Discord.MessageEmbed()
            .setColor(0xD86685)
            .setTitle('Information')
            .setThumbnail('https://i.pinimg.com/originals/57/55/bd/5755bd5abafbb743cd736348c0fa0aa3.jpg')
            .addField('`i!ping`', 'Shows you the bots ping!')
            .addField('`i!weather`', 'Shows you the weather for specified location, e.g. `United Kingdom`')
            .addField('`i!uptime`', 'Shows you the uptime of the bot.')
            .addField('`i!!serverinfo`', 'Shows you information about current server,')
            .addField('`i!userinfo`', 'Shows you info about a specific user')

        const fun = new Discord.MessageEmbed()
            .setColor(0xD88066)
            .setTitle('Fun')
            .setThumbnail('https://i.pinimg.com/originals/57/55/bd/5755bd5abafbb743cd736348c0fa0aa3.jpg')
            .addField('`i!8Ball`', 'Ask it a question and it will respond.....')
            .addField('`i!howgay`', 'Tells you how gay someone is.  👀')
            .addField('`i!meme`', 'Sends a random meme from animemes.')
            .addField('`i!gstart`', 'Starts a giveaway command.')
            .addField('`i!baka`', 'Shows you a baka gif.')
            .addField('`i!avatar`', 'Shows you an anime avatar for your personal use.')

        const moderation = new Discord.MessageEmbed()
            .setTitle('moderation')
            .setColor(0xD88066)
            .setThumbnail('https://i.pinimg.com/originals/57/55/bd/5755bd5abafbb743cd736348c0fa0aa3.jpg')
            .addField('`i!kick`', 'Kicks a specified user')
            .addField('`i!ban`', 'Bans a specified user')
            .addField('`i!nuke`', 'deletes a channel then reinstates it')
            .addField('`i!purge`', 'purges messages from 2-100')

        const nsfw = new Discord.MessageEmbed()
            .setTitle('nsfw')
            .setColor(0xD88066)
            .setThumbnail('https://i.pinimg.com/originals/57/55/bd/5755bd5abafbb743cd736348c0fa0aa3.jpg')
            .addField('`i!anal`', 'Shows the user an anal gif')
            .addField('`i!boobs`', 'Shows you a boobs gif/image')
            .addField('`i!blowjob`', 'Shows you a blowjob image/gif')
            .addField('`i!Cumart`', 'Test it')
            .addField('`i!Cumslut`', 'Again test it')
            .addField('`i!Femdom`', 'Female Domination')
            .addField('`i!gasm`', 'Shows orgasm')
            .addField('`i!Girlsolo`', 'Girl going solo')


        const pages = [
            BotInfo,
            Information,
            fun,
            moderation,
            nsfw
        ]

        const emojiList = ["⏪", "⏩"]

        const timeout = '600000';

        pagination(message, pages, emojiList, timeout)
    }
}