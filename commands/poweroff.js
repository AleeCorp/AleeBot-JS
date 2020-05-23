/** **************************************
 *
 *   Poweroff: Command for AleeBot
 *   Copyright (C) 2017-2020 Alee Productions
 *
 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details.
 *
 *   You should have received a copy of the GNU General Public License
 *   along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * *************************************/
module.exports.run = async (client, message, args) => {
  const Discord = require('discord.js');
  if (!['242775871059001344'].includes(message.author.id)) return message.reply('Nope! You need the person who created this bot to use this command.');
  const embed = new Discord.RichEmbed()
      .setAuthor('AleeBot Status', client.user.avatarURL)
      .setDescription('AleeBot is now going offline...')
      .setColor('#ff3333');
  await client.channels.find('id', '606602551634296968').send({embed});
  await message.reply(':warning: AleeBot will now exit!');
  client.destroy();
  process.exit(0);
};

exports.conf = {
  aliases: ['reboot'],
  guildOnly: false,
};
exports.help = {
  name: 'poweroff',
  description: 'Turns off AleeBot.',
  usage: 'poweroff',
  category: '- Owners Only',
};
