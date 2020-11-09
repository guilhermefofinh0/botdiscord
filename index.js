const Discord = require('discord.js');
const Client = new Discord.Client();
const Token = ('token do seu bot')
const config = require (./config.json)
Client.on('ready', () => {
  console.log(`Logado no ${Client.user.tag}!`);
});
console.log(`invite: https://discord.com/oauth2/authorize?client_id=${Client.id}&scope=bot&permissions=8`)
console.log(`id: ${Client.id}`)

Cliente.on(Token)
