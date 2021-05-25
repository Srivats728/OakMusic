exports.run = async(client, message) => {
    message.channel.send({
        embed: {
            title: '**OakMusic Help 🎶**',
            description: `
            __**Commands**__
            
            \`play\` <songName> => Play A Song From Youtube.
            \`pause\` => Pause Music.
            \`resume\` => Resume Music.
            \`np\` => Get Now Playing Song's Info.
            \`skip\` => Skip To Next Song.
            \`stop\` => Stop Playing Music.
            \`volume\` <value> => Adjust Volume Of The Music.
            \`queue\` => To See The Full Song Queue.

[**Devloper Channel**](https://www.youtube.com/channel/UCIHRAN3z65oSBmSkVTTT-8g)
            `,
            color: 'BLACK'
        }
    })
}
