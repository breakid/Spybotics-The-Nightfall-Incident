# Spybotics: The Nightfall Incident

This is a fan-made reproduction of the 2002 Shockwave game "Spybot: The Nightfall Incident" created for Lego by GameLab. I developed this project as a personal challenge to better learn web technologies (i.e. HTML5, W3CSS, etc.) and preserve a beloved game from my childhood, which sadly no longer functions properly in modern browsers. I do not have access to any original source code; the implementation of all functionality is unique and based on observations made from video walkthroughs found on YouTube. Story content (e.g., character images, program images and stats, map and enemy layouts, dialog) was painstakingly collected from various written and video walkthroughs to ensure as faithful a reproduction as possible. Sound clips were recorded from the original game (when possible, due to limited functionality) or extracted from YouTube video walkthroughs using Audacity. Please see below for a copyright / trademark disclaimer.

In a few places, I've taken the liberty to add some new features that did not exist in the original game. These include:
- Zoom in/out on the netmap
- More flexible and capable dialog system that could be adapted to other purposes such as allowing conversations with multiple NPCs
- Flexible battle system that could be adapted for more than two players (e.g., potential for multi-player)
- Friendly-fire option (programs can damage other programs owned by the same player; this is mostly useful in case the tail of a program gets in the way and the enemy won't destroy it)
- Cheat codes
  - For ease of testing I added a JavaScript function that will automatically win the current databattle. To use, enter a databattle, then type: 'javascript:auto_win()' in the address bar of you browser and press Enter

For those who want to play the original game, [here](https://www.rockraidersunited.com/topic/8514-ancient-lego-web-games-attempting-to-play-having-issues/) is a forum with instructions on how to try and get it working using legacy software.




# Copyright / Trademark Disclaimer
All rights to the code itself belong to me, while all trademarks and game content belongs to the respective IP rights owners.

## Code
    Copyright (C) 2021 Dan Breakiron
    
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>
    
    Additional Terms:
    This code and any derivatives MAY NOT be used for commercial purposes 
    without explicit written permission. If you wish to do so, you may 
    contact me by submitting an issue under this repository.


## Content
Game elements such as the story, characters, dialog, programs, maps, etc. were painstakingly reproduced from online walkthroughs, and, whenever possible, images and sounds from the original game were used in an effort to create a faithful reproduction. LEGO / GameLab owns all copyrights and trademarks to these materials, but since 1) I'm not selling it, 2) the original game was free anyway, 3) it's no longer playable on modern systems, 4) it serves to further advertise Lego branding, and 5) Lego is founded on creativity, my hope is that they will appreciate my efforts; if that is not the case, I'll be happy to remove it. This project is not endorsed by LEGO, but I'd love it if it was.

The background images for databattles were found via Google Images and the copyrights belong to the original creators. Unfortunately, I found them so long ago I don't know their original source or creators. If they belong to you, and you do not approve of their use, please contact me, and I'll be happy to remove them.

Any use of this game, which contains material owned by others, is for personal use only.




# Usage
1. Clone the repo, or download the files and unzip
2. Launch the index.html file in a browser (I believe I tested in Firefox and Chrome)
3. Click anywhere on the main splash screen
4. Click "New Game", select your Spybot
5. Enjoy!

Nearly everything works when running locally; however, some features may require the code to be hosted by a web server. 




# Features

## UI
- Implemented a simple splash screen, a new game / load game screen, and a screen that allows the player to select their spybot
- Implemented a settings modal that allows the user to change a variety of settings
  - Interface theme (light or dark)
  - Whether or not the mouse can be used to scroll the map (the keyboard option works in both cases)
  - Whether the player can scroll to zoom in and out on the map (also allows a reset to default zoom)
  - Whether friend-fire is enabled (with friendly-fire enabled, programs can damage other programs owned by the player)


## Netmap
- World map that contains all the databattle and warez (shop) nodes
- Nodes look stylish with a dynamically drawn shadow effect and trignometry-derived cross-hatching (the only time I've used trig outside of school)
- Hovering over a node will display its company, name, and level
- Implemented locked locations using a flag in each node and the callback function feature; in addition to requiring the appropriate security level, locations must be unlocked by completing prior missions
- Implemented a modal that allows the player to view a node's info
- Netmap data stored in node_data.js


## Conversations
- Dialog goes in dialog_data.js
- Messages addressed to the player can have multiple possible responses; messages addressed to an NPC may have only one response
- Using message IDs as the link to responses, allows great flexibility including:
  - Cycles (circling back to a previous statement)
  - Reintegrating forks in a conversation
  - NPCs talking to each other
- Callback function that can be used for arbitrary event triggers (receiving credits / software, increasing security level, etc)
- Usage:
  - Call UI.DIALOG.loadDialog() and pass it the key of the first message in the conversation
  - When having NPCs talk to each other, use the 'settings.timeout' option to specify how long to wait before displaying the next message
  - Use 'action' key to specify a function that will be executed as part of the conversation


## Store
- Simple mechanic for displaying the player's program inventory and information about the selected program
- Player's can purchase programs from the store, credits will be deducted and programs will be greyed out when the player can no longer afford them
- The 'dialog_key' attribute of a 'store' node points to the first message of the shopkeeper's dialog


## Battle
- Used canvas to build a grid based on a 2-dimensional array
  - 0 = no block
  - 1 = normal block
  - 2 = upload point
  - 3 = logs
  - 4 = credits
- Automatically select upload points or let players decide
- Automatically starts battle when all upload slots have been filled or the battle can be initated manually if the player chooses not to fill all of the slots
- Displays markers where each program can move and the range of its attack, uses a pathing algorithm to determine distances around obstacles
- Can move and perform actions with any program, in any order
- When a program has used up all of its moves, it automatically selects and targets an action
- Implemented program tails, including collision detection and shrinking programs to maintain their max length or to apply damage
- Implemented loading enemy programs
- Marks programs with a checkmark when they have finished their movement / action for the given turn
- Can collect credits and logs
- Implemented a mechanic to win the battle when all logs have been collected or all enemies destroyed
- Each node can specify a victory callback function and a failure callback function that will be executed when the player wins or loses a battle, respectively
  - Can be used to for arbitrary event triggers (receiving credits / software, increasing security level, triggering conversations, etc)
- Implemented a modal to display battle results
- Implemented enemy AI with breadth-first search path planning and automatic targeting
- Implemented a pause between each enemy movement and action so that enemy turn's aren't instantaneous - using setTimeout and recursion
- Implemented an undo feature which allows the player to undo a program's movement for the current turn until they perform their action
- Implemented all action types and enforced required size limit


## Misc
- Save/load mechanic
  - Game will auto-save progress every second (using the browser's localStorage)
  - Saved games can be loaded from the load screen
  - NOTE: May only works when hosted on a web server or third-party cookies are accepted




# Concessions
- Some dialog paths may be missing if I couldn't find them in a walkthrough or reach them in the game itself
- Tutorial doesn't advance automatically, must be manually clicked through
- Resolution/size of the graphics is limited as the original game was designed for 640x480(?)
- Entire splashscreen is clickable, rather than a specific button
- No progress bar on battle splashscreens
- Layout is close but not exactly like the original game
- Movement indicators are simply transparent colored blocks rather than fancy decals - this could be changed, but was deemed more complicated than it was worth
- Nodes images were not used because I could not find good source material or faithfully reproduce them using the HTML5 canvas itself




# Known Bugs / Future Work
- Interface
  - Databattle splash screen
  - Databattle logout confirmation dialog
  - Make sure the canvas plays nice with resizing
  - Friendly programs still list their power as "Damage"
  - Make 'Enter' work on modal buttons
  - Chat Log to display conversation_history
- Audio
  - Not fully implemented - dynamically generated buttons don't get sound
  - Add a setting that controls whether music/sounds play
    - Function that plays the specified sound effect - so you can check settings.music option in one place
    - If music is disabled, iterate through all audio clips and pause any that are currently playing
- Netmap
  - When zoomed in 
    - The node selection spots aren't lined up properly
  - When zoomed out
    - Weird things happen when you zoom out to far - map jumps between sides of the screen
- Battle
  - Glitch when drawing blocks - will sometimes leave a hanging connector after moving over itself (see Sumo, first level)
  - Data Doctor's Grow doesn't obey maximum length
- Achievements
  - Win your first battle
  - Win a battle on your first attempt
  - Win a battle without losing any programs
  - Win a battle without taking damage
  - Win a battle without attacking any enemy programs
- Polishing
  - Finish building out dialog from walkthroughs or playing the game in a legacy browser
  - Tutorial
    - Automatically advance tutorial
    - Implement arrows in the tutorial so that the player knows what "this" references
    - Implement a new, streamlined tutorial that is specific to my implementation; add setting option to use the original or streamlined version
  - Battle
    - Improve enemy AI so that it will sometimes move for the sake of growing the size of it's programs - especially if it can move and still reach the target program
    - Improve automatic action selection
    - Adds Sectors To Target
      - Improve selection of which block to add
      - Pick up credits and logs?
  - Netmap
    - Building graphics