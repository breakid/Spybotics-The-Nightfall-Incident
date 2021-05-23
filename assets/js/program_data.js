var GAME_DATA = GAME_DATA || {};

GAME_DATA.PROGRAMS = {
  "Ballista": {
    "actions": {
      "Fling": {
        "desc": "Deletes 2 Sectors From Target",
        "damage": 2,
        "range": 4,
        "target": "enemy"
      }
    },
    "cost": 3000,
    "desc": "Extreme-Range Attack Program",
    "image": "images/programs/ballista.png",
    "color": "#00D9A5", "type": "ally", "level": 3,
    "max_size": 2,
    "movement_speed": 1
  },
  "Bit-Man": {
    "actions": {
      "Zero": {
        "desc": "Deletes One Grid Square",
        "perform": function(x, y, program, target) { 
          console.log('Zero: (' + x + ', ' + y + ')');
          
          // Target is unoccupied and a normal block
          if (typeof target === 'undefined') {
            return program.battle.map.destroyBlock(x, y);
          }
          
          return false;
        },
        "range": 1,
        "target": "grid"
      },
      "One": {
        "desc": "Repairs 1 Grid Square",
        "perform": function(x, y, program, target) {
          console.log('One: (' + x + ', ' + y + ')');
          return program.battle.map.createBlock(x, y);
        },
        "range": 1,
        "target": "grid",
        "noBlockIsValid": true
      }
    },
    "cost": 250,
    "desc": "Makes Sectors of the Grid Appear or Dissapear",
    "image": "images/programs/bit-man.png",
    "color": "#B6FC00", "type": "ally", "level": 1,
    "max_size": 3,
    "movement_speed": 3
  },
  "Black Widow": {
    "actions": {
      "Byte": {
        "desc": "Deletes 2 Sectors From Target",
        "damage": 2,
        "range": 1,
        "target": "enemy"
      },
      "Paralyze": {
        "desc": "Decreases Move Rate of Target Program by 3",
        "perform": function(x, y, program, target) {
          console.log('Lag: (' + x + ', ' + y + ')');
          return program.adjustMoveRate(target, -1);
        },
        "damage": 3,
        "range": 1,
        "target": "enemy"
      }
    },
    "cost": 2000,
    "desc": "Speedier and Creepier",
    "image": "images/programs/black_widow.png",
    "color": "#1BE700", "type": "ally", "level": 3,
    "max_size": 3,
    "movement_speed": 4
  },
  "Bug": {
    "actions": {
      "Glitch": {
        "desc": "Deletes 2 Sectors From Target",
        "damage": 2,
        "range": 1,
        "target": "enemy"
      }
    },
    "cost": 750,
    "desc": "Fast, Cheap, and Out of Control",
    "image": "images/programs/bug.png",
    "color": "#84FC00", "type": "ally", "level": 1,
    "max_size": 1,
    "movement_speed": 5
  },
  "Buzzbomb": {
    "actions": {
      "Sting": {
        "desc": "Deletes 1 Sector From Target",
        "damage": 1,
        "range": 1,
        "target": "enemy"
      },
      "Kamikazee": {
        "desc": "Deletes 5 Sectors From Target & Erases BuzzBomb",
        "perform": function(x, y, program, target) {
          console.log('Kamikazee: (' + x + ', ' + y + ')');
          if (program.dealDamage(target)) {
            // Erase BuzzBomb (remove from player's list of programs)
            program.shrinkTo(0);
            return true;
          }
          
          return false;
        },
        "damage": 5,
        "range": 1,
        "target": "enemy"
      }
    },
    "cost": 3500,
    "desc": "Fast and Annoying",
    "image": "images/programs/buzzbomb.png",
    "color": "#0090FC", "type": "ally", "level": 3,
    "max_size": 2,
    "movement_speed": 8
  },
  "Catapult": {
    "actions": {
      "Fling": {
        "desc": "Deletes 2 Sectors From Target",
        "damage": 2,
        "range": 4,
        "target": "enemy"
      }
    },
    "cost": 4000,
    "desc": "Extreme-Range Mobile Attacker",
    "image": "images/programs/catapult.png",
    "color": "#00D9A5", "type": "ally", "level": 4,
    "max_size": 3,
    "movement_speed": 2
  },
  "Clog.01": {
    "actions": {
      "Lag": {
        "desc": "Decreases Move Rate of Target by 1",
        "perform": function(x, y, program, target) {
          console.log('Lag: (' + x + ', ' + y + ')');
          return program.adjustMoveRate(target, -1);
        },
        "damage": 1,
        "range": 3,
        "target": "enemy"
      }
    },
    "cost": 0,
    "desc": "Slows Down Hostile Programs",
    "image": "images/programs/clog.01.png",
    "color": "#00FCCB", "type": "ally", "level": 1,
    "max_size": 4,
    "movement_speed": 2
  },
  "Clog.02": {
    "actions": {
      "Chug": {
        "desc": "Decreases Move Rate of Target by 2",
        "perform": function(x, y, program, target) {
          console.log('Chug: (' + x + ', ' + y + ')');
          return program.adjustMoveRate(target, -1);
        },
        "damage": 2,
        "range": 3,
        "target": "enemy"
      }
    },
    "cost": 2000,
    "desc": "Twice as Effective as Version .01",
    "image": "images/programs/clog.02.png",
    "color": "#00FCCB", "type": "ally", "level": 3,
    "max_size": 4,
    "movement_speed": 2
  },
  "Clog.03": {
    "actions": {
      "Chug": {
        "desc": "Decreases Move Rate of Target by 2",
        "perform": function(x, y, program, target) {
          console.log('Chug: (' + x + ', ' + y + ')');
          return program.adjustMoveRate(target, -1);
        },
        "damage": 2,
        "range": 3,
        "target": "enemy"
      },
      "Hang": {
        "desc": "Decreases Move Rate of Target to 0",
        "perform": function(x, y, program, target) {
          console.log('Hang: (' + x + ', ' + y + ')');
          return program.adjustMoveRate(target, 0);
        },
        "damage": 1,
        "range": 3,
        "size_req": 4,
        "target": "enemy"
      }
    },
    "cost": 3500,
    "desc": "Brings Hostile Programs to a Halt",
    "image": "images/programs/clog.03.png",
    "color": "#00FCCB", "type": "ally", "level": 4,
    "max_size": 4,
    "movement_speed": 2
  },
  "Data Doctor": {
    "actions": {
      "Grow": {
        "desc": "Adds 2 Sectors To Target",
        "perform": function(x, y, program, target) {
          console.log('Grow: (' + x + ', ' + y + ')');
          return program.addBlocks(target);
        },
        "damage": 2,
        "range": 1,
        "target": "ally"
      }
    },
    "cost": 500,
    "desc": "Helps Your Programs Grow",
    "image": "images/programs/data_doctor.png",
    "color": "#0033F9", "type": "ally", "level": 1,
    "max_size": 5,
    "movement_speed": 4
  },
  "Data Doctor Pro": {
    "actions": {
      "Megagrow": {
        "desc": "Adds Up to 4 Sectors to Target",
        "perform": function(x, y, program, target) {
          console.log('Megagrow: (' + x + ', ' + y + ')');
          return program.addBlocks(target);
        },
        "damage": 4,
        "range": 1,
        "target": "ally"
      },
      "Surgery": {
        "desc": "Increases Maximum Size of Target Program by 1",
        "perform": function(x, y, program, target) {
          console.log('Surgery: (' + x + ', ' + y + ')');
          return program.increaseMaxSize(target);
        },
        "damage": 1,
        "range": 1,
        "target": "ally"
      }
    },
    "cost": 1500,
    "desc": "Twice the Expansion damage of Data Doctor",
    "image": "images/programs/data_doctor_pro.png",
    "color": "#0033F9", "type": "ally", "level": 3,
    "max_size": 8,
    "movement_speed": 5
  },
  "Fiddle": {
    "actions": {
      "Tweak": {
        "desc": "Increases Move Rate of Target by 1, Deletes 1 Sector from Fiddle",
        "perform": function(x, y, program, target) {
          console.log('Surgery: (' + x + ', ' + y + ')');
          if (program.adjustMoveRate(target, 1)) {
            // Delete 1 block from Fiddle
            program.shrinkTo(program.curr_size - 1);
            return true;
          }
          
          return false;
        },
        "damage": 1,
        "range": 1,
        "target": "ally"
      },
      "Twiddle": {
        "desc": "Increases Maximum Size of Target by 1, Deletes 1 Sector from Fiddle",
        "perform": function(x, y, program, target) {
          console.log('Surgery: (' + x + ', ' + y + ')');
          if (program.increaseMaxSize(target)) {
            // Delete 1 block from Fiddle
            program.shrinkTo(program.curr_size - 1);
            return true;
          }
          
          return false;
        },
        "damage": 1,
        "range": 1,
        "target": "ally"
      }
    },
    "cost": 2400,
    "desc": "Twiddle and Tweak The damage of your Programs",
    "image": "images/programs/fiddle.png",
    "color": "#0090FC", "type": "ally", "level": 3,
    "max_size": 3,
    "movement_speed": 3
  },
  "Golem.Clay": {
    "actions": {
      "Bash": {
        "desc": "Deletes 5 Sectors From Target",
        "damage": 5,
        "range": 1,
        "target": "enemy"
      }
    },
    "cost": 3000,
    "desc": "Clay is Stonger Than Mud",
    "image": "images/programs/golem_clay.png",
    "color": "#00FCF9", "type": "ally", "level": 3,
    "max_size": 6,
    "movement_speed": 2
  },
  "Golem.Mud": {
    "actions": {
      "Thump": {
        "desc": "Deletes 3 Sectors From Target",
        "damage": 3,
        "range": 1,
        "target": "enemy"
      }
    },
    "cost": 1200,
    "desc": "Slow and Steady Attack Program",
    "image": "images/programs/golem_mud.png",
    "color": "#00FCF9", "type": "ally", "level": 2,
    "max_size": 5,
    "movement_speed": 1
  },
  "Golem.Stone": {
    "actions": {
      "Crash": {
        "desc": "Deletes 7 Sectors From Target",
        "damage": 7,
        "range": 1,
        "target": "enemy"
      }
    },
    "cost": 5000,
    "desc": "Nothing Can Stand In Its Way",
    "image": "images/programs/golem_stone.png",
    "color": "#00FCF9", "type": "ally", "level": 4,
    "max_size": 7,
    "movement_speed": 3
  },
  "Guru": {
    "actions": {
      "Fire": {
        "desc": "Deletes 4 Sectors From Target",
        "damage": 4,
        "range": 2,
        "target": "enemy"
      },
      "Ice": {
        "desc": "Decreases Movement of Target by 3",
        "perform": function(x, y, program, target) {
          console.log('Ice: (' + x + ', ' + y + ')');
          return program.adjustMoveRate(target, -1);
        },
        "damage": 3,
        "range": 2,
        "target": "enemy"
      }
    },
    "cost": 4500,
    "desc": "Multipurpose Software for the L33tist of the L33t",
    "image": "images/programs/guru.png",
    "color": "#00FCCB", "type": "ally", "level": 4,
    "max_size": 3,
    "movement_speed": 2
  },
  "Hack": {
    "actions": {
      "Slice": {
        "desc": "Deletes 2 Sectors From Target",
        "damage": 2,
        "range": 1,
        "target": "enemy"
      }
    },
    "cost": 500,
    "desc": "Basic Attack Program",
    "image": "images/programs/hack.png",
    "color": "#00C7FC", "type": "ally", "level": 1,
    "max_size": 4,
    "movement_speed": 2
  },
  "Hack 2.0": {
    "actions": {
      "Slice": {
        "desc": "Deletes 2 Sectors From Target",
        "damage": 2,
        "range": 1,
        "target": "enemy"
      },
      "Dice": {
        "desc": "Deletes 3 Sectors From Target",
        "damage": 3,
        "range": 1,
        "size_req": 3,
        "target": "enemy"
      }
    },
    "cost": 1500,
    "desc": "Improved Hack: Larger Size and Better Attacks",
    "image": "images/programs/hack_2.0.png",
    "color": "00C7FC", "type": "ally", "level": 2,
    "max_size": 4,
    "movement_speed": 3
  },
  "Hack 3.0": {
    "actions": {
      "Slice": {
        "desc": "Deletes 2 Sectors From Target",
        "damage": 2,
        "range": 1,
        "target": "enemy"
      },
      "Mutilate": {
        "desc": "Deletes 4 Sectors From Target",
        "damage": 4,
        "range": 1,
        "size_req": 4,
        "target": "enemy"
      }
    },
    "cost": 3500,
    "desc": "The Top of the Hack Series",
    "image": "images/programs/hack_3.0.png",
    "color": "00C7FC", "type": "ally", "level": 3,
    "max_size": 4,
    "movement_speed": 4
  },
  "Heisenbug": {
    "actions": {
      "Quantum Glitch": {
        "desc": "Deletes 6 Sectors From Target",
        "damage": 6,
        "range": 1,
        "target": "enemy"
      }
    },
    "cost": 4000,
    "desc": "They Can't Kill What They Can't Catch",
    "image": "images/programs/heisenbug.png",
    "color": "#84FC00", "type": "ally", "level": 4,
    "max_size": 1,
    "movement_speed": 5
  },
  "Laser Satellite": {
    "actions": {
      "Megascramble": {
        "desc": "Deletes 4 Sectors From Target",
        "damage": 4,
        "range": 3,
        "target": "enemy"
      }
    },
    "cost": 5000,
    "desc": "Long-Range Hard-Hitting Program",
    "image": "images/programs/laser_satellite.png",
    "color": "#00FCCB", "type": "ally", "level": 4,
    "max_size": 1,
    "movement_speed": 2
  },
  "Logic Bomb": {
    "actions": {
      "Self Destruct": {
        "desc": "Deletes 10 Sector From Target & Erases LogicBomb",
        "perform": function(x, y, program, target) {
          console.log('Self Destruct: (' + x + ', ' + y + ')');
          if (program.dealDamage(target)) {
            // Erase Logic Bomb (remove from player's list of programs)
            program.shrinkTo(0);
            return true;
          }
          
          return false;
        },
        "damage": 10,
        "range": 1,
        "target": "enemy"
      }
    },
    "cost": 3500,
    "desc": "Self-Destructing Attack Program",
    "image": "images/programs/logic_bomb.png",
    "color": "#0090FC", "type": "ally", "level": 4,
    "max_size": 6,
    "movement_speed": 3
  },
  "Mandelbug": {
    "actions": {
      "Fractal Glitch": {
        "desc": "Deletes 4 Sectors From Target",
        "damage": 4,
        "range": 1,
        "target": "enemy"
      }
    },
    "cost": 3000,
    "desc": "It's Not a Bug, It's a Feature",
    "image": "images/programs/mandelbug.png",
    "color": "#84FC00", "type": "ally", "level": 3,
    "max_size": 1,
    "movement_speed": 5
  },
  "Medic": {
    "actions": {
      "Hypo": {
        "desc": "Adds 2 Sectors To Target",
        "perform": function(x, y, program, target) {
          console.log('Hypo: (' + x + ', ' + y + ')');
          return program.addBlocks(target);
        },
        "damage": 2,
        "range": 3,
        "target": "ally"
      }
    },
    "cost": 1000,
    "desc": "Grows Your Programs From A Distance",
    "image": "images/programs/medic.png",
    "color": "#0033F9", "type": "ally", "level": 2,
    "max_size": 3,
    "movement_speed": 3
  },
  "Memory Hog": {
    "actions": {},
    "cost": 0,
    "desc": "Massive Memory-Filling Bloatware",
    "image": "images/programs/memory_hog.png",
    "color": "#B6FC00", "type": "ally", "level": 3,
    "max_size": 30,
    "movement_speed": 5
  },
  "Mobile Tower": {
    "actions": {
      "Spot": {
        "desc": "Deletes 3 Sectors From Target",
        "damage": 3,
        "range": 3,
        "target": "enemy"
      }
    },
    "cost": 1800,
    "desc": "Slow-Moving Long-Range Program",
    "image": "images/programs/mobile_tower.png",
    "color": "#00FC95", "type": "ally", "level": 3,
    "max_size": 1,
    "movement_speed": 1
  },
  "Satellite": {
    "actions": {
      "Scramble": {
        "desc": "Deletes 4 Sectors From Target",
        "damage": 4,
        "range": 2,
        "target": "enemy"
      }
    },
    "cost": 3500,
    "desc": "Short-Range Hard-Hitting Program",
    "image": "images/programs/satellite.png",
    "color": "#00FCCB", "type": "ally", "level": 3,
    "max_size": 1,
    "movement_speed": 1
  },
  "Seeker": {
    "actions": {
      "Peek": {
        "desc": "Deletes 2 Sectors From Target",
        "damage": 2,
        "range": 2,
        "target": "enemy"
      }
    },
    "cost": 1000,
    "desc": "Solid Distance Attack Program",
    "image": "images/programs/seeker.png",
    "color": "#00D9A5", "type": "ally", "level": 2,
    "max_size": 3,
    "movement_speed": 3
  },
  "Seeker 2.0": {
    "actions": {
      "Poke": {
        "desc": "Deletes 2 Sectors From Target",
        "damage": 2,
        "range": 3,
        "target": "enemy"
      }
    },
    "cost": 2500,
    "desc": "Bigger and Better than Seeker",
    "image": "images/programs/seeker_2.0.png",
    "color": "#00D9A5", "type": "ally", "level": 3,
    "max_size": 4,
    "movement_speed": 3
  },
  "Seeker 3.0": {
    "actions": {
      "Poke": {
        "desc": "Deletes 2 Sectors From Target",
        "damage": 2,
        "range": 3,
        "target": "enemy"
      },
      "Seek & Destroy": {
        "desc": "Deletes 5 Sectors From Target & 2 From Seeker",
        "perform": function(x, y, program, target) {
          console.log('Seek & Destroy: (' + x + ', ' + y + ')');
          if (program.dealDamage(target)) {
            // Delete 2 blocks from Seeker
            program.shrinkTo(program.curr_size - 2);
            return true;
          }
          
          return false;
        },
        "damage": 5,
        "range": 2,
        "size_req": 5,
        "target": "enemy"
      }
    },
    "cost": 4500,
    "desc": "Seeker with Extra Deletion damage",
    "image": "images/programs/seeker_3.0.png",
    "color": "#00D9A5", "type": "ally", "level": 4,
    "max_size": 5,
    "movement_speed": 4
  },
  "Slingshot": {
    "actions": {
      "Stone": {
        "desc": "Deletes 1 Sector From Target",
        "damage": 1,
        "range": 3,
        "target": "enemy"
      }
    },
    "cost": 750,
    "desc": "Basic ranged attack program",
    "image": "images/programs/slingshot.png",
    "color": "#00D9A5", "type": "ally", "level": 1,
    "max_size": 2,
    "movement_speed": 2
  },
  "Sumo": {
    "actions": {
      "Dataslam": {
        "desc": "Deletes 8 Sectors From Target",
        "damage": 8,
        "range": 1,
        "size_req": 6,
        "target": "enemy"
      }
    },
    "cost": 4500,
    "desc": "A Massive and Slow-Moving damagehouse",
    "image": "images/programs/sumo.png",
    "color": "#B6FC00", "type": "ally", "level": 4,
    "max_size": 12,
    "movement_speed": 2
  },
  "Tarantula": {
    "actions": {
      "Megabyte": {
        "desc": "Deletes 3 Sectors From Target",
        "damage": 3,
        "range": 1,
        "target": "enemy"
      },
      "Paralyze": {
        "desc": "Decreases Move Rate of Target Program by 3",
        "perform": function(x, y, program, target) {
          console.log('Paralyze: (' + x + ', ' + y + ')');
          return program.adjustMoveRate(target, -1);
        },
        "damage": 3,
        "range": 1,
        "target": "enemy"
      }
    },
    "cost": 3500,
    "desc": "Fast, with a Venomous Bite",
    "image": "images/programs/tarantula.png",
    "color": "#1BE700", "type": "ally", "level": 4,
    "max_size": 3,
    "movement_speed": 5
  },
  "Tower": {
    "actions": {
      "Spot": {
        "desc": "Deletes 3 Sectors From Target",
        "damage": 3,
        "range": 1,
        "target": "enemy"
      }
    },
    "cost": 1000,
    "desc": "Immobile Long-Range Program",
    "image": "images/programs/tower.png",
    "color": "#00FC95", "type": "ally", "level": 2,
    "max_size": 1,
    "movement_speed": 0
  },
  "Turbo": {
    "actions": {
      "Boost": {
        "desc": "Increase Move Rate of Target by 1 & Deletes 1 Sector from Turbo",
        "perform": function(x, y, program, target) {
          console.log('Boost: (' + x + ', ' + y + ')');
          if (program.adjustMoveRate(target, 1)) {
            // Delete 1 blocks from Turbo
            program.shrinkTo(program.curr_size - 1);
            return true;
          }
          
          return false;
        },
        "damage": 1,
        "range": 1,
        "target": "ally"
      }
    },
    "cost": 1000,
    "desc": "Speeds Up Your Programs",
    "image": "images/programs/turbo.png",
    "color": "#0090FC", "type": "ally", "level": 2,
    "max_size": 3,
    "movement_speed": 3
  },
  "Turbo Deluxe": {
    "actions": {
      "Megaboost": {
        "desc": "Increase Move Rate of Target by 2 & Deletes 2 Sectors from Turbo Deluxe",
        "perform": function(x, y, program, target) {
          console.log('Megaboost: (' + x + ', ' + y + ')');
          
          if (program.adjustMoveRate(target, 1)) {
            // Delete 2 blocks from Turbo
            program.shrinkTo(program.curr_size - 2);
            return true;
          }
          
          return false;
        },
        "damage": 2,
        "range": 2,
        "size_req": 3,
        "target": "enemy"
      }
    },
    "cost": 1750,
    "desc": "Slow and Steady is for Losers",
    "image": "images/programs/turbo_deluxe.png",
    "color": "#0090FC", "type": "ally", "level": 3,
    "max_size": 4,
    "movement_speed": 4
  },
  "Wizard": {
    "actions": {
      "Scorch": {
        "desc": "Deletes 2 Sectors From Target",
        "damage": 2,
        "range": 3,
        "target": "enemy"
      },
      "Stretch": {
        "desc": "Increases Max Size of Target By 1",
        "perform": function(x, y, program, target) {
          console.log('Stretch: (' + x + ', ' + y + ')');
          return program.increaseMaxSize(target);
        },
        "damage": 1,
        "range": 1,
        "target": "ally"
      }
    },
    "cost": 0,
    "desc": "Pay No Attention to the Man Behind the Curtain",
    "image": "images/programs/wizard.png",
    "color": "#00FC95", "type": "ally", "level": 4,
    "max_size": 4,
    "movement_speed": 3
  },
  "Wolf Spider": {
    "actions": {
      "Byte": {
        "desc": "Deletes 2 Sectors From Target",
        "damage": 1,
        "range": 1,
        "target": "enemy"
      }
    },
    "cost": 750,
    "desc": "Speedy and Creepy Little Program",
    "image": "images/programs/wolf_spider.png",
    "color": "#1BE700", "type": "ally", "level": 2,
    "max_size": 3,
    "movement_speed": 3
  },
  "Attack Dog": {
    "actions": {
      "Megabyte": {
        "desc": "Deletes 3 Sectors From Target", 
        "damage": 3, 
        "range": 1,  
        "target": "enemy"
      }
    }, 
    "cost": 0, 
    "desc": "Ravenous and Bloodthirsty Corporate Canine", 
    "image": "images/programs/attack_dog.png", 
    "color": "#FCBB00", "type": "enemy", "level": 3, 
    "enemy": true,
    "max_size": 7, 
    "movement_speed": 4
  }, 
  "Boss": {
    "actions": {
      "Shutdown": {
        "desc": "Deletes 5 Sectors From Target Program", 
        "damage": 5, 
        "range": 5, 
        "target": "enemy"
      }
    }, 
    "cost": 0, 
    "desc": "Prepare to be 0wned", 
    "image": "images/programs/boss.png", 
    "color": "#FC6200", "type": "enemy", "level": 5, "enemy": true,
    "max_size": 25, 
    "movement_speed": 6
  }, 
  "Fire Wall": {
    "actions": {
      "Burn": {
        "desc": "Deletes 1 Sector From Target", 
        "damage": 1, 
        "range": 1,  
        "target": "enemy"
      }
    }, 
    "cost": 0, 
    "desc": "Keeps Unwanted Programs Out of Corprate Sectors", 
    "image": "images/programs/firewall.png", 
    "color": "#FC6200", "type": "enemy", "level": 3, "enemy": true,
    "max_size": 20, 
    "movement_speed": 2
  }, 
  "Guard Dog": {
    "actions": {
      "Byte": {
        "desc": "Deletes 2 Sectors From Target", 
        "damage": 2, 
        "range": 1,  
        "target": "enemy"
      }
    }, 
    "cost": 0, 
    "desc": "Who Let This Dog Out?", 
    "image": "images/programs/guard_dog.png", 
    "color": "#FCBB00", "type": "enemy", "level": 2, "enemy": true,
    "max_size": 3, 
    "movement_speed": 3
  }, 
  "Guard Pup": {
    "actions": {
      "Byte": {
        "desc": "Deletes 2 Sectors From Target", 
        "damage": 2, 
        "range": 1,  
        "target": "enemy"
      }
    }, 
    "cost": 0, 
    "desc": "A Speedy Little Corporate Cur", 
    "image": "images/programs/guard_pup.png", 
    "color": "#FCBB00", "type": "enemy", "level": 1, "enemy": true,
    "max_size": 2, 
    "movement_speed": 3
  }, 
  "Mandelbug ": {
    "actions": {
      "Fractal Glitch": {
        "desc": "Deletes 4 Sectors From Target", 
        "damage": 4, 
        "range": 1,
        "target": "enemy"
      }
    }, 
    "cost": 0, 
    "desc": "Tiny But Has A Big Sting", 
    "image": "images/programs/mandelbug_purple.png", 
    "color": "#FC00F9", "type": "enemy", "level": 4, "enemy": true,
    "max_size": 1, 
    "movement_speed": 5
  }, 
  "Radar": {
    "actions": {
      "Pong": {
        "desc": "Deletes 2 Sectors From Target", 
        "damage": 2, 
        "range": 5,  
        "target": "enemy"
      }
    }, 
    "cost": 0, 
    "desc": "Deadly Program Eradicator", 
    "image": "images/programs/radar.png", 
    "color": "#FCF100", "type": "enemy", "level": 4, "enemy": true,
    "max_size": 1, 
    "movement_speed": 0
  }, 
  "Sensor": {
    "actions": {
      "Blip": {
        "desc": "Deletes 1 Sector From Target", 
        "damage": 1, 
        "range": 5,  
        "target": "enemy"
      }
    }, 
    "cost": 0, 
    "desc": "Immobile program eradicator", 
    "image": "images/programs/sensor.png", 
    "color": "#FCF100", "type": "enemy", "level": 2, "enemy": true,
    "max_size": 1, 
    "movement_speed": 0
  }, 
  "Sentinel": {
    "actions": {
      "Cut": {
        "desc": "Deletes 2 Sectors From Target", 
        "damage": 2, 
        "range": 1,  
        "target": "enemy"
      }
    }, 
    "cost": 0, 
    "desc": "Corporate Data Defender", 
    "image": "images/programs/sentinel.png", 
    "color": "#FC9800", "type": "enemy", "level": 1, "enemy": true,
    "max_size": 3, 
    "movement_speed": 1
  }, 
  "Sentinel 2.0": {
    "actions": {
      "Cut": {
        "desc": "Deletes 2 Sectors From Target", 
        "damage": 2, 
        "range": 1,  
        "target": "enemy"
      }
    }, 
    "cost": 0, 
    "desc": "Improved Corporate Data Defender", 
    "image": "images/programs/sentinel_2.0.png", 
    "color": "#FC9800", "type": "enemy", "level": 2, "enemy": true,
    "max_size": 4, 
    "movement_speed": 2
  }, 
  "Sentinel 3.0": {
    "actions": {
      "Taser": {
        "desc": "Deletes 4 Sectors From Target", 
        "damage": 4, 
        "range": 1,  
        "target": "enemy"
      }
    }, 
    "cost": 0, 
    "desc": "Sentinel That Attacks Several Programs At Once", 
    "image": "images/programs/sentinel_3.0.png", 
    "color": "#FC9800", "type": "enemy", "level": 3, "enemy": true,
    "max_size": 4, 
    "movement_speed": 2
  }, 
  "Sonar": {
    "actions": {
      "Ping": {
        "desc": "Deletes 1 Sector From Target", 
        "damage": 1, 
        "range": 8,  
        "target": "enemy"
      }
    }, 
    "cost": 0, 
    "desc": "Long-Range Program Eradicator", 
    "image": "images/programs/sonar.png", 
    "color": "#FCF100", "type": "enemy", "level": 3, "enemy": true,
    "max_size": 1, 
    "movement_speed": 0
  }, 
  "Sumo ": {
    "actions": {
      "Dataslam": {
        "desc": "Deletes 8 Sectors From Target", 
        "damage": 8, 
        "range": 1,  
        "size_req": 6,
        "target": "enemy"
      }
    }, 
    "cost": 0, 
    "desc": "A Massive and Slow-Moving Powerhouse", 
    "image": "images/programs/sumo_purple.png", 
    "color": "#CD7FFD", "type": "enemy", "level": 4, "enemy": true,
    "max_size": 12, 
    "movement_speed": 2
  }, 
  "Warden": {
    "actions": {
      "Thump": {
        "desc": "Deletes 3 Sectors From Target", 
        "damage": 3, 
        "range": 1,  
        "target": "enemy"
      }
    }, 
    "cost": 0, 
    "desc": "Slow and Steady Corporate Attack Program", 
    "image": "images/programs/warden.png", 
    "color": "#FC0010", "type": "enemy", "level": 1, "enemy": true,
    "max_size": 5, 
    "movement_speed": 1
  }, 
  "Warden+": {
    "actions": {
      "Bash": {
        "desc": "Deletes 5 Sectors From Target", 
        "damage": 5, 
        "range": 1,  
        "target": "enemy"
      }
    }, 
    "cost": 0, 
    "desc": "Get Out Of Its Way", 
    "image": "images/programs/warden+.png", 
    "color": "#FC0010", "type": "enemy", "level": 2, 
    "enemy": true,
    "max_size": 6, 
    "movement_speed": 2
  }, 
  "Warden++": {
    "actions": {
      "Crash": {
        "desc": "Deletes 7 Sectors From Target", 
        "damage": 7, 
        "range": 1, 
        "target": "enemy"
      }
    }, 
    "cost": 0, 
    "desc": "The Last Word in Corporate Security", 
    "image": "images/programs/warden++.png", 
    "color": "#FC0010", "type": "enemy", "level": 3, "enemy": true,
    "max_size": 7, 
    "movement_speed": 3
  }, 
  "Watchman": {
    "actions": {
      "Phaser": {
        "desc": "Deletes 2 Sectors From Target", 
        "damage": 2, 
        "range": 2,  
        "target": "enemy"
      }
    }, 
    "cost": 0, 
    "desc": "Corporate Ranged Attack Program", 
    "image": "images/programs/watchman.png", 
    "color": "#FF258A", "type": "enemy", "level": 1, "enemy": true,
    "max_size": 2, 
    "movement_speed": 1
  }, 
  "Watchman SP": {
    "actions": {
      "Photon": {
        "desc": "Deletes 2 Sectors From Target", 
        "damage": 2, 
        "range": 3,  
        "target": "enemy"
      }
    }, 
    "cost": 0, 
    "desc": "Qui Custodiet Ipsos Custodes?", 
    "image": "images/programs/watchman_sp.png", 
    "color": "#FF258A", "type": "enemy", "level": 3, "enemy": true,
    "max_size": 4, 
    "movement_speed": 1
  }, 
  "Watchman X": {
    "actions": {
      "Phaser": {
        "desc": "Deletes 2 Sectors From Targe", 
        "damage": 2, 
        "range": 3,  
        "target": "enemy"
      }
    }, 
    "cost": 0, 
    "desc": "Improved Version of Watchman", 
    "image": "images/programs/watchman_x.png", 
    "color": "#FF258A", "type": "enemy", "level": 2, "enemy": true,
    "max_size": 4, 
    "movement_speed": 1
  }
};