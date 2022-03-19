<div align="center">
<h1 align="center">Discord.js MusicBot</h1> 
</div>

A Discord Bot that can play musics for you. The bot have many commands like playing, skipping, stoping etc. the music. This bot is made by a 13 years old programmer from the Philippines. Also, iw will not going to offline, it will be online forever 24/7 if you copy the Bots Site link and paste it to Uptime Robot. If you would like to know ho to install, just go to ##How to install?

## Preview of discord bot
This is what will show when the bot has been setup successfully.
![Preview](https://media.discordapp.net/attachments/945142334222401536/952029545849049178/ExpungedBoat_Preview.png?width=661&height=427)

## Features
* Online Forever 24/7
* With Fun Commands
* Added Moderation Commands
* Can play with players.

## How to install?

### Using [git clone](https://git-scm.com/docs/git-clone):
1. You have to install [Node.js](https://nodejs.org/en/download/) and [Git](https://git-scm.com/downloads).
2. Create a folder in a place you won't accidentally delete it.
3. Open Command Prompt (Windows) or terminal (Linux).
4. Execute command `cd [path to folder]`.
	- Example on Windows: `cd C:\Users\SRBAPH\Desktop\discord-giveaway-bot`
	- Example on Linux: `cd /home/0rso/Documents/discord-giveaway-bot`
6. Execute `git clone https://github.com/SRBAPH/ExpungedBoat` command.
7. When you see all of the github files in your folder this means that you downloaded the bot succesfully.

### Using this repo zip file:
1. You have to install [Node.js](https://nodejs.org/en/download/) and a program to extract zip files. I recommend [7-Zip](https://www.7-zip.org/) since it is 100% free, no ad and open-source.
2. Create a folder in a place you won't accidentally delete it.
3. Download the repository as a zip file, which can be done [here](https://github.com/0rso/discord-giveaway-bot/archive/refs/heads/master.zip).
4. Extract the zip file to the folder.
5. When you see all of the github files in your folder this means that you downloaded the bot succesfully.


## Usage + Setup

**Step 1:** Open config.json and change the following values:

| Required value | What does this value mean? |
| --- | --- |
| `token` | (String) This is what discord will use to log into your bot. Get this token from the [Discord Developer Portal](https://discord.com/developers/applications) |
| `prefix` | (String) This is the prefix to the commands. |

| Optional Value | What does this value mean? |
| --- | --- |
| `giveawayRoleID` | (String) This is the role the bot will mention when the giveaway starts. Default (empty) will be set to `@everyone`. Has to be a role ID |
| `showMention` | (Boolean) This determines if the mention will be shown or not. |
| `giveawayMention` | (Boolean) This determines if there will be a role mentioned. |
| `giveawayManagerID` | (String) This options lets the bot know who is able to start giveaways. Default (empty) will be set to any user with MANAGE_MESSAGES permission. Has to be a user ID. |

**Step 2:** Install dependencies (only the first time)
- Windows:
  - Run `setup.bat` file
- Linux:
  - Run `npm i` command

**Step 3:** Start the bot
- Windows:
  - Run `start.bat` file
- Linux:
  - Run `node index.js` command

And you are done! You have successfully made your discord bot run. If you are having any troubles refer to the GIF below or open an [issue](https://github.com/orsou/discord-giveaway-bot/issues/new).

![Example](https://user-images.githubusercontent.com/48368615/120048766-de352780-c00f-11eb-882e-b69e45e96c64.gif)
> The token in this GIF is invalid. You have to use your own.

## Contributing to the repository

1. [Fork the repository!] (https://github.com/SRBAPH/ExpungedBoat/fork)
2. Clone your fork: `git clone https://github.com/your-username/discord-giveaway-bot.git`
3. Create your feature branch: `git checkout -b my-new-feature`
4. Commit your changes: `git commit -am 'Add some feature'`
5. Push to the branch: `git push origin my-new-feature`
6. Submit a pull request! ₍ᐢ•ﻌ•ᐢ₎*･ﾟ｡

## Staffs

<table>
  <tr>
    <td align="center"><a href="https://sites.google.com/view/srbaphcommunity/home"><img src="https://avatars.githubusercontent.com/u/100334998?v=4" width="100px;" alt=""/><br /><sub><b>SRBA PH</b></sub></a><br /><a></a>
    <td align="center"><a href="https://www.youtube.com/channel/UCAN3mHhbXQKLE6H2ZYO4RPg"><img src="https://yt3.ggpht.com/ytc/AKedOLSaPOt8cbrcSMebYifDbo72-dbsGi_6MTJ2x56X=s88-c-k-c0x00ffffff-no-rj" width="100px;" alt=""/><br /><sub><b>Errol John Plays</b></sub></a><br /><a>
    <td align="center"><a href="https://www.youtube.com/channel/UCO4tTyDxa2vHB8IWf8hog0A"><img src="https://wallpapercave.com/wp/wp6133675.jpg" width="100px;" alt=""/><br /><sub><b>Angel Grace Gaming</b></sub></a><br /><a>
  </tr>
</table>


This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## LICENSE
MIT
