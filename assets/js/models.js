//=================================
//******       Models        ******
//=================================

//---------------------------------
//******       Player        ******
//---------------------------------
function Player(obj = {'spybot': 'Technojaw T55', 'credits': 1000, 'inventory': { 'Hack': 1, 'Slingshot': 1}, 'level': 1}) {
  this.spybot = obj.spybot;
  this.credits = obj.credits;
  this.inventory = obj.inventory;
  this.level = obj.level;
  this.conversation_history = []
};

Player.prototype.has = function(program_name) {
  return (this.inventory.hasOwnProperty(program_name) && this.inventory[program_name] > 0);
};

Player.prototype.receiveCredits = function(credits) {
  player.credits += credits;
  $(document).trigger('updatePlayerUI');
};
  
Player.prototype.addToInventory = function(program_name) {
  if (this.inventory.hasOwnProperty(program_name)) {
    this.inventory[program_name]++;
  } else {
    this.inventory[program_name] = 1;
  }
  
  $(document).trigger('updatePlayerUI');
  
  return true;
};

Player.prototype.removeFromInventory = function(program_name) {
  if (this.inventory.hasOwnProperty(program_name) && this.inventory[program_name] > 0) {
    this.inventory[program_name]--;
    $(document).trigger('updatePlayerUI');
    return true;
  }
  
  return false;
};




//---------------------------------
//******       Netmap        ******
//---------------------------------

function Netmap(canvas_id, node_data) {
  this.canvas = $('#' + canvas_id)[0];
  this.nodes = {};
  this.mouseX = 0;
  this.mouseY = 0;
  this.windowX = 0;
  this.windowY = 0;
  this.deltaX = 0;
  this.deltaY = 0;
  this.currentScale = 1;
  this.selected_node_name = -1;
  
  var node;
  for (var index in node_data) {
    node = node_data[index];
    this.nodes[node.name] = new Node(node, this.canvas);
  }
}

// Netmap panning
Netmap.PAN_STEP = 5;
Netmap.PAN_THRESHOLD = 50;

// Netmap zoom
Netmap.MIN_SCALE = .6;
Netmap.MAX_SCALE = 3;
Netmap.SCALE_INCREMENT = .1;

// Node offsets (used to draw a custom shape based on a single center point)
Netmap.NODE_DX = 60;
Netmap.NODE_DY = 32;

Netmap.prototype.changeScale = function(deltaScale) {
  var newScale = this.currentScale + deltaScale;
  
  if (newScale > Netmap.MIN_SCALE && newScale < Netmap.MAX_SCALE) {
    this.currentScale = newScale;
  }
};

// Return the mouse coordinates normalized on the netmap
Netmap.prototype.getMouseCoord = function(event) {
  var rect = this.canvas.getBoundingClientRect();
  
  return {
    'x': event.clientX - rect.left,
    'y': event.clientY - rect.top
  }
};

// Normalize the mouse coordinates to coordinates on the netmap and save them
Netmap.prototype.setMouseCoord = function(coord) {
  this.mouseX = coord.x;
  this.mouseY = coord.y;
};
  
// Determines which node is located under the mouse and saves it as the current node
/*
Netmap.prototype.selectNode = function() {
  var node,
      dist,
      x,
      y
      dx = Netmap.NODE_DX * this.currentScale,
      dy = Netmap.NODE_DY * this.currentScale;
  
  for (var id in this.nodes) {
    node = this.nodes[id];
    
    x = Math.abs(node.x - this.windowX) * this.currentScale;
    y = Math.abs(node.y - this.windowY) * this.currentScale;
    
    dist = Math.sqrt(Math.pow(this.mouseX - x, 2) + Math.pow(this.mouseY - y, 2));
    
    if (dist < Math.min(dx, dy)) {
      this.selected_node_name = id;
      return
    }
  }
  
  // Clears the currently selected node
  this.selected_node_name = -1;
};

Netmap.prototype.currentNode = function() {
  if (this.selected_node_name !== -1) {
    return this.nodes[this.selected_node_name];
  }
};
*/

Netmap.prototype.currentNode = function() {
  var node,
      dist,
      x,
      y
      dx = Netmap.NODE_DX * this.currentScale,
      dy = Netmap.NODE_DY * this.currentScale;
  
  for (var id in this.nodes) {
    node = this.nodes[id];
    
    x = Math.abs(node.x - this.windowX) * this.currentScale;
    y = Math.abs(node.y - this.windowY) * this.currentScale;
    
    dist = Math.sqrt(Math.pow(this.mouseX - x, 2) + Math.pow(this.mouseY - y, 2));
    
    if (dist < Math.min(dx, dy)) {
      return node;
    }
  }
};

Netmap.prototype.click = function() {
  var node = this.currentNode();
  
  log('Node: ' + JSON.stringify(node), 'TRACE');
  
  if (typeof node !== 'undefined' && node.display) {
    // Record the name of the clicked node 
    this.selected_node_name = node.name;
    return true;
  }
  
  return false;
};

// Returns the last clicked node object
Netmap.prototype.selectedNode = function() {
  if (this.nodes.hasOwnProperty(this.selected_node_name)) {
    return this.nodes[this.selected_node_name];
  }
};

// Reveals the specified node
Netmap.prototype.reveal = function(node_name) {
  this.nodes[node_name].reveal();
};

  
  
  
//-------------------------------
//******       Node        ******
//-------------------------------

function Node(node, canvas) {
  this.company = node.company;
  this.name = node.name;
  this.desc = node.desc;
  this.level = node.level;
  this.canvas = canvas;
  this.type = node.type;
  
  // For battles: contains the post-battle dialog (eliminates the need to trigger dialog via the action function) - ?
  // For stores: contains the shopkeeper's dialog; plays before the player accesses the store
  if (node.hasOwnProperty('dialog_key')) {
    this.dialog_key = node.dialog_key;
  }
  
  this.locked = node.locked;
  this.display = !node.locked; // Nodes should be hidden until they are unlocked or revealed by an NPC
  this.x = node.x;
  this.y = node.y;
}

Node.prototype.reveal = function() {
  this.display = true;
  return true;
};

Node.prototype.unlock = function() {
  this.reveal();
  this.locked = false;
  return true;
};




//---------------------------------
//******       Battle        ******
//---------------------------------

// Takes a Battle data object, plus list of players...
function Battle(battleID, gameData, level) {
  // Make a copy of gameData so that it doesn't modify the original
  var battle = jQuery.extend(true, {}, gameData.BATTLES[battleID]);
  
  this.id = battleID;
  this.state = Battle.states.setup;
  this.map = new Map(battle.grid, level);
  this.reward = battle.reward;
  this.victory_callback = battle.action_success;
  this.failure_callback = battle.action_failure;
  this.logs_remaining = this.map.count('logs');
  this.extra_credits = 0;
  this.active_player_index = 0;
  this.players = [];
  
  // Reset to -1 if there are no logs in order to differentiate from having all the logs collected
  if (this.logs_remaining === 0) {
    this.logs_remaining = -1;
  }
  
  var programs = [],
      battle_obj = this;
  
  if (typeof battle.player_programs !== 'undefined') {
    battle.player_programs.forEach(function(program) {
      programs.push(new Program(program.name, gameData, program.blocks, battle_obj));
    });
  }
  
  // Initialize list of battle players
  this.players.push(new BattlePlayer({
    'type': 'human',
    'team': this.players.length,
    'programs': programs
  }, this));
  
  programs = [];
  
  battle.programs.forEach(function(program) {
    programs.push(new Program(program.name, gameData, program.blocks, battle_obj));
  });
  
  this.players.push(new BattlePlayer({
    'type': 'ai',
    'team': this.players.length,
    'programs': programs
  }, this));
};

Battle.states = {
  'setup': 0,
  'in_progress': 1,
  'won': 2,
  'lost': 3
};

Battle.timeouts = {
  'ai_turn_delay': 500,
  'ai_action_delay': 600
};


Battle.MIN_BASE_CREDITS = 250;
Battle.MAX_BASE_CREDITS = 500;

Battle.prototype.start = function() {
  this.state = Battle.states.in_progress;
  this.map.clearUploadPoints();
  this.activePlayer().startTurn();
};

Battle.prototype.activePlayer = function() {
  return this.players[this.active_player_index];
};

Battle.prototype.isTurnComplete = function() {
  var active_player = this.activePlayer();
  
  if (active_player.isTurnComplete()) {
    this.nextPlayer();
    return true;
  }
  
  return false;
};

Battle.prototype.nextPlayer = function() {
  this.active_player_index = (this.active_player_index + 1) % this.players.length;
  this.activePlayer().startTurn();
};

Battle.prototype.isOver = function() {
  if (this.logs_remaining > -1) {
    // This must be a separate IF so that the game will not end when all the enemies are gone if there are still logs to collect
    if (this.logs_remaining === 0) {
      return this.triggerGameOver();
    }
  } else {
    var programs_remaining = 0;
    
    for (var i = 0; i < this.players.length; i++) {
      // Skip the current player's team
      if (this.players[i].team !== this.activePlayer().team) {
        programs_remaining += this.players[i].numRemainingPrograms();
      }
    }
    
    // If all programs belonging to opposing team(s) have been defeated, the battle is over
    if (programs_remaining === 0) {
      return this.triggerGameOver();
    }
  }
  
  return false;
};

Battle.prototype.triggerGameOver = function() {
  this.winner_index = this.active_player_index;
  
  if (this.activePlayer().type === 'human') {
    this.state = Battle.states.won;
  } else {
    this.state = Battle.states.lost;
  }
  
  // Trigger an event to alert the controller that the battle is over
  $(document).trigger('battle_over');
  return true;
};

Battle.prototype.getProgramAt = function(x, y, includeTail = true) {
  var prog_index;
  
  // Loop through all players' programs and return the player and program located at the given coordinates
  for (var i = 0; i < this.players.length; i++) {
    prog_index = this.players[i].indexOfProgramAt(x, y, includeTail);
    
    if (prog_index > -1) {
      return {'team': this.players[i].team, 'player_index': i, 'program_index': prog_index};
    }
  }
};

  
  
  
//------------------------------
//******       Map        ******
//------------------------------

function Map(grid, level) {
  this.grid = [];
  
  for (var y = 0; y < grid.length; y++) {
    this.grid.push([]);
    
    for (var x = 0; x < grid[0].length; x++) {
      this.grid[y].push(new GridBlock(grid[y][x], level));
    }
  }
  
  // Set the first upload point as the selected block
  this.selectUploadPoint();
};


// Automatically selects the next available upload point; returns true if successful and false if no upload points remain
Map.prototype.selectUploadPoint = function() {
  for (var y = 0; y < this.grid.length; y++) {
    for (var x = 0; x < this.grid[0].length; x++) {
      if (this.grid[y][x].contains('upload')) {
        this.setSelectedBlock(x, y);
        return true;
      }
    }
  }
  
  return false;
};

Map.prototype.clearUploadPoints = function() {
  this.grid.forEach(function(row) {
    row.forEach(function(block) {
      if (block.contains('upload')) {
        block.setState('normal');
      }
    });
  });
};

// Set the block at the given (X, Y) coordinates as the selected block, if it exists
Map.prototype.setSelectedBlock = function(x, y) {
  if (this.isValidBlock(x, y)) {
    this.selected_block = {'x': x, 'y': y};
  }
};

Map.prototype.selectedGridBlock = function() {
  return this.grid[this.selected_block.y][this.selected_block.x];
};

// Create a new normal block at the given (X, Y) coordinates, if they are within the ranges of the battlefield and the grid space is currently empty
Map.prototype.createBlock = function(x, y) {
  if (this.isValidBlock(x, y, true) && this.grid[y][x].state === GridBlock.states.no_block) {
    this.grid[y][x].setState('normal');
    return true;
  }
  
  return false;
};

// Destroy the block at the given (X, Y) coordinates, if it is a normal block (e.g. not empty, no credits, logs, etc)
Map.prototype.destroyBlock = function(x, y) {
  if (this.isValidBlock(x, y) && this.grid[y][x].state === GridBlock.states.normal) {
    this.grid[y][x].setState('no_block');
    return true;
  }
  
  return false;
};

// Returns the block at the given (X, Y) coordinates, if it exists
Map.prototype.block = function(x, y) {
  if (this.isValidBlock(x, y)) {
    return this.grid[y][x];
  }
};

// Count how many of the given object exist on the map (e.g. logs, credits, etc)
Map.prototype.count = function(obj) {
  var count = 0;

  this.grid.forEach(function(row) {
    row.forEach(function(block) {
      if (block.contains(obj)) {
        count++;
      }
    });
  });
  
  return count;
};

Map.prototype.isValidBlock = function(x, y, noBlockIsValid = false) {
  return ((x >= 0 && x < this.grid[0].length) &&
          (y >= 0 && y < this.grid.length) && 
          ((this.grid[y][x].state !== GridBlock.states.no_block) || noBlockIsValid));
};




//------------------------------------
//******       GridBlock        ******
//------------------------------------

function GridBlock(state, level) {
  this.state = state;
  
  // Increase the range of credits based on the level of the battle
  this.min_credits = Battle.MIN_BASE_CREDITS + 125 * (level - 1);
  this.max_credits = Battle.MAX_BASE_CREDITS + 250 * (level - 1);
};

GridBlock.states = {'no_block': 0, 'normal': 1, 'upload': 2, 'logs': 3, 'credits': 4};

GridBlock.prototype.contains = function(obj) {
  return (this.state === GridBlock.states[obj]);
};

GridBlock.prototype.credits = function() {
  var min_credits = this.min_credits / 10;
  var max_credits = this.max_credits / 10;

  // Generate a random amount between minCredits and max_credits (rounded to the nearest 10)
  var credits = Math.ceil(Math.random() * (max_credits - min_credits) + min_credits) * 10;

  return this.contains('credits') ? credits : 0;
}

GridBlock.prototype.setState = function(state) {
  this.state = GridBlock.states[state];
}




//---------------------------------------
//******       BattlePlayer        ******
//---------------------------------------

function BattlePlayer(obj, battle) {
  this.battle = battle;           // Keep a reference to the battle to which this player belongs
  this.type = obj.type;           // 'human' or 'ai'
  this.team = obj.team;           // Define teams to prevent friendly_fire between teammates
  this.programs = obj.programs;   // List of program objects
  
  // Initialize a link back to the player who owns the program (so each program can remove itself from the player's inventory - see "shrinkTo")
  for (var i = 0; i < this.programs.length; i++) {
    this.programs[i].owner = this;
  }
}

BattlePlayer.prototype.upload = function(programName, gameData) {
  var block = this.battle.map.selected_block;
  
  // Ensure the selected location is an upload point
  if (this.battle.map.selectedGridBlock().state === GridBlock.states.upload) {
    var prog = new Program(programName, gameData, [{'x': block.x, 'y': block.y}], this.battle);
    prog.owner = this;
    
    // Add the selected program to the player's list of program and clear the upload point
    this.programs.push(prog);
    this.battle.map.block(block.x, block.y).setState('normal');
    return true;
  }
  
  return false;
};

BattlePlayer.prototype.startTurn = function() {
  this.programs.forEach(function(program) {
    program.resetTurn();
  });
  
  this.setActiveProgram(0);
  
  // This the player is an AI, call the AI turn function
  if (this.type === 'ai') {
    var battle_player = this;
    setTimeout(function() {battle_player.aiTurn();}, Battle.timeouts.ai_turn_delay);
  } else {
    // Redraw the battle when the enemy's turn is over to show the player's movement indicators 
    $(document).trigger('drawBattle');
  }
};

BattlePlayer.prototype.activeProgram = function() {
  return this.programs[this.active_program_index];
};

BattlePlayer.prototype.setActiveProgram = function(index) {
  this.active_program_index = index;
  
  // Trigger an event that causes the UI to update program info
  $(document).trigger('changeActiveProgram');
};

// Returns the index of the program at (x, y); returns -1 if no program is located at those coordinates
// Optional 'includeTail' parameter, specifies whether to include the tail as part of the program or simply look at the "head" of the program
BattlePlayer.prototype.indexOfProgramAt = function(x, y, includeTail = true) {
  for (var i = 0; i < this.programs.length; i++) {
    if (this.programs[i].indexOfBlockAt(x, y, includeTail) > -1) {
      return i;
    }
  }
  
  return -1;
};

BattlePlayer.prototype.aiTurn = function() {
  var program = this.battle.activePlayer().activeProgram();

  // IMPORTANT: Check whether battle is still going to prevent an error caused by trying to find a path to programs that no longer exist after the AI wins
  if (typeof program !== 'undefined' && this.battle.state === Battle.states.in_progress) {
    path = program.findNearestEnemy();
    
    if (typeof path === 'undefined') {
      path = [];
    }
    
    max_moves = Math.min(program.movement_speed, path.length - 1);
    program.aiTurn(path, 0, max_moves);
    
    /*} else {
      // Current program can't move, setTurnComplete, advance to next program (if applicable)
      program.
      
      var last_program = (program.battle.activePlayer().active_program_index === program.battle.activePlayer().programs.length - 1);

      if (last_program
      
      program.battle.activePlayer().active_program_index++;
      }
    }
    
    // If the current program isn't the last, invoke the next program's turn
    if (!last_program) {
      program.battle.activePlayer().aiTurn(program.battle);
    }
    */
  } else {
    // If program is undefined, check whether turn is over (and implicitly move on to next player), this case will occur when the player defeats all the enemy programs but hasn't collected the logs yet
    this.battle.isTurnComplete();
  }
};

// Checks whether or not the player has completed their turn
// If not, it sets the first program with remaining actions as the active program
BattlePlayer.prototype.isTurnComplete = function() {
  // If there is no active program, the player has no programs and their turn is over
  if (typeof this.activeProgram() === 'undefined') {
    return true;
  }
  
  if (this.activeProgram().isTurnComplete()) {
    var program;
    
    for (var i = 0; i < this.programs.length; i++) {
      program = this.programs[i];
      
      if (!program.isTurnComplete()) {
        this.setActiveProgram(i);
        return false;
      }
    }
    
    return true;
  }
  
  return false;
};

BattlePlayer.prototype.numRemainingPrograms = function() {
  return this.programs.length;
};




//----------------------------------
//******       Program        ******
//----------------------------------

function Program(programName, gameData, blocks = [], battle = {}) {
  // Make a copy of gameData so that it doesn't modify the original
  var program_data = jQuery.extend(true, {}, gameData.PROGRAMS[programName]);
  
  this.battle = battle;
  this.name = programName;
  this.desc = program_data.desc;
  this.image = program_data.image;
  this.color = program_data.color;
  this.movement_speed = program_data.movement_speed;
  this.max_size = program_data.max_size;
  this.curr_size = blocks.length;
  this.blocks = blocks;
  this.level = program_data.level;
  this.cost = program_data.cost;
  this.range_boost = 0;
  this.damage_boost = 0;
  this.actions = {}
  
  for (var action_name in program_data.actions) {
    this.actions[action_name] = new Action(action_name, program_data.actions[action_name]);
  }
  
  this.resetTurn();
};

Program.prototype.resetTurn = function() {
  this.setCurrentAction('move');
  this.moves_made = 0;
  this.action_performed = false;
  
  // Save the current state so you can 'undo' the current turn
  this.orig_state = {};
  this.orig_state.curr_size = this.curr_size;
  this.orig_state.blocks = jQuery.extend(true, [], this.blocks);
};

Program.prototype.undo = function() {
  this.setCurrentAction('move');
  this.moves_made = 0;
  this.curr_size = this.orig_state.curr_size;
  this.blocks = jQuery.extend(true, [], this.orig_state.blocks);
};
  
Program.prototype.setCurrentAction = function(action_name) {
  this.current_action = action_name;
  
  if (action_name === 'no_action') {
    this.setTurnComplete();
    this.battle.isTurnComplete();
  }
};

// Breadth-first search
Program.prototype.findNearestEnemy = function() {
  var battle = this.battle;
  var head = this.head();
  var pn, node;
  var q = [];
  var visited_nodes = [];

  function visit(pn) {
    q.push(pn);
    visited_nodes.push(pn.toString());
  }
  
  // Returns true if there is a program at the specified coordinates that belongs to another team
  function enemyProgramAt(x, y) {
    var prog = battle.getProgramAt(x, y, true);
    return (typeof prog !== 'undefined' && (prog.team !== battle.activePlayer().team));
  }
  
  //-------------------------------------------------------

  function PathNode(x, y, parent = undefined) {
    this.x = x;
    this.y = y;
    this.parent = parent;
  }
  
  // Check whether the specified coordinates are within the bounds of the map grid
  PathNode.prototype.inBounds = function() {
    return (this.x >= 0 && this.x < battle.map.grid[0].length && this.y >= 0 && this.y < battle.map.grid.length);
  };
  
  // Programs can only move to 'normal' blocks
  PathNode.prototype.normalBlock = function() {
    return (battle.map.grid[this.y][this.x].state === GridBlock.states.normal);
  };
  
  // Returns true if there is a program at the specified location and it's not the active program
  PathNode.prototype.occupied = function() {
    var prog = battle.getProgramAt(this.x, this.y, true);
    return (typeof prog !== 'undefined' && (prog.player_index !== battle.active_player_index || prog.program_index !== battle.activePlayer().active_program_index));
  };
    
  PathNode.prototype.valid = function() {
    return this.inBounds() && this.normalBlock() && !this.occupied();
  };
  
  PathNode.prototype.visited = function() {
    return (visited_nodes.indexOf(this.toString()) > -1);
  };
  
  PathNode.prototype.toString = function() {
    return this.x + ',' + this.y;
  };
  
  // Follow the chain backwards to construct the path
  PathNode.prototype.getPath = function() {
    var path = [],
        pn = this;
    
    while(typeof pn.parent !== 'undefined') {
      // Prepend node to path in order to reverse
      path.unshift([pn.x, pn.y]);
      pn = pn.parent;
    }
    
    return path;
  };
  
  //-------------------------------------------------------
  // Breadth-first search
  
  visit(new PathNode(head.x, head.y));
  
  while(q.length > 0) {
    pn = q.shift();
      
    // Search each of the adjacent blocks (right, up, left, down)
    var blocks = [
      [pn.x + 1, pn.y],
      [pn.x, pn.y + 1],
      [pn.x - 1, pn.y],
      [pn.x, pn.y - 1]
    ];
    
    for (var i = 0; i < blocks.length; i++) {
      node = new PathNode(blocks[i][0], blocks[i][1], pn);
      
      if (enemyProgramAt(node.x, node.y)) {
        // Enemy program found, reverse and return path
        // IMPORTANT Return 'pn' because that is the last empty block before the enemy is encountered at 'node'
        return node.getPath(); 
      }
    
      if (node.valid() && !node.visited()) {
        visit(node);
      }
    }
  }
};

Program.prototype.aiTurn = function(path, num_moves, max_moves) {
  var program = this;
  
  if (num_moves < max_moves) {
    program.move(path[num_moves][0], path[num_moves][1], false);
    $(document).trigger('drawBattle');
    
    // Delay next movement or action so that enemy moves aren't instantaneous
    setTimeout(function() {
      program.aiTurn(path, num_moves + 1, max_moves);
    }, Battle.timeouts.ai_action_delay);
  } else {
    // Done moving, perform action
    var range = program.actions[program.defaultAction()].range + program.range_boost;
    var last_program = (program.battle.activePlayer().active_program_index === program.battle.activePlayer().programs.length - 1);
  
    // If the program moved into range, attack; otherwise, end program's turn
    if (path.length > 0 && range >= path.length - program.movement_speed) {
      // If an enemy is in range, attack it
      program.setCurrentAction(program.defaultAction());
      
      var x = path[path.length - 1][0];
      var y = path[path.length - 1][1];
      
      // IMPORTANT: If this is the player's last program, calling performAction will advance to the next player, if not, it will advance to the player's next program
      // It will also automatically check if the game is over
      program.performAction(x, y);
    } else {
      // No enemy is in range; no_action
      program.setTurnComplete();
      
      if (last_program) {
        
        // IMPORTANT: The AI player's last program is done, advance to the next player's turn
        program.battle.nextPlayer();
      } else {
        // The current program is done with its turn, if it isn't the last, advance to the next program
        program.battle.activePlayer().active_program_index++;
      }
    }
    
    // If the current program isn't the last, invoke the next program's turn
    if (!last_program) {
      program.battle.activePlayer().aiTurn(program.battle);
    }
  }
};

// Basically uses a shortest path algorithm to find all possible paths and filter them by distance
Program.prototype.getAvailablePaths = function(available_blocks, range) {
  var coord = this.head();
  var paths = {};
  
  var addPath = function(block, dist) {
    paths[block.x + ',' + block.y] = {
      'dist': dist,
      'block': block
    };
  };
  var getDist = function(block) {
    return paths[block.x + ',' + block.y].dist;
  };
  
  // Returns whether or not two points are adjacent to each other
  var getAdjacency = function(p1, p2) {
    if (p1.x === p2.x) {
      if (p1.y === p2.y + 1) {            // Above
        return 0;
      } else if (p1.y === p2.y - 1) {     // Below
        return 3;
      }
    } else if (p1.y === p2.y) {
      if (p1.x === p2.x - 1) {            // Right
        return 1;
      } else if (p1.x === p2.x + 1) {     // Left
        return 3;
      }
    }
    
    // Blocks are not adjacent
    return -1;
  };
  
  addPath(coord, 0);
  
  var connected_blocks = [coord];
  
  for (var i = 0; i < connected_blocks.length; i++) {
    for (var j = 0; j < available_blocks.length; j++) {
      if (getAdjacency(connected_blocks[i], available_blocks[j]) > -1) {
        connected_blocks.push(available_blocks[j]);
        
        addPath(available_blocks[j], getDist(connected_blocks[i]) + 1);
        
        
        available_blocks.splice(j, 1);
        // We removed index j, so everything after it shifted, decrement j so we don't skip any elements
        j--;
      }
    }
  }
  
  available_blocks = [];
  
  for (var path in paths) {
    if (paths[path].dist > 0 && paths[path].dist <= range) {
      available_blocks.push(paths[path].block);
    }
  }
  
  return available_blocks;
};

// Perform current_action on target (x, y)
Program.prototype.performAction = function(x, y) {
  var target = this.battle.getProgramAt(x, y, true);
  var occupied = (typeof target !== 'undefined');
    
  if (this.current_action === 'move') {
    if (!this.battle.map.isValidBlock(x, y) ||                                                                      // If the block is out of range, non-existant, or
        (this.battle.activePlayer().type === 'ai' && this.battle.map.block(x, y) !== GridBlock.states.normal)) {   // The current player is an AI and the selected block contains logs or credits
      return false;
    }
    
    if (!occupied || (target.player_index === battle.active_player_index && target.program_index === battle.activePlayer().active_program_index)) {    // The block is not occupied or occipied by the current program
      this.move(x, y, occupied);
    }
  } else {
    var action = this.actions[this.current_action];
    var range = action.range + this.range_boost;
    
    if (this.inRange(x, y, range)) {
      if (typeof target !== 'undefined') {
        var target_player = this.battle.players[target.player_index];
        var target_prog = target_player.programs[target.program_index];

        if (settings.friendly_fire ||                                                                   // Ensure friendly_fire is allowed OR
           (action.target === 'enemy' && this.battle.activePlayer().team !== target_player.team) ||  // The action targets an enemy and the target program is any enemy OR
           (action.target === 'ally' && this.battle.activePlayer().team === target_player.team)) {   // The action targets an ally and the target program is an ally

           // Action has no required size or program exceeds required size
           if ((typeof action.size_req === 'undefined' || this.curr_size >= action.size_req) && action.perform(x, y, this, target)) {
            this.setTurnComplete();
            
            // Performing an action may have destroyed the last enemy, check whether the battle is over
            if (this.battle.isOver()) {
              return;
            }
          }
        }
      } else if (action.target === 'grid' && action.perform(x, y, this, target)) {    // Allow programs to manipulate the grid, even if there is no target located there
        this.setTurnComplete();
      } else if (settings.attack_empty_blocks) {    // This setting controls whether attacking an empty block will be considered a successful attack
        this.setTurnComplete();
      }
    } else if (this.movesRemaining() > 0) {
      // If player clicked outside their active program's range and they have moves remaining, reset current action to move; this allows a player to cancel an action
      this.current_action = 'move';
    }
  }
  
  // Check whether the active player is finished with their turn
  this.battle.isTurnComplete();
};

// Deal damage to a target program
Program.prototype.dealDamage = function(target) {
  var action = this.actions[this.current_action],
      target_player = battle.players[target.player_index],
      target_prog = target_player.programs[target.program_index],
      damage = action.damage + this.damage_boost;
      
  target_prog.shrinkTo(target_prog.curr_size - damage);

  return true;
};

// Adjust move rate of target program
// If 'direction' is positive, movement rate is increased; if 'direction' is negative, movement rate is decreased
Program.prototype.adjustMoveRate = function(target, direction, new_rate) {
  var action = this.actions[this.current_action],
      target_player = battle.players[target.player_index],
      target_prog = target_player.programs[target.program_index];
      
  // Adjust movement speed
  if (typeof new_rate === 'undefined') {
    target_prog.movement_speed += direction * action.damage;
  } else {
    target_prog.movement_speed = new_rate;
  }
  
  return true;
};

// Increase move rate of target program
Program.prototype.increaseMoveRate = function(target, new_rate) {
  var action = this.actions[this.current_action],
      target_player = battle.players[target.player_index],
      target_prog = target_player.programs[target.program_index];
      
  // Increase movement speed
  target_prog.movement_speed += action.damage;
  if (typeof new_rate === 'undefined') {
  } else {
    target_prog.movement_speed = new_rate;
  }
  
  return true;
};

// Increase max size of target program
Program.prototype.increaseMaxSize = function(target) {
  var action = this.actions[this.current_action],
      target_player = battle.players[target.player_index],
      target_prog = target_player.programs[target.program_index];
      
  // Increase max size
  target_prog.max_size += action.damage;
  
  return true;
};

// Adds blocks to target program
Program.prototype.addBlocks = function(target) {
  var action = this.actions[this.current_action],
      target_player = battle.players[target.player_index],
      target_prog = target_player.programs[target.program_index];
      
  var tail, blocks, x, y;

  // Attempt to add action.damage number of blocks
  for (var i = 0; i < action.damage; i++) {
    // Prevent the program from growing past it's max size
    if (target_prog.curr_size === target_prog.max_size) {
      break;
    }
    
    // Get the last block in the program's tail
    tail = target_prog.blocks[0];
    
    // TODO: Figure out a more intelligent way to select which block to add
    blocks = [
      [tail.x + 1, tail.y], // Right
      [tail.x, tail.y + 1], // Down
      [tail.x - 1, tail.y], // Left
      [tail.x, tail.y - 1]  // Up
    ];
    
    for (var j = 0; j < 4; j++) {
      x = blocks[j][0];
      y = blocks[j][1];
      
      // If the current block is valid and empty, add it to the end of the program's tail
      if (this.battle.map.isValidBlock(x, y) && typeof this.battle.getProgramAt(x, y) === 'undefined') {
        // TODO: Collect any credits or logs that might be on the new block?
        target_prog.blocks.unshift({'x': x, 'y': y});
        break;
      }
    }
  }
  
  return true;
};

// Move program to (x, y)
Program.prototype.move = function(x, y, occupied) {
  if (this.movesRemaining() > 0 && this.inRange(x, y, 1) && this.distanceTo(x, y) !== 0) {
    this.blocks.push({'x': x, 'y': y});
    this.moves_made++;
    
    // Increment size if the program moved to an empty block (moving onto itself doesn't increase its size)
    if (!occupied) {
      this.curr_size++;
    }
    
    // Ensure program doesn't exceed its max size
    //if (this.curr_size > this.max_size) {
    if (this.blocks.length > this.max_size) {
      this.shrinkTo(this.max_size);
    }
    
    // If player moved to a block with credits, collect them
    this.battle.extra_credits += this.battle.map.block(x, y).credits();
    
    // If player moved to a block with logs, collect them
    if (this.battle.map.block(x, y).contains('logs')) {
      this.battle.logs_remaining--;
      
      // Collecting the last log is a possible winning condition
      if (this.battle.isOver()) {
        return true;
      }
    }
    
    // Reset block to erase any logs or credits 
    this.battle.map.block(x, y).setState('normal');
    
    // Automatically target using best action, if program has no moves left
    if (this.movesRemaining() === 0 && !this.action_performed) {
      this.setCurrentAction(this.defaultAction());
      
      if (this.current_action === 'no_action') {
        this.setTurnComplete();
      }
    }
    
    return true;
  }
  
  return false;
};

Program.prototype.movesRemaining = function() {
  var moves_remaining = this.movement_speed - this.moves_made;
  
  return (moves_remaining < 0) ? 0 : moves_remaining;
};

// Returns whether or not the given point is in range of the current action
Program.prototype.inRange = function(x, y, range) {
  var noBlockIsValid = false;
  
  if (this.current_action !== 'move') {
    // Bit-Man's One action can target empty blocks
    noBlockIsValid = this.actions[this.current_action].target === 'grid';
  }
  
  return this.battle.map.isValidBlock(x, y, noBlockIsValid) && this.distanceTo(x, y) <= range;
};

Program.prototype.defaultAction = function() {
  var action_list = Object.keys(this.actions);

  return (action_list.length > 0) ? action_list[0] : 'no_action';
};

Program.prototype.distanceTo = function(x, y) {
  var head = this.head();
  return Math.abs(x - head.x) + Math.abs(y - head.y);
};

Program.prototype.shrinkTo = function(new_size) {
  if (new_size > 0) {
    var block;
    var unique_blocks = [];
    
    // Loop through array in reverse to get the most recently visited blocks
    for (var i = this.blocks.length - 1; i >= 0; i--) {
      // Treat blocks as strings so that indexOf will work (doesn't work with objects)
      block = this.blocks[i].x + ',' + this.blocks[i].y;
      
      if (unique_blocks.length < new_size) {
        // If size has not yet been reached, add unique blocks to the unique_blocks array
        if (unique_blocks.indexOf(block) === -1) {
          unique_blocks.push(block);
        }
      } else {
        // If max size has been reached, remove any block that does not exist in the unique_blocks array
        // IMPORTANT: Need to keep duplicate blocks even though the length of the block array exceeds the current size so that when blocks are popped from the array, the remaining blocks are still adjacent
        if (unique_blocks.indexOf(block) === -1) {
          this.blocks.splice(i, 1);
        }
      }
    }
    
    // Update current size tracker
    this.curr_size = new_size;
  } else {
    var prog = this;
    
    // Remove the program from its owner's list
    this.owner.programs = this.owner.programs.filter(function(el) {
      return (el !== prog);
    });
  }
};

Program.prototype.indexOfBlockAt = function(x, y, includeTail = true) {
  // If we don't care about the tail, then simply compare whether the head of the program is at the given block
  if (!includeTail) {
    var block = this.head();
    
    if (block.x === x && block.y === y) {
      return this.blocks.length - 1;
    }
    
    return -1;
  }

  for (var i = 0; i < this.blocks.length; i++) {
    if (this.blocks[i].x === x && this.blocks[i].y === y) {
      return i;
    };    
  }

  return -1;
};

Program.prototype.head = function() {
  var index = this.blocks.length - 1;
  var block = this.blocks[index];

  return {'x': block.x, 'y': block.y};
};

Program.prototype.setTurnComplete = function() {
  this.moves_made = this.movement_speed;
  this.action_performed = true;
};

Program.prototype.isTurnComplete = function() {
  return (this.action_performed === true);
};




//---------------------------------
//******       Action        ******
//---------------------------------

function Action(name, obj) {
  this.name = name;
  this.target = obj.target;
  this.range = obj.range;
  this.damage = obj.damage;
  this.size_req = obj.size_req;
  this.desc = obj.desc

  if (typeof obj.perform !== 'undefined') {
    this.perform = obj.perform;
  } else {
    // Apply a default function to deal damage
    this.perform = function(x, y, program, target) { console.log(name + ': (' + x + ', ' + y + ')'); return program.dealDamage(target); }; 
  }
}

Action.prototype.htmlDesc = function() {
  var html = '';
  
  html += '<div><b>' + this.name + '</b></div>';
  html += '<div>Range: ' + this.range + '</div>';
  if (typeof this.size_req !== 'undefined') {
    html += '<div>Size Required: ' + this.size_req + '</div>';
  }
  
  if (typeof this.damage !== 'undefined') {
    html += '<div>Damage: ' + this.damage + '</div>';
  }
  
  html += '<p>' + this.desc + '</p>';
  
  return html;
}