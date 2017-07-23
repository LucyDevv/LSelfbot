# LSelfbot
My attempt at making a simple Discord selfbot.

## What is this?
LSelfbot is a NodeJS Discord selfbot, made with the Discord.JS library.
It features many helpful commands, and it is always growing!

## Why make this?
I understand there are a LOT of selfbots out there, but I really wanted to
make my own. Most selfbots are A: too hard to get working / install,
B: hard to actually use or C: Packed full with too much commands and clutter.

LSelfbot has a minimal list of 6 commands at the moment.

## Full command list:
[Click here](http://imgur.com/a/WGLgI)*
* - *may be outdated or not updated*

## Install guide [windows]
**YOU NEED NODEJS INSTALLED! INSTALL IT FIRST!** You can find it [here](https://nodejs.com).

*1: Grabbing the files*
To get started, download the latest release files of the selfbot. Then, open your command prompt,
and type this: `cd desktop`. That will change your directory to your Desktop. Then, run this command:
`mkdir selfbot`, then `cd selfbot`. Finally, run `npm install --save discord.js`.

*2: Installing and setting up the selfbot*
Lets get started! Plop the **selfbot.js** file into the newly created *selfbot/* folder. Open it up
with a code editor like [atom](), [brackets](), etc. Whatever you use. Next, scroll down to the bottom
and find this line:
`client.login('your-token');`
Replace **your-token** with your token. You can find this by running `CTRL + SHIFT + I` in Discord, heading to
the applications tab and getting your token.
**WARNING: DO NOT, REPEAT DO NOT, SHARE YOUR TOKEN!**
Plop it in, and save the file. OPTIONAL: Set the `var prefix = "l"` line at the top to your desired prefix.
The default, as you can see above, is `l`. So commands will start with `l`, like `lhelp` and `lquote`

*3: Running the selfbbot*
Lets get going. Make sure your Command Prompt is in the desktop/selfbot directory. Run this command: `node selfbot.js`.
If all goes well, your console shoult print out: `Logged in as YourUsername#1234`. If it did, congrats! If not, make sure
your token is correct and you didn't edit any other code.

## Warning:
If you get banned off Discord while using my selfbot, it isn't my problem. Don't complain to me. You were probably banned for breaking the selfbot rules, which probably means you have broke a vital bit of my code. You have been warned!

## Support:
If you do need help on things like adding custom commands, fixing the code,
or anything else, join my support Discord [here](https://discord.gg/6yjeSM8)!

*@2017 LucyDevv. All content is protected.*
