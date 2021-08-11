const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
  console.log('I am ready! Logged into Client!')
});

//`https://nekobot.xyz/api/imagegen?type=clyde&text=${text}`

//Discord Status

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(`${client.guilds.cache.size} Servers | Running discord.js`, { type: "WATCHING" })
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
    message.reply('Thank you for asking for help! \nThe commands are:\n`!invite` Sends discord bot invite to add the bot\n`!support` Sends support server invite to ask for support and hang out with the community\n\nMore commands are coming, this bot is still in development. <a:version:867324402151718932><:clyde:867483292538372106> \nTutorial: https://youtu.be/ew8YMSCt4NE\n\n`!count` Gives the bots server count.\n\nUse `!help <page number>` for more commands.');
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

//Support Command

client.on('message', message => {
  if (message.content === '!support'){
    message.reply('Join this server for support, if you do not trust the link that is not discord, look at this FAQ: <https://dsc.gg/legal/privacy>\n\nSupport Server: https://dsc.gg/ffd')
  }
});

//Member Count Command

client.on('message', message => {
  // If message is ping
  if (message.content === '!count') {
    // Send pong back
    message.reply(`I am in ${client.guilds.cache.size} servers!`);
  }
});