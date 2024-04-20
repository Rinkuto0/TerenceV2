module.exports = {
        TOKEN: 'MTIzMTE1MDU3MDkwODE1NTk1NA.GPA9Wn.H3G_EsW6q9_whrXzLYlamWOnRcx3wiuKfvZbxc', //write your discord bot token
        px: '!',
        playing: '36,5 ayak dm',

    opt: {
        DJ: {
            enabled: false, //IF YOU WANT ONLY DJS TO USE IT, set false to true.
            roleName: 'DJ', //WRITE WHAT THE NAME OF THE DJ ROLE WILL BE, THEY CAN USE IT ON YOUR SERVER
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume'] //Please don't touch
        },
        selfDeaf: true, //IF YOU WANT TO DEAF THE BOT, set false to true.
        maxVol: 200, //You can specify the maximum volume level.
        loopMessage: false, //Please don't touch
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio', //Please don't touch
                highWaterMark: 1 << 25 //Please don't touch
            }
        }
    }
};
