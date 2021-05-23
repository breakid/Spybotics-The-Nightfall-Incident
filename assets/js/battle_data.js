var GAME_DATA = GAME_DATA || {};

// TODO?: Add a "nodes_to_unlock" attribute to each battle to eliminate the need to specifically unlocked nodes using the action function

GAME_DATA.BATTLES = {
  'tutorial': {
    'grid': [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
      [1, 1, 2, 1, 1, 1, 1, 1, 1, 1], 
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
      [1, 1, 1, 2, 1, 1, 1, 1, 1, 1], 
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    'programs': [
      {
        "blocks": [{'x': 6, 'y': 4}, {'x': 6, 'y': 3}, {'x': 6, 'y': 2}],
        "name": "Sentinel"
      }
    ],
    "reward": 0
  },
  "Eastern Distribution Site": {
    "action_success": function() {
      // Unlock next nodes
      netmap.nodes['Clinical Trial Database'].unlock();

      // Trigger conversation
      UI.DIALOG.loadDialog('2104');
    },
    "grid": [
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
    ],
    "programs": [
      {
        "blocks": [{'x': 3, 'y': 1}],
        "name": "Guard Dog"
      },
      {
        "blocks": [{'x': 2, 'y': 2}],
        "name": "Guard Dog"
      },
      {
        "blocks": [{'x': 0, 'y': 3}],
        "name": "Guard Dog"
      },
      {
        "blocks": [{'x': 1, 'y': 4}],
        "name": "Guard Dog"
      },
      {
        "blocks": [{'x': 2, 'y': 5}],
        "name": "Guard Dog"
      },
      {
        "blocks": [{'x': 1, 'y': 7}],
        "name": "Guard Dog"
      },
      {
        "blocks": [{'x': 3, 'y': 9}],
        "name": "Guard Dog"
      }
    ],
    "reward": 600
  },
  "Sydney Project": {
    "action_success": function() {
      // Trigger conversation
      UI.DIALOG.loadDialog('1040');
    },
    "grid": [
      [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 4, 0],
      [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
      [1, 1, 2, 1, 1, 1, 1, 0, 0, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 3, 1],
      [1, 1, 2, 1, 1, 1, 1, 0, 0, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 4, 0],
      [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0]
    ],
    "player_programs": [
      {
        "blocks": [{'x': 0, 'y': 4}],
        "name": "Bit-Man"
      }
    ],
    "programs": [
      {
        "blocks": [{'x': 6, 'y': 3}],
        "name": "Sentinel"
      },
      {
        "blocks": [{'x': 6, 'y': 5}],
        "name": "Sentinel"
      },
      {
        "blocks": [{'x': 9, 'y': 4}],
        "name": "Sentinel"
      }
    ],
    "reward": 400
  },
  "Tech Support": {
    "action_success": function() {
      // Unlock next nodes
      netmap.nodes['Club Center'].unlock();

      // Trigger conversation
      UI.DIALOG.loadDialog('1020');
    },
    "grid": [
      [0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 2, 0, 0, 2, 1, 1, 1, 0]
    ],
    "programs": [
      {
        "blocks": [{'x': 3, 'y': 1}],
        "name": "Sentinel"
      },
      {
        "blocks": [{'x': 8, 'y': 1}],
        "name": "Sentinel"
      },
    ],
    "reward": 400
  },
  "PR Database": {
    "action_success": function() {
      // Unlock next nodes
      netmap.nodes['Memory Tower#43'].unlock();
      netmap.nodes['Employee Records'].unlock();

      // Trigger conversation
      UI.DIALOG.loadDialog('21');
    },
    "grid": [
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 1, 1, 1, 1, 4, 1, 1],
      [1, 1, 4, 1, 0, 1, 1, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0],
      [0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
      [0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 4, 1],
      [0, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1]
    ],
    "programs": [
      {
        "blocks": [{'x': 1, 'y': 2}],
        "name": "Watchman"
      },
      {
        "blocks": [{'x': 10, 'y': 1}],
        "name": "Guard Pup"
      },
      {
        "blocks": [{'x': 10, 'y': 6}],
        "name": "Sentinel"
      }
    ],
    "reward": 600,
  },
  "Memory Tower#43": {
    "action_success": function() {
      
      netmap.nodes['Government Affairs'].unlock();
      netmap.nodes['Sydney Project'].unlock();
      netmap.nodes['Eastern Distribution Site'].unlock();
      
      // Trigger conversation
      UI.DIALOG.loadDialog('1030');
    },
    "grid": [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
      [0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0]
    ],
    "programs": [
      {
        "blocks": [{'x': 9, 'y': 1}],
        "name": "Watchman"
      },
      {
        "blocks": [{'x': 10, 'y': 2}],
        "name": "Watchman"
      },
      {
        "blocks": [{'x': 7, 'y': 2}],
        "name": "Guard Pup"
      },
      {
        "blocks": [{'x': 9, 'y': 3}],
        "name": "Sentinel"
      },
      {
        "blocks": [{'x': 10, 'y': 4}],
        "name": "Guard Pup"
      }
    ],
    "reward": 400
  },
  "HMO Procedure Management": {
    "action_success": function() {
      // Trigger conversation
      UI.DIALOG.loadDialog('2196');
    },
    "grid": [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 3, 1, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    "programs": [
      {
        "blocks": [{'x': 0, 'y': 2}],
        "name": "Sonar"
      },
      {
        "blocks": [{'x': 5, 'y': 1}],
        "name": "Sensor"
      },
      {
        "blocks": [{'x': 6, 'y': 1}],
        "name": "Sensor"
      },
      {
        "blocks": [{'x': 7, 'y': 1}],
        "name": "Sensor"
      },
      {
        "blocks": [{'x': 8, 'y': 1}],
        "name": "Sensor"
      },
      {
        "blocks": [{'x': 9, 'y': 1}],
        "name": "Sensor"
      },
      {
        "blocks": [{'x': 5, 'y': 3}],
        "name": "Sensor"
      },
      {
        "blocks": [{'x': 6, 'y': 3}],
        "name": "Sensor"
      },
      {
        "blocks": [{'x': 7, 'y': 3}],
        "name": "Sensor"
      },
      {
        "blocks": [{'x': 8, 'y': 3}],
        "name": "Sensor"
      },
      {
        "blocks": [{'x': 9, 'y': 3}],
        "name": "Sensor"
      }
    ],
    "reward": 800
  },
  "Government Affairs": {
    "action_success": function() {
      // Trigger conversation
      UI.DIALOG.loadDialog('1027');
    },
    "grid": [
      [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 0],
      [0, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 0],
      [0, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0]
    ],
    "programs": [
      {
        "blocks": [{'x': 2, 'y': 0}],
        "name": "Guard Pup"
      },
      {
        "blocks": [{'x': 11, 'y': 0}],
        "name": "Guard Pup"
      },
      {
        "blocks": [{'x': 0, 'y': 2}],
        "name": "Guard Pup"
      },
      {
        "blocks": [{'x': 13, 'y': 2}],
        "name": "Guard Pup"
      },
      {
        "blocks": [{'x': 0, 'y': 8}],
        "name": "Guard Pup"
      },
      {
        "blocks": [{'x': 13, 'y': 8}],
        "name": "Guard Pup"
      },
      {
        "blocks": [{'x': 2, 'y': 10}],
        "name": "Guard Pup"
      },
      {
        "blocks": [{'x': 11, 'y': 10}],
        "name": "Guard Pup"
      }
    ],
    "reward": 400
  },
  "Clinical Trial Database": {
    "action_success": function() {
      // Unlock next nodes
      netmap.nodes['Toy Properties'].unlock();
      
      // Trigger conversation
      UI.DIALOG.loadDialog('2100');
    },
    "grid": [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 3],
      [0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [0, 1, 0, 0, 1, 0, 0, 0, 4, 0, 0, 1, 1, 1],
      [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 4, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 4, 4],
      [0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 4, 4],
      [2, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 4, 4],
      [1, 1, 1, 0, 0, 1, 4, 1, 1, 1, 0, 1, 4, 4],
      [1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4, 4]
    ],
    "programs": [
      {
        "blocks": [{'x': 1, 'y': 1}],
        "name": "Sensor"
      },
      {
        "blocks": [{'x': 4, 'y': 1}],
        "name": "Sensor"
      },
      {
        "blocks": [{'x': 5, 'y': 5}],
        "name": "Sensor"
      },
      {
        "blocks": [{'x': 8, 'y': 5}],
        "name": "Sensor"
      },
      {
        "blocks": [{'x': 12, 'y': 1}],
        "name": "Sensor"
      },
      {
        "blocks": [{'x': 11, 'y': 6}],
        "name": "Warden++"
      }
    ],
    "reward": 600
  },
  "Toy Properties": {
    "action_success": function() {
      // Unlock next nodes
      netmap.nodes['Ready To Ware'].unlock();
      netmap.nodes['Off-shore Transactions'].unlock();
      
      // Trigger conversation
      UI.DIALOG.loadDialog('2113');
    },
    "grid": [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    "programs": [
      {
        "blocks": [{'x': 10, 'y': 1}],
        "name": "Attack Dog"
      },
      {
        "blocks": [{'x': 1, 'y': 7}],
        "name": "Attack Dog"
      },
      {
        "blocks": [{'x': 5, 'y': 4}, {'x': 6, 'y': 4}, {'x': 6, 'y': 3}, {'x': 5, 'y': 3}, {'x': 4, 'y': 3}, {'x': 4, 'y': 4}, {'x': 4, 'y': 5}, {'x': 5, 'y': 5}, {'x': 6, 'y': 5}, {'x': 7, 'y': 5}, {'x': 7, 'y': 4}, {'x': 7, 'y': 3}],
        "name": "Fire Wall"
      },
    ],
    "reward": 800
  },
  "Off-Shore Transactions": {
    "action_success": function() {
      // Unlock next nodes
      netmap.nodes['Vaccine Database'].unlock();
      
      // Trigger conversation
      UI.DIALOG.loadDialog('21');
    },
    "grid": [
      [1, 1, 1, 1, 2, 0, 0, 1, 1, 0, 0, 0, 0, 0],
      [1, 2, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0],
      [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
      [2, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1],
      [0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0]
    ],
    "programs": [
      {
        "blocks": [{'x': 9, 'y': 2}],
        "name": "Watchman"
      },
      {
        "blocks": [{'x': 7, 'y': 4}],
        "name": "Sensor"
      },
      {
        "blocks": [{'x': 9, 'y': 5}],
        "name": "Watchman"
      },
      {
        "blocks": [{'x': 3, 'y': 7}],
        "name": "Sensor"
      },
      {
        "blocks": [{'x': 6, 'y': 8}],
        "name": "Watchman"
      },
      {
        "blocks": [{'x': 10, 'y': 8}],
        "name": "Sensor"
      },
      {
        "blocks": [{'x': 4, 'y': 9}],
        "name": "Watchman"
      },
      {
        "blocks": [{'x': 7, 'y': 9}],
        "name": "Sensor"
      }
    ],
    "reward": 800
  },
  "Vaccine Database": {
    "action_success": function() {
      // Unlock next nodes
      netmap.nodes['HMO Procedure Management'].unlock();
      
      // Trigger conversation
      UI.DIALOG.loadDialog('2134');
    },
    "grid": [
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 2, 1, 2, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 2, 1, 2, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1]
    ],
    "programs": [
      {
        "blocks": [{'x': 0, 'y': 0}, {'x': 0, 'y': 1}, {'x': 0, 'y': 2}],
        "name": "Sentienl 3.0"
      },
      {
        "blocks": [{'x': 2, 'y': 0}, {'x': 2, 'y': 1}, {'x': 2, 'y': 2}],
        "name": "Sentienl 3.0"
      },
      {
        "blocks": [{'x': 4, 'y': 0}, {'x': 4, 'y': 1}, {'x': 4, 'y': 2}],
        "name": "Sentienl 3.0"
      },
      {
        "blocks": [{'x': 9, 'y': 9}, {'x': 9, 'y': 10}, {'x': 10, 'y': 10}, {'x': 10, 'y': 9}, {'x': 10, 'y': 8}],
        "name": "Warden+"
      },
      {
        "blocks": [{'x': 13, 'y': 9}, {'x': 13, 'y': 10}, {'x': 12, 'y': 10}, {'x': 12, 'y': 9}, {'x': 12, 'y': 8}],
        "name": "Warden+"
      }
    ],
    "reward": 800
  },
  "Franchise Office": {
    "action_success": function() {
      // Unlock next nodes
      netmap.nodes['Fiduciary Node'].unlock();
      netmap.nodes['Market Research'].unlock();
      
      // Trigger conversation
      UI.DIALOG.loadDialog('2161');
    },
    "grid": [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    "programs": [
      {
        "blocks": [{'x': 1, 'y': 1}, {'x': 2, 'y': 1}, {'x': 2, 'y': 2}, {'x': 3, 'y': 2}],
        "name": "Warden"
      },
      {
        "blocks": [{'x': 4, 'y': 1}, {'x': 4, 'y': 2}],
        "name": "Sentinel"
      },
      {
        "blocks": [{'x': 1, 'y': 3}, {'x': 1, 'y': 4}, {'x': 2, 'y': 4}, {'x': 3, 'y': 4}],
        "name": "Warden"
      },
      {
        "blocks": [{'x': 4, 'y': 4}, {'x': 5, 'y': 4}, {'x': 5, 'y': 5}],
        "name": "Sentinel"
      },
      {
        "blocks": [{'x': 1, 'y': 6}, {'x': 1, 'y': 5}, {'x': 2, 'y': 5}],
        "name": "Sentinel"
      },
      {
        "blocks": [{'x': 1, 'y': 7}, {'x': 2, 'y': 7}, {'x': 2, 'y': 6}, {'x': 3, 'y': 6}],
        "name": "Warden"
      },
      {
        "blocks": [{'x': 2, 'y': 8}, {'x': 3, 'y': 8}, {'x': 4, 'y': 8}],
        "name": "Sentinel"
      }
    ],
    "reward": 600
  },
  "Proprietary Research": {
    "action_success": function() {
      // Trigger conversation
      UI.DIALOG.loadDialog('2308');
    },
    "grid": [
      [4, 4, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 3],
      [4, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
      [1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
      [2, 1, 2, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1],
      [1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 4, 4],
      [2, 1, 2, 0, 0, 1, 1, 1, 1, 1, 0, 1, 4, 4]
    ],
    "programs": [
      {
        "blocks": [{'x': 2, 'y': 0}],
        "name": "Radar"
      },
      {
        "blocks": [{'x': 5, 'y': 0}],
        "name": "Attack Dog"
      },
      {
        "blocks": [{'x': 11, 'y': 0}],
        "name": "Radar"
      },
      {
        "blocks": [{'x': 1, 'y': 1}],
        "name": "Radar"
      },
      {
        "blocks": [{'x': 12, 'y': 1}],
        "name": "Radar"
      },
      {
        "blocks": [{'x': 0, 'y': 2}],
        "name": "Radar"
      },
      {
        "blocks": [{'x': 11, 'y': 2}],
        "name": "Radar"
      },
      {
        "blocks": [{'x': 13, 'y': 2}],
        "name": "Radar"
      },
      {
        "blocks": [{'x': 6, 'y': 5}],
        "name": "Sensor"
      },
      {
        "blocks": [{'x': 7, 'y': 5}],
        "name": "Sensor"
      },
      {
        "blocks": [{'x': 13, 'y': 5}],
        "name": "Watchman X"
      },
      {
        "blocks": [{'x': 13, 'y': 6}],
        "name": "Watchman X"
      },
      {
        "blocks": [{'x': 13, 'y': 8}],
        "name": "Radar"
      },
      {
        "blocks": [{'x': 12, 'y': 9}],
        "name": "Radar"
      },
      {
        "blocks": [{'x': 8, 'y': 10}],
        "name": "Attack Dog"
      },
      {
        "blocks": [{'x': 11, 'y': 10}],
        "name": "Radar"
      },
    ],
    "reward": 1000
  },
  "Treasury Funds": {
    "action_success": function() {
      // Unlock next nodes
      netmap.nodes['Proprietary Research'].unlock();
      netmap.nodes['Privileged Accounts'].unlock();
      
      // Trigger conversation
      UI.DIALOG.loadDialog('2295');
    },
    "grid": [
      [4, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 4],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [4, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 4]
    ],
    "programs": [
      {
        "blocks": [{'x': 2, 'y': 0}],
        "name": "Guard Pup"
      },
      {
        "blocks": [{'x': 3, 'y': 0}],
        "name": "Guard Pup"
      },
      {
        "blocks": [{'x': 5, 'y': 0}],
        "name": "Sentinel"
      },
      {
        "blocks": [{'x': 6, 'y': 0}],
        "name": "Sentinel"
      },
      {
        "blocks": [{'x': 7, 'y': 0}],
        "name": "Sentinel"
      },
      {
        "blocks": [{'x': 8, 'y': 0}],
        "name": "Sentinel"
      },
      {
        "blocks": [{'x': 10, 'y': 0}],
        "name": "Guard Pup"
      },
      {
        "blocks": [{'x': 11, 'y': 0}],
        "name": "Guard Pup"
      },
      {
        "blocks": [{'x': 0, 'y': 2}],
        "name": "Guard Pup"
      },
      {
        "blocks": [{'x': 13, 'y': 2}],
        "name": "Guard Pup"
      },
      {
        "blocks": [{'x': 0, 'y': 4}],
        "name": "Watchman"
      },
      {
        "blocks": [{'x': 13, 'y': 4}],
        "name": "Watchman"
      },
      {
        "blocks": [{'x': 0, 'y': 5}],
        "name": "Watchman"
      },
      {
        "blocks": [{'x': 13, 'y': 5}],
        "name": "Watchman"
      },
      {
        "blocks": [{'x': 0, 'y': 6}],
        "name": "Watchman"
      },
      {
        "blocks": [{'x': 13, 'y': 6}],
        "name": "Watchman"
      },
      {
        "blocks": [{'x': 0, 'y': 8}],
        "name": "Guard Pup"
      },
      {
        "blocks": [{'x': 13, 'y': 8}],
        "name": "Guard Pup"
      },
      {
        "blocks": [{'x': 2, 'y': 10}],
        "name": "Guard Pup"
      },
      {
        "blocks": [{'x': 3, 'y': 10}],
        "name": "Guard Pup"
      },
      {
        "blocks": [{'x': 5, 'y': 10}],
        "name": "Sentinel"
      },
      {
        "blocks": [{'x': 6, 'y': 10}],
        "name": "Sentinel"
      },
      {
        "blocks": [{'x': 7, 'y': 10}],
        "name": "Sentinel"
      },
      {
        "blocks": [{'x': 8, 'y': 10}],
        "name": "Sentinel"
      },
      {
        "blocks": [{'x': 10, 'y': 10}],
        "name": "Guard Pup"
      },
      {
        "blocks": [{'x': 11, 'y': 10}],
        "name": "Guard Pup"
      }
    ],
    "reward": 1000
  },
  "Privileged Accounts": {
    "action_success": function() {
      // Trigger conversation
      UI.DIALOG.loadDialog('2310');
    },
    "grid": [
      [1, 1, 1, 0, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1],
      [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 4, 1, 0, 0, 1, 4, 4, 1, 1, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [2, 1, 1, 2, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
      [2, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
      [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 2, 2, 2, 0, 0, 1, 4, 4, 1, 1, 1, 1, 1]
    ],
        "programs": [
      {
        "blocks": [{'x': 1, 'y': 0}],
        "name": "Warden++"
      },
      {
        "blocks": [{'x': 2, 'y': 0}],
        "name": "Warden++"
      },
      {
        "blocks": [{'x': 4, 'y': 0}],
        "name": "Warden++"
      },
      {
        "blocks": [{'x': 5, 'y': 0}],
        "name": "Warden++"
      },
      {
        "blocks": [{'x': 11, 'y': 0}],
        "name": "Warden++"
      },
      {
        "blocks": [{'x': 1, 'y': 2}],
        "name": "Watchman SP"
      },
      {
        "blocks": [{'x': 5, 'y': 2}],
        "name": "Watchman SP"
      },
      {
        "blocks": [{'x': 6, 'y': 2}],
        "name": "Watchman SP"
      },
      {
        "blocks": [{'x': 10, 'y': 2}],
        "name": "Watchman SP"
      },
      {
        "blocks": [{'x': 13, 'y': 2}],
        "name": "Warden++"
      },
      {
        "blocks": [{'x': 11, 'y': 3}],
        "name": "Watchman SP"
      },
      {
        "blocks": [{'x': 13, 'y': 5}],
        "name": "Warden++"
      },
      {
        "blocks": [{'x': 10, 'y': 6}],
        "name": "Watchman SP"
      },
      {
        "blocks": [{'x': 13, 'y': 6}],
        "name": "Warden++"
      },
      {
        "blocks": [{'x': 10, 'y': 7}],
        "name": "Watchman SP"
      },
      {
        "blocks": [{'x': 11, 'y': 9}],
        "name": "Watchman SP"
      },
      {
        "blocks": [{'x': 13, 'y': 9}],
        "name": "Warden++"
      },
      {
        "blocks": [{'x': 13, 'y': 10}],
        "name": "Warden++"
      }
    ],
    "reward": 1000
  },
  "S.A. Archives": {
    "action_success": function() {
      // Trigger conversation
      UI.DIALOG.loadDialog('2248');
    },
    "grid": [
      [1, 2, 1, 1, 0, 0, 0, 0, 0, 4, 4],
      [2, 2, 1, 1, 0, 0, 1, 1, 0, 1, 1],
      [1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
      [0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1],
      [0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1],
      [0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
      [0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [4, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
      [4, 1, 0, 1, 1, 1, 1, 1, 1, 1, 3]
    ],
    "programs": [
      {
        "blocks": [{'x': 6, 'y': 5}, {'x': 5, 'y': 5}, {'x': 5, 'y': 6}, {'x': 4, 'y': 6}, {'x': 4, 'y': 7}, {'x': 5, 'y': 7}, {'x': 6, 'y': 7}, {'x': 6, 'y': 6}, {'x': 7, 'y': 6}, {'x': 7, 'y': 5}, {'x': 7, 'y': 4}, {'x': 6, 'y': 4}, {'x': 5, 'y': 4}, {'x': 5, 'y': 3}, {'x': 4, 'y': 3}, {'x': 4, 'y': 4}, {'x': 4, 'y': 5}, {'x': 3, 'y': 5}, {'x': 3, 'y': 4}, {'x': 3, 'y': 3}],
        "name": "Fire Wall"
      },
      {
        "blocks": [{'x': 7, 'y': 7}],
        "name": "Sonar"
      },
      {
        "blocks": [{'x': 9, 'y': 3}],
        "name": "Watchman SP"
      },
      {
        "blocks": [{'x': 9, 'y': 4}],
        "name": "Watchman SP"
      },
      {
        "blocks": [{'x': 3, 'y': 9}],
        "name": "Watchman SP"
      },
      {
        "blocks": [{'x': 4, 'y': 9}],
        "name": "Watchman SP"
      }
    ],
    "reward": 800
  },
  "Sub-Station Gamma": {
    "action_success": function() {
      // Unlock next nodes
      netmap.nodes['S.A. Archives'].unlock();
      
      // Trigger conversation
      UI.DIALOG.loadDialog('2242');
    },
    "grid": [
      [0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 4, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [2, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 1, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 1, 1, 4, 1, 0, 1, 2],
      [0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0]
    ],
    "programs": [
      {
        "blocks": [{'x': 5, 'y': 0}],
        "name": "Attack Dog"
      },
      {
        "blocks": [{'x': 11, 'y': 1}],
        "name": "Sentinel 3.0"
      },
      {
        "blocks": [{'x': 13, 'y': 1}],
        "name": "Sentinel 3.0"
      },
      {
        "blocks": [{'x': 13, 'y': 3}],
        "name": "Sentinel 3.0"
      },
      {
        "blocks": [{'x': 2, 'y': 8}],
        "name": "Sentinel 3.0"
      },
      {
        "blocks": [{'x': 3, 'y': 9}],
        "name": "Sentinel 3.0"
      },
      {
        "blocks": [{'x': 7, 'y': 9}],
        "name": "Attack Dog"
      },
      {
        "blocks": [{'x': 5, 'y': 10}],
        "name": "Sentinel 3.0"
      }
    ],
    "reward": 800
  },
  "Fiduciary Node": {
    "action_success": function() {
      // Unlock next nodes
      netmap.nodes['Sub-Station Gamma'].unlock();
      netmap.nodes['Re-Insurance Database'].unlock();
      
      // Trigger conversation
      UI.DIALOG.loadDialog('2202');
    },
    "grid": [
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 2, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    "programs": [
      {
        "blocks": [{'x': 0, 'y': 0}, {'x': 0, 'y': 1}, {'x': 1, 'y': 1}, {'x': 1, 'y': 0}],
        "name": "Sentinel 2.0"
      },
      {
        "blocks": [{'x': 8, 'y': 0}, {'x': 8, 'y': 1}, {'x': 7, 'y': 1}, {'x': 7, 'y': 0}],
        "name": "Sentinel 2.0"
      },
      {
        "blocks": [{'x': 0, 'y': 4}, {'x': 0, 'y': 3}, {'x': 1, 'y': 3}, {'x': 1, 'y': 4}],
        "name": "Sentinel 2.0"
      },
      {
        "blocks": [{'x': 8, 'y': 4}, {'x': 8, 'y': 3}, {'x': 7, 'y': 3}, {'x': 7, 'y': 4}],
        "name": "Sentinel 2.0"
      }
    ],
    "reward": 800
  },
  "Re-insurance Database": {
    "action_success": function() {
      // Trigger conversation
      UI.DIALOG.loadDialog('2240');
    },
    "grid": [
      [3, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 0, 0, 0, 4, 4, 4, 4, 0, 0, 1],
      [1, 1, 1, 1, 0, 0, 0, 4, 1, 1, 4, 0, 0, 1],
      [1, 1, 1, 1, 0, 0, 0, 4, 4, 4, 4, 0, 0, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    "programs": [
      {
        "blocks": [{'x': 1, 'y': 0}],
        "name": "Attack Dog"
      },
      {
        "blocks": [{'x': 2, 'y': 0}],
        "name": "Attack Dog"
      },
      {
        "blocks": [{'x': 2, 'y': 1}],
        "name": "Guard Dog"
      },
      {
        "blocks": [{'x': 1, 'y': 1}],
        "name": "Guard Dog"
      },
      {
        "blocks": [{'x': 0, 'y': 2}],
        "name": "Guard Dog"
      },
      {
        "blocks": [{'x': 3, 'y': 2}],
        "name": "Guard Dog"
      },
      {
        "blocks": [{'x': 13, 'y': 1}],
        "name": "Radar"
      },
      {
        "blocks": [{'x': 8, 'y': 5}],
        "name": "Radar"
      },
      {
        "blocks": [{'x': 9, 'y': 5}],
        "name": "Radar"
      },
      {
        "blocks": [{'x': 13, 'y': 10}],
        "name": "Radar"
      }
    ],
    "reward": 800
  },
  "R&D Backup": {
    "action_success": function() {
      // Unlock next nodes
      netmap.nodes['System Core'].unlock();
      
      // Trigger conversation
      UI.DIALOG.loadDialog('2267');
    },
    "grid": [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
      [1, 0, 1, 1, 2, 1, 1, 2, 1, 1, 0, 1],
      [1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1],
      [1, 0, 1, 1, 2, 1, 1, 2, 1, 1, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    "programs": [
      {
        "blocks": [{'x': 1, 'y': 0}],
        "name": "Mandelbug "
      },
      {
        "blocks": [{'x': 10, 'y': 0}],
        "name": "Mandelbug "
      },
      {
        "blocks": [{'x': 0, 'y': 1}],
        "name": "Mandelbug "
      },
      {
        "blocks": [{'x': 11, 'y': 1}],
        "name": "Mandelbug "
      },
      {
        "blocks": [{'x': 0, 'y': 9}],
        "name": "Mandelbug "
      },
      {
        "blocks": [{'x': 11, 'y': 9}],
        "name": "Mandelbug "
      },
      {
        "blocks": [{'x': 1, 'y': 10}],
        "name": "Mandelbug "
      },
      {
        "blocks": [{'x': 10, 'y': 10}],
        "name": "Mandelbug "
      }
    ],
    "reward": 1000
  },
  "System Core": {
    "action_success": function() {
      // Unlock next nodes
      netmap.nodes['Executive Protocol'].unlock();
      netmap.nodes['Unknown Node'].unlock();
      
      // Trigger conversation
      UI.DIALOG.loadDialog('2275');
    },
    "grid": [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 0],
      [1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 2, 2, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1]
    ],
    "programs": [
      {
        "blocks": [{'x': 2, 'y': 0}],
        "name": "Sentinel 3.0"
      },
      {
        "blocks": [{'x': 4, 'y': 0}],
        "name": "Watchman SP"
      },
      {
        "blocks": [{'x': 8, 'y': 0}],
        "name": "Watchman SP"
      },
      {
        "blocks": [{'x': 11, 'y': 0}],
        "name": "Sentinel 3.0"
      },
      {
        "blocks": [{'x': 1, 'y': 1}],
        "name": "Watchman SP"
      },
      {
        "blocks": [{'x': 7, 'y': 1}],
        "name": "Sentinel 3.0"
      },
      {
        "blocks": [{'x': 13, 'y': 1}],
        "name": "Watchman SP"
      },
      {
        "blocks": [{'x': 5, 'y': 2}],
        "name": "Watchman SP"
      },
      {
        "blocks": [{'x': 9, 'y': 2}],
        "name": "Watchman SP"
      },
      {
        "blocks": [{'x': 11, 'y': 2}],
        "name": "Watchman SP"
      }
    ],
    "reward": 1000
  },
  "Executive Protocol": {
    "action_success": function() {
      // Unlock next nodes
      netmap.nodes['Treasury Funds'].unlock();
      
      // Trigger conversation
      UI.DIALOG.loadDialog('2281');
    },
    "grid": [
      [1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1]
    ],
    "programs": [
      {
        "blocks": [{'x': 1, 'y': 5}],
        "name": "Guard Dog"
      },
      {
        "blocks": [{'x': 5, 'y': 5}],
        "name": "Guard Dog"
      },
      {
        "blocks": [{'x': 8, 'y': 5}],
        "name": "Guard Dog"
      },
      {
        "blocks": [{'x': 12, 'y': 5}],
        "name": "Guard Dog"
      },
      {
        "blocks": [{'x': 2, 'y': 7}, {'x': 1, 'y': 7}, {'x': 0, 'y': 7}, {'x': 0, 'y': 8}, {'x': 1, 'y': 8}, {'x': 2, 'y': 8}, {'x': 3, 'y': 8}, {'x': 4, 'y': 8}, {'x': 4, 'y': 7}, {'x': 3, 'y': 7}, {'x': 3, 'y': 6}],
        "name": "Fire Wall"
      },
      {
        "blocks": [{'x': 11, 'y': 7}, {'x': 12, 'y': 7}, {'x': 13, 'y': 7}, {'x': 13, 'y': 8}, {'x': 12, 'y': 8}, {'x': 11, 'y': 8}, {'x': 10, 'y': 8}, {'x': 9, 'y': 8}, {'x': 9, 'y': 7}, {'x': 10, 'y': 7}, {'x': 10, 'y': 6}],
        "name": "Fire Wall"
      },
      {
        "blocks": [{'x': 0, 'y': 10}, {'x': 1, 'y': 10}, {'x': 2, 'y': 10}, {'x': 3, 'y': 10}, {'x': 4, 'y': 10}, {'x': 5, 'y': 10}, {'x': 5, 'y': 9}],
        "name": "Sumo "
      },
      {
        "blocks": [{'x': 6, 'y': 9}],
        "name": "Radar"
      },
      {
        "blocks": [{'x': 7, 'y': 9}],
        "name": "Radar"
      },
      {
        "blocks": [{'x': 13, 'y': 10}, {'x': 12, 'y': 10}, {'x': 11, 'y': 10}, {'x': 10, 'y': 10}, {'x': 9, 'y': 10}, {'x': 8, 'y': 10}, {'x': 8, 'y': 9}],
        "name": "Sumo "
      },
    ],
    "reward": 1000
  },
  "Unknown Node": {
    "action_success": function() {
      // Trigger conversation
      UI.DIALOG.loadDialog('2320');
    },
    "action_failure": function() {
      // Trigger conversation
      UI.DIALOG.loadDialog('2314');
    },
    "grid": [
      [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    "programs": [
      {
        "blocks": [{'x': 0, 'y': 0}],
        "name": "Attack Dog"
      },
      {
        "blocks": [{'x': 1, 'y': 0}],
        "name": "Attack Dog"
      },
      {
        "blocks": [{'x': 2, 'y': 0}],
        "name": "Warden++"
      },
      {
        "blocks": [{'x': 3, 'y': 0}],
        "name": "Warden++"
      },
      {
        "blocks": [{'x': 4, 'y': 0}],
        "name": "Warden++"
      },
      {
        "blocks": [{'x': 5, 'y': 0}],
        "name": "Attack Dog"
      },
      {
        "blocks": [{'x': 6, 'y': 0}],
        "name": "Attack Dog"
      },
      {
        "blocks": [{'x': 0, 'y': 1}],
        "name": "Watchman SP"
      },
      {
        "blocks": [{'x': 1, 'y': 1}],
        "name": "Watchman SP"
      },
      {
        "blocks": [{'x': 2, 'y': 1}],
        "name": "Warden+"
      },
      {
        "blocks": [{'x': 3, 'y': 1}],
        "name": "Warden+"
      },
      {
        "blocks": [{'x': 4, 'y': 1}],
        "name": "Warden+"
      },
      {
        "blocks": [{'x': 5, 'y': 1}],
        "name": "Watchman SP"
      },
      {
        "blocks": [{'x': 6, 'y': 1}],
        "name": "Watchman SP"
      },
      {
        "blocks": [{'x': 8, 'y': 1}],
        "name": "Radar"
      },
      {
        "blocks": [{'x': 8, 'y': 3}],
        "name": "Radar"
      },
      {
        "blocks": [{'y': 0, 'x': 13}, {'y': 1, 'x': 13}, {'y': 2, 'x': 13}, {'y': 3, 'x': 13}, {'y': 4, 'x': 13}, {'y': 4, 'x': 12}, {'y': 3, 'x': 12}, {'y': 2, 'x': 12}, {'y': 1, 'x': 12}, {'y': 0, 'x': 12}, {'y': 0, 'x': 11}, {'y': 1, 'x': 11}, {'y': 2, 'x': 11}, {'y': 3, 'x': 11}, {'y': 4, 'x': 11}, {'y': 4, 'x': 10}, {'y': 3, 'x': 10}, {'y': 2, 'x': 10}, {'y': 1, 'x': 10}, {'y': 0, 'x': 10}, {'y': 0, 'x': 9}, {'y': 1, 'x': 9}],
        "name": "Boss"
      },
      {
        "blocks": [{'x': 10, 'y': 5}],
        "name": "Radar"
      },
      {
        "blocks": [{'x': 12, 'y': 5}],
        "name": "Radar"
      },
      {
        "blocks": [{'y': 7, 'x': 13}, {'y': 8, 'x': 13}, {'y': 8, 'x': 12}, {'y': 7, 'x': 12}, {'y': 7, 'x': 11}, {'y': 8, 'x': 11}, {'y': 8, 'x': 10}, {'y': 7, 'x': 10}, {'y': 7, 'x': 9}, {'y': 8, 'x': 9}],
        "name": "Sumo "
      },
      {
        "blocks": [{'y': 10, 'x': 13}, {'y': 9, 'x': 13}, {'y': 9, 'x': 12}, {'y': 10, 'x': 12}, {'y': 10, 'x': 11}, {'y': 9, 'x': 11}, {'y': 9, 'x': 10}, {'y': 10, 'x': 10}, {'y': 10, 'x': 9}, {'y': 9, 'x': 9}],
        "name": "Sumo "
      },
    ],
    "reward": 1000
  },
  "Market Research": {
    "action_success": function() {
      // Unlock next nodes
      netmap.nodes['Lucky Jungle Central'].unlock();
      netmap.nodes['Beverage Subsidiaries'].unlock();
      netmap.nodes['Flavor Evaluation Lab'].unlock();
      
      // Trigger conversation
      UI.DIALOG.loadDialog('2177');
    },
    "grid": [
      [1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1],
      [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    "programs": [
      {
        "blocks": [{'x': 0, 'y': 10}, {'x': 1, 'y': 10}, {'x': 1, 'y': 9}],
        "name": "Watchman SP"
      },
      {
        "blocks": [{'x': 2, 'y': 10}, {'x': 2, 'y': 9}],
        "name": "Watchman SP"
      },
      {
        "blocks": [{'x': 3, 'y': 10}],
        "name": "Watchman SP"
      },
      {
        "blocks": [{'x': 11, 'y': 0}, {'x': 11, 'y': 1}, {'x': 10, 'y': 1}],
        "name": "Watchman SP"
      },
      {
        "blocks": [{'x': 11, 'y': 2}, {'x': 10, 'y': 2}],
        "name": "Watchman SP"
      },
      {
        "blocks": [{'x': 11, 'y': 3}],
        "name": "Watchman SP"
      },
      {
        "blocks": [{'x': 11, 'y': 8}, {'x': 11, 'y': 7}],
        "name": "Watchman SP"
      },
      {
        "blocks": [{'x': 11, 'y':10}, {'x': 11, 'y': 9}, {'x': 10, 'y': 9}],
        "name": "Watchman SP"
      },
      {
        "blocks": [{'x': 10, 'y':10}, {'x': 9, 'y': 10}],
        "name": "Watchman SP"
      },
    ],
    "reward": 800
  },
  "Lucky Jungle Central": {
    "action_success": function() {
      // Trigger conversation
      UI.DIALOG.loadDialog('2237');
    },
    "grid": [
      [1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1],
      [1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1]
    ],
    "programs": [
      {
        "blocks": [{'x': 4, 'y': 3}, {'x': 3, 'y': 3}, {'x': 2, 'y': 3}, {'x': 2, 'y': 4}, {'x': 3, 'y': 4}, {'x': 4, 'y': 4}, {'x': 5, 'y': 4}, {'x': 6, 'y': 4}, {'x': 7, 'y': 4}, {'x': 8, 'y': 4}, {'x': 9, 'y': 4}, {'x': 10, 'y': 4}, {'x': 11, 'y': 4}, {'x': 11, 'y': 3}, {'x': 10, 'y': 3}, {'x': 9, 'y': 3}, {'x': 8, 'y': 3}, {'x': 7, 'y': 3}, {'x': 6, 'y': 3}, {'x': 5, 'y': 3}],
        "name": "Fire Wall"
      },
      {
        "blocks": [{'x': 1, 'y': 7}, {'x': 1, 'y': 6}, {'x': 2, 'y': 6}, {'x': 2, 'y': 7}, {'x': 2, 'y': 8}, {'x': 1, 'y': 8}, {'x': 0, 'y': 8}, {'x': 0, 'y': 7}, {'x': 0, 'y': 6}, {'x': 0, 'y': 5}],
        "name": "Fire Wall"
      },
      {
        "blocks": [{'x': 4, 'y': 7}, {'x': 5, 'y': 7}, {'x': 5, 'y': 8}, {'x': 5, 'y': 9}, {'x': 6, 'y': 9}, {'x': 7, 'y': 9}, {'x': 8, 'y': 9}, {'x': 9, 'y': 9}, {'x': 8, 'y': 9}, {'x': 7, 'y': 9}, {'x': 7, 'y': 8}, {'x': 8, 'y': 8}, {'x': 8, 'y': 7}, {'x': 8, 'y': 6}, {'x': 7, 'y': 6}, {'x': 6, 'y': 6}, {'x': 5, 'y': 6}, {'x': 5, 'y': 7}, {'x': 6, 'y': 7}, {'x': 7, 'y': 7}],
        "name": "Fire Wall"
      },
      {
        "blocks": [{'x': 12, 'y': 7}, {'x': 12, 'y': 6}, {'x': 11, 'y': 6}, {'x': 10, 'y': 6}, {'x': 10, 'y': 7}, {'x': 11, 'y': 7}, {'x': 11, 'y': 8}, {'x': 12, 'y': 8}, {'x': 13, 'y': 8}, {'x': 13, 'y': 7}, {'x': 13, 'y': 6}, {'x': 13, 'y': 5}],
        "name": "Fire Wall"
      }
    ],
    "reward": 800
  },
  "Beverage Subsidiaries": {
    "action_success": function() {
      // Unlock next nodes
      netmap.nodes['Assimilation Timetable'].unlock();
      
      // Trigger conversation
      UI.DIALOG.loadDialog('2213');
    },
    "grid": [
      [0, 0, 1, 2, 2, 2, 1, 1, 2, 2, 2, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0]
    ],
    "programs": [
      {
        "blocks": [{'x': 1, 'y': 9}],
        "name": "Sentinel 3.0"
      },
      {
        "blocks": [{'x': 2, 'y': 9}],
        "name": "Watchman SP"
      },
      {
        "blocks": [{'x': 3, 'y': 9}],
        "name": "Watchman SP"
      },
      {
        "blocks": [{'x': 4, 'y': 9}],
        "name": "Sentinel 3.0"
      },
      {
        "blocks": [{'x': 9, 'y': 9}],
        "name": "Sentinel 3.0"
      },
      {
        "blocks": [{'x': 10, 'y': 9}],
        "name": "Watchman SP"
      },
      {
        "blocks": [{'x': 11, 'y': 9}],
        "name": "Watchman SP"
      },
      {
        "blocks": [{'x': 12, 'y': 9}],
        "name": "Sentinel 3.0"
      },
      {
        "blocks": [{'x': 2, 'y': 10}],
        "name": "Attack Dog"
      },
      {
        "blocks": [{'x': 3, 'y': 10}],
        "name": "Attack Dog"
      },
      {
        "blocks": [{'x': 10, 'y': 10}],
        "name": "Attack Dog"
      },
      {
        "blocks": [{'x':1, 'y': 10}],
        "name": "Attack Dog"
      },
    ],
    "reward": 800
  },
  "Assimilation Timetable": {
    "action_success": function() {
      // Unlock next nodes
      netmap.nodes['Agora'].unlock();
      netmap.nodes['Recipe Database'].unlock();
      
      // Trigger conversation
      UI.DIALOG.loadDialog('2223');
    },
    "grid": [
      [2, 1, 1, 1, 1, 1, 1, 1, 1, 4],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [4, 1, 1, 1, 1, 1, 1, 1, 1, 2]
    ],
    "programs": [
      {
        "blocks": [{'x': 4, 'y': 3}, {'x': 5, 'y': 3}, {'x': 5, 'y': 2}, {'x': 4, 'y': 2}, {'x': 3, 'y': 2}, {'x': 3, 'y': 4}, {'x': 3, 'y': 5}, {'x': 4, 'y': 5}, {'x': 5, 'y': 5}, {'x': 6, 'y': 5}, {'x': 7, 'y': 4}, {'x': 7, 'y': 3}],
        "name": "Sumo "
      }
    ],
    "reward": 1000
  },
  "Film Properties": {
    "action_success": function() {
      // Trigger conversation
      UI.DIALOG.loadDialog('2263');
    },
    "grid": [
      [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 4, 1],
      [1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4],
      [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
      [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4],
      [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 4, 1]
    ],
    "programs": [
      {
        "blocks": [{'y': 6, 'x': 9}, {'y': 7, 'x': 9}, {'y': 8, 'x': 9}, {'y': 8, 'x': 8}, {'y': 7, 'x': 8}, {'y': 6, 'x': 8}, {'y': 6, 'x': 7}, {'y': 7, 'x': 7}, {'y': 8, 'x': 7}, {'y': 8, 'x': 6}, {'y': 7, 'x': 6}, {'y': 6, 'x': 6}, {'y': 6, 'x': 5}, {'y': 7, 'x': 5}, {'y': 8, 'x': 5}, {'y': 8, 'x': 4}, {'y': 7, 'x': 4}, {'y': 6, 'x': 4}, {'y': 7, 'x': 4}, {'y': 6, 'x': 4}],
        "name": "Fire Wall"
      },
      {
        "blocks": [{'y': 0, 'x': 4}, {'y': 1, 'x': 4}, {'y': 2, 'x': 4}, {'y': 2, 'x': 5}, {'y': 1, 'x': 5}, {'y': 0, 'x': 5}, {'y': 0, 'x': 6}, {'y': 1, 'x': 6}, {'y': 2, 'x': 6}, {'y': 2, 'x': 7}, {'y': 1, 'x': 7}, {'y': 0, 'x': 7}, {'y': 0, 'x': 8}, {'y': 1, 'x': 8}, {'y': 2, 'x': 8}, {'y': 2, 'x': 9}, {'y': 1, 'x': 9}, {'y': 0, 'x': 9}],
        "name": "Fire Wall"
      },
    ],
    "reward": 1000
  },
  "Recipe Database": {
    "action_success": function() {
      // Unlock next nodes
      netmap.nodes['R&D Backup'].unlock();
      netmap.nodes['Film Properties'].unlock();
      
      // Trigger conversation
      UI.DIALOG.loadDialog('2250');
    },
    "grid": [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
      [1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
      [1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1],
      [1, 0, 1, 0, 2, 0, 1, 0, 2, 0, 1, 0, 1],
      [1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
      [1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    "programs": [
      {
        "blocks": [{'x': 3, 'y': 0}],
        "name": "Sentinel 3.0"
      },
      {
        "blocks": [{'x': 8, 'y': 0}],
        "name": "Sentinel 3.0"
      },
      {
        "blocks": [{'x': 0, 'y': 1}],
        "name": "Warden+"
      },
      {
        "blocks": [{'x': 12, 'y': 1}],
        "name": "Warden+"
      },
      {
        "blocks": [{'x': 0, 'y': 5}],
        "name": "Sentinel 3.0"
      },
      {
        "blocks": [{'x': 12, 'y': 5}],
        "name": "Sentinel 3.0"
      },
      {
        "blocks": [{'x': 3, 'y': 10}],
        "name": "Warden+"
      },
      {
        "blocks": [{'x': 11, 'y': 10}],
        "name": "Sentinel 3.0"
      }
    ],
    "reward": 1000
  },
  "Employee Records": {
    "action_success": function() {
      // Trigger conversation
      UI.DIALOG.loadDialog('1065');
    },
    "grid": [
      [0, 0, 0, 0, 0, 0, 4, 4, 1, 4, 4, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 4, 4, 1, 4, 4, 0, 0, 0, 0, 0, 0]
    ],
    "programs": [
      {
        "blocks": [{'x': 12, 'y': 6}],
        "name": "Watchman"
      },
      {
        "blocks": [{'x': 13, 'y': 5}],
        "name": "Guard Pup"
      },
      {
        "blocks": [{'x': 13, 'y': 7}],
        "name": "Guard Pup"
      },
    ],
    "reward": 400
  },
  "Club Center": {
    "action_success": function() {
      // Unlock next nodes
      netmap.nodes['Inventory Archives'].unlock();
      netmap.nodes['Communications Hub'].unlock();
      
      // Trigger conversation
      UI.DIALOG.loadDialog(1070);
    },
    "grid": [
      [1, 1, 0, 0, 2, 1, 2, 0],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 2, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 0, 0, 1, 2]
    ],
    "programs": [
      {
        "blocks": [{'x': 0, 'y': 0}, {'x': 0, 'y': 1}, {'x': 1, 'y': 1}, {'x': 1, 'y': 2}],
        "name": "Sentinel 2.0"
      },
      {
        "blocks": [{'x': 2, 'y': 1}, {'x': 3, 'y': 1}, {'x': 3, 'y': 2}],
        "name": "Sentinel 2.0"
      },
      {
        "blocks": [{'x': 0, 'y': 2}, {'x': 0, 'y': 3}, {'x': 1, 'y': 3}, {'x': 2, 'y': 3}],
        "name": "Sentinel 2.0"
      },
      {
        "blocks": [{'x': 1, 'y': 4}, {'x': 2, 'y': 4}, {'x': 3, 'y': 4}],
        "name": "Sentinel 2.0"
      },
    ],
    "reward": 600
  },
  "Inventory Archives": {
    "action_success": function() {
      // Unlock next nodes
      netmap.nodes['Network City'].unlock();
      
      // Trigger conversation
      UI.DIALOG.loadDialog('1085');
    },
    "grid": [
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0]
    ],
    "programs": [
      {
        "blocks": [{'x': 2, 'y': 2}, {'x': 3, 'y': 2}],
        "name": "Watchman X"
      },
      {
        "blocks": [{'x': 11, 'y': 2}, {'x': 10, 'y': 2}],
        "name": "Watchman X"
      },
      {
        "blocks": [{'x': 2, 'y': 8}, {'x': 3, 'y': 8}],
        "name": "Watchman X"
      },
      {
        "blocks": [{'x': 11, 'y': 8}, {'x': 10, 'y': 8}],
        "name": "Watchman X"
      },
    ],
    "reward": 600
  },
  "Banane System": {
    "action_success": function() {
      // Trigger conversation
      UI.DIALOG.loadDialog('2025');
    },
    "grid": [
      [1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2],
      [1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 2, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 3, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1]
    ],
    "programs": [
      {
        "blocks": [{'x': 0, 'y': 1}],
        "name": "Guard Pup"
      },
      {
        "blocks": [{'x': 2, 'y': 1}],
        "name": "Guard Pup"
      },
      {
        "blocks": [{'x': 1, 'y': 2}],
        "name": "Sentinel"
      },
      {
        "blocks": [{'x': 3, 'y': 3}],
        "name": "Sentinel"
      },
      {
        "blocks": [{'x': 2, 'y': 4}],
        "name": "Watchman"
      },
      {
        "blocks": [{'x': 3, 'y': 5}],
        "name": "Guard Pup"
      },
      {
        "blocks": [{'x': 3, 'y': 6}],
        "name": "Sentinel"
      },
      {
        "blocks": [{'x': 5, 'y': 6}],
        "name": "Sentinel"
      },
      {
        "blocks": [{'x': 2, 'y': 7}],
        "name": "Watchman"
      },
      {
        "blocks": [{'x': 4, 'y': 7}],
        "name": "Sentinel"
      },
      {
        "blocks": [{'x': 6, 'y': 7}],
        "name": "Guard Pup"
      },
      {
        "blocks": [{'x': 9, 'y': 7}],
        "name": "Sentinel"
      },
      {
        "blocks": [{'x': 0, 'y': 8}],
        "name": "Guard Pup"
      },
      {
        "blocks": [{'x': 8, 'y': 8}],
        "name": "Watchman"
      },
      {
        "blocks": [{'x': 10, 'y': 8}],
        "name": "Sentinel"
      },
      {
        "blocks": [{'x': 2, 'y': 9}],
        "name": "Guard Pup"
      },
      {
        "blocks": [{'x': 3, 'y': 9}],
        "name": "Watchman"
      },
      {
        "blocks": [{'x': 11, 'y': 9}],
        "name": "Guard Pup"
      },
      {
        "blocks": [{'x': 13, 'y': 9}],
        "name": "Guard Pup"
      },
      {
        "blocks": [{'x': 0, 'y': 10}],
        "name": "Guard Pup"
      },
      {
        "blocks": [{'x': 9, 'y': 10}],
        "name": "Guard Pup"
      }
    ],
    "reward": 600
  },
  "Print Assets": {
    "action_success": function() {
      // Unlock next nodes
      netmap.nodes['Banane System'].unlock();
      
      // Trigger conversation
      UI.DIALOG.loadDialog('2013');
    },
    "grid": [
      [1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
      [1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0],
      [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 4],
      [1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1],
      [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
      [0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1],
      [1, 2, 2, 0, 1, 1, 1, 1, 1, 0, 1, 1],
      [1, 1, 1, 4, 0, 1, 1, 1, 1, 4, 0, 1]
    ],
    "programs": [
      {
        "blocks": [{'x': 0, 'y': 0}, {'x': 0, 'y': 1}, {'x': 0, 'y': 2}, {'x': 1, 'y': 2}],
        "name": "Warden"
      },
      {
        "blocks": [{'x': 5, 'y': 0}, {'x': 4, 'y': 0}, {'x': 3, 'y': 0}],
        "name": "Warden"
      },
      {
        "blocks": [{'x': 10, 'y': 1}, {'x': 9, 'y': 1}, {'x': 9, 'y': 2}, {'x': 9, 'y': 3}],
        "name": "Warden"
      },
      {
        "blocks": [{'x': 8, 'y': 8}, {'x': 7, 'y': 8}, {'x': 7, 'y': 7}],
        "name": "Warden"
      }
    ],
    "reward": 600
  },
  "Communications Hub": {
    "action_success": function() {
      // Unlock next nodes
      netmap.nodes['Print Assets'].unlock();
      netmap.nodes['Supply Management'].unlock();
      
      // Trigger conversation
      UI.DIALOG.loadDialog('2000');
    },
    "grid": [
      [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
      [0, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 4, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 2],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1]
    ],
    "programs": [
      {
        "blocks": [{'x': 1, 'y': 1}],
        "name": "Watchman X"
      },
      {
        "blocks": [{'x': 3, 'y': 1}],
        "name": "Watchman"
      },
      {
        "blocks": [{'x': 1, 'y': 3}],
        "name": "Watchman"
      },
      {
        "blocks": [{'x': 5, 'y': 2}],
        "name": "Guard Dog"
      },
      {
        "blocks": [{'x': 3, 'y': 3}],
        "name": "Warden"
      },
      {
        "blocks": [{'x': 2, 'y': 5}],
        "name": "Guard Dog"
      },
    ],
    "reward": 600
  },
  "Supply Management": {
    "action_success": function() {
      // Unlock next nodes
      netmap.nodes['Franchise Office'].unlock();
      
      // Trigger conversation
      UI.DIALOG.loadDialog('2145');
    },
    "grid": [
      [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
      [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
      [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1]
    ],
    "programs": [
      {
        "blocks": [{'x': 7, 'y': 1}, {'x': 8, 'y': 1}],
        "name": "Sentinel"
      },
      {
        "blocks": [{'x': 4, 'y': 3}, {'x': 4, 'y': 2}],
        "name": "Sentinel"
      },
      {
        "blocks": [{'x': 3, 'y': 4}, {'x': 2, 'y': 4}],
        "name": "Sentinel"
      },
      {
        "blocks": [{'x': 6, 'y': 5}, {'x': 5, 'y': 5}, {'x': 5, 'y': 4}],
        "name": "Sentinel 2.0"
      },
      {
        "blocks": [{'x': 10, 'y': 4}, {'x': 10, 'y': 3}],
        "name": "Sentinel"
      },
      {
        "blocks": [{'x': 7, 'y': 5}, {'x': 7, 'y': 6}, {'x': 8, 'y': 6}],
        "name": "Sentinel 2.0"
      },
      {
        "blocks": [{'x': 3, 'y': 6}, {'x': 3, 'y': 7}],
        "name": "Sentinel"
      },
      {
        "blocks": [{'x': 10, 'y': 6}, {'x': 11, 'y': 6}],
        "name": "Sentinel"
      },
      {
        "blocks": [{'x': 9, 'y': 7}, {'x': 9, 'y': 8}],
        "name": "Sentinel"
      },
      {
        "blocks": [{'x': 6, 'y': 9}, {'x': 5, 'y': 9}],
        "name": "Sentinel"
      },
    ],
    "reward": 600
  },
  "Flavor Evaluation Lab": {
    "action_success": function() {
      // Trigger conversation
      UI.DIALOG.loadDialog('2191');
    },
    "grid": [
      [0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0],
      [4, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 4],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [4, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 4],
      [0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0]
    ],
    "programs": [
      {
        "blocks": [{'x': 2, 'y': 2}],
        "name": "Sentinel"
      },
      {
        "blocks": [{'x': 10, 'y': 2}],
        "name": "Sentinel"
      },
      {
        "blocks": [{'x': 2, 'y': 5}],
        "name": "Sentinel"
      },
      {
        "blocks": [{'x': 10, 'y': 5}],
        "name": "Sentinel"
      },
      {
        "blocks": [{'x': 2, 'y': 8}],
        "name": "Sentinel"
      },
      {
        "blocks": [{'x': 10, 'y': 8}],
        "name": "Sentinel"
      }
    ],
    "reward": 800
  }
};