const Commando = require("discord.js-commando");
const bot = new Commando.Client();
bot.login('NTQyMDg0NzY4NzA4Mjk2NzE1.Dzu_0g.Ec9rUTu-YE6fTUq9ECpjvCGkqas');

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands')

bot.on('message', function(message){
    if (message.content == "?role") {
        message.member.send("Hi.")
    }
    if (message.content == 'Join')
    {
        message.member.send('Welcome to The Doge Protection Army Discord, ' + message.member + '!');
        let memberRole = message.member.guild.roles.find('name', 'Drill Sergeant School');
        message.member.addRole(memberRole);
    }
});

bot.on('ready', function(){
console.log('Ready.')
})

bot.on('guildMemberAdd', function(member)
{
    member.send('Welcome to Training and Doctirne Command, ' + member.member + '!');
    let memberRole = member.guild.roles.find('name', 'Drill Sergeant School');
    member.addRole(memberRole);
    
});