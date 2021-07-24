const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
  console.log('I am ready! Logged into Client!')
});

//`https://nekobot.xyz/api/imagegen?type=clyde&text=${text}`
//Kick command

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // If the message content starts with "!kick"
  if (message.content.startsWith('!kick')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            // We let the message author know we were able to kick the person
            message.reply(`Successfully kicked ${user.tag}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.reply('I was unable to kick the member');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("That user isn't in this guild!");
      }
      // Otherwise, if no user was mentioned
    } else {
      message.reply("You didn't mention the user to kick!");
    }
  }
});

//Ban command

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // if the message content starts with "!ban"
  if (message.content.startsWith('!ban')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what ban options there are over at
         * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
         */
        member
          .ban({
            reason: 'They were bad!',
          })
          .then(() => {
            // We let the message author know we were able to ban the person
            message.reply(`Successfully banned ${user.tag}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            message.reply('I was unable to ban the member');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("That user isn't in this guild!");
      }
    } else {
      // Otherwise, if no user was mentioned
      message.reply("You didn't mention the user to ban!");
    }
  }
});
//Discord Status

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("ClydeTV | Running discord.js", { type: "WATCHING" })
});
//Join Server message
client.on('guildCreate', guild => {
guild.systemChannel.send('Hello, thank you for adding me! If you need help, just use `!help` :)')
})
  
//Help Command 1
client.on('message', message => {
  // If message is ping
  if (message.content === '!help') {
    // Send pong back
    message.reply('Thank you for asking for help! \nThe commands are:\n`!ban <user>` Bans a user from the server\n`!kick <user>` Kicks a user from the server\n`!invite` Sends discord bot invite to add the bot\nMore commands are coming, this bot is still in development. <a:version:867324402151718932><:clyde:867483292538372106> \nTutorial: https://youtu.be/ew8YMSCt4NE\n\nUse `!help <page number>` for more commands.');
  }
});

client.on('message', message => {
  // If message is ping
  if (message.content === '!help 1') {
    // Send pong back
    message.reply('Thank you for asking for help! \nThe commands are:\n`!ban <user>` Bans a user from the server\n`!kick <user>` Kicks a user from the server\n`!invite` Sends discord bot invite to add the bot\nMore commands are coming, this bot is still in development. <a:version:867324402151718932><:clyde:867483292538372106> \nTutorial: https://youtu.be/ew8YMSCt4NE\n\nUse `!help <page number>` for more commands.');
  }
});
//Help Command 2
client.on('message', message => {
  // If message is ping
  if (message.content === '!help 2') {
    // Send pong back
    message.reply('Randomizer\n`!r1-10` Sends a random number between 1 and 10\n`!r1-100` Sends a random number between 1 and 100\n`!r1-1000` Sends a random number between 1 and 1000');
  }
});
//Login to bot
client.login(process.env.TOKEN);
//Keep Alive
const express = require('express');
const server = express();
 
server.all('/', (req, res) => {
  res.send(`OK`)
})
 
function keepAlive() {
  server.listen(3000, () => { console.log("Server is Ready!!" + Date.now()) });
}

//Invite Command

client.on('message', message => {
  // If message is ping
  if (message.content === '!invite') {
    // Send pong back
    message.reply('https://dsc.gg/clyde2.0 <:clyde:867483292538372106>');
  }
});

//Randomizer command
//1 - 100
client.on('message', message => {
  if (message.content === '!r1-100') {
    var r1100 = Math.floor(Math.random() * 100) + 1;
  message.reply(`Your random number is ${r1100}!`);
 }
});
//1 - 10
client.on('message', message => {
  if (message.content === '!r1-10') {
    var r110 = Math.floor(Math.random() * 10) + 1;
  message.reply(`Your random number is ${r110}!`);
 }
});
//1 - 1000
client.on('message', message => {
  if (message.content === '!r1-1000') {
    var r11000 = Math.floor(Math.random() * 1000) + 1;
  message.reply(`Your random number is ${r11000}!`);
 }
});


//Message Log
client.on('messageUpdate', async(oldMessage,newMessage)=>{
 require('./messageUpdate')(oldMessage,newMessage)
})
client.on('messageDelete', async(message)=>{
 const {MessageEmbed} = require('discord.js')
module.exports=async(message)=>{
  let embed = new MessageEmbed()
  .setTitle(`New message deleted!`)
  .setDescription(`**The user, ${message.author.tag} has deleted a message in <#${message.channel.id}>**`)
  .addField(`Content`, message.content,true)
  let channel = message.guild.channels.cache.find(ch=ch.name==='delete-message-logs')
  if(!channel)return;
  channel.send(embed)

}
})