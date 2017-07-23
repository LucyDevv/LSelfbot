const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

var prefix = config.prefix

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if(msg.author !== client.user) return;
  
    //
    
  if (msg.content.startsWith(prefix + 'ping')) {
      msg.delete()
msg.channel.send(`**Pong!** | ${client.ping}ms`)
}
    
        if (msg.content.startsWith(prefix + 'userinfo')) {
            msg.delete()
        let member5 = msg.mentions.members.first();
    const embed = new Discord.RichEmbed()
        if(!member5) {
            msg.channel.send(`:warning: Please mention a user!`)
        } else {
        if(!member5.presence.game) {
           embed.setDescription(`***USER*** *INFOMATION*\n \nUSERNAME: **${member5.user.tag}**\nID: **${member5.id}**\nCREATED: **${member5.createdAt}**\nPLAYING: **NOTHING**`)
            embed.setAuthor(member5.user.tag, member5.user.avatarURL)
        embed.setFooter(`userinfo command | run by ${msg.author.tag}`)
        embed.setThumbnail(member5.user.avatarURL)
          embed.setColor(member5.highestRole.color) 
            msg.channel.send({embed});  
        } else {
            embed.setDescription(`***USER*** *INFOMATION*\n \nUSERNAME: **${member5.user.tag}**\nID: **${member5.id}**\nCREATED: **${member5.createdAt}**\nPLAYING: **${member5.presence.game.name}**`)
            embed.setAuthor(member5.user.tag, member5.user.avatarURL)
        embed.setFooter(`userinfo command | run by ${msg.author.tag}`)
        embed.setThumbnail(member5.user.avatarURL)
          embed.setColor(member5.highestRole.color)
            msg.channel.send({embed});  
        }
        }
  } 
    
     if (msg.content.startsWith(prefix + 'help')) {
         msg.delete()
        const embed = new Discord.RichEmbed()
        
          embed.setAuthor(msg.author.tag, msg.author.avatarURL)
          embed.setDescription(`All commands for ${msg.author.name}'s selfbot.`)
          embed.setFooter(`help command | run by ${msg.author.tag}`)
          embed.setColor(msg.guild.me.highestRole.color)
         
         embed.addField(`${prefix}help`, "Shows you this helpful help menu that shows all the selfbots commands!", true)
         embed.addField(`${prefix}userinfo`, "Retrives infomation about a user. Make sure to mention the user!", true)
         embed.addField(`${prefix}quote`, "Quotes a message. Make sure to provide a messageID, or you can't quote it!", true)
         embed.addField(`${prefix}ping`, "The good ol' ping pong! Pings the bots connection speed / heartbeat!", true)
         embed.addField(`${prefix}embed`, "Embed some content. Supports emojis and markdown, link embedding and lots more!", true)
         embed.addField(`${prefix}prune`, "Prunes the requested amount of your messages. Can only be 99 or below.", true)
          
      msg.channel.send({embed});  
  }
    
    if (msg.content.startsWith(prefix + 'quote')) {
        msg.delete()
        const embed = new Discord.RichEmbed()
      const args = msg.content.split(' ').slice(1);
        if(!args) {
            msg.channel.send(`:warning: Please provide a message ID!`)
        } else {
      msg.channel.fetchMessage(args).then(quoteID => {
           let quoteContent = quoteID.content;
          embed.setAuthor(quoteID.author.tag, quoteID.author.avatarURL)
          embed.setDescription(quoteContent)
          embed.setFooter(`Quoted message by ${quoteID.author.tag} | ID: ${args}`)
          embed.setColor(msg.guild.me.highestRole.color)
          
      msg.channel.send({embed});
      })
}    
  }
    
    if (msg.content.startsWith(prefix + 'embed')) {
        msg.delete()
      const args = msg.content.split(' ').slice(1).join(' ');
        msg.channel.send({embed: {
  color: msg.guild.me.highestRole.color,
  description: args
}});
}    
    
    const params = msg.content.split(" ").slice(1);
  if (msg.content.startsWith(prefix + "prune")) {
    let messagecount = parseInt(params[0]);
    msg.channel.fetchMessages({
        limit: 100
      })
      .then(messages => {
        let msg_array = messages.array();
        msg_array = msg_array.filter(m => m.author.id === client.user.id);
        msg_array.length = messagecount + 1;
        msg_array.map(m => m.delete().catch(console.error));
      });
  }
    
    //
  
});

client.login(config.token);