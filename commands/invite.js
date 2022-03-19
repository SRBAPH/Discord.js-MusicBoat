const { LOCALE } = require("../util/EvobotUtil");
const i18n = require("i18n");
const { MessageEmbed } = require("discord.js");

i18n.setLocale(LOCALE);

module.exports = {
  name: "invite",
  description: i18n.__('invite.description'),
  execute(message, args) {
    var permissions = 70282305;

    let invite1 = new MessageEmbed()
      .setTitle(`**Here is the Invite Link **`)
      .setDescription(
        `**Then what are you waiting for? Invite me today!** \n\n [Invite Link]https://discord.com/api/oauth2/authorize?client_id=953194200864788501&permissions=8&scope=bot)`
      )
      .setURL(
        `https://discord.com/api/oauth2/authorize?client_id=953194200864788501&permissions=8&scope=bot`
      )
      .setColor("RANDOM");
    return message.channel.send(invite1);
  }
};
