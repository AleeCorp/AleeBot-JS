/****************************************
 *
 *   AleeBot for AleeArmy Community and other servers
 *   Copyright (C) 2017 AleeCorp
 *
 *   Permission is hereby granted, free of charge, to any person obtaining a copy
 *   of this software and associated documentation files (the "Software"), to deal
 *   in the Software without restriction, including without limitation the rights
 *   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *   copies of the Software, and to permit persons to whom the Software is
 *   furnished to do so, subject to the following conditions:
 *
 *   The above copyright notice and this permission notice shall be included in all
 *   copies or substantial portions of the Software.
 *
 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *   SOFTWARE.
 *
 *
 **************************************/
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./absettings.json');

var prefix = "abb:";
const year = "2017";
var abversion = "1.0.9 Beta";
var logsChannel = "318874545593384970";

client.on('ready', () => {
       console.log("[SUCCESS] AleeBot is now ready! Running version "+ abversion +"!");
       client.user.setGame(`with version ` + abversion);
       client.user.setStatus('online')
   });



/*
function wordFilter(content) {
    var word = content.search(/\b(fuck|fag|faggot|fuck|fuk|fuc|fucc|ho|phuck|hentai|porn|slut|bitch|succ|fucking|shit|ass|asshole|mofo|motherfucker|fucker|damn|hell|dick|cock|sex|cunt|nigger|nigga)+\b/i);

    if (word != -1) {
        return true;
    } else {
        return false;
    }
} */


client.on("guildCreate", guild => {

  // This event triggers when the bot joins a guild.

  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);


  guild.defaultChannel.sendMessage(":wave: Hello I am AleeBot thanks for inviting me to your server for help type `"+prefix+"help`.")

});



client.on("guildDelete", guild => {

  // this event triggers when the bot is removed from a guild.

  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);


});


client.on("message", function(message){
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
/*	if (wordFilter(message.content))
	{
		message.delete();
		client.channels.get('318874545593384970').sendMessage(":information_source: " + message.author.username + " just swore!");
		console.log("[INFO] " + message.author.username + " just swore!");
		switch (Math.floor(Math.random() * 1000) % 3) {
		message.reply("You have been caught swearing.");
		message.author.send("You have been caught swearing in AleeArmy Community.");
	} */

	 if (command === 'help'){
		 var embed = new Discord.RichEmbed()
      .setTitle(`Commands for AleeBot ` + abversion + ` and running on ${client.guilds.size} servers.`)
      .setDescription('Every command you put in this bot must start with '+ prefix)
	    .addField('Fun Stuff:', 'attack\nask\nship',true)
      .addField('Info:', 'userinfo\nserverinfo',true)
      .addField('Link:', 'botinvite\nserverinvite\ngit',true)
      .addField('Owner Only:', 'say\neval',true)
      .addField('Monitor:', 'ping\nuptime',true)
      .addField('Etc:', 'avatarurl\nsuggest\nplan', true)
			.setFooter("AleeBot "+ abversion +" Copyright "+ year +". Created by Alee14", "https://cdn.discordapp.com/avatars/282547024547545109/6c147a444ae328c38145ef1f74169e38.png?size=2048")
			.setColor("#7af442")
			message.channel.sendEmbed(embed);

	} /* This feature is broken
    else if {
    message.channel.send ("```Commands for AleeBot "+ abversion +".\nYou are using this view because this bot doesn't have permission to send embed link.\n\n" +
                ''+prefix+'avatarurl\n' +
                ''+prefix+'git\n' +
                ''+prefix+'ping\n' +
                ''+prefix+'suggest\n' +
                ''+prefix+'uptime\n' +
                ''+prefix+'userinfo\n' +
                ''+prefix+'serverinfo\n' +
                ''+prefix+'botinvite\n' +
                ''+prefix+'serverinvite\n' +
                ''+prefix+'plan\n' +
                ''+prefix+'attack\n' +
                ''+prefix+'ask\n' +
                ''+prefix+'ship\n\n' +
                "Copyright "+ year +". Created by Alee14\n```");
  } */


    if(command === 'avatarurl'){
        message.reply(message.author.avatarURL);
    }

    if(command === 'git'){
        message.channel.send ("Here's the github repo: https://github.com/AleeCorp/AleeBot");
    }

    if(command === 'ping'){
        message.reply("**PONG!** :ping_pong: " + Math.round(client.ping) + " ms");
    }

    if(command === 'suggest'){
        message.reply('Sorry this feature is still being worked on :(');
    }

    if(command === 'uptime'){
      //This command was ported from AstralMod
      var timeString; // What we'll eventually put into the message

      var uptime = parseInt(client.uptime); // Get uptime in ms

      uptime = Math.floor(uptime / 1000); // Convert from ms to s

      var uptimeMinutes = Math.floor(uptime / 60); // Get the uptime in minutes

      var minutes = uptime % 60;

      var hours = 0;

      while (uptimeMinutes >= 60) {

      hours++;

      uptimeMinutes = uptimeMinutes - 60;

}



if (uptimeMinutes < 10) {

    timeString = hours + ":0" + uptimeMinutes // We need to add an additional 0 to the minutes

} else {

    timeString = hours + ":" + uptimeMinutes // We don't need to add an extra 0.

}



message.reply(":clock1: AleeBot has been up for " + timeString + " hours.");

commandProcessed = true;
    }

    if(command === 'userinfo'){ // This command was ported from Precipitation by OfficialRain
	    var embed = new Discord.RichEmbed()
  		.setAuthor(message.author.username, message.author.avatarURL)
  		.setDescription("Here's some information about your user.")
  		.addField("Names", "**Username:** " + message.author.username + "\n**Display Name:** " + message.member.displayName)
  		.addField("Identity", "**User ID:** " + message.author.id + "\n**Discriminator:** " + message.author.discriminator)
  		.addField("Create and Join Times", "**Created account at:** " + message.member.user.createdAt + "\n**Joined server at:** " + message.member.joinedAt)
  		.setColor("#7af442")
	     message.channel.sendEmbed(embed);

    }

    if(command === 'serverinfo'){
      var embed = new Discord.RichEmbed()
      .addField("Coming soon!")
      .setColor("#7af442")
      message.channel.sendEmbed(embed);
    }

    if (command === 'botinvite'){
      message.reply(':arrow_left: Continue in DMs.');
      message.author.sendMessage("AleeBot on your server? Great! Here's the link: https://goo.gl/KDQyrp");
    }

    if (command === 'serverinvite'){
      message.reply(':arrow_left: Continue in DMs.');
      message.author.sendMessage("You want a invite to the AleeArmy server? Here's the link: https://discord.gg/JqgXrAJ");

    }

    if(command === 'plan'){
      message.channel.send ('```Plans for future versions of AleeBot\n\n' +
                  '1. Playing Music\n' +
                  "If you want a suggestion go DM alee14.\n```");
    }


    if(command === 'attack'){
      //This command was ported from AstralMod

                            if (command.indexOf("@everyone") == -1) {

                                if (command.indexOf("@here") == -1) {

                                    message.channel.send("<@" + message.author.id + "> :right_facing_fist: " + args);

                                } else {

                                message.reply("Nice try, but I ain't going to interrupt everyone who is online at this time. Kinda nice to not be bothered.");

                                }

                            } else {

                                message.reply("Nice try, but I ain't going to interrupt everyone. Kinda nice to not be bothered.");

                            }

                            commandProcessed = true;
                        }
      if(command === 'ask'){
        var abaskanswer = [
          "Yes.",
          "Nope. Just kidding :P",
          "Definitely!",
          "No.",
          "Yep. Just kidding :P",
          "I doubt it.",
          "Maybe?",
          "I don't know?",
          "Hmm let me think :thinking:"
        ];
        if (args[1]) {
           message.channel.sendMessage(abaskanswer[Math.floor(Math.random() * abaskanswer.length)]);
        } else {
          message.channel.sendMessage("Sorry, I don't know what your saying.")
        }

      }
// Owner is only allow to do this
    if(command === 'say'){
      if(message.author.id !== config.ownerID) return;
      message.channel.sendMessage(args.join(" "));
      message.delete();

    }
  if(command === 'eval'){
  if(message.author.id !== config.ownerID) return;
  const argseval = message.content.split(" ").slice(1);
		try {
			var code = argseval.join(" ");
			var evaled = eval(code);

			if (typeof evaled !== "string")
				evaled = require("util").inspect(evaled);
			message.delete();

			message.channel.send({
				embed: {
					color: 3191350,
					author: {
						name: "Eval is working!",
						icon_url: message.author.displayAvatarURL
					},
					fields: [{
							name: '**:inbox_tray: Input**',
							value: `\`\`\`js\n${code}\n\`\`\``
						},
						{
							name: '**:outbox_tray: Output**',
							value: `\`\`\`js\n${clean(evaled)}\n\`\`\``
						}
					],
				}
			})
		} catch (err) {
			message.delete();

			message.channel.send({
				embed: {
					color: 3191350,
					author: {
						name: "Error",
						icon_url: message.author.displayAvatarURL
					},
					fields: [{
							name: '**Please check your code.**',
							value: `\`\`\`xl\n${clean(err)}\n\`\`\``
						},
						{
							name: '**Output**',
							value: `\`\`\`js\n${clean(evaled)}\n\`\`\``
						}
					],
				}
			})
		}
     }
    if(command === 'ship'){
      message.channel.send(":ship: "+ message.author.username + " x " + message.guild.members.random().displayName);
    }

    try{

   }catch(err){
   message.channel.send(':no_entry_sign: Error: '+ err);
   console.log('[ERROR] '+ err)
   }


 });

const clean = text => {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}

 process.on('unhandledRejection', function(err, p) {
   console.log("[ERROR | UNCAUGHT PROMISE] " + err.stack);
});

 client.login (config.abtoken).catch(function() {
       console.log("[ERROR] Login failed. Please contact Alee14#9928 or email him at alee14498@gmail.com.");
   });
