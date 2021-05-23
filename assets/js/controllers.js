
//=================================
//******     CONTROLLERS     ******
//=================================

var UI = {};
UI.CONTROLS = {};
UI.AUDIO = {};
UI.NETMAP = {};
UI.NETMAP.NODE = {};
UI.DIALOG = {};
UI.PLAYER = {};
UI.STORE = {};
UI.BATTLE = {};
UI.BATTLE.MAP = {};
UI.BATTLE.PLAYER = {};

//---------------------------------
//******        BASIC        ******
//---------------------------------

UI.showLoadScreen = function() {
  $('#splash_screen').hide();
  $('#load_screen').show();
  
  // Load saves from localStorage
  try {
    if (typeof localStorage !== 'undefined') {
      var save_name,
          game;
      
      for (var i = 1; i < 4; i++) {
        save_name = 'game' + i;
        
        if (localStorage[save_name]) {
          game = JSON.parse(localStorage[save_name]);
          
          $('#' + save_name + '_img').attr('src', 'images/spybots/' + game.player.spybot + '.jpg');
          $('#' + save_name + '_save').html(game.player.spybot);
          $('#' + save_name + ' .new_game_btn').hide();
          $('#' + save_name + ' .load_game_btn').show();
          $('#' + save_name + ' .del_game_btn').show();
        } else {
          $('#' + save_name + '_img').attr('src', '');
          $('#' + save_name + '_save').html('Empty');
          $('#' + save_name + ' .new_game_btn').show();
          $('#' + save_name + ' .load_game_btn').hide();
          $('#' + save_name + ' .del_game_btn').hide();
        }
      }
    }
  } catch(e) {
    // Error accessing localStorage
  }
}

UI.showSpybotScreen = function() {
  $('#load_screen').hide();
  $('#spybot_screen').show();
}

UI.selectSpybot = function() {
  $('#spybot_screen').hide();
  UI.showNetmap();
  UI.init();
  
  // Start tutorial
  UI.DIALOG.loadDialog('0');
}

UI.init = function() {
  // Load Spybot profile
  $('#spybot_name').html(player.spybot);
  $('#spybot_profile').attr('src', GAME_DATA.SPYBOTS[player.spybot]);

  // Load settings
  UI.loadTheme(settings);
  $('#settings_theme').val(settings.theme);
  $('#settings_map_pan').val(settings.map_pan);
  $('#settings_zoom').attr("checked", settings.zoom_enabled);

  // Load initial inventory
  UI.PLAYER.updateInventory(player);
};

UI.loadTheme = function() {
  switch(settings.theme) {
    case 'light':
      $('body').css('background-color', 'white');
      break;
    case 'dark':
      $('body').css('background-color', 'black');
      break;
  }
};

UI.showNetmap = function() {
  $('#game_ui').show();
  $('#netmap').show();
  $('#program_list').show();
  $('.battle-ui').hide();
  $('#battle_result_popup').hide();
  
  UI.AUDIO.stop('intro');
  UI.AUDIO.stop('battle_background_music');
  UI.AUDIO.play('netmap_background_music');

  // Default to the first program in the player's inventory
  $('#player_inventory')[0].selectedIndex = 0;
  UI.PLAYER.updateInventory();
}

UI.showBattleSplash = function() {
  $('#netmap').hide();
  
};
  
UI.showBattle = function() {
  $('#netmap').hide();
  $('#program_list').show();
  $('.battle-ui').show();
  $('#undo').hide();
  
  UI.AUDIO.stop('netmap_background_music');
  UI.AUDIO.play('battle_background_music');
}

UI.showStore = function() {
  $('#chat').hide();
  $('#store').show();

  UI.STORE.updateInventory();
}

UI.updateProgramInfo = function(displayType, program) {
  if (typeof program !== 'undefined') {
    var inBattle = $('#battle_screen').is(":visible") && battle.state === Battle.states.in_progress;
    var commands_html = '';

    for (var action_name in program.actions) {
      commands_html += '<button id="' + action_name + '" class="action w3-btn-block w3-cerulean w3-text-white w3-border w3-border-grey w3-hover-cyan">' + action_name + '</button>';
    }
    
    // If the player is in battle, add a 'No Action' button
    if (inBattle) {
      commands_html += '<button id="no_action" class="action w3-btn-block w3-cerulean w3-text-white w3-border w3-border-grey w3-hover-cyan">No Action</button>';
    }
    
    $('#' + displayType + '_program_info [name="program_image"]').attr('src', program.image);
    $('#' + displayType + '_program_info [name="move"]').html(program.movement_speed);
    $('#' + displayType + '_program_info [name="max_size"]').html(program.max_size);
    
    if (program.curr_size > 0) {
      $('#' + displayType + '_program_info [name="curr_size"]').html('Current Size: ' + program.curr_size);
      $('#' + displayType + '_program_info [name="curr_size"]').show();
    } else {
      $('#' + displayType + '_program_info [name="curr_size"]').hide();
    }
    
    $('#' + displayType + '_program_info [name="program_name"]').html(program.name);
    $('#' + displayType + '_program_info [name="commands"]').html(commands_html);
    $('#' + displayType + '_program_info [name="description"]').html(program.desc);
    
    // Attach a click handler to each button that will display the description of the selected action
    $('#' + displayType +'_program_info [name="commands"] .action').each(function(){
      $(this).click(function() {
        var action_name = this.id
        
        if (action_name !== 'no_action') {
          // Display the description of the action
          $('#' + displayType + '_program_info [name="description"]').html(program.actions[action_name].htmlDesc());
        }

        UI.BATTLE.targetAction(action_name);
      });
    });
  } else {
    log('updateProgramInfo - program is undefined', 'ERROR');
  }
};

//-----------------------------------
//******       CONTROLS        ******
//-----------------------------------

UI.CONTROLS.saveGame = function() {
  try {
    if (typeof localStorage === 'undefined') {
      alert('localStorage disabled');
      return false;
    }
    
    //var key = prompt("Save game", "game1");
    
    if (settings.save_name !== '') {
    
      var game = {};
      game.player = player;
      game.nodes = {};
      
      Object.keys(netmap.nodes).forEach(function(name) {
        game.nodes[name] = {};
        game.nodes[name].display = netmap.nodes[name].display;
        game.nodes[name].locked = netmap.nodes[name].locked;
      });
      
      localStorage[settings.save_name] = JSON.stringify(game);
    }
  } catch(e) {
    // Error accessing localStorage
  }
};

UI.CONTROLS.loadGame = function() {
  if (typeof localStorage === 'undefined') {
    alert('localStorage disabled');
    return false;
  }
  
  //var key = prompt("Load game", "game1");
  
  var game = JSON.parse(localStorage[settings.save_name]);
  
  // Load player data
  player.spybot = game.player.spybot;
  player.credits = game.player.credits;
  player.level = game.player.level;
  player.inventory = game.player.inventory;
  player.conversation_history = game.player.conversation_history;
  
  // Load node data
  Object.keys(netmap.nodes).forEach(function(name) {
    netmap.nodes[name].display = game.nodes[name].display;
    netmap.nodes[name].locked = game.nodes[name].locked;
  });
  
  $('#load_screen').hide();
  UI.showNetmap();
  UI.init();
};

//----------------------------------
//******        AUDIO         ******
//----------------------------------

UI.AUDIO.CLIPS = {};
UI.AUDIO.CLIPS.intro = new Audio('sounds/intro.wav');
UI.AUDIO.CLIPS.intro.autoplay = true;
UI.AUDIO.CLIPS.intro.loop = true;

UI.AUDIO.CLIPS.netmap_background_music = new Audio('sounds/netmap_background_music.wav');
UI.AUDIO.CLIPS.netmap_background_music.loop = true;

UI.AUDIO.CLIPS.battle_action_zero = new Audio('sounds/battle_action_zero.wav');
UI.AUDIO.CLIPS.battle_attack = new Audio('sounds/battle_attack.wav');
UI.AUDIO.CLIPS.battle_background_music = new Audio('sounds/battle_background_music.wav');
UI.AUDIO.CLIPS.battle_credit_pickup = new Audio('sounds/battle_credit_pickup.wav');
UI.AUDIO.CLIPS.battle_move_enemy = new Audio('sounds/battle_move_enemy.wav');
UI.AUDIO.CLIPS.battle_move_player = new Audio('sounds/battle_move_player.wav');
UI.AUDIO.CLIPS.battle_select = new Audio('sounds/battle_select.wav');
UI.AUDIO.CLIPS.battle_splash_cellular_automata_research = new Audio('sounds/battle_splash_cellular_automata_research.wav');
UI.AUDIO.CLIPS.battle_splash_disarray = new Audio('sounds/battle_splash_disarray.wav');
UI.AUDIO.CLIPS.battle_splash_dr_donut = new Audio('sounds/battle_splash_dr_donut.wav');
UI.AUDIO.CLIPS.battle_splash_lucky_monkey_media = new Audio('sounds/battle_splash_lucky_monkey_media.wav');
UI.AUDIO.CLIPS.battle_splash_pharmhaus = new Audio('sounds/battle_splash_pharmhaus.wav');
UI.AUDIO.CLIPS.battle_success = new Audio('sounds/battle_success.wav');
UI.AUDIO.CLIPS.chirp = new Audio('sounds/chirp.wav');
UI.AUDIO.CLIPS.dialog_popup = new Audio('sounds/dialog_popup.wav');
UI.AUDIO.CLIPS.netmap_node_select_1 = new Audio('sounds/netmap_node_select_1.wav');
UI.AUDIO.CLIPS.netmap_node_select_2 = new Audio('sounds/netmap_node_select_2.wav');
UI.AUDIO.CLIPS.netmap_node_select_3 = new Audio('sounds/netmap_node_select_3.wav');
UI.AUDIO.CLIPS.store_program_buy = new Audio('sounds/store_program_buy.wav');
UI.AUDIO.CLIPS.store_program_select = new Audio('sounds/store_program_select.wav');


UI.AUDIO.play = function(sound) {
  setTimeout(function() {
    $( document).trigger( "play_audio", [sound] );
  }, 500);
};

UI.AUDIO.stop = function(sound) {
  $( document).trigger( "stop_audio", [sound] );
};



//---------------------------------
//******       NETMAP        ******
//---------------------------------

UI.NETMAP.scrollHandler = function(evt){
  if (settings.zoom_enabled) {
    var delta = evt.wheelDelta ? evt.wheelDelta / 120 : evt.detail ? -evt.detail : 0;

    netmap.changeScale(delta * Netmap.SCALE_INCREMENT);

    return evt.preventDefault() && false;
  }
};

// Triggers scrolling behavior if the provided coordinates are a certain distance from the side of the bs_canvas
UI.NETMAP.panHandler = function(coord) {
  var windowWidth = netmap.canvas.width,
      windowHeight = netmap.canvas.height;
  var x = coord.x,
      y = coord.y;

  if (x > 0 && x < Netmap.PAN_THRESHOLD) {
    netmap.deltaX = -1;
  } else if (x > windowWidth - Netmap.PAN_THRESHOLD && x < windowWidth) {
    netmap.deltaX = 1;
  } else {
    netmap.deltaX = 0;
  }

  if (y > 0 && y < Netmap.PAN_THRESHOLD) {
    netmap.deltaY = -1;
  } else if (y > windowHeight - Netmap.PAN_THRESHOLD && y < windowHeight) {
    netmap.deltaY = 1;
  } else {
    netmap.deltaY = 0;
  }
};

UI.NETMAP.scrollTo = function(x, y) {
  netmap.scrollToX = x;
  netmap.scrollToY = y;
};

UI.NETMAP.draw = function() {
  // Source: https://www.safaribooksonline.com/library/view/html5-bs_canvas/9781449308032/ch04s07.html
  var windowWidth = netmap.canvas.width,
      windowHeight = netmap.canvas.height;

  // Adjust deltaX and deltaY to force the netmap viewing window to center on the point being scrolled to (if applicable)
  function checkScrollToCoord() {
    var midWindowX = (windowWidth / netmap.currentScale) / 2;
    var midWindowY = (windowHeight / netmap.currentScale) / 2;
    var stepSize = Netmap.PAN_STEP * netmap.currentScale;
    
    if (netmap.scrollToX > -1) {
      if (netmap.windowX + midWindowX + stepSize < netmap.scrollToX) {
        netmap.deltaX = 1;
      } else if (netmap.windowX + midWindowX - stepSize > netmap.scrollToX) {
        netmap.deltaX = -1;
      } else {
        netmap.deltaX = 0;
        netmap.scrollToX = -1;
      }
    }
    
    if (netmap.scrollToY > -1) {
      if (netmap.windowY + midWindowY + stepSize < netmap.scrollToY) {
        netmap.deltaY = 1;
      } else if (netmap.windowY + midWindowY - stepSize > netmap.scrollToY) {
        netmap.deltaY = -1;
      } else {
        netmap.deltaY = 0;
        netmap.scrollToY = -1;
      }
    }
  }
  
  var netmap_img = new Image();
  netmap_img.src = 'images/ui/netmap.png';
  
  // Check whether scrollTo coordinates exist, adjust deltaX and deltaY appropriately
  checkScrollToCoord();

  // Adjust part of map being viewed according to the deltaX and deltaY flags
  if (netmap.deltaX > 0) {
    netmap.windowX += Netmap.PAN_STEP;

    // TODO: Adjust boundaries when zoomed in so player can see the whole map
    if (netmap.windowX >= netmap_img.width - windowWidth / netmap.currentScale){
      netmap.windowX = netmap_img.width - windowWidth / netmap.currentScale;
      netmap.scrollToX = -1;
    }
  } else if (netmap.deltaX < 0) {
    netmap.windowX -= Netmap.PAN_STEP;

    if (netmap.windowX < 0){
      netmap.windowX = 0;
      netmap.scrollToX = -1;
    }
  }

  if (netmap.deltaY > 0) {
    netmap.windowY += Netmap.PAN_STEP;

    if (netmap.windowY >= netmap_img.height - windowHeight / netmap.currentScale){
      netmap.windowY = netmap_img.height - windowHeight / netmap.currentScale;
      netmap.scrollToY = -1;
    }
  } else if (netmap.deltaY < 0) {
    netmap.windowY -= Netmap.PAN_STEP;

    if (netmap.windowY < 0) {
      netmap.windowY = 0;
      netmap.scrollToY = -1;
    }
  }

  var ctx = netmap.canvas.getContext('2d'),
    windowWidth = netmap.canvas.width,
    windowHeight = netmap.canvas.height;

  ctx.clearRect(0, 0, windowWidth, windowHeight);
  ctx.drawImage(netmap_img, netmap.windowX, netmap.windowY, windowWidth / netmap.currentScale, windowHeight / netmap.currentScale, 0, 0, windowWidth, windowHeight);

  for (var id in netmap.nodes) {
    UI.NETMAP.NODE.draw(netmap.nodes[id]);
  }

  var node = netmap.currentNode();

  if (typeof node !== 'undefined' && node.display) {
    // Mouse is positioned over a visible node
    $('#' + netmap.canvas_id).css('cursor', 'pointer');

    UI.NETMAP.NODE.drawMapInfo(node);
  } else {
    // Mouse is positioned over the map background
    $('#' + netmap.canvas_id).css('cursor', 'default');
  }
};

UI.NETMAP.click = function() {
  if (netmap.click()) {
    var node = netmap.selectedNode();
    UI.NETMAP.NODE.updateInfoDisplay(node);
    $('#node_info_popup').show();
  }
};

UI.NETMAP.NODE.updateInfoDisplay = function(node, battleComplete = false) {
  var mission,
      desc = node.desc;

  $('#node_databattle_btn').hide();
  $('#node_shop_btn').hide();
  $('#node_proceed_btn').hide();
  $('#node_enter_smart_btn').hide();

  if (!battleComplete) {
    $('#node_credits').show();
    $('#node_cancel_btn').show();

    if (player.level < node.level) {      // Ensure the player is a high enough level to access the node
      mission = 'NO ACCESS';
      desc = 'Access Denied - Insufficient Security Clearance';
    } else if (node.locked) {
      mission = 'NO ACCESS';
    } else if (node.type === 'store') {
      mission = 'WAREZ NODE';

      $('#node_credits').hide();
      $('#node_shop_btn').show();
    } else if (node.type === 'battle') {
      mission = 'MISSION INFO';
      $('#node_databattle_btn').show();
    } else if (node.type === 'hq') {
      $('#node_enter_smart_btn').show();
    }

    // If the node has an associated battle, count the number of credit blocks
    if (GAME_DATA.BATTLES.hasOwnProperty(node.name)) {
      $('#node_credits').html('Extra Credits: ' + (new Map(GAME_DATA.BATTLES[node.name].grid, node.level)).count('credits'));
    }
  } else {
    // Show databattle success message
    // IMPORTANT: This window does not appear for failed missions
    $('#node_credits').hide();

    mission = 'MISSION SUCCESSFUL';
    desc = 'You have acquired control over this node and have access to its links';
    $('#node_proceed_btn').show();
    $('#node_cancel_btn').hide();
  }

  $('#node_company').html(node.company);
  $('#node_name').html(node.name);
  $('#node_level').html(node.level);
  $('#node_mission').html(mission);
  $('#node_desc').html(desc);
};

UI.NETMAP.NODE.draw = function(node) {
  var ctx = netmap.canvas.getContext('2d');

  var x = (node.x - netmap.windowX) * netmap.currentScale,
      y = (node.y - netmap.windowY) * netmap.currentScale,
      dx = Netmap.NODE_DX * netmap.currentScale,
      dy = Netmap.NODE_DY * netmap.currentScale;

  if (node.display) {
    if (node.locked) {
      ctx.fillStyle = 'silver';
      ctx.globalAlpha = 0.2;
      ctx.beginPath();
      ctx.moveTo(x, y - dy);  // Top point
      ctx.lineTo(x + dx, y);  // Right-most point
      ctx.lineTo(x, y + dy);  // Bottom
      ctx.lineTo(x - dx, y);  // Left-most point
      ctx.fill();
      ctx.globalAlpha = 1.0;
    } else {
      var shadowOffset = 5;

      // Draw a shadow for the node to give it depth
      ctx.fillStyle = "rgba(70, 97, 126, 0.8)"; // Shadow
      ctx.beginPath();
      ctx.moveTo(x, y + dy + shadowOffset); // Bottom point
      ctx.lineTo(x + dx, y + shadowOffset); // Right-most point
      ctx.lineTo(x + dx - shadowOffset, y + shadowOffset / Math.sqrt(2));  // Inside point on the right
      ctx.lineTo(x, y + dy);      // Bottom point of the node
      ctx.lineTo(x - dx + shadowOffset, y + shadowOffset / Math.sqrt(2));  // Inside point on the left
      ctx.lineTo(x - dx, y + shadowOffset); // Left-most point
      ctx.fill();

      // Draw the node
      ctx.fillStyle = "rgba(120, 143, 168, 0.7)";
      ctx.beginPath();
      ctx.moveTo(x, y - dy);  // Top point
      ctx.lineTo(x + dx, y);  // Right-most point
      ctx.lineTo(x, y + dy);  // Bottom
      ctx.lineTo(x - dx, y);  // Left-most point
      ctx.fill();

      // Outline the node and draw cross-hatch lines on it
      ctx.strokeStyle = "rgba(232, 250, 249, 0.7)";
      ctx.beginPath();
      ctx.moveTo(x, y - dy);  // Top point
      ctx.lineTo(x + dx, y);  // Right-most point
      ctx.lineTo(x, y + dy);  // Bottom
      ctx.lineTo(x - dx, y);  // Left-most point
      ctx.lineTo(x, y - dy);  // Top point
      ctx.stroke();

      var hypo = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
      var x1 = Math.cos(0.49) * hypo / 3;
      var y1 = Math.sin(0.49) * hypo / 3;

      ctx.beginPath();
      ctx.moveTo(x - x1, y + dy - y1);  // Bottom-left of bottom upward line
      ctx.lineTo(x + dx - x1, y - y1);  // Upper-right of bottom upward line
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(x - x1 * 2, y + dy - y1 * 2);  // Bottom-left of top upward line
      ctx.lineTo(x + dx - x1 * 2, y - y1 * 2);  // Upper-right of top upward line
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(x - dx + x1, y - y1);  // Upper-left of bottom downward line
      ctx.lineTo(x + x1, y + dy - y1);  // Lower-right of bottom downward line
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(x - dx + x1 * 2, y - y1 * 2);  // Upper-left of top downward line
      ctx.lineTo(x + x1 * 2, y + dy - y1 * 2);  // Lower-right of top downward line
      ctx.stroke();
    }
  }
};

UI.NETMAP.NODE.drawMapInfo = function(node) {
  var ctx = netmap.canvas.getContext('2d'),
      x = (node.x - netmap.windowX) * netmap.currentScale,
      y = (node.y - netmap.windowY) * netmap.currentScale,
      dx = Netmap.NODE_DX * netmap.currentScale,
      dy = Netmap.NODE_DY * netmap.currentScale;

  var font_size = 14;
  ctx.font = font_size + "px Arial";
  ctx.fillStyle = 'white';
  ctx.fillText(node.company, x + dx / 2, y + dy);
  ctx.fillText(node.name, x + dx / 2, y + dy + font_size);
  ctx.fillText('Level: ' + node.level, x + dx / 2, y + dy + font_size * 2);
};

UI.NETMAP.NODE.reveal = function(name) {
  var node = netmap.nodes[name];
  UI.NETMAP.scrollTo(node.x, node.y);
  
  // Delay revealing the node slightly to give the netmap time to scroll to it
  setTimeout(function(){
    node.reveal()
  }, 1000);
};


//---------------------------------
//******    Dialog System    ******
//---------------------------------

UI.DIALOG.loadDialog = function (dialog_key) {
  if (GAME_DATA.DIALOG.hasOwnProperty(dialog_key)) {
    $('#chat').show();
    
    // Save the dialog to the player's conversation history
    player.conversation_history.push(dialog_key);
    
    var data = GAME_DATA.DIALOG[dialog_key];

    // Load speaker's avatar
    $('#avatar').attr('src', GAME_DATA.CHARACTERS[data.speaker]);
    $('#username').html(data.speaker);
    $('#message').html(data.message);

    // If the message entry contains a function, execute it
    // IMPORTANT: Can be used to receive credits or software through conversation system
    if (data.hasOwnProperty('action')) {
      data.action();
    }

    if (data.responses.length > 0) {
      if (GAME_DATA.DIALOG[data.responses[0]].speaker === 'player') {
        // The speaker is addressing the player, present responses
        var index;
        var resp_html = '';

        for (var i in data.responses) {
          index = data.responses[i];

          resp_html += '<button class="response w3-btn-block w3-cerulean w3-text-white w3-border w3-border-grey w3-hover-cyan" value="'+ index + '">' + GAME_DATA.DIALOG[index]['message'] + '</button>';
        }

        $('#responses').html(resp_html);

        // Attach a click handler to each respone button
        $('.response').each(function(){
          $(this).click(function() {
            UI.DIALOG.respond(this.value);
          });
        });
      } else {
        // The speaker is address an NPC, clear the player's previous responses and load the NPC's dialog after a timeout
        $('#responses').html('');

        // Set a default timeout of 8 seconds
        if (!data.hasOwnProperty('timeout')) {
          data.timeout = settings.dialog_timeout;
        }

        // Wait to load the dialog so the player has chance to read the first message rather than the game automatically skipping forward to the next message
        setTimeout(function() {
          UI.DIALOG.loadDialog(data.responses[0]);
        }, data.timeout);
      }
    } else {
      log('Dialog - invalid response options (key: ' + dialog_key + ')', 'ERROR');
    }
  } else {
    log('Dialog - "' + dialog_key + '" is not a valid key', 'ERROR');
  }
}

UI.DIALOG.respond = function(dialog_key) {
  if (GAME_DATA.DIALOG.hasOwnProperty(dialog_key)) {
    // Save the dialog to the player's conversation history
    player.conversation_history.push(dialog_key);
    
    var response = GAME_DATA.DIALOG[dialog_key].responses[0];

    // If the message entry contains a function, execute it
    // IMPORTANT: Can be used to receive credits or software through conversation system
    if (GAME_DATA.DIALOG[dialog_key].hasOwnProperty('action')) {
      GAME_DATA.DIALOG[dialog_key].action();
    }

    // IMPORTANT: Negative responses are used to switch screens
    //  -1 -> showNetmap()
    //  -2 -> showStore()
    if (response === -1) {
      $('#chat').hide();
      UI.showNetmap();
    } else if (response === -2) {
      $('#chat').hide();
      UI.showStore();
    } else if (response === -3) {
      log('Dialog - "' + dialog_key + '" not implemented yet', 'INFO');
      $('#chat').hide();
      UI.showNetmap();
    } else {
      UI.DIALOG.loadDialog(response);
    }
  } else {
    log('Dialog - "' + dialog_key + '" is not a valid key', 'ERROR');
  }
}

//---------------------------------
//******       PLAYER        ******
//---------------------------------

UI.PLAYER.updateInventory = function() {
  var inventory = player.inventory;
  var inventory_html = '';

  for (var program in inventory) {
    if (inventory.hasOwnProperty(program)) {
      inventory_html += '<option value="' + program + '">' + program + ' (x' + inventory[program] + ')</option>';
    }
  }

  // Save the currently selected index, set to 0 if -1 (i.e. no option selected)
  var selected_index = $('#player_inventory')[0].selectedIndex;
  selected_index = (selected_index > 0) ? selected_index : 0;

  // If there are no more of the currently selected program in the inventory, select the next available program
  if (inventory[Object.keys(inventory)[selected_index]] < 1) {
    var i = 0;

    for (var program in inventory) {
      if (inventory[program] > 0) {
        selected_index = i;
        break;
      }
      i++;
    }
  }

  $('#player_inventory').html(inventory_html);
  $('#player_inventory')[0].selectedIndex = selected_index;
  UI.updateProgramInfo('player', new Program($('#player_inventory').val(), GAME_DATA));

  $('#credits').html(player.credits);
};

//---------------------------------
//******        SHOP         ******
//---------------------------------

UI.STORE.updateInventory = function() {
  // Load store inventory
  var store_invent_html = '';
  var disabled = '';

  for (var program_name in GAME_DATA.PROGRAMS) {
    if (GAME_DATA.PROGRAMS[program_name].level === netmap.selectedNode().level && GAME_DATA.PROGRAMS[program_name].cost > 0) {              // Skip reward and enemy programs
      // Populate store options, disabling the entry if the player doesn't have enough credits for the program
      disabled = (GAME_DATA.PROGRAMS[program_name].cost > player.credits) ? ' disabled' : '';
      store_invent_html += '<option value="' + program_name + '"' + disabled + '>' + program_name + ' (' + GAME_DATA.PROGRAMS[program_name].cost + ')</option>';
    }
  }

  // Save the currently selected index, set to 0 if -1 (i.e. no option selected)
  var selected_index = $('#store_inventory')[0].selectedIndex;
  selected_index = (selected_index > 0) ? selected_index : 0;

  $('#store_inventory').html(store_invent_html);
  $('#store_inventory')[0].selectedIndex = selected_index;
  UI.updateProgramInfo('store', new Program($('#store_inventory').val(), GAME_DATA));
};

UI.STORE.buyProgram = function() {
  var program_name = $('#store_inventory').val();
  
  if (typeof program_name !== 'undefined') {
    var cost = GAME_DATA.PROGRAMS[program_name].cost;

    // If player has enough credits, deduct the cost, add to player inventory, then update the player's inventory
    if (cost <= player.credits) {
      player.credits -= cost;
      player.addToInventory(program_name);
      UI.PLAYER.updateInventory();
      // Reload the store to update which programs are disabled due to lack of credits
      UI.STORE.updateInventory();
    }
  }
};

//---------------------------------
//******       BATTLE        ******
//---------------------------------

UI.BATTLE.loadBattle = function(battleID, level) {
  UI.showBattle();
  
  battle = new Battle(battleID, GAME_DATA, level);
  UI.BATTLE.draw(battle);
};

UI.BATTLE.displayResults = function() {
  if (battle.state === Battle.states.won) {
    $('#battle_result').html('<div class="w3-panel">DATABATTLE SUCCESFUL</div>' + 
      '<div class="w3-panel">MISSION CREDITS AWARDED: ' + battle.reward + '</div>' +
      '<div class="w3-panel">EXTRA CREDITS AWARDED: ' + battle.extra_credits + '</div>');
  } else {
    $('#battle_result').html('<div class="w3-panel">DATABATTLE FAILURE</div>' + 
      '<div class="w3-panel">CONNECTION TERMINATED...</div>');
  }
  $('#battle_result_popup').show();
  $('#battle_result_logout').focus();
};

UI.BATTLE.startBattle = function() {
  log('startBattle - Battle initiated', 'INFO');
  
  // Prevent player from starting if they haven't loaded any programs
  if (battle.activePlayer().programs.length === 0) {
    return;
  }
  
  $('.battle-ui').show();
  $('#program_list').hide();
  $('#upload').hide();
  $('#start_battle').hide();
  

  UI.BATTLE.returnProgramsToPlayerInventory();
  battle.start();
  
  UI.updateProgramInfo('player', battle.activePlayer().activeProgram());
  UI.BATTLE.draw(battle);
}

UI.BATTLE.returnProgramsToPlayerInventory = function() {
  battle.activePlayer().programs.forEach(function(program) {
    player.addToInventory(program.name);
  });
};

UI.BATTLE.targetAction = function(action_name) {
  if (typeof battle !== 'undefined' && typeof battle.activePlayer() !== 'undefined') {
    battle.activePlayer().activeProgram().setCurrentAction(action_name);
    UI.BATTLE.draw(battle);
  }
};

UI.BATTLE.draw = function(battle) {
  // Clear the screen
  bs_ctx.clearRect(0, 0, bs_canvas.width, bs_canvas.height);

  UI.BATTLE.MAP.draw(battle);
  
  for (var i = 0; i < battle.players.length; i++) {
    UI.BATTLE.PLAYER.drawPrograms(battle, battle.players[i]);
  }
  
  // Wait a little bit so that the markers get drawn over top of the program images
  setTimeout(function() {
    // Draw markers on top of everything else
    UI.BATTLE.PLAYER.drawProgramMarkers(battle, battle.activePlayer());
  }, 100);
};

UI.BATTLE.MAP.draw = function(battle) {
  var grid = battle.map.grid;
  var block;

  for (var y = 0; y < grid.length; y++) {
    for (var x = 0; x < grid[0].length; x++) {
      block = battle.map.block(x, y);
      
      if (typeof block !== 'undefined' && block.state !== GridBlock.states.no_block) {                    // Only draw a block if the coordinates specify a valid grid block
        var img_x = field_padding + x * (spacer + blockSize),
            img_y = field_padding + y * (spacer + blockSize);
      
        bs_ctx.fillStyle = 'silver';
        UI.BATTLE.MAP.drawGridSquare(x, y);
        
        switch(block.state) {
          case GridBlock.states.upload:
            UI.BATTLE.MAP.drawUploadPoint(img_x, img_y);
            break;
          
          case GridBlock.states.logs:
            UI.BATTLE.MAP.loadImage(img_x + 3, img_y + 3, 'images/ui/logs.gif');
            break;
            
          case GridBlock.states.credits:
            UI.BATTLE.MAP.loadImage(img_x + 8, img_y + 8, 'images/ui/credits.gif');
        }
      }
    }
  }
};

UI.BATTLE.MAP.drawGridSquare = function(x, y, noBlockIsValid) {
  if (battle.map.isValidBlock(x, y, noBlockIsValid)) {
    bs_ctx.globalAlpha = 0.7; // TODO: This gives a really cool effect but doesn't look right when the logs and credits don't have a transparent background

    var left_x = field_padding + x * (spacer + blockSize),
        top_y = field_padding + y * (spacer + blockSize);
    
    bs_ctx.fillRect(left_x, top_y, blockSize, blockSize);
  
    // Reset the alpha value
    bs_ctx.globalAlpha = 1.0;
  }
};

UI.BATTLE.MAP.drawUploadPoint = function(left_x, top_y) {
  bs_ctx.strokeStyle = 'white';
  bs_ctx.lineWidth = 2;
  
  for (var i = 2; i < 18; i += 4) {
    bs_ctx.strokeRect(left_x + i, top_y + i, blockSize - 2 * i, blockSize - 2 * i);
  }
  
  // Add the line in the left side
  line_y = top_y + blockSize / 2
  
  bs_ctx.strokeStyle = 'silver';
  bs_ctx.beginPath();
  bs_ctx.moveTo(left_x, line_y);
  bs_ctx.lineTo(left_x + blockSize / 2 - 4, line_y);
  bs_ctx.stroke();
};

UI.BATTLE.MAP.loadImage = function(left_x, top_y, img_path) {
  var img = new Image();
  img.src = img_path;
  img.onload = (function () {
    bs_ctx.drawImage(img, left_x, top_y);
  });
  
  return img;
};

UI.BATTLE.MAP.handleClick = function(evt) {
  var rect = bs_canvas.getBoundingClientRect(),
      x = Math.floor((evt.clientX - rect.left - field_padding) / (spacer + blockSize)),
      y = Math.floor((evt.clientY - rect.top - field_padding) / (spacer + blockSize));
  
  var current_action = 'upload';
  var sel_prog = battle.getProgramAt(x, y, false);
  
  if (typeof battle.activePlayer().activeProgram() !== 'undefined') {
    current_action = battle.activePlayer().activeProgram().current_action;
  }
  
  if (current_action === 'upload') {
    log('Upload at (' + x + ', ' + y + ')');
    
    // Set the current selected coordinates
    battle.map.setSelectedBlock(x, y);
  } else if (current_action === 'move' &&          // IMPORTANT: Only allow selecting another program during the movement phase or else an enemy program would be selected rather than attacked
            typeof sel_prog !== 'undefined' &&    // A program was selected
            (sel_prog.player_index !== battle.active_player_index || sel_prog.program_index !== battle.activePlayer().active_program_index)) {    // The selected program is not the active one
    battle.players[sel_prog.player_index].setActiveProgram(sel_prog.program_index);
    
    UI.updateProgramInfo('player', battle.players[sel_prog.player_index].activeProgram());
  } else {
    battle.activePlayer().activeProgram().performAction(x, y);
  }
  
  // Show results of move, action, or clear markers if another program was clicked on
  UI.BATTLE.draw(battle);
};

UI.BATTLE.PLAYER.upload = function(program_name) {
  if (player.has(program_name) && battle.activePlayer().upload(program_name, GAME_DATA)) {
    // Remove the program from the player's inventory
    player.removeFromInventory(program_name);
    UI.PLAYER.updateInventory();
    
    UI.BATTLE.draw(battle);
      
    // Select the next upload point; if it was the last upload point, start the battle
    if (!battle.map.selectUploadPoint()) {
      UI.BATTLE.startBattle();
    }
  }
};

UI.BATTLE.PLAYER.drawPrograms = function(battle, battlePlayer) {
  var program,
    img_x,
    img_y;
  
  // Loop through all the programs
  for (var j = 0; j < battlePlayer.programs.length; j++) {
    program = battlePlayer.programs[j];
    bs_ctx.fillStyle = program.color;
    
    // Loop through each block (tail to head)
    for (var i = 0; i < program.blocks.length; i++) {
      img_x = field_padding + program.blocks[i].x * (spacer + blockSize),
      img_y = field_padding + program.blocks[i].y * (spacer + blockSize);
      
      // Draw the program's icon on the last block
      if (i === program.blocks.length - 1) {
        UI.BATTLE.MAP.loadImage(img_x, img_y, program.image);
      } else {
        UI.BATTLE.MAP.drawGridSquare(program.blocks[i].x, program.blocks[i].y);
        UI.BATTLE.PLAYER.drawProgramConnector(program.blocks[i], program.blocks[i + 1]);
      }
    }
    
    // Draw checkmark over program icon (last block)
    if (program.action_performed) {
      UI.BATTLE.MAP.loadImage(img_x + 25, img_y - 3, 'images/ui/action_complete.gif');
    }
  }
};

UI.BATTLE.PLAYER.drawProgramConnector = function(p1, p2) {
  var x = field_padding,
      y = field_padding;
  
  if (p1.x === p2.x && p1.y > p2.y) {           // p2 is above p1
    x += p1.x * (spacer + blockSize) + (blockSize / 2) - (connectorWidth / 2);
    y += p1.y * (spacer + blockSize) - spacer;
    
    bs_ctx.fillRect(x, y, connectorWidth, spacer);
  } else if (p1.x < p2.x && p1.y === p2.y) {    // p2 is to the right of p1
  
    x += p1.x * (spacer + blockSize) + blockSize;
    y += p1.y * (spacer + blockSize) + (blockSize / 2) - (connectorWidth / 2);
    
    bs_ctx.fillRect(x, y, spacer, connectorWidth);
  } else if (p1.x === p2.x && p1.y < p2.y) {    // p2 is below p1
    x += p2.x * (spacer + blockSize) + (blockSize / 2) - (connectorWidth / 2);
    y += p2.y * (spacer + blockSize) - spacer;
    
    bs_ctx.fillRect(x, y, connectorWidth, spacer);
  } else if (p1.x > p2.x && p1.y === p2.y) {    // p2 is to the left of p1
    
    x += p2.x * (spacer + blockSize) + blockSize;
    y += p2.y * (spacer + blockSize) + (blockSize / 2) - (connectorWidth / 2);
    
    bs_ctx.fillRect(x, y, spacer, connectorWidth);
  }
}

UI.BATTLE.PLAYER.drawProgramMarkers = function(battle, battlePlayer) {
  var program = battlePlayer.activeProgram();
  
  if (typeof program !== 'undefined') {
    // Make the markers slightly transparent
    bs_ctx.globalAlpha = 0.35;
    
    var range,
        target;
    
    // Set the appropriate color
    if (program.current_action === 'move') {
      bs_ctx.fillStyle = 'cyan';
      range = program.movesRemaining();
    } else {
      range = program.actions[program.current_action].range + program.range_boost;
      target = program.actions[program.current_action].target;
      
      if (target === 'enemy') {
        bs_ctx.fillStyle = 'red';
      } else {
        bs_ctx.fillStyle = 'blue';
      }
    }
    
    var occupant;
    var prog_coord = program.head();
    var available_blocks = [];
    
    // Calculate the distance between the active program and nearby coordinates
    // If the distance is within the program's range, draw a marker
    // TODO: Could make this more efficient with the right algorithm
    for (var y = prog_coord.y - range; y <= prog_coord.y + range; y++) {
      for (var x = prog_coord.x - range; x <= prog_coord.x + range; x++) {
        // Prevent targeting the program itself
        if (x === prog_coord.x && y === prog_coord.y) {
          continue;
        }
        
        if (program.inRange(x, y, range)) {
          occupant = battle.getProgramAt(x, y);
          
          if (program.current_action === 'move') {
            // Prevent program from moving to occupied blocks, unless it is the one doing the occupying
            if (typeof occupant === 'undefined' || (occupant.player_index === battle.active_player_index && occupant.program_index === battlePlayer.active_program_index)) {
              available_blocks.push({'x': x, 'y': y});
            }
          } else {
            // Prevent program from targeting itself or program of the wrong target type
            if (typeof occupant === 'undefined' || 
               (occupant.team !== battle.activePlayer().team && target === 'enemy') ||
               (occupant.team === battle.activePlayer().team && target === 'ally')) {
              UI.BATTLE.MAP.drawGridSquare(x, y, battle.activePlayer().activeProgram().current_action === 'One'); // TODO: Find a better way to handle Bit-Man
            }
          }
        }
      }
    }
    
    // Filter available blocks by ones that can create a path <= range
    // Eliminates blocks that are blocked by the path of another program
    available_blocks = program.getAvailablePaths(available_blocks, range);
    
    for (var i = 0; i < available_blocks.length; i++) {
      UI.BATTLE.MAP.drawGridSquare(available_blocks[i].x, available_blocks[i].y);
    }
    
    // Reset the globalAlpha
    bs_ctx.globalAlpha = 1.0;
  }
};




















// Settings
var settings = {
  'map_pan': 'keyboard',        // 'mouse' or 'keyboard'
  'theme': 'dark',              // 'light' or 'dark'
  'zoom_enabled': false,
  'friendly_fire': false,
  'attack_empty_blocks': true,
  'dialog_timeout': 8000,
  'save_name': ''
  //'enemy_move_timeout': 800 // Number of ms to wait between enemy movements (figure out how to decouple so that the models aren't coupled to settings)
};


var netmap,
    player,
    battle;

var bs_canvas,
    bs_ctx;

    
// Controls the log level
var debug_level = 3;

// Used for drawing blocks on the battle grid
var spacer = 5,
    blockSize = 30,
    field_padding = 30,
    connectorWidth = 8;


$(document).ready(function() {
  bs_canvas = $('#battle_screen')[0];
  bs_ctx = bs_canvas.getContext('2d');

  player = new Player();
  netmap = new Netmap('netmap', GAME_DATA.NODES);
  setInterval(UI.NETMAP.draw, 10);
  
  // Autosave every minute
  setInterval(UI.CONTROLS.saveGame, 1000);

  UI.init();


  //---------------------------------
  //******   Event Listeners   ******
  //---------------------------------

  $('#splash_screen').click(function() {
    UI.showLoadScreen();
  });
  
  $('.new_game_btn').click(function() {
    settings.save_name = $(this).parent().attr('id');
    UI.showSpybotScreen();
  });
  
  $('.load_game_btn').click(function() {
    settings.save_name = $(this).parent().attr('id');
    UI.CONTROLS.loadGame();
  });
  
  $('.del_game_btn').click(function() {
    if (typeof localStorage !== 'undefined') {
      delete localStorage[$(this).parent().attr('id')];
      
      // Refresh the load screen
      UI.showLoadScreen();
    }
  });
  
  $('.spybot_profile').click(function() {
    player.spybot = $(this).data('spybot');
    UI.selectSpybot();
  });

  // ------
  // NETMAP
  // ------

  // Triggers scrolling behavior when the mouse gets a certain distance from the side of the bs_canvas
  $('#netmap').mousemove(function( event ) {
    var coord = netmap.getMouseCoord(event);
    netmap.setMouseCoord(coord);

    // Trigger scrolling behavior
    if (settings.map_pan === 'mouse') {
      UI.NETMAP.panHandler(coord);
    }
  });

  // Allows player to click on a node to select it
  $('#netmap').mousedown(function( event ) {
    UI.NETMAP.click();
  });

  // Binds WASD keypresses to move the map
  $(document).keypress(function(evt) {
    switch(evt.keyCode) {
      case 119:                 // W
        netmap.deltaY = -1;
        break
      case 97:                  // A
        netmap.deltaX = -1;
        break
      case 115:                 // S
        netmap.deltaY = 1;
        break
      case 100:                 // D
        netmap.deltaX = 1;
        break
    }
  });

  $(document).keyup(function(evt) {
    netmap.deltaX = 0;
    netmap.deltaY = 0;
  });

  // Add scroll listener to handle zoom
  var nm_canvas = $('#netmap')[0];
  nm_canvas.addEventListener("DOMMouseScroll", UI.NETMAP.scrollHandler, false);
  nm_canvas.addEventListener("mousewheel", UI.NETMAP.scrollHandler, false);


  // Node Info button
  $('#node_cancel_btn').click(function() {
    $('#node_info_popup').hide();
  });

  $('#node_databattle_btn').click(function() {
    $('#node_info_popup').hide();
    var node = netmap.selectedNode();
    UI.BATTLE.loadBattle(node.name, node.level);
  });

  $('#node_shop_btn').click(function() {
    $('#node_info_popup').hide();

    // Initiate a conversation with the shopkeeper
    UI.DIALOG.loadDialog(netmap.selectedNode().dialog_key);
  });

  $('#node_enter_smart_btn').click(function() {
    $('#node_info_popup').hide();
    $('#smart_hq_popup').show();
  });

  $('#smart_node_done').click(function() {
    $('#smart_hq_popup').hide();
  });


  // -----------------
  // STORE / INVENTORY
  // -----------------

  $('#player_inventory').change(function() {
    UI.updateProgramInfo('player', new Program($('#player_inventory').val(), GAME_DATA));
  });

  $('#store_inventory').change(function() {
    UI.updateProgramInfo('store', new Program($('#store_inventory').val(), GAME_DATA));
  });

  $('#store_buy').click(function() {
    UI.STORE.buyProgram(player, netmap, GAME_DATA);
  });

  $('#store_done').click(function() {
    $('#store').hide();
  });


  // -------------
  // BATTLE SCREEN
  // -------------

  $('#battle_screen').mousedown(function( event ) {
    UI.BATTLE.MAP.handleClick(event);
  });

  $('#upload').click(function() {
    UI.BATTLE.PLAYER.upload($('#player_inventory').val());
  });

  $('#start_battle').click(function() {
    UI.BATTLE.startBattle();
  });

  $('#undo').click(function() {
    battle.activePlayer().activeProgram().undo();
    UI.BATTLE.draw(battle);
  });
  
  // Listen for AI enemy movement triggering a re-draw
  $(document).on('drawBattle', function(event) {
    UI.BATTLE.draw(battle);
  });
  
  $(document).on('changeActiveProgram', function(event) {
    UI.updateProgramInfo('player', battle.activePlayer().activeProgram());
  });

  $('#log_out').click(function() {
    // TODO: Popup a confirm box
    // TODO: Does player get to keep any extra credits they collected?
    UI.showNetmap();
  });
  
  $(document).on('battle_over', function(event) {
    UI.BATTLE.displayResults();
  });

  $('#battle_result_logout').click(function() {
    // Return to the netmap
    UI.showNetmap();

    // IMPORTANT: Need to do this after the battle_result_popup is hidden and UI.showNetmap() is called in case the function triggers a conversation
    if (battle.state === Battle.states.won) {
      // Award player the credits they earned and update the UI
      player.receiveCredits(battle.reward + battle.extra_credits);
    
      if (typeof battle.victory_callback !== 'undefined') {
        // Execute victory function and enjoy the spoils of war
        battle.victory_callback();
        
        // Clear the action_success function so it doesn't trigger every time you replay the battle
        GAME_DATA.BATTLES[battle.id].action_success = function(){};
      }
    } else if (battle.state === Battle.states.lost && typeof battle.failure_callback !== 'undefined') {
      // Execute failure function
      battle.failure_callback();
      
      // Clear the action_failure function so it doesn't trigger every time you replay the battle
      GAME_DATA.BATTLES[battle.id].action_failure = function(){};
    }
  });

  //---------------------------------
  //******    UI Functions     ******
  //---------------------------------

  $(document).on('updatePlayerUI', function(event) {
    UI.PLAYER.updateInventory();
  });
  
  $(document).on('play_audio', function(event, sound) {
    UI.AUDIO.CLIPS[sound].play();
  });
  
  // Stop an audio track and rewind to the beginning
  $(document).on('stop_audio', function(event, sound) {
    UI.AUDIO.CLIPS[sound].pause();
    UI.AUDIO.CLIPS[sound].currentTime = 0;
  });
  
  $('button').click(function() {
    $( document).trigger( "play_audio", ['chirp'] );
  });
  
  // --------
  // SETTINGS
  // --------

  $('#settings_btn').click(function() {
    $('#settings').show();
  });

  $('#settings_theme').change(function() {
    settings.theme = $('#settings_theme').val();
    UI.loadTheme();
  });

  $('#settings_map_pan').change(function() {
    settings.map_pan = $('#settings_map_pan').val();
  });

  $('#settings_zoom').change(function() {
    settings.zoom_enabled = $('#settings_zoom').is(':checked');
  });

  $('#settings_zoom_reset').click(function() {
    netmap.currentScale = 1;
  });

  $('#settings_friendly_fire').change(function() {
    settings.friendly_fire = $('#settings_friendly_fire').is(':checked');
  });
});





  










//---------------------------------
//******      Utilities      ******
//---------------------------------

function log(msg, level = 'INFO') {
  level = level.toUpperCase();
  var debug_levels = ['FATAL', 'ERROR', 'WARN', 'INFO', 'DEBUG', 'TRACE'];

  // TODO: add color to different levels of messages
  // EX: console.log('%cstring 1' + '%cstring 2', 'CSS for string 1', 'CSS for string 2');

  if (debug_levels.indexOf(level) <= debug_level) {
    console.log(level + ': ' + msg);
  }
}

function reveal_all() {
  Object.keys(netmap.nodes).forEach(function(key){netmap.nodes[key].reveal()})
}

function unlock_all() {
  Object.keys(netmap.nodes).forEach(function(key){netmap.nodes[key].unlock()})
}

function auto_win() {
  UI.BATTLE.PLAYER.upload('Hack');
  battle.start();
  //battle.players[1].programs = [];
  battle.logs_remaining = 0;
  battle.isOver();
  player.addToInventory('Hack');
}

function showConversation() {
  var conv_history = [];
  
  player.conversation_history.forEach(function(dialog_key) {
    var entry = GAME_DATA.DIALOG[dialog_key]
    conv_history.push({'speaker': entry.speaker, 'message': entry.message});
  });
  
  return conv_history;
}


var old_blocks;

var old_state = {};


function undo_save() {
  var program = battle.activePlayer().activeProgram();
  
  old_state = {};
  old_state.current_action = program.current_action;
  old_state.moves_made = program.moves_made;
  old_state.curr_size = program.curr_size;
  old_state.blocks = jQuery.extend(true, [], program.blocks);
}


function undo() {
  battle.activePlayer().activeProgram().undo();
  UI.BATTLE.draw(battle);
}

function undo2() {
  var program = battle.activePlayer().activeProgram();
  
  program.current_action = old_state.current_action;
  program.moves_made = old_state.moves_made;
  program.curr_size = old_state.curr_size;
  program.blocks = old_state.blocks;
  UI.BATTLE.draw(battle);
}








