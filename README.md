# Bot em js
Olá tudo bem?
Hoje eu vim te dar um bot em js!
# Codigo:
# bote isso na index.js
```js
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
```
# bote isso na config.json
```json
{
"prefix": "prefix do bot"
}
```
# depois de botar isso:
- crie a pasta Comandos
- crie o arquivo ping.js
- bote esse cod:
```js
const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
  const m = await message.channel.send('ping?');

  m.edit(`🏓 **| Pong!**\nLatência do Server: **${m.createdTimestamp -
      message.createdTimestamp}ms.**\nLatência da API: **${Math.round(
      client.ws.ping
    )}ms**`
  );
};
```
