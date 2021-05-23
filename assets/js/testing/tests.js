//=======================================
//******       Player Tests        ******
//=======================================

QUnit.module("Player", function(hooks) {
  var customPlayerArgs = {'spybot': 'Gigamesh G60', 'credits': 500, 'inventory': { 'Bit-Man': 1, 'Catapult': 1}, 'level': 5};
  
  hooks.beforeEach(function(assert) {
    this.player = new Player();
    
    assert.ok(this.player.has('Hack'), "player.has('Hack')");
    assert.ok(this.player.has('Slingshot'), "player.has('Slingshot')");
    assert.equal(this.player.inventory.Hack, 1, 'player.inventory.Hack = 1');
    assert.equal(this.player.inventory.Slingshot, 1, 'player.inventory.Slingshot = 1');
    
    assert.notOk(this.player.has('Bit-Man'), "!player.has('Bit-Man')");
    assert.notOk(this.player.has('Catapult'), "!player.has('Catapult')");
  });

  QUnit.test("Constructor", function( assert ) {
    function test_newPlayer(player, args, playerType) {
      assert.deepEqual(player.spybot, args.spybot, 'Spybot = ' + args.spybot + ' (' + playerType + ')');
      assert.deepEqual(player.credits, args.credits, 'Credits = ' + args.credits + ' (' + playerType + ')');
      assert.deepEqual(player.inventory, args.inventory, 'Inventory = ' + JSON.stringify(args.inventory) + ' (' + playerType + ')');
      assert.deepEqual(player.level, args.level, 'Level = ' + args.level + ' (' + playerType + ')');
    }
    
    test_newPlayer(this.player, {'spybot': 'Technojaw T55', 'credits': 1000, 'inventory': { 'Hack': 1, 'Slingshot': 1}, 'level': 1}, 'default');
    test_newPlayer(new Player(customPlayerArgs), customPlayerArgs, 'custom');
  });

  QUnit.test("has()", function( assert ) {
    // Test custom player inventory
    this.player = new Player(customPlayerArgs);

    assert.ok(this.player.has('Bit-Man'), "customPlayer.has('Bit-Man')");
    assert.ok(this.player.has('Catapult'), "customPlayer.has('Catapult')");
    assert.notOk(this.player.has('Hack'), "!customPlayer.has('Hack')");
    assert.notOk(this.player.has('Slingshot'), "!customPlayer.has('Slingshot')");
  });

  QUnit.test("addToInventory(), increase existing", function( assert ) {
    assert.equal(this.player.addToInventory('Hack'), true, "player.addToInventory('Hack')");
    assert.equal(this.player.inventory.Hack, 2, 'player.inventory.Hack = 2');
    assert.equal(this.player.addToInventory('Slingshot'), true, "player.addToInventory('Slingshot')");
    assert.equal(this.player.inventory.Slingshot, 2, 'player.inventory.Slingshot = 2');
  });

  QUnit.test("addToInventory(), add new", function( assert ) {
    assert.equal(this.player.addToInventory('Bit-Man'), true, "player.addToInventory('Bit-Man')");
    assert.equal(this.player.inventory['Bit-Man'], 1, 'player.inventory.Bit-Man = 1');
  });

  QUnit.test("removeFromInventory(), decrement existing", function( assert ) {
    assert.equal(this.player.removeFromInventory('Hack'), true, "player.removeFromInventory('Hack')");
    assert.equal(this.player.inventory.Hack, 0, 'player.inventory.Hack = 0');
    assert.equal(this.player.removeFromInventory('Hack'), false, "player.removeFromInventory('Hack')");
    assert.equal(this.player.inventory.Hack, 0, "player.inventory.Hack = 0 (doesn't go negative)");
  });

  QUnit.test("removeFromInventory(), decrement non-existing", function( assert ) {
    assert.equal(this.player.removeFromInventory('Catapult'), false, "player.removeFromInventory('Catapult')");
    assert.equal(this.player.inventory.Catapult, undefined, 'player.inventory.Catapult = undefined');
  });
});


//=======================================
//******       Netmap Tests        ******
//=======================================


//=====================================
//******       Node Tests        ******
//=====================================

QUnit.module("Node", function(hooks) {
  // Unlocked, contains dialog
  var warez_node_data = {
    "company": "WAREZ NODE",
    "desc": "Leo's Shop - A quality shop of basic programs at low prices. come and see what we've got to offer.",
    "dialog_key": 1010,
    "level": 1,
    "name": "Leo's Shop",
    "type": "store",
    "x": 104,
    "y": 348
  };

  // Locked, no dialog
  var battle_node_data = {
    "company": "CELLULAR AUTOMATA RESEARCH",
    "desc": "This node contains the level 2 access codes. Capture the code to access level 2 nodes.",
    "level": 1,
    "locked": true,
    "name": "Sydney Project",
    "type": "battle",
    "x": 243,
    "y": 275
  };

  hooks.beforeEach(function(assert) {
    function test_newNode(node, node_data) {
      assert.equal(node.company, node_data.company, node.type + 'Node.company = ' + node_data.company);
      assert.equal(node.name, node_data.name, node.type + 'Node.name = ' + node_data.name);
      assert.equal(node.desc, node_data.desc, node.type + 'Node.desc = ' + node_data.desc);
      assert.equal(node.level, node_data.level, node.type + 'Node.level = ' + node_data.level);
      assert.equal(node.type, node_data.type, node.type + 'Node.type = ' + node_data.type);
      assert.equal(node.locked, node_data.locked, node.type + 'Node.locked = ' + node_data.locked);
      assert.equal(node.display, !node_data.locked, node.type + 'Node.display = ' + !node_data.locked);
      assert.equal(node.canvas, undefined, node.type + 'Node.canvas = undefined');
    }    
    
    // IMPORTANT: Does not test canvas element
    this.warez_node = new Node(warez_node_data, undefined);
    test_newNode(this.warez_node, warez_node_data);
    assert.equal(this.warez_node.dialog_key, warez_node_data.dialog_key, 'storeNode.dialog_key = ' + warez_node_data.dialog_key);
    assert.equal(this.warez_node.locked, undefined, 'storeNode.locked = undefined');
    assert.equal(this.warez_node.display, true, 'storeNode.display = true');
    
    this.battle_node = new Node(battle_node_data, undefined);
    test_newNode(this.battle_node, battle_node_data);
    assert.equal(this.battle_node.dialog_key, undefined, 'battleNode.dialog_key = undefined');
    assert.equal(this.battle_node.locked, true, 'battleNode.locked = true');
    assert.equal(this.battle_node.display, false, 'battleNode.display = false');
  });

  QUnit.test("reveal()", function( assert ) {
    assert.equal(this.battle_node.reveal(), true, 'battleNode.reveal()');
    assert.equal(this.battle_node.display, true, 'battleNode.display = true');
  });

  QUnit.test("unlock()", function( assert ) {
    assert.equal(this.battle_node.unlock(), true, 'battleNode.unlock()');
    assert.equal(this.battle_node.locked, false, 'battleNode.locked = false');
    assert.equal(this.battle_node.display, true, 'battleNode.display = true');
  });
});


//=======================================
//******       Battle Tests        ******
//=======================================

QUnit.module("Battle", function(hooks) {
  var players = {
    'Human': 0,
    'AI': 1
  }
  
  hooks.beforeEach(function(assert) {
    var battleID = 'PR Database',
        default_battle = GAME_DATA.BATTLES[battleID];
    
    this.battle = new Battle(battleID, GAME_DATA, 1);
    
    // IMPORTANT: Set the global battle object to the current battle object so that the event listeners work properly
    battle = this.battle;
    
    assert.equal(this.battle.state, Battle.states.setup, 'battle.state = Battle.states.setup');
    assert.deepEqual(this.battle.map, new Map(default_battle.grid, 1), 'battle.map');
    assert.equal(this.battle.reward, default_battle.reward, 'battle.reward = ' + default_battle.reward);
    assert.equal(this.battle.victory_callback, default_battle.action_success, 'battle.victory_callback');
    assert.equal(this.battle.failure_callback, default_battle.action_failure, 'battle.failure_callback');
    assert.equal(this.battle.logs_remaining, -1, 'battle.logs_remaining = -1');
    assert.equal(this.battle.extra_credits, 0, 'battle.extra_credits = 0');
    assert.equal(this.battle.active_player_index, 0, 'battle.active_player_index = 0');
    assert.equal(this.battle.players.length, 2, 'battle.players.length = 2');
    
    // Test human player
    var battle_player = this.battle.players[0];
    assert.equal(battle_player.type, 'human', 'player1.type = human');
    assert.equal(battle_player.team, 0, 'player1.team = 0');
    assert.equal(battle_player.programs.length, 0, 'player1.programs.length = 0');
    
    // Give the human player a program 
    this.battle.players[0].programs.push(new Program('Hack', GAME_DATA, [{'x': 6, 'y': 5}], battle));
    assert.equal(battle_player.programs.length, 1, 'player1.programs.length = 1');
    
    
    // Test AI player
    battle_player = this.battle.players[1];
    assert.equal(battle_player.type, 'ai', 'player2.type = ai');
    assert.equal(battle_player.team, 1, 'player2.team = 1');
    assert.equal(battle_player.programs.length, 3, 'player2.programs.length = 3');
    
    // Test AI player's programs
    var prog = battle_player.programs[0];
    assert.equal(prog.name, 'Watchman', 'player2.programs[0].name = Watchman');
    assert.equal(prog.curr_size, 1, 'player2.programs[0].curr_size = 1');
    assert.deepEqual(prog.blocks, [{'x': 1, 'y': 2}], 'player2.programs[0].blocks = (1, 2)');
    
    prog = battle_player.programs[1];
    assert.equal(prog.name, 'Guard Pup', 'player2.programs[1].name = Guard Pup');
    assert.equal(prog.curr_size, 1, 'player2.programs[1].curr_size = 1');
    assert.deepEqual(prog.blocks, [{'x': 10, 'y': 1}], 'player2.programs[1].blocks = (10, 1)');
    
    prog = battle_player.programs[2];
    assert.equal(prog.name, 'Sentinel', 'player2.programs[2].name = Sentinel');
    assert.equal(prog.curr_size, 1, 'player2.programs[2].curr_size = 1');
    assert.deepEqual(prog.blocks, [{'x': 10, 'y': 6}], 'player2.programs[2].blocks = (10, 6)');
  });
  
  QUnit.test("start()", function( assert ) {
    assert.equal(this.battle.map.count('upload'), 2, 'Battle starts with 2 upload points');
    this.battle.start();
    assert.equal(this.battle.state, Battle.states.in_progress, 'State changes to in_progress');
    assert.equal(this.battle.map.count('upload'), 0, 'Upload points cleared');
    
    // IMPORTANT: Does not test startTurn()
  });
  
  QUnit.test("activePlayer()", function( assert ) {
    assert.deepEqual(this.battle.activePlayer(), battle.players[0], 'activePlayer() returns first player object');
    this.battle.active_player_index = 1;
    assert.equal(this.battle.active_player_index, 1, 'active_player_index = 1');
    assert.deepEqual(this.battle.activePlayer(), battle.players[1], 'activePlayer() returns second player object');
  });
  
  QUnit.test("isTurnComplete()", function( assert ) {
    // Erase the AI turn function to prevent it from auto-advancing back to player1
    this.battle.players[1].aiTurn = function() {};
    
    this.battle.start();
    assert.equal(this.battle.isTurnComplete(), false, "player1's turn isn't over yet");
    
    // Mark all player's programs as having completed their turns
    this.battle.activePlayer().programs.forEach(function(program) {
      program.setTurnComplete();
    });
    
    assert.equal(this.battle.isTurnComplete(), true, "player1's turn is complete");
    assert.equal(this.battle.active_player_index, 1, 'active_player_index = 1');
    
    // Mark all player's programs as having completed their turns
    this.battle.activePlayer().programs.forEach(function(program) {
      program.setTurnComplete();
    });
    
    assert.equal(this.battle.isTurnComplete(), true, "player2's turn is complete");
  });

  QUnit.test("nextPlayer()", function( assert ) {
    // Erase the AI turn function to prevent it from auto-advancing back to player1
    this.battle.players[1].aiTurn = function() {};

    this.battle.nextPlayer();

    assert.equal(this.battle.active_player_index, 1, 'active_player_index = 1');
    this.battle.nextPlayer();
    assert.equal(this.battle.active_player_index, 0, 'active_player_index = 0');
  });
  
  function test_isOver(winner, loser) {
    QUnit.test("isOver(), " + loser + " loses all programs", function( assert ) {
      this.battle.start();
      assert.equal(this.battle.isOver(), false, 'battle.isOver() = false');
      assert.equal(this.battle.state, Battle.states.in_progress, 'state = in_progress');
      
      this.battle.active_player_index = players[winner];
      this.battle.players[players[loser]].programs = [];
      assert.ok(true, 'Remove ' + loser + " player's programs");
      
      assert.equal(this.battle.isOver(), true, 'battle.isOver() = true');
      assert.equal(this.battle.winner_index, players[winner], 'battle.winner_index = ' + players[winner]);
      
      if (winner === 'Human') {
        assert.equal(this.battle.state, Battle.states.won, 'battle.state = won');
      } else {
        assert.equal(this.battle.state, Battle.states.lost, 'battle.state == lost');
      }
    });
  }
  
  test_isOver('Human', 'AI');
  test_isOver('AI', 'Human');

  QUnit.test("isOver(), player collects logs", function( assert ) {
    this.battle = new Battle('Eastern Distribution Site', GAME_DATA, 1);
    assert.equal(this.battle.map.block(1, 2).state, GridBlock.states.logs, 'Map contains logs at (1, 2)');
    this.battle.map.block(1, 2).setState('normal');
    this.battle.logs_remaining--;
    assert.equal(this.battle.map.block(1, 2).state, GridBlock.states.normal, 'Player collected logs');
    assert.equal(this.battle.isOver(), true, 'Human player collected logs');
    assert.equal(this.battle.winner_index, 0, 'Human player collected logs; human player wins');
    assert.equal(this.battle.state, Battle.states.won, 'state == won');
  });
  
  function test_triggerGameOver(active_player, result) {
    QUnit.test("triggerGameOver(), " + active_player + ' wins', function( assert ) {
      this.battle.start();
      assert.equal(this.battle.state, Battle.states.in_progress, 'state == in_progress');
      
      this.battle.active_player_index = players[active_player];
      this.battle.triggerGameOver();
      assert.equal(this.battle.winner_index, players[active_player], active_player + ' wins; active_player_index == ' + players[active_player]);
      assert.equal(this.battle.state, Battle.states[result], 'state == ' + result);
    });
  }
  
  test_triggerGameOver('Human', 'won');
  test_triggerGameOver('AI', 'lost');
  
  QUnit.test("getProgramAt()", function( assert ) {
    assert.deepEqual(this.battle.getProgramAt(6, 5), {'player_index': 0, 'program_index': 0, 'team': 0}, 'Friendly Hack program located at (6, 5)');
    assert.deepEqual(this.battle.getProgramAt(1, 2), {'player_index': 1, 'program_index': 0, 'team': 1}, 'Enemy Watchman program located at (1, 2)');
    assert.deepEqual(this.battle.getProgramAt(10, 1), {'player_index': 1, 'program_index': 1, 'team': 1}, 'Enemy Guard Pup program located at (10, 1)');
    assert.equal(this.battle.getProgramAt(0, 1), undefined, 'No program at (0, 1)');
    
    // IMPORTANT: Does not test the includeTail behavior
  });
});


//====================================
//******       Map Tests        ******
//====================================

QUnit.module("Map", function(hooks) {
  // Grid[y][x]
  var map_grid = [
    [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 2, 2, 1],
    [1, 3, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1],
    [1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [1, 4, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 2, 2, 1],
    [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0]
  ];

  // [x, y] format
  var upload_points = [
    [11, 1],
    [12, 1],
    [11, 9],
    [12, 9],
  ];
  
  hooks.beforeEach(function(assert) {
    this.map = new Map(map_grid, 1);
  });

  QUnit.test("Constructor", function( assert ) {
    assert.equal(this.map.grid.length, 11, 'Map contains 11 rows');
    assert.equal(this.map.grid[0].length, 14, 'Map contains 14 columns');
    
    assert.equal(this.map.grid[0][0].state, GridBlock.states.no_block, 'No block in the corner');
    assert.equal(this.map.grid[0][13].state, GridBlock.states.no_block, 'No block in the corner');
    assert.equal(this.map.grid[10][0].state, GridBlock.states.no_block, 'No block in the corner');
    assert.equal(this.map.grid[10][13].state, GridBlock.states.no_block, 'No block in the corner');
    
    assert.equal(this.map.grid[0][1].state, GridBlock.states.normal, 'Random normal block');
    
    assert.equal(this.map.grid[1][11].state, GridBlock.states.upload);
    assert.equal(this.map.grid[1][12].state, GridBlock.states.upload);
    assert.equal(this.map.grid[9][11].state, GridBlock.states.upload);
    assert.equal(this.map.grid[9][12].state, GridBlock.states.upload);
    
    assert.equal(this.map.grid[2][1].state, GridBlock.states.logs);
    
    assert.equal(this.map.grid[5][1].state, GridBlock.states.credits);
    assert.equal(this.map.grid[8][1].state, GridBlock.states.credits);
    
    // Ensure upper left-most upload point is selected (priority is given in the y-axis; a block with a larger x coordinate and a smaller y coordinate will be selected over a block with a smaller x coordinate and a larger y coordinate)
    assert.equal(this.map.selected_block.x, 11);
    assert.equal(this.map.selected_block.y, 1);
  });

  QUnit.test("selectUploadPoint()", function( assert ) {
    for (var i = 0; i < upload_points.length; i++) {
      assert.equal(this.map.selectedGridBlock().state, GridBlock.states.upload, upload_points[i] + ' is an upload point');
      assert.equal(this.map.selected_block.x, upload_points[i][0], 'X-coordinates match');
      assert.equal(this.map.selected_block.y, upload_points[i][1], 'Y-coordinates match');
      this.map.selectedGridBlock().setState('normal');
      
      if (i < upload_points.length - 1) {
        assert.ok(this.map.selectUploadPoint(), 'Found another upload point');
      } else {
        assert.equal(this.map.selectUploadPoint(), false, 'selectUploadPoint() returns false when no more upload points exist');
      }
    }
  });

  QUnit.test("clearUploadPoints()", function( assert ) {
    var x, y;
    
    // Verfiy all blocks are upload points
    for (var i = 0; i < upload_points.length; i++) {
      x = upload_points[i][0];
      y = upload_points[i][1];
      
      assert.equal(this.map.block(x, y).state, GridBlock.states.upload, upload_points[i] + ' is an upload point');
    }
    
    this.map.clearUploadPoints();
    
    // Verfiy all blocks are now normal blocks
    for (var i = 0; i < upload_points.length; i++) {
      x = upload_points[i][0];
      y = upload_points[i][1];
      
      assert.equal(this.map.block(x, y).state, GridBlock.states.normal, upload_points[i] + ' is a normal block');
    }
  });

  QUnit.test("setSelectedBlock()", function( assert ) {
    // IMPORTANT: Does not test whether the block is valid or not
    assert.equal(this.map.selected_block.x, 11);
    assert.equal(this.map.selected_block.y, 1);
    
    this.map.setSelectedBlock(0, 2);
    
    assert.equal(this.map.selected_block.x, 0);
    assert.equal(this.map.selected_block.y, 2);
  });

  QUnit.test("selectedGridBlock()", function( assert ) {
    assert.equal(this.map.selected_block.x, 11);
    assert.equal(this.map.selected_block.y, 1);
    
    assert.equal(this.map.selectedGridBlock(), this.map.grid[1][11]);
  });

  QUnit.test("createBlock(), within bounds", function( assert ) {
    assert.equal(this.map.grid[0][0].state, GridBlock.states.no_block, 'No block exists at (0, 0)');
    assert.ok(this.map.createBlock(0, 0), 'Successfully creates a normal block at (0, 0)');
    
    assert.equal(this.map.block(0, 0).state, GridBlock.states.normal, 'Normal block exists at (0, 0)');
  });

  QUnit.test("createBlock(), outside of bounds", function( assert ) {
    assert.ok(this.map.grid.length === 11, 'Map grid contains 11 rows (i.e. index 11 is invalid)');
    assert.equal(this.map.createBlock(0, 11), false, 'createBlock() fails because the range is invalid');
  });

  QUnit.test("destroyBlock(), within bounds", function( assert ) {
    var x = 0,
        y = 1;

    assert.equal(this.map.block(x, y).state, GridBlock.states.normal, 'Normal block exists at (' + x + ', ' + y + ')');
    assert.ok(this.map.destroyBlock(x, y), 'Successfully destroys block at (' + x + ', ' + y + ')');
    assert.equal(this.map.grid[y][x].state, GridBlock.states.no_block, 'No block exists at (' + x + ', ' + y + ')');
  });

  QUnit.test("destroyBlock(), outside of bounds", function( assert ) {
    var x = 0,
        y = 11;
        
    assert.ok(this.map.grid.length === y, 'Map grid contains ' + y + ' rows (i.e. index ' + y + ' is invalid)');
    assert.equal(this.map.destroyBlock(x, y), false, 'destroyBlock() fails because the range is invalid');
  });

  QUnit.test("destroyBlock(), outside of bounds", function( assert ) {
    var x = 0,
        y = 11;
        
    assert.ok(this.map.grid.length === y, 'Map grid contains ' + y + ' rows (i.e. index ' + y + ' is invalid)');
    assert.equal(this.map.destroyBlock(x, y), false, 'destroyBlock() fails because the range is invalid');
  });

  QUnit.test("block()", function( assert ) {
    var x = 0,
        y = 1;

    assert.ok(this.map.block(x, y) == this.map.grid[y][x]);
  });

  QUnit.test("count()", function( assert ) {
    assert.equal(this.map.count('no_block'), 46);
    assert.equal(this.map.count('normal'), 101);
    assert.equal(this.map.count('upload'), 4);
    assert.equal(this.map.count('logs'), 1);
    assert.equal(this.map.count('credits'), 2);
  });

  QUnit.test("isValidBlock()", function( assert ) {
    var x_oor = this.map.grid[0].length, // Out-of-range x value
        y_oor = this.map.grid.length;    // Out-of-range y value
    
    assert.equal(this.map.isValidBlock(0, 0, true), true, 'When no_block = true, (0, 0) is valid');
    assert.equal(this.map.isValidBlock(0, 0, false), false, 'When no_block = false, (0, 0) is invalid');
    
    assert.equal(this.map.isValidBlock(0, y_oor, true), false, 'When no_block = true, (0, ' + y_oor + ') is invalid (out of range)');
    assert.equal(this.map.isValidBlock(0, y_oor, false), false, 'When no_block = false, (0, ' + y_oor + ') is invalid (out of range)');
    
    assert.equal(this.map.isValidBlock(x_oor, 0, true), false, 'When no_block = true, (' + x_oor + ', 0) is invalid (out of range)');
    assert.equal(this.map.isValidBlock(x_oor, 0, false), false, 'When no_block = false, (' + x_oor + ', 0) is invalid (out of range)');
  });
});


//===========================================
//******       Grid Block Tests        ******
//===========================================
QUnit.module("GridBlock", function(hooks) {
  QUnit.test("Constructor", function( assert ) {
    var gb = new GridBlock(GridBlock.states.normal, 1);
    assert.equal(gb.state, GridBlock.states.normal);
    assert.equal(gb.min_credits, 250);
    assert.equal(gb.max_credits, 500);
    
    gb = new GridBlock(GridBlock.states.no_block, 2);
    assert.equal(gb.state, GridBlock.states.no_block);
    assert.equal(gb.min_credits, 375);
    assert.equal(gb.max_credits, 750);
    
    gb = new GridBlock(GridBlock.states.upload, 3);
    assert.equal(gb.state, GridBlock.states.upload);
    assert.equal(gb.min_credits, 500);
    assert.equal(gb.max_credits, 1000);
  });

  QUnit.test("contains()", function( assert ) {
    var gb = new GridBlock(GridBlock.states.logs, 1);
    assert.ok(gb.contains('logs'));
    assert.equal(gb.contains('credits'), false);

    gb = new GridBlock(GridBlock.states.credits, 1);
    assert.ok(gb.contains('credits'));
    assert.equal(gb.contains('logs'), false);
    
    gb = new GridBlock(GridBlock.states.normal, 1);
    assert.equal(gb.contains('logs'), false, "Normal block doesn't contain logs");
    assert.equal(gb.contains('credits'), false, "Normal block doesn't contain credits");
  });

  QUnit.test("credits()", function( assert ) {
    function test_blockState(state) {
      var gb = new GridBlock(GridBlock.states[state], 2);
      assert.equal(gb.credits(), 0, state + ' returns 0 credits');
    }
    
    function test_creditGen(level, min, max) {
      var credits,
          gb = new GridBlock(GridBlock.states.credits, level);
      
      for (var i = 0; i < 200; i++) {
        credits = gb.credits();
        assert.ok(credits >= min, 'Min credits are >= ' + min + ' (for level ' + level + ')');
        assert.ok(credits <= max, 'Max credits are <= ' + max + ' (for level ' + level + ')');
      }
    }
    
    // Only credit blocks should contain credits, all others are 0
    test_blockState('no_block');
    test_blockState('normal');
    test_blockState('upload');
    test_blockState('logs');
    
    test_creditGen(1, 250, 500);
    test_creditGen(2, 375, 750);
    test_creditGen(3, 500, 1000);
    test_creditGen(4, 625, 1250);
  });

  QUnit.test("setState()", function( assert ) {
    var gb = new GridBlock(GridBlock.states.logs, 1);
    
    assert.equal(gb.state, GridBlock.states.logs);
    assert.ok(gb.contains('logs'), 'GridBlock contains logs');
    gb.setState('normal');
    assert.equal(gb.state, GridBlock.states.normal);
    assert.equal(gb.contains('logs'), false, 'GridBlock no longer contains logs');
    gb.setState('no_block');
    assert.equal(gb.state, GridBlock.states.no_block);
  });
});


//========================================
//******       Battle Player        ******
//========================================




//==================================
//******       Program        ******
//==================================
QUnit.module("Program", function(hooks) {
  
  hooks.beforeEach(function(assert) {
    this.prog_name = 'Hack';
    this.blocks = [{'x': 6, 'y': 5}];
    this.battle = new Battle('PR Database', GAME_DATA, 1);
    this.prog = new Program(this.prog_name, GAME_DATA, jQuery.extend(true, [], this.blocks), this.battle);
    this.battle.players[0].programs.push(this.prog);
    this.battle.start();
  });

  QUnit.test("constructor", function( assert ) {
    assert.equal(this.prog.battle, this.battle, 'battle');
    assert.equal(this.prog.name, this.prog_name, 'name');
    assert.equal(this.prog.desc, 'Basic Attack Program', 'desc');
    assert.equal(this.prog.image, 'images/programs/hack.png', 'image');
    assert.equal(this.prog.color, '#00C7FC', 'color');
    assert.equal(this.prog.movement_speed, 2, 'movement_speed');
    assert.equal(this.prog.max_size, 4, 'max_size');
    assert.equal(this.prog.curr_size, 1, 'curr_size');
    assert.deepEqual(this.prog.blocks, [{'x': 6, 'y': 5}], 'blocks');
    assert.equal(this.prog.level, 1, 'level');
    assert.equal(this.prog.range_boost, 0, 'range_boost');
    assert.equal(this.prog.damage_boost, 0, 'damage_boost');
    assert.deepEqual(Object.keys(this.prog.actions), ['Slice'], 'Program should have 1 action called Slice');
    
    var action_name = 'Slice';
    assert.deepEqual(this.prog.actions[action_name], new Action(action_name, GAME_DATA.PROGRAMS[this.prog_name].actions[action_name]), 'action object');
  });
  
  QUnit.test("setCurrentAction()", function( assert ) {
    assert.equal(this.prog.current_action, 'move', "current_action == move");
    this.prog.setCurrentAction('Slice');
    assert.equal(this.prog.current_action, 'Slice', "Set current_action to 'Slice'");
    
    // Add another human player because AI player's turn will automatically advance to the next user
    this.battle.players.push(new BattlePlayer({
      'type': 'human',
      'team': this.battle.players.length,
      'programs': []
    }, this.battle));
      
    this.prog.setCurrentAction('no_action');
    assert.equal(this.prog.current_action, 'no_action', "Set current_action to 'no_action'");
    assert.equal(this.prog.action_performed, true, "no_action completes program's turn");
    
    // IMPORTANT: May advanced twice depending on how long it takes the test to run (timeouts in AI turn code)
    // If the test is quick, it will still be the AI's turn, if it takes longer, it will advance twice and be the newly added third player
    assert.ok(this.prog.battle.active_player_index === 1 || this.prog.battle.active_player_index === 2, "Advances to another player when no_action is selected for a player's last program");
  });
  
  QUnit.test("findNearestEnemy()", function( assert ) {
    // Switch the active player to the AI
    this.battle.active_player_index = 1;
    this.battle.players[1].active_program_index = 0;
    this.prog = this.battle.activePlayer().activeProgram();
    
    assert.deepEqual(this.prog.findNearestEnemy(), [[1,3],[2,3],[2,4],[2,5],[3,5],[4,5],[5,5],[6,5]], '[[1,3],[2,3],[2,4],[2,5],[3,5],[4,5],[5,5],[6,5]]');
    
    this.battle.players[0].programs[0].blocks = [{"x":8,"y":5},{"x":9,"y":5},{"x":10,"y":5},{"x":9,"y":5},{"x":8,"y":5},{"x":9,"y":5},{"x":9,"y":6}];
    this.battle.players[1].active_program_index = 1;
    this.battle.players[1].programs[1].blocks = [{'x': 6, 'y': 3},{'x': 6, 'y': 4}];
    this.prog = this.battle.activePlayer().activeProgram();
    
    assert.deepEqual(this.prog.findNearestEnemy(), [[7,4],[7,5],[8,5]], '[[7,4],[7,5],[8,5]]');
  });

  
  /*
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
    return (typeof prog !== 'undefined' && (prog.player_index !== battle.active_player_index || prog.program_index === battle.activePlayer().active_program_index));
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
        return pn.getPath(); 
      }
    
      if (node.valid() && !node.visited()) {
        visit(node);
      }
    }
  }
};
  */
  
  QUnit.test("getAvailablePaths()", function( assert ) {
    // TODO: Implement this
    assert.expect(0);
  });

  QUnit.test("performAction()", function( assert ) {
    // TODO: Implement this
    assert.expect(0);
  });

  QUnit.test("dealDamage()", function( assert ) {
    // TODO: Implement this
    assert.expect(0);
  });
  
  QUnit.test("move()", function( assert ) {
    this.prog = new Program('Slingshot', GAME_DATA, jQuery.extend(true, [], this.blocks), this.battle);

    assert.deepEqual(this.prog.blocks, [{'x': 6, 'y': 5}], 'Program starts at (6, 5)');
    assert.equal(this.prog.curr_size, 1, 'Program starts at size 1');
    assert.equal(this.prog.moves_made, 0, 'No moves made');
    
    assert.equal(this.prog.move(6, 5, false), false, 'Program cannot move to the block it is already on');
    assert.equal(this.prog.moves_made, 0, 'No moves made');
    
    assert.equal(this.prog.move(7, 4, false), false, 'Program cannot move to an out of range block');
    assert.equal(this.prog.moves_made, 0, 'No moves made');
    
    // Successfully moves down to an unoccupied block
    assert.equal(this.prog.move(6, 6, false), true, 'Program moves to (6, 6)');
    assert.equal(this.prog.moves_made, 1, 'One move made');
    assert.equal(this.prog.movesRemaining(), 1, 'One move remaining');
    assert.deepEqual(this.prog.blocks, [{'x': 6, 'y': 5}, {'x': 6, 'y': 6}], 'Program now covers blocks (6, 6) and (6,5)');
    assert.equal(this.prog.curr_size, 2, 'Size increases by 1 when moving to an empty block');
    
    // Successfully moves back up to an occupied block
    assert.equal(this.prog.move(6, 5, true), true, 'Program moves back to (6, 5)');
    // IMPORTANT: Need to keep duplicate blocks even though the length of the block array exceeds the current size so that when blocks are popped from the array, the remaining blocks are still adjacent
    assert.deepEqual(this.prog.blocks, [{'x': 6, 'y': 5}, {'x': 6, 'y': 6}, {'x': 6, 'y': 5}], 'Program now covers blocks (6,5) and (6, 6)');
    assert.equal(this.prog.moves_made, 2, 'Two moves made');
    assert.equal(this.prog.movesRemaining(), 0, 'No moves remaining');
    assert.equal(this.prog.current_action, 'Stone', 'Default action is automatically selected when no moves remain');
    assert.equal(this.prog.curr_size, 2, 'Size does not increase when moving to an occupied block');
    
    // Reset program and increase movement speed to test reaching max size
    this.prog.resetTurn();
    this.prog.movement_speed = 4;
    
    // Change the next block to a credits block
    this.prog.battle.map.block(7, 5).setState('credits');
    
    // Successfully moves right to an unoccupied block
    assert.equal(this.prog.battle.extra_credits, 0, 'No extra credits yet');
    assert.equal(this.prog.battle.map.block(7, 5).state, GridBlock.states.credits, 'Block contains credits');
    assert.equal(this.prog.move(7, 5, false), true, 'Program moves to (7, 5)');
    assert.equal(this.prog.moves_made, 1, 'One move made');
    assert.equal(this.prog.movesRemaining(), 3, 'Three moves remaining');
    assert.deepEqual(this.prog.blocks, [{'x': 6, 'y': 5}, {'x': 6, 'y': 5}, {'x': 7, 'y': 5}], 'Program now covers blocks (7, 5) and (6,5)');
    assert.equal(this.prog.curr_size, 2, 'Size does not increase because at max length');
    assert.notEqual(this.prog.battle.extra_credits, 0, 'Extra credits received');
    assert.equal(this.prog.battle.map.block(7, 5).state, GridBlock.states.normal, 'Block is now a normal block');
    
    // Change the next block to a logs block
    this.prog.battle.map.block(8, 5).setState('logs');
    this.prog.battle.logs_remaining = 1;
    
    // Successfully moves right to an unoccupied block
    assert.equal(this.prog.battle.logs_remaining, 1, 'One log remains');
    assert.equal(this.prog.move(8, 5, false), true, 'Program moves to (8, 5)');
    assert.equal(this.prog.moves_made, 2, 'Two moves made');
    assert.equal(this.prog.movesRemaining(), 2, 'Two moves remaining');
    assert.deepEqual(this.prog.blocks, [{'x': 7, 'y': 5}, {'x': 8, 'y': 5}], 'Program now covers blocks (8, 5) and (7,5)');
    assert.equal(this.prog.curr_size, 2, 'Size does not increase because at max length');
    assert.equal(this.prog.battle.logs_remaining, 0, 'Logs collected');
  });
  
  QUnit.test("movesRemaining()", function( assert ) {
    function test_movesRemaining(prog, speed, moves_made, expected) {
      prog.movement_speed = speed;
      prog.moves_made = moves_made;
      
      assert.equal(prog.movement_speed, speed, "movement_speed == " + speed);
      assert.equal(prog.moves_made, moves_made, "moves_made == " + moves_made);
      assert.equal(prog.movesRemaining(), expected, "movesRemaining() == " + expected);
    }
    
    test_movesRemaining(this.prog, 2, 0, 2);
    test_movesRemaining(this.prog,2, 1, 1);
    test_movesRemaining(this.prog,2, 2, 0);
    
    // Test whether the check prevents movesRemaining from being negative if the movement_speed is adjusted
    test_movesRemaining(this.prog,0, 2, 0);
  });
  
  QUnit.test("inRange()", function( assert ) {
    function test_inRange(prog, x, y, range, expected) {
      assert.equal(prog.inRange(x, y, range), expected, 'Distance ' + prog.distanceTo(x, y) + ' <= ' + range);
    }
    
    var loc = this.blocks[0];
    
    // Dist = 1, Range = 1
    test_inRange(this.prog, loc.x + 1, loc.y, 1, true);
    test_inRange(this.prog, loc.x, loc.y + 1, 1, true);
    test_inRange(this.prog, loc.x - 1, loc.y, 1, true);
    test_inRange(this.prog, loc.x, loc.y - 1, 1, true);
    
    // Dist = 2, Range = 1
    test_inRange(this.prog, loc.x + 2, loc.y, 1, false);
    test_inRange(this.prog, loc.x, loc.y + 2, 1, false);
    test_inRange(this.prog, loc.x - 2, loc.y, 1, false);
    test_inRange(this.prog, loc.x, loc.y - 2, 1, false);
  });
  
  QUnit.test("defaultAction()", function( assert ) {
    function test_defaultAction(prog_name, action) {
      var prog = new Program(prog_name, GAME_DATA, [{'x': 6, 'y': 5}], battle);
      assert.equal(prog.defaultAction(), action, 'Default action for ' + prog_name + ': ' + action);
    }
    
    test_defaultAction('Hack', 'Slice');
    test_defaultAction('Memory Hog', 'no_action');
  });

  QUnit.test("distanceTo()", function( assert ) {
    var dist,
        loc = this.blocks[0];
    
    for (var dx = -3; dx < 4; dx++) {
      for (var dy = -3; dy < 4; dy++) {
        dist = Math.abs(dx) + Math.abs(dy);
        assert.equal(this.prog.distanceTo(loc.x + dx, loc.y + dy), dist, 'dx: ' + dx + ', dy: ' + dy + ', dist: ' + dist);
      }
    }
  });
  
  QUnit.test("shrinkTo()", function( assert ) {
    var blocks = [{'x': 9, 'y': 9}, {'x': 9, 'y': 10}, {'x': 10, 'y': 10}, {'x': 10, 'y': 9}, {'x': 10, 'y': 8}];
    
    // Passed a copy of blocks so that original can be used for comparison
    this.prog = new Program('Warden+', GAME_DATA, jQuery.extend(true, [], blocks));
        
    assert.equal(this.prog.curr_size, 5, 'Program starts at length 5');
    this.prog.shrinkTo(4);
    assert.equal(this.prog.curr_size, 4, 'Program shrunk to length 4');
    assert.deepEqual(this.prog.blocks, blocks.slice(1, 5), 'Block removed from the beginning');
  });

  QUnit.test("indexOfBlockAt()", function( assert ) {
    var blocks = [{'x': 9, 'y': 9}, {'x': 9, 'y': 10}, {'x': 10, 'y': 10}, {'x': 10, 'y': 9}, {'x': 10, 'y': 8}],
        x, y;
    
    // Passed a copy of blocks so that original can be used for comparison
    this.prog = new Program('Warden+', GAME_DATA, blocks);
    
    for (var i = 0; i < blocks.length; i++) {
      x = blocks[i].x;
      y = blocks[i].y;
      assert.equal(this.prog.indexOfBlockAt(x, y, true), i, 'Block ' + i + ': (' + x + ', ' + y + ')');
    }
    
    assert.equal(this.prog.indexOfBlockAt(9, 9, false), -1, 'Blocks in the tail return -1 when includeTail = false');
    assert.equal(this.prog.indexOfBlockAt(9, 8, true), -1, 'Blocks that are not part of the program return -1');
  });

  QUnit.test("head()", function( assert ) {
    var blocks = [{'x': 9, 'y': 9}, {'x': 9, 'y': 10}, {'x': 10, 'y': 10}, {'x': 10, 'y': 9}, {'x': 10, 'y': 8}];
    
    // Passed a copy of blocks so that original can be used for comparison
    this.prog = new Program('Warden+', GAME_DATA, blocks);
    
    assert.deepEqual(this.prog.head(), {'x': 10, 'y': 8 });
  });

  QUnit.test("Program.isTurnComplete(), setTurnComplete(), resetTurn()", function( assert ) {
    assert.equal(this.prog.moves_made, 0, 'No moves made');
    assert.equal(this.prog.action_performed, false, 'No action performed');
    assert.equal(this.prog.isTurnComplete(), false, 'Turn not complete');
    
    this.prog.setTurnComplete();
    assert.equal(this.prog.moves_made, 2, 'moves_made == movement_speed');
    assert.equal(this.prog.action_performed, true, 'Action performed');
    assert.equal(this.prog.isTurnComplete(), true, 'Turn complete');
    
    this.prog.resetTurn();
    assert.equal(this.prog.moves_made, 0, 'No moves made');
    assert.equal(this.prog.action_performed, false, 'No action performed');
    assert.equal(this.prog.isTurnComplete(), false, 'Turn not complete');
  });
});




//=================================
//******       Action        ******
//=================================

QUnit.module("Action", function(hooks) {
  var action_data = {
    "desc": "Deletes 2 Sectors From Target",
    "perform": function(x, y, program, target) { console.log('Slice: (' + x + ', ' + y + ')'); return program.dealDamage(program, target); },
    "damage": 2,
    "range": 1,
    "target": "enemy"
  };
  
  hooks.beforeEach(function(assert) {
    this.action = new Action('Slice', action_data);
  });

  QUnit.test("constructor", function( assert ) {
    assert.equal(this.action.name, 'Slice');
    assert.equal(this.action.target, action_data.target);
    assert.equal(this.action.range, action_data.range);
    assert.equal(this.action.damage, action_data.damage);
    assert.equal(this.action.desc, action_data.desc);
    assert.equal(this.action.perform, action_data.perform);
  });

  QUnit.test("htmlDesc()", function( assert ) {
    assert.equal(this.action.htmlDesc(), '<div><b>Slice</b></div><div>Range: 1</div><div>Damage: 2</div><p>Deletes 2 Sectors From Target</p>');
  });
});