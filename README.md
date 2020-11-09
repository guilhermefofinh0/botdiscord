# Bot em js
Olá tudo bem?
Hoje eu vim te dar um bot em js!
# Codigo:
```js
const Discord = require('discord.js');
const Client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logado no ${Client.user.tag}!`);
});
console.log(`invite: https://discord.com/oauth2/authorize?client_id=${Client.id}&scope=bot&permissions=8`)
console.log(`id: ${Client.id}`)```

