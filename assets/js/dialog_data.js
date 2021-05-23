var GAME_DATA = GAME_DATA || {};

GAME_DATA.DIALOG = {
  // Plays on initial load
  '0': {
    'speaker': 'SUPERPHREAK',
    'message': "HEY, WELCOME TO S.M.A.R.T. YOU MUST BE THE NEWBIE I'M SUPPOSED TO TRAIN",
    'responses': [1, 2]
  },
  1: {
    'speaker': 'player',
    'message': "NEWBIE?",
    'responses': [3]
  },
  '2': {
    'speaker': 'player',
    'message': "YEAH",
    'responses': [3]
  },
  '3': {
    'speaker': 'SUPERPHREAK',
    'message': "GREAT. I HOPE YOU'RE A FAST LEARNER, CAUSE I HAVE MORE IMPORTANT THINGS TO DO THAN HOLD YOUR HAND ALL DAY.",
    'responses': [4]
  },
  '4': {
    'speaker': 'player',
    'message': "GO ON",
    'responses': [5]
  },
  '5': {
    'speaker': 'SUPERPHREAK',
    'message': "AS A S.M.A.R.T. AGENT, YOU'RE HERE TO FIX PROBLEMS AND BATTLE INFOCRIME. YOU CAN FIND OUT MORE AT THE S.M.A.R.T. HQ NODE.",
    'responses': [6, 7]
  },
  '6': {
    'speaker': 'player',
    'message': "WHAT'S A NODE?",
    'responses': [8]
  },
  '7': {
    'speaker': 'player',
    'message': "I'LL BE SURE TO CHECK THAT OUT",
    'responses': [8]
  },
  '8': {
    'speaker': 'SUPERPHREAK',
    'message': "WHAT YOU'RE LOOKING AT NOW IS THE NETMAP, IT SHOWS YOU ALL THE NETWORK NODES AND THE CONNECTIONS BETWEEN THEM.",
    'responses': [9, 10]
  },
  '9': {
    'speaker': 'player',
    'message': "GO ON",
    'responses': [11] // ?
  },
  '10': {
    'speaker': 'player',
    'message': "SO WHAT DO I DO WITH THEM?",
    'responses': [11]
  },
  '11': {
    'speaker': 'SUPERPHREAK',
    'message': "YOU CAN CLICK ON A NODE TO HAVE YOUR SPYBOT SET UP A LINK TO THAT COMPUTER. ONCE YOU'RE INSIDE YOU'LL NEED TO DATABATTLE WITH THE NODE'S DEFENSEIVE PROGRAMS. BY THE WAY, RIGHT NOW YOUR SECURITY LEVEL IS ONE, SO YOU CAN ONLY ACCESS LEVEL ONE NODES.",
    'responses': [12]
  },
  '12': {
    'speaker': 'player',
    'message': "GOT IT",
    'responses': [13]
  },
  '13': {
    'speaker': 'SUPERPHREAK',
    'message': "GOOD. TIME TO GET DOWN TO ACTION. I'M GOING TO WALK YOU THROUGH YOUR FIRST DATABATTLE AND GIVE YOU SOME TIPS. READY TO GET THE PARTY STARTED?",
    'responses': [14, 15]
  },
  '14': {
    'speaker': 'player',
    'message': "I'M READY",
    'responses': [2340]
  },
  '15': {
    'speaker': 'player',
    'message': "WAIT. CAN YOU GO OVER ALL THAT AGAIN?",
    'responses': [5]
  },



  // Plays after Node: "PR DATABASE"
  '21': {
    'speaker': 'SPINNER',
    'message': "HEY PAL. I SEE THAT YOU'VE BEEN DOING SOME SWEET CODE SLINGING. WAS WONDERING IF YOU WERE INTERESTED IN SOME EXTRA BUSINESS.",
    'responses': [22, 23]
  },
  '22': {
    'speaker': 'player',
    'message': "WHAT KIND OF BUSINESS?",
    'responses': [24]
  },
  '23': {
    'speaker': 'player',
    'message': "DO YOU WORK FOR SMART?",
    'responses': [32]
  },
  '24': {
    'speaker': 'SPINNER',
    'message': "A LITTLE SIDE BUSINESS IN DATA POLICING. IT TURNS OUT PHARMHAUS WAS TESTING SOME NEW SECURITY AND IT WENT HAYWIRE. THEY CAN'T EVEN ACCESS THEIR NETWORK.",
    'responses': [25, 26]
  },
  '25': {
    'speaker': 'player',
    'message': "WHAT DO YOU NEED ME TO DO?",
    'responses': [27]
  },
  '26': {
    'speaker': 'player',
    'message': "WHAT DO I GET?",
    'responses': [34]
  },
  '27': {
    'speaker': 'SPINNER',
    'message': "THEY NEED SOMEONE QUIET TO ACCESS THE NODE AND DISABLE THE SECURITY. THERE'S A TOP NOTCH PIECE OF SOFTWARE IN IT FOR YOU IF YOU SUCCEED. SO, CAN I SIGN YOU ON?",
    'responses': [28, 29]
  },
  '28': {
    'speaker': 'player',
    'message': "LET ME THINK ABOUT IT.",
    'responses': [35]
  },
  '29': {
    'speaker': 'player',
    'message': "SURE, GIVE ME THE INFO",
    'responses': [30]
  },
  '30': {
    'speaker': 'SPINNER',
    'message': "GREAT! I KNOW YOU WERE THE AGENT FOR THE JOB! I'M PUTTING THE NODE UP ON YOUR NETMAP NOW. I'LL SEE YOU WHEN YOU'RE DONE",
    'responses': [31]
  },
  '31': {
    'speaker': 'player',
    'message': "READY TO RECEIVE NET DATA",
    'responses': [-1],
    'action': function() {
      // Reveal a hidden node
      UI.NETMAP.NODE.reveal('Government Affairs');
    },
  },
  '32': {
    'speaker': 'SPINNER',
    'message': "Not exactly. I'm more of a freelancer. Sometimes corporations get themselves into messes that need cleaning up. Their agents contact me and I contact individual S.M.A.R.T. operatives to see if they're interested. What do you think?",
    'responses': [33]
  },
  '33': {
    'speaker': 'player',
    'message': "What's the job?",
    'responses': [24]
  },
  '34': {
    'speaker': 'SPINNER',
    'message': "Well, Pharmhaus is offering a nice shiny piece of software for someone to quietly access their node and disable the security system. What do you think?",
    'responses': [28, 29]
  },
  '35': {
    'speaker': 'SPINNER',
    'message': "No problem. Take your time. I'll just put the node up on your netmap for when you make up your mind. See you around.",
    'responses': [31]
  },



  // Plays when accessing the "NETWORK CITY" Warez node
  '1000': {
    'speaker': 'TSUMARA285',
    'message': "WELCOME CUSTOMER, TO NETWORK CITY, RETAILER FOR NEW FUTURE NET TECHNOLOGIES, SOFTWARE FOR THE HERE AND BEYOND.",
    'responses': [1001]
  },
  '1001': {
    'speaker': 'player',
    'message': "HI",
    'responses': [1002]
  },
  '1002': {
    'speaker': 'TSUMARA285',
    'message': "I AM YOUR AUTOMATED HOST. CAN I BE OF ASSISTANCE?",
    'responses': [1003, 1014]
  },
  '1003': {
    'speaker': 'player',
    'message': "I'D LIKE TO PURCHASE SOME SOFTWARE",
    'responses': [-2]
  },



  // Plays when accessing the "LEO'S SHOP" Warez node
  '1010': {
    'speaker': 'LEO LEONTIS',
    'message': "Hey, you must be that new S.M.A.R.T. agent I heard about. Welcome to Leo's Shop.",
    'responses': [1011]
  },
  '1011': {
    'speaker': 'player',
    'message': "HI.",
    'responses': [1012]
  },
  '1012': {
    'speaker': 'LEO LEONTIS',
    'message': "We only got the best in wares but for a up-and-comer like yourself, maybe an ex-agent like me can give you a break. You want to do some business?",
    'responses': [1013, 1014],
    'action': function() {
      // Reset the store dialog key so that the shopkeeper says something different next time
      netmap.nodes["Leo's Shop"].dialog_key = 1015;
    }
  },
  '1013': {
    'speaker': 'player',
    'message': "Sure, show me what you've got.",
    'responses': [-2]
  },
  '1014': {
    'speaker': 'player',
    'message': "No thanks.",
    'responses': [-1]
  },



  // Plays on subsequent accesses to the "LEO'S SHOP" Warez node
  '1015': {
    'speaker': 'LEO LEONTIS',
    'message': "WELCOME BACK, KID. HOW'S IT GOING? I GOT JUST THE SOFTWARE TO MAKE THINGS EASIER FOR YOU OUT THERE. WANNA SEE?",
    'responses': [1013, 1014] // 1013 = Sure, show me what you've got; 1014 = No thanks.
  },



  // Plays after Node: "Tech Support"
  '1020': {
    'speaker': 'DISARRAY',
    'message': "ARE YOU THE NEWBIE? I SAW YOU BEAT THE TEST RUN.",
    'responses': [1021, 1022]
  },
  '1021': {
    'speaker': 'player',
    'message': "NO SWEAT", // ?
    'responses': [1023]
  },
  '1022': {
    'speaker': 'player',
    'message': "WHO ARE YOU?", // ?
    'responses': [1023]
  },
  '1023': {
    'speaker': 'DISARRAY',
    'message': "FELLOW S.M.A.R.T. AGENT ON PATROL. I WAS JUST EXECUTING SOME ELITE HACKS IN SECURITY LEVEL TWO. WHERE ARE YOU HEADED NEXT? ",
    'responses': [1024]
  },
  '1024': {
    'speaker': 'player',
    'message': "JUST HACKING THROUGH LEVEL ONE",
    'responses': [1025]
  },
  '1025': {
    'speaker': 'DISARRAY',
    'message': "COOL. YOU'LL DEFINITELY WANT TO GRAB SOME BETTER PROGRAMS. HAVE YOU CHECKED OUT THE LEVEL ONE WAREZ NODE? I'LL SHOW YOU WHERE IT IS. LATER",
    'responses': [1026]
  },
  '1026': {
    'speaker': 'player',
    'message': "LATER",
    'responses': [-1]
  },



  // Plays after Node: "GOVERNMENT AFFAIRS"
  '1027': {
    'speaker': 'SPINNER',
    'message': "HEY, KNEW I COULD COUNT ON YOU! PHARMHAUS IS REPORTING EVERYTHING ALL CLEAR. HERE'S THE SOFTWARE THEY PROMISED.",
    'responses': [1028],
  },
  '1028': {
    'speaker': 'player',
    'message': "READY TO RECEIVE SOFTWARE TRANSFER",
    'responses': [-1],
    "action": function() {
      player.addToInventory('Clog.01');
    }
  },



  // Plays after Node: "MEMORY TOWER#43"
  '1030': {
    'speaker': 'SUPERPHREAK',
    'message': "Hey. not bad --- ---- so far ---- you're almost ----- ready for level two ------- access.",
    'responses': [1031]
  },
  '1031': {
    'speaker': 'player',
    'message': "THANKS",
    'responses': [1032]
  },
  '1032': {
    'speaker': 'SUPERPHREAK',
    'message': "HMM -- SOMETHING -- ------ WIERD'S GOING ON. I THINK I ---- BREAKING UP. ---- LOOK, YOU'VE GOT --- GET THE ACCESS CODES. WE'VE PUT -- PROGRAM THERE --- HELP --- OUT",
    'responses': [1033, 1034]
  },
  '1033': {
    'speaker': 'player',
    'message': "WHERE DO I FIND THE CODES?",
    'responses': [1035]
  },
  '1034': {
    'speaker': 'player',
    'message': "WHAT'S WRONG?",
    'responses': [1035]
  },
  '1035': {
    'speaker': 'SUPERPHREAK',
    'message': "YOU ------ CAN FIND ---- -- ----- --- ------ ---- --------",
    'responses': [1036, 1037]
  },
  '1036': {
    'speaker': 'player',
    'message': "SUPERPHREAK? HELLO?",
    'responses': [1038]
  },
  '1037': {
    'speaker': 'player',
    'message': "WHERE DO I FIND THE CODES?",
    'responses': [1038]
  },
  '1038': {
    'speaker': 'SUPERPHREAK',
    'message': "-------- ---- ---- ------- -- ---- ------- brk",
    'responses': [1039]
  },
  '1039': {
    'speaker': 'player',
    'message': "CLOSE",
    'responses': [-1]
  },



  // Plays after Node: "SYDNEY PROJECT"
  '1040': {
    'speaker': 'SUPERPHREAK',
    'message': "----- --- ------ HOLD ON ------ --- ----- -------- TRYING TO CONNECT --- ------",
    'responses': [1041]
  },
  '1041': {
    'speaker': 'player',
    'message': "SUPERPHREAK?",
    'responses': [1042]
  },
  '1042': {
    'speaker': 'SUPERPHREAK',
    'message': "YEAH, I'M BACK. I SEE YOU GOT THE ACCESS CODES. I THINK I'LL HAVE TIME TO UPGRADE YOUR STATUS AND SHOW YOU A NEW WAREZ NODE BEFORE I GET CUT OFF AGAIN.",
    'responses': [1043, 1044]
  },
  '1043': {
    'speaker': 'player',
    'message': "SO WHAT'S UP?",
    'responses': [1045]
  },
  '1044': {
    'speaker': 'player',
    'message': "WHY DID YOU GET CUT OFF BEFORE?",
    'responses': [1045] // ?
  },
  '1045': {
    'speaker': 'SUPERPHREAK',
    'message': "SOMEONE'S BEEN SCREWING AROUND WITH S.M.A.R.T. SOME KIND OF CORRUPT PROGRAM GOT LOOSE IN OUR NETWORK AND I GOT CUT OFF. FOR A SECOND, I THOUGHT IT WAS 12AM OUT HERE",
    'responses': [1046, 1047]
  },
  '1046': {
    'speaker': 'player',
    'message': "12AM?",
    'responses': [1048]
  },
  '1047': {
    'speaker': 'player',
    'message': "WHAT WAS GOING ON?",
    'responses': [1048]
  },
  '1048': {
    'speaker': 'SUPERPHREAK',
    'message': "12AM = MIDNIGHT. THAT'S WHAT WE CALL A TOTAL NETWORK BLACKOUT. NO ACCESS FOR ANYBODY. IT HAPPENED ONCE A WHILE AGO DURING THE WORLDWIDE POWER CRISIS. YOU WOULDN'T BELIEVE HOW BAD IT GOT BEFORE THE NETWORK CAME BACK ONLINE",
    'responses': [1049]
  },
  '1049': {
    'speaker': 'player',
    'message': "GOT IT",
    'responses': [1050]
  },
  '1050': {
    'speaker': 'SUPERPHREAK',
    'message': "ANYWAY, SOMEONE DIRECTLY SABOTAGED S.M.A.R.T. AND IT'S CRIPPLING OUR AGENTS. BUT ITS NOT AFFECTING YOU BECAUSE WE HAVEN'T PUT YOUR INFO INTO THE S.M.A.R.T. SYSTEM YET",
    'responses': [1051, 1052]
  },
  '1051': {
    'speaker': 'player',
    'message': "WHO'S RESPONSIBLE FOR THIS?",
    'responses': [1053]
  },
  '1052': {
    'speaker': 'player',
    'message': "WHAT CAN I DO TO HELP?",
    'responses': [1060]
  },
  '1060': {
    'speaker': 'SUPERPHREAK',
    'message': "WELL, ALL OF OUR AGENTS KEEP GETTING SHUT OUT OF THE NETWORK. I'M BUSY JUST TRYING TO STAY ON LINE, SO YOU'LL NEED TO GET TO WORK.",
    'responses': [1054, 1061]
  },
  '1061': {
    'speaker': 'player',
    'message': "DO YOU HAVE ANY MORE INFO?",
    'responses': [1056]
  },
  '1053': {
    'speaker': 'SUPERPHREAK',
    'message': "I'M NOT SURE YET, I'M GOING TO KEEP LOOKING INTO IT. BUT WITH ALL OF US POPPING IN AND OUT, I GUESS THAT LEAVES YOU AS THE ONLY FUNCTIONAL AGENT.",
    'responses': [1054, 1055]
  },
  '1054': {
    'speaker': 'player',
    'message': "I'M READY",
    'responses': [1056]
  },
  '1055': {
    'speaker': 'player',
    'message': "GREAT",
    'responses': [1056]
  },
  '1056': {
    'speaker': 'SUPERPHREAK',
    'message': "I RAN A TRACE ON THE PROGRAM THAT LED BACK TO THE LUCKY MONEY EASTERN DISTRIBUTION SITE. SOMEONE MUST HAVE SENT THE CORRUPT PROGRAM FROM THERE",
    'responses': [1057]
  },
  '1057': {
    'speaker': 'player',
    'message': "OKAY",
    'responses': [1058]
  },
  '1058': {
    'speaker': 'SUPERPHREAK',
    'message': "I GUESS YOU SHOULD SEE IF YOU CAN PICK UP THE LOCAL RECORDS. I'LL GET BACK TO YOU WHEN I CAN",
    'responses': [1059]
  },
  '1059': {
    'speaker': 'player',
    'message': "READY FOR SECURITY LEVEL UPGRADE",
    'responses': [-1],
    "action": function() {
      // Increase security level
      player.level = 2;
    },
  },



  // Plays after Node: "EMPLOYEE RECORDS"
  '1065': {
    'speaker': 'SUPERPHREAK',
    'message': "NEWBIE, ARE YOU READING ME?",
    'responses': [1066]
  },
  '1066': {
    'speaker': 'player',
    'message': "SURE, GO AHEAD",
    'responses': [1067]
  },
  '1067': {
    'speaker': 'SUPERPHREAK',
    'message': "GREAT. I HAVE SOME INFORMATION FOR ----- --- ---------- -- ----------- ----- --------- -- ------ --------",
    'responses': [1068]
  },
  '1068': {
    'speaker': 'player',
    'message': "YOU'RE BREAKING UP",
    'responses': [1069],
  },
  '1069': {
    'speaker': 'SUPERPHREAK',
    'message': "----- ---- ---------- -- -------- ------ ------- -- ----- -------- -- ---------- ------ ------- ---------- ------ ------",
    'responses': [1039] // Response: CLOSE
  },



  // Plays after Node: "INVENTORY ARCHIVES"
  '1085': {
    'speaker': 'SUPERPHREAK',
    'message': "HEY NEWBIE. STILL WORKING ON GETTING S.M.A.R.T. ON IT FEET. WHAT ARE YOU UP TO?",
    'responses': [1086, 1087]
  },
  '1086': {
    'speaker': 'player',
    'message': "GONNA HIT THIS WAREZ NODE",
    'responses': [1091]
  },
  '1091': {
    'speaker': 'SUPERPHREAK',
    'message': "AH, NETWORK CITY. GOOD IDEA. THERE ARE A COUPLE MORE WAREZ NODES HIDDEN OUT ON THE NET.",
    'responses': [1089],
  },
  '1087': {
    'speaker': 'player',
    'message': "DO YOU KNOW WINTERMUTANT?",
    'responses': [1088]
  },
  '1088': {
    'speaker': 'SUPERPHREAK',
    'message': "HE'S A GOOD KID. BY THE WAY, THAT NODE UP THERE IS NETWORK CITY. AND THERE ARE A COUPLE MORE WAREZ NODES HIDDEN OUT ON THE NET",
    'responses': [1089],
  },
  '1089': {
    'speaker': 'player',
    'message': "NICE",
    'responses': [1090]
  },
  '1090': {
    'speaker': 'SUPERPHREAK',
    'message': "AND WHILE YOU'RE LOOKING AT SOFTWARE, DON'T JUST LOAD UP ON ATTACK PROGRAMS. YOU SHOULD CHECK OUT SOME META PROGRAMS LIKE MEDIC AND TURBO. THERE MAY COME A TIME WHEN YOU NEED TO BOOST UP YOUR HACK TO HANDLE AN ----- ENEMY. ---- --- OOPS GOTTA GO",
    'responses': [1039] // Response: CLOSE
  },



  // Plays after Node: "CLUB CENTER"
  '1070': {
    'speaker': 'WINTERMUTANT',
    'message': "HEY DUDE. SORRY TO INTERRUPT AN ELITE S.M.A.R.T. AGENT LIKE YOURSELF. IS IT OKAY IF WE CHAT FOR A SEC?",
    'responses': [1071, 1072]
  },
  '1071': {
    'speaker': 'player',
    'message': "UMM...WHO ARE YOU?",
    'responses': [1084]
  },
  '1084': {
    'speaker': 'WINTERMUTANT',
    'message': "OH, I'M SORT OF A HACKER TOO. I MEAN I'D LIKE TO BE ONE. I HOPE YOU DON'T MIN THAT I'VE BEEN CHECKING OUT YOUR RADICAL RUNS. TAKING CARE OF THE DR. DONUT PROBLEMS?",
    'responses': [1074, 1075]
  },
  '1072': {
    'speaker': 'player',
    'message': "SURE THING",
    'responses': [1073]
  },
  '1073': {
    'speaker': 'WINTERMUTANT',
    'message': "THANX. I NOTICED S.M.A.R.T. WAS DOWN BUT YOU SEEM TO BE DOIGN FINE. YOU MUST HAVE SOME RADICAL TRICKS UP YOUR SLEEVE. :) HERE TO TAKE CARE OF THE DR. DONUT PROBLEMS?",
    'responses': [1074, 1075]
  },
  '1074': {
    'speaker': 'player',
    'message': "WHAT DR. DONUT PROBLEMS?",
    'responses': [1076],
  },
  '1075': {
    'speaker': 'player',
    'message': "WHERE DID YOU HEAR ABOUT PROBLEMS?",
    'responses': [1084]
  },
  '1076': {
    'speaker': 'WINTERMUTANT',
    'message': "I GUESS THAT'S WAY BENEATH YOUR RADAR. SOME HACKER SCREWED AROUND WITH THEIR SYSTEMS AND NOW THEY'RE ALL BUGGY",
    'responses': [1077, 1078]
  },
  '1077': {
    'speaker': 'player',
    'message': "COULD YOU TELL ME WHERE THE NODE IS?",
    'responses': [1079]
  },
  '1078': {
    'speaker': 'player',
    'message': "GIVE ME THE INFO ABOUT THE NODE",
    'responses': [1079]
  },
  '1079': {
    'speaker': 'WINTERMUTANT',
    'message': "SURE, I'LL SEND IT TO YOU RIGHT AWAY, I KNOW I'VE GOT IT AROUND HERE SOMEWHERE. HANG ON A SEC...",
    'responses': [1080, 1081]
  },
  '1080': {
    'speaker': 'player',
    'message': "I'M WAITING...",
    'responses': [1082]
  },
  '1081': {
    'speaker': 'player',
    'message': "TAKE YOUR TIME",
    'responses': [1082]
  },
  '1082': {
    'speaker': 'WINTERMUTANT',
    'message': "GOT IT! I'M UPLOADING THE NODE ON TO YOUR NETMAP NOW. KEWL TAKIN TO YOU. CUL8R",
    'responses': [1083]
  },
  '1083': {
    'speaker': 'player',
    'message': "READY TO UPLOAD NODE DATA",
    'responses': [-1],
    'action': function() {
      // Reveal a hidden node
      UI.NETMAP.NODE.reveal('Supply Management');
    }
  },
  '1084': {
    'speaker': 'WINTERMUTANT',
    'message': "Oh, I saw S.M.A.R.T. had crashed and I decided to do some snooping. Yeah, they got hit by a recent hack job and their systems are all buggy.",
    'responses': [1077, 1078]
  },



  // Plays after Node: "COMMUNICATIONS HUB"
  '2000': {
    'speaker': 'Joana Boaventura',
    'message': "HELLO, AGENT. I SUPPOSE I SHOULD THANK YOU FOR ASSISTING MY COMPANY",
    'responses': [2001, 2002]
  },
  '2001': {
    'speaker': 'player',
    'message': "ALL IN A DAY'S WORK.",
    'responses': [2003]
  },
  '2002': {
    'speaker': 'player',
    'message': "YOU'RE WELCOME",
    'responses': [2003]
  },
  '2003': {
    'speaker': 'Joana Boaventura',
    'message': "GOOD TO SEE THAT S.M.A.R.T. IS FULFILLING ITS PROFESSIONAL RESPONSIBILIES. ALONG THOSE LINES, I HAVE A TASK FOR YOU TO PERFORM",
    'responses': [2004, 2005]
  },
  '2004': {
    'speaker': 'player',
    'message': "SURE. WHAT'S THE TASK?",
    'responses': [2006]
  },
  '2005': {
    'speaker': 'player',
    'message': "WHAT ARE YOU OFFERING?",
    'responses': [2400]
  },
  '2006': {
    'speaker': 'Joana Boaventura',
    'message': "THE SYSADMIN ARCHIVES HAVE BEEN LOCKED DOWN AFTER AN ABORTED CRASH ATTEMPT. ITS GOING TO TAKE US A WHILE TO GET IT UP AND RUNNING, BUT WE NEED A FILE FROM THERE YESTERDAY",
    'responses': [2007]
  },
  '2007': {
    'speaker': 'player',
    'message': "WHAT DO YOU NEED ME TO DO?",
    'responses': [2008]
  },
  '2008': {
    'speaker': 'Joana Boaventura',
    'message': "WE NEED YOU TO GET THAT FILE. I HAVE A BACKDOOR ROUTE PLOTTED OUT THROUGH A P.E.D. NODE. IF YOU SUCCEED, YOU GET AN EXPERIMENTAL PIECE OF SOFTWARE",
    'responses': [2009, 2010]
  },
  '2009': {
    'speaker': 'player',
    'message': "LET ME THINK ABOUT IT",
    'responses': [-1] // ?
  },
  '2010': {
    'speaker': 'player',
    'message': "ALRIGHT, I'M GAME",
    'responses': [2011]
  },
  '2011': {
    'speaker': 'Joana Boaventura',
    'message': "I'M ADDING THE ARCHIVES NODE TO YOUR NETMAP. I'LL CONTACT YOU WHEN YOU ARE IN THE VICINITY OF THE NODE",
    'responses': [2012]
  },
  '2012': {
    'speaker': 'player',
    'message': "READY TO RECEIVE NET DATA",
    'responses': [-1],
    'action': function() {
      // Reveal a hidden node
      UI.NETMAP.NODE.reveal('S.A. Archives');
    }
  },
  '2400': {
    'speaker': 'Joana Boaventura',
    'message': "AN EXPERIMENTAL PIECE OF SOFTWARE, ALONG WITH WHATEVER CREDITS YOU CAN FIND DURING THE MISSION.",
    'responses': [2401]
  },
  '2401': {
    'speaker': 'player',
    'message': "WHAT IS THE MISSION?",
    'responses': [2402]
  },
  '2402': {
    'speaker': 'Joana Boaventura',
    'message': "USE A BACKDOOR THROUGH THE P.E.D. FEDUCIARY NODE TO ACCESS OUR SYSADMIN ARCHIVES. THE ARCHIVES NODE LOCKED DOWN AFTER AN ABORTED CRASH ATTEMPT, AND WE NEED A FILE FROM THERE IMMEDIATELY.",
    'responses': [2009, 2403]
  },
  '2403': {
    'speaker': 'player',
    'message': "Sure thing.",
    'responses': [2011]
  },



  // Plays after Node: "PRINT ASSETS"
  '2013': {
    'speaker': 'WINTERMUTANT',
    'message': "HEY DUDE. ITS ME AGAIN",
    'responses': [2014, 2015]
  },
  '2014': {
    'speaker': 'player',
    'message': "WHAT'S UP?",
    'responses': [2016] // ?
  },
  '2015': {
    'speaker': 'player',
    'message': "HEY, WINTER.",
    'responses': [2016]
  },
  '2016': {
    'speaker': 'WINTERMUTANT',
    'message': "KEWL BATTLE! HEY, I WAS LOOKIN OVER SOME OF THE NODES YOU'VE BEEN THROUGH AND I FOUND SOMETHING FUNNY. WHOEVER DID THE HACK JOB THROUGH PHARMHAUS LEFT SOMETHING BEHIND",
    'responses': [2017]
  },
  '2017': {
    'speaker': 'player',
    'message': "LEFT WHAT BEHIND?",
    'responses': [2018]
  },
  '2018': {
    'speaker': 'WINTERMUTANT',
    'message': "SOME KIND OF WEIRD PROGRAM. I COULDN'T GET A GOOD LOOK AT IT 'CAUSE IT DISAPPEARED BEFORE I COULD CATCH IT",
    'responses': [2019, 2020]
  },
  '2019': {
    'speaker': 'player',
    'message': "WHERE WAS IT FROM?",
    'responses': [2024]
  },
  '2024': {
    'speaker': 'WINTERMUTANT',
    'message': "I'M NOT SURE. MAYBE THE SAME HACKER THAT'S BEEN CORRUPTING THESE NODES. I AW A LINK TO SOMETHING CALLED NIGHTFALL. I'LL KEEP CHECKING THE LOGS AND SEE IF I CAN FIND ANYTHING ELSE.",
    'responses': [2022, 2023]
  },
  '2020': {
    'speaker': 'player',
    'message': "WHAT DID IT DO?",
    'responses': [2021]
  },
  '2021': {
    'speaker': 'WINTERMUTANT',
    'message': "DON'T KNOW, SEEMED TO BE A LINK. SOMETHING ABOUT NIGHTFALL. IT MIGHT BE CONNECTED TO WHOEVER IS CORRUPTING THESE NODES. I'LL KEEP LOOKIN INTO IT THOUGH.",
    'responses': [2022, 2023]
  },
  '2022': {
    'speaker': 'player',
    'message': "THANKS A LOT",
    'responses': [-1]
  },
  '2023': {
    'speaker': 'player',
    'message': "YOU DO THAT",
    'responses': [-1]
  },



  // Plays after Node: "BANANE SYSTEM"
  '2025': {
    'speaker': 'SUPERPHREAK',
    'message': "NICE WORK. YOU KEEP GOING AT THIS RATE, YOU MAY JUST BE AN ELITE AGENT YET. WELCOME TO LEVEL 3.",
    'responses': [2027, 2026]
  },
  '2026': {
    'speaker': 'player',
    'message': "THANKS. SO WHAT'S UP?",
    'responses': [2028]
  },
  '2027': {
    'speaker': 'player',
    'message': "HOW'S THE S.M.A.R.T. SYSTEM?",
    'responses': [-3] // ?
  },
  '2028': {
    'speaker': 'SUPERPHREAK',
    'message': "I'M STARTING TO SEE A STRONG PATTERN THROUGHOUT THE NET. THESE INTRUSTIONS AND CORRUPTIONS AREN'T ISOLATED INCIDENTS.",
    'responses': [2029]
  },
  '2029': {
    'speaker': 'player',
    'message': "THAT DOESN'T SOUND GOOD",
    'responses': [2030]
  },
  '2030': {
    'speaker': 'SUPERPHREAK',
    'message': "AND S.M.A.R.T. IS STILL GOING DOWN EVERY FEW MINUTES. IT ALL ADDS UP TO SOME KIND OF BIG CONSPIRACY.",
    'responses': [2031, 2033]
  },
  '2031': {
    'speaker': 'player',
    'message': "LIKE WHAT?",
    'responses': [2032]
  },
  '2032': {
    'speaker': 'SUPERPHREAK',
    'message': "LIKE SOMETHING THAT'S GOING TO DAMAGE THE WHOLE NET. KEEP LOOKING AROUND. I'LL UPGRADE YOU TO SEURITY LEVEL THREE NOW.",
    'responses': [2035]
  },
  '2033': {
    'speaker': 'player',
    'message': "WHAT CAN I DO TO HELP?",
    'responses': [2034]
  },
  '2034': {
    'speaker': 'SUPERPHREAK',
    'message': "START SNOOPING AROUND. WHATEVER THIS IS, IT'S GOING TO AFFECT THE ENTIRE NET. I'LL UPGRADE YOU TO SECURITY LEVEL THREE NOW.",
    'responses': [2035]
  },
  '2035': {
    'speaker': 'player',
    'message': "READY FOR SECURITY LEVEL UPGRADE.",
    'responses': [-1],
    "action": function() {
      // Increase security level
      player.level = 3;

      // Reveal level 3 warez node
      UI.NETMAP.NODE.reveal('Ready to Ware');
    }
  },



  // Plays after Node: "CLINICAL TRIAL DATABASE"
  '2100': {
    'speaker': 'SUPERPHREAK',
    'message': "HEY, GOOD WORK. THE LOGS YOU JUST FOUND WILL BE REALLY HELPFUL. WE NEED ALL THE DATA WE CAN GET TO FIGURE OUT WHAT'S GOING ON",
    'responses': [2101]
  },
  '2101': {
    'speaker': 'player',
    'message': "WHAT SHOULD I DO NEXT?",
    'responses': [2102]
  },
  '2102': {
    'speaker': 'SUPERPHREAK',
    'message': "HMM, JUST KEEP HACKING -- ----- NODES TO SEE IF YOU CAN ----- SOME MORE LOGS. WATCH OUT FOR CORPORATE --------------- AND DON'T FORGET WHAT YOU LEARNED USING BIT-MAN. L8R",
    'responses': [2103]
  },
  '2103': {
    'speaker': 'player',
    'message': "LATER",
    'responses': [-1]
  },



  // Plays after Node: "EASTERN DISTRIBUTION SITE"
  '2104': {
    'speaker': 'DISARRY',
    'message': "HELLO AGAIN",
    'responses': [2105]
  },
  '2105': {
    'speaker': 'player',
    'message': "OH, HEY DISARRAY",
    'responses': [2106]
  },
  '2106': {
    'speaker': 'DISARRY',
    'message': "NICE WORK ON THAT LAST NODE. I WAS JUST COMING TO CHECK IT OUT MYSELF. GUESS THE WORK HERE IS DONE.",
    'responses': [2107]
  },
  '2107': {
    'speaker': 'player',
    'message': "WHAT DO YOU MEAN?",
    'responses': [2108]
  },
  '2108': {
    'speaker': 'DISARRY',
    'message': "WHAT DO I MEAN? I JUST TOOK CARE OF THE REST OF THE NODES IN THIS AREA. EVERYTHING'S TOTALLY CLEAN",
    'responses': [2109, 2110]
  },
  '2109': {
    'speaker': 'player',
    'message': "ARE YOU SURE ABOUT THAT?",
    'responses': [2111]
  },
  '2110': {
    'speaker': 'player',
    'message': "SO WHAT SHOULD I DO?",
    'responses': [-3] //?
  },
  '2111': {
    'speaker': 'DISARRY',
    'message': "LOOK, KID, I'M A MUCH BETTER HACKER THAN YOU ARE. IF I TELL YOU THEY'RE CLEAN, THEY'RE CLEAN. CHECK YOU LATER.",
    'responses': [2112]
  },
  '2112': {
    'speaker': 'player',
    'message': "SEE YOU AROUND",
    'responses': [-1]
  },



  // Plays after Node: "TOY PROPERTIES"
  '2113': {
    'speaker': 'SUPERPHREAK',
    'message': "WOW. GOOD THING YOU CHECKED OUT THIS NODE. THIS WHOLE AREA'S A MESS.",
    'responses': [2114]
  },
  '2114': {
    'speaker': 'player',
    'message': "WHAT DO YOU MEAN?",
    'responses': [2115]
  },
  '2115': {
    'speaker': 'SUPERPHREAK',
    'message': "FROM WHAT I CAN TELL, THE PROBLEM WITH PROGRAM CORRUPTION IS ESCALATING.",
    'responses': [2116, 2120]
  },
  '2116': {
    'speaker': 'player',
    'message': "WHO'S DOING IT?",
    'responses': [2117]
  },
  '2117': {
    'speaker': 'SUPERPHREAK',
    'message': "I'M NOT SURE, BUT THERE'S GOT TO BE SOME USEFUL INFORMATION IN THOSE LOG YOU PICKED UP. SINCE I CAN'T SEEM TO STAY ON THE NET FOR FIVE MINUTES, I'LL KEEP ANALYZING THE LOGS.",
    'responses': [2118]
  },
  '2118': {
    'speaker': 'player',
    'message': "WHAT ABOUT ME?",
    'responses': [2119]
  },
  '2119': {
    'speaker': 'SUPERPHREAK',
    'message': "WORK YOU WAY ACROSS THESE NODES. SOMEBODY'S HIDING SOMETHING FORM US. SEE IF YOU CAN FIND OUT WHAT IT IS. WELCOME TO THE BIG TIME, NEWBIE. SEND ME THOSE LOGS SO I CAN GET STARTED. READY TO RECEIVE DATA.",
    'responses': [2124]
  },
  '2120': {
    'speaker': 'player',
    'message': "WHAT DO WE DO?",
    'responses': [2121]
  },
  '2121': {
    'speaker': 'SUPERPHREAK',
    'message': "WE GET TO WORK! I'D DO IT MYSELF, BUT I CAN BARELY STAY ON-LINE LONG ENOUGH TO RESEARCH THOSE LOGS YOU PICKED UP, LET ALONE FIGHT A DATABATTLE",
    'responses': [2122]
  },
  '2122': {
    'speaker': 'player',
    'message': "SO IT'S UP TO ME",
    'responses': [2123]
  },
  '2123': {
    'speaker': 'SUPERPHREAK',
    'message': "GUESS SO. THIS IS THE BIG TIME, NEWBIE. SOMEBODY'S TRYING TO HIDE SOMETHING FROM US. WORK YOUR WAY ACROSS THESE NODES AND FIND OUT WHAT IT IS. BUT FIRST SEND ME THOSE LOGS. READY TO RECEIVE DATA.",
    'responses': [2124]
  },
  '2124': {
    'speaker': 'player',
    'message': "SEND LOG DATA",
    'responses': [-1]
  },



  // Plays when accessing the "READY TO WARE" Warez node
  '2125': {
    'speaker': 'KIMONI AMEOTUNG',
    'message': "I SEE YOU'VE RETURNED. BE ASSURED THAT YOU WILL FIND NO BETTER THAN KIMONI'S SHOP ANYWHERE ON THE NET. THE QUESTION IS, DO YOU HAVE THE CREDITS TO MAKE THIS WORTH OUR WHILE?",
    'responses': [2126, 1014] // 1014 = No thanks.
  },
  '2126': {
    'speaker': 'player',
    'message': "SHOW ME WHAT YOU'VE GOT.",
    'responses': [-2]
  },



  // Plays after Node: "OFF-SHORE TRANSACTIONS"
  '2127': {
    'speaker': 'DISARRAY',
    'message': "HEY. WHAT ARE YOU DOING HERE? DIDN'T I TELL YOU I CLEANED THIS AREA UP ALREADY?",
    'responses': [2128, 2129]
  },
  '2128': {
    'speaker': 'player',
    'message': "DID YOU MISS THAT LAST DATABATTLE?",
    'responses': [-3] // ?
  },
  '2129': {
    'speaker': 'player',
    'message': "WELL, THERE ARE STILL PROBLEMS.",
    'responses': [2130]
  },
  '2130': {
    'speaker': 'DISARRAY',
    'message': "WHY DON'T YOU SCRAM AND LET ME TAKE CARE OF THESE NODES?",
    'responses': [2131, 2133]
  },
  '2131': {
    'speaker': 'player',
    'message': "LOOKS LIKE YOU NEED SOME HELP",
    'responses': [2132]
  },
  '2132': {
    'speaker': 'DISARRAY',
    'message': "HEY, IF YOU WANT, GO AHEAD, KEEP HACKING. YOU WON'T GET VERY FAR BEFORE SECURITY BEATS YOU BACK TO LEVEL ONE. CONTACT ME WHEN YOU GET STUCK.",
    'responses': [1039] // Response: CLOSE
  },
  '2133': {
    'speaker': 'player',
    'message': "SUPERPHREAK TOLD ME TO CHECK IT OUT",
    'responses': [-3] // ?
  },


  // Plays after Node: "Vaccine Database"
  '2134': {
    'speaker': 'SUPERPHREAK',
    'message': "---- --- ------ -- ------- ----- MAN, ITS'S HARD TO STAY CONNECTED. NICE WORK SO FAR.",
    'responses': [2135, 2136]
  },
  '2135': {
    'speaker': 'player',
    'message': "THANKS",
    'responses': [2137]
  },
  '2136': {
    'speaker': 'player',
    'message': "WHAT DID YOU FIND OUT?",
    'responses': [-3] // ?
  },
  '2137': {
    'speaker': 'SUPERPHREAK',
    'message': "I USED A NEURAL NET SEQUENCER TO CROSS-REFERENCE ALL OF THE LOGS YOU'VE GIVEN ME SO FAR. I WAS ABLE TO TRACE THE PROGRAMS BACK TO THE NODE THAT ORIGINALLY SPAWNED THEM ONTO THE NET",
    'responses': [2138, 2141]
  },
  '2138': {
    'speaker': 'player',
    'message': "ANY IDEA WHO'S BEHIND IT?",
    'responses': [2139]
  },
  '2139': {
    'speaker': 'SUPERPHREAK',
    'message': "JUST SUSPICIONS FOR NOW, BUT I DID FIND A CENTRAL LOCATION, A NEW NODE. NOT SURE HOW IT CONNECTS - MAYBE A BACKDOOR SOMEHWERE.",
    'responses': [2140]
  },
  '2140': {
    'speaker': 'player',
    'message': "WHAT DO I DO?",
    'responses': [2144]
  },
  '2141': {
    'speaker': 'player',
    'message': "WHERE IS IT?",
    'responses': [2142]
  },
  '2142': {
    'speaker': 'SUPERPHREAK',
    'message': "ITS A NEW NODE, SO I'M NOT SURE HOW IT CONNECTS - MAYBE SOME BACKDOOR SOMEWHERE. ANYWAY, I DON'T KNOW WHO IT BELONGS TO, BUT I'LL KEEP LOOKING",
    'responses': [2143]
  },
  '2143': {
    'speaker': 'player',
    'message': "AND ME?",
    'responses': [2144]
  },
  '2144': {
    'speaker': 'SUPERPHREAK',
    'message': "YOU'RE DOING AN EXCELLENT JOB. KEEP ON HACKING AND TELL ME WHAT YOU FIND. I'LL LOAD THE NEW NODE ON YOUR NETMAP NOW.",
    'responses': [1039], // Response: CLOSE
    'action': function() {
      // Reveal a hidden node
      UI.NETMAP.NODE.reveal('Unknown Node');
    }
  },



  // Plays after Node: "SUPPLY MANAGEMENT"
  '2145': {
    'speaker': 'DISARRAY',
    'message': "STILL UP OUT THERE?",
    'responses': [2146, 2147]
  },
  '2146': {
    'speaker': 'player',
    'message': "HEY, DISARRAY. HOW ABOUT YOU?",
    'responses': [2148]
  },
  '2147': {
    'speaker': 'player',
    'message': "STILL HERE",
    'responses': [2148]
  },
  '2148': {
    'speaker': 'DISARRAY',
    'message': "OF COURSE I'M STILL ONLINE. NOTHING THIS PUNY IS GOING TO TAKE A HACKER OF MY SKILLS DOWN. ANYWAY, I'VE BEEN DIGGING AROUND AND I FOUND SOMETHING. DO YOU HAVE TIME TO CHECK IT OUT?",
    'responses': [2149, 2150]
  },
  '2149': {
    'speaker': 'player',
    'message': "I DON'T KNOW. WHAT IS IT?",
    'responses': [2151]
  },
  '2150': {
    'speaker': 'player',
    'message': "SURE",
    'responses': [2151]
  },
  '2151': {
    'speaker': 'DISARRAY',
    'message': "S.M.A.R.T. HAS A SPECIAL PROGRAM THAT WOULD REALLY HELP WITH THE CRASHING AND ALL. TO GET IT RUNNING I NEED A COUPLD OF FILES THAT ARE HIDDEN IN SOME CORPORATE NODES AROUND HERE, TWO NODES TO BE EXACT.",
    'responses': [2151, 2160]
  },
  '2151': {
    'speaker': 'player',
    'message': "WHAT'S THE PROGRAM?",
    'responses': [2153]
  },
  '2153': {
    'speaker': 'DISARRAY',
    'message': "NETWORK SOFTWARE, IT'S COMPLICATED. ANYWAY, THE PROGRAM IS ENCRYPTED, SO I'M GOING TO NEED A LOT OF TIME DECIPHER IT. CAN YOU SHUT DOWN SECURITY SO I CAN GET IN THERE AND CONCENTRATE ON THE REAL WORK?",
    'responses': [2154, 2159]
  },
  '2154': {
    'speaker': 'player',
    'message': "LET ME THINK ABOUT IT.",
    'responses': [2155]
  },
  '2155': {
    'speaker': 'DISARRAY',
    'message': "OKAY. YOU CAN GET TO THE NODES THROUGH THIS ONE. THEY'RE ALL LEVEL THREE, SO YOU'LL NEED TO GET THE ACCESS CODE FOR THAT LEVEL FIRST.",
    'responses': [2156]
  },
  '2156': {
    'speaker': 'player',
    'message': "GOT IT",
    'responses': [2157]
  },
  '2157': {
    'speaker': 'DISARRAY',
    'message': "I'll load the first node onto your map now. hack that to access the nodes that contain the program. I'll catch up with you when you've taken care of the security. Later newbie.",
    'responses': [2158]
  },
  '2158': {
    'speaker': 'player',
    'message': "Ready to receive node data.",
    'responses': [-1],
    'action': function() {
      // Reveal a hidden node
      UI.NETMAP.NODE.reveal('Market Research');
    }
  },
  '2159': {
    'speaker': 'player',
    'message': "SURE THING",
    'responses': [-3] // ?
  },
  '2160': {
    'speaker': 'player',
    'message': "HOW DO I FIT IN?",
    'responses': [-3] // ?
  },

  
  
  // Plays after Node: "Franchise Office"
  '2161': {
    'speaker': 'SUPERPHREAK',
    'message': "Ok, I'm finally back on the net. Hey. news on the S.M.A.R.T. bug.",
    'responses': [2162]
  },
  '2162': {
    'speaker': 'player',
    'message': "Go for it.",
    'responses': [2163]
  },
  '2163': {
    'speaker': 'SUPERPHREAK',
    'message': "Looks like it must have been an inside job. Just happened too quickly. The hacker had the passwords.",
    'responses': [2164, 2176]
  },
  '2164': {
    'speaker': 'player',
    'message': "Do you have any idea's who's responsible?",
    'responses': [2165]
  },
    '2165': {
      'speaker': 'SUPERPHREAK',
      'message': "A couple ideas, but nothing definite. I'll keep working on it. Still, as the only S.M.A.R.T. agent left, you'll have to handle the net problems.",
      'responses': [2166, 2169]
    },
      '2166': {
        'speaker': 'player',
        'message': "Actually, another agent wrote me.",
        'responses': [2167]
      },
        '2167': {
          'speaker': 'SUPERPHREAK',
          'message': "Hold on. Not possible. S.M.A.R.T.'s down. Who was this agent?",
          'responses': [2168]
        },
          '2168': {
            'speaker': 'player',
            'message': "His name was Disarray.",
            'responses': [2172]
          },
      '2169': {
        'speaker': 'player',
        'message': "What about Disarray?",
        'responses': [2170]
      },
        '2170': {
          'speaker': 'SUPERPHREAK',
          'message': "Disarray? What do you know about disarray?",
          'responses': [2171]
        },
          '2171': {
            'speaker': 'player',
            'message': "Nothing much",
            'responses': [2172]
          },
            '2172': {
              'speaker': 'SUPERPHREAK',
              'message': "If you're talking about who I think you are, that's bad news. I was training an agent named Disarray a couple months ago. He got thrown out for being the reckless and greedy loser that he is. Don't trust a word he says.",
              'responses': [2173, 2174]
            },
              '2173': {
                'speaker': 'player',
                'message': "What do we do about him?",
                'responses': [2175]
              },
              '2174': {
                'speaker': 'player',
                'message': "He asked me to do a mission.",
                'responses': [2175]
              },
                '2175': {
                  'speaker': 'SUPERPHREAK',
                  'message': "---- ------- -- Don't have a lot of time left. I'll start tracing disarray. Go along with his idea so I can see what he's doing. Oh, and -- ----- ------ -- ---- --",
                  'responses': [1039] // Response: CLOSE
                },
  '2176': {
    'speaker': 'player',
    'message': "So what do we do?",
    'responses': [-3] //?
  },

  
  // Plays after Node: "Market Research"
  '2177': {
    'speaker': 'WINTERMUTANT',
    'message': "HEY PARTNER! YOU REALLY CLEANED UP THOSE DR. D NODES!",
    'responses': [2178, 2189]
  },
    '2178': {
      'speaker': 'player',
      'message': "THANKS, WINTER.",
      'responses': [2179]
    },
      '2179': {
        'speaker': 'WINTERMUTANT',
        'message': "I WENT SNEAKING AROUNG THERE AFTER YOU LEFT, AND GUESS WHAT? I FOUND MORE TRACES OF THAT WEIRD PROGRAM.",
        'responses': [2180, 2182]
      },
        '2180': {
          'speaker': 'player',
          'message': "ANY IDEA WHERE IT CAME FROM?",
          'responses': [2181]
        },
          '2181': {
            'speaker': 'WINTERMUTANT',
            'message': "Totally! The traces had the same nightfall signature, so I did this special kind of search I made up, and I found something.",
            'responses': [2184]
          },
        '2182': {
          'speaker': 'player',
          'message': "KNOW WHAT IT'S FOR YET?",
          'responses': [2183]
        },
          '2183': {
            'speaker': 'WINTERMUTANT',
            'message': "NOPE. IT'S REALLY SLIPPERY, BUT I DID GET A CLUE ABOUT WHAT NIGHTFALL MIGHT MEAN. I DID THIS SPECIAL KIND OF SEARCH I MADE UP, AND I FOUND SOMETHING.",
            'responses': [2184]
          },
            '2184': {
              'speaker': 'player',
              'message': "WHAT DID YOU FIND?",
              'responses': [2185]
            },
              '2185': {
                'speaker': 'WINTERMUTANT',
                'message': "A NICE PIECE OF SOFTWARE. IT'S STASHED AWAY DEEP IN SECTOR 4 IN A LUCKY MONKEY NODE, NOT THAT THEY KNOW IT'S THERE OF COURSE.",
                'responses': [2186]
              },
                '2186': {
                  'speaker': 'player',
                  'message': "WHERE IS THE NODE?",
                  'responses': [2187]
                },
                  '2187': {
                    'speaker': 'WINTERMUTANT',
                    'message': "IT'LL BE ON YOUR MAP IN A SEC, PARTNER. ANYWAY, I'M GONNA KEEP ON SEARCHING FOR THE NIGHTFALL HACKER AND SEE WHAT I FIND. C U.",
                    'responses': [2188]

                  },
                    '2188': {
                      'speaker': 'player',
                      'message': "Ready to receive node data.",
                      'responses': [-1],
                      'action': function() {
                        // Reveal a hidden node
                        UI.NETMAP.NODE.reveal('Film Properties');
                      },
                    },
                '2189': {
                  'speaker': 'player',
                  'message': "DID YOU FIND ANYTHING ELSE?",
                  'responses': [-3] // 
                },
    '2190': {
      'speaker': 'player',
      'message': "WHAT'S UP?",
      'responses': [-3] // ?
    },
  
  
  
  // Plays after Node: "Flavor Evaluation Lab"
  '2191': {
    'speaker': 'SUPERPHREAK',
    'message': "HEY, I CAN SEE WHICH PROGRAM DISARRAY'S GETTING. IT HAS TO DO WITH RAPID SIMULTANEOUS NETWORK COMMUNICATION - FLOODING A HUGE NUMBER OF NODES AT ONCE.",
    'responses': [2192]
  },
    '2192': {
      'speaker': 'player',
      'message': "WHY WOULD HE WANT THAT?",
      'responses': [2193]
    },
      '2193': {
        'speaker': 'SUPERPHREAK',
        'message': "I DON'T KNOW. WHAT WOULD DISARRAY BE DOING THAT WOULD AFFECT THE WHOLE NET? HE'D STILL HAVE TO HAVE HACKED EVERY NODE INDIVIDUALLY TO BE ABLE TO DO ANYTHING.",
        'responses': [2194]
      },
        '2194': {
          'speaker': 'player',
          'message': "WHAT'S THE NEXT STEP?",
          'responses': [2195]
        },
          '2195': {
            'speaker': 'SUPERPHREAK',
            'message': "SUPERPHREAK: KEEP FOLLOWING HIM, AND WATCH WHAT HE SAYS. I'LL KEEP UP MY TRACE AND GET BACK TO YOU WHEN I HAVE MORE. L8R",
            'responses': [1039] // Response: CLOSE
          },
  
  
  
  // Plays after Node: "HMO Procedure Management"
  '2196': {
    'speaker': 'SUPERPHREAK',
    'message': "EXCELLENT WORK. WELCOME TO LEVEL FOUR",
    'responses': [2197]
  },
    '2197': {
      'speaker': 'player',
      'message': "THANKS",
      'responses': [2198]
    },
      '2198': {
        'speaker': 'SUPERPHREAK',
        'message': "NO PROBLEM. YOU EARNED IT. NOW TRY TO GET TO THAT MYSTERIOUS NODE I SHOWED YOU. SOMETHING BIG IS GOING DOWN, AND IT LOOKS LIKE IT'S UP TO YOU TO STOP IT",
        'responses': [2199]
      },
        '2199': {
          'speaker': 'player',
          'message': "DO YOU THINK I CAN HANDLE IT?",
          'responses': [2200]
        },
          '2200': {
            'speaker': 'SUPERPHREAK',
            'message': "I KNOW YOU CAN. AND S.M.A.R.T. IS COUNTING ON YOU. GET READY FOR THE LEVEL FOUR UPGRADE, AND GOOD LUCK.",
            'responses': [2201]
          },
            '2201': {
              'speaker': 'player',
              'message': "READY FOR SECURITY LEVEL UPGRADE",
              'responses': [-1],
              'action': function() {
                // Reveal a hidden node
                UI.NETMAP.NODE.reveal('Agora');
                        
                // Increase security level
                player.level = 4;
              },
            },
  
  
  
  // Plays after Node: "Fiduciary Node"
  '2202': {
    'speaker': 'SPINNER',
    'message': "HEY, AGENT. YOU'VE BEEN PRETTY HOT LATELY. LOOKING FOR SOME EXTRA WORK?",
    'responses': [2203, 2204]
  },
    '2203': {
      'speaker': 'player',
      'message': "I'M ALREADY ON A COUPLE OF MISSIONS.",
      'responses': [-3] // ?
    },
    '2204': {
      'speaker': 'player',
      'message': "WHAT'S THE OPERATION?",
      'responses': [2205]
    },
      '2205': {
        'speaker': 'SPINNER',
        'message': "A P.E.D. EXEC STOLE SOME PRECIOUS FILES FROM A RIVAL AT PHARMHAUS. WE NEED YOU TO RETRIEVE THEM.",
        'responses': [2206, 2212]
      },
        '2206': {
          'speaker': 'player',
          'message': "WHERE'S THE NODE?",
          'responses': [2207]
        },
          '2207': {
            'speaker': 'SPINNER',
            'message': "THAT'S THE BEST PART. YOU ALREADY HAVE ACCESS TO IT. IT'S THE P.E.D. RE-INSURANCE DATABASE YOU JUST OPENED. AND IF YOU SUCCEED, PHARMHAUS HAS A BIG CREDIT BONUS FOR YOU.",
            'responses': [2208, 2210]
          },
            '2208': {
              'speaker': 'player',
              'message': "LET ME THINK ABOUT IT.",
              'responses': [2209]
            },
              '2209': {
                'speaker': 'SPINNER',
                'message': "You know where to go. I'll contact you when you're finished.",
                'responses': [1039] // Response: CLOSE
              },
            '2210': {
              'speaker': 'player',
              'message': "I'M IN",
              'responses': [2211]
            },
              '2211': {
                'speaker': 'SPINNER',
                'message': "THAT'S THE BEST PART. YOU ALREADY HAVE ACCESS TO IT. IT'S THE P.E.D. RE-INSURANCE DATABASE YOU JUST OPENED. AND IF YOU SUCCEED, PHARMHAUS HAS A BIG CREDIT BONUS FOR YOU.",
                'responses': [1039] // Response: CLOSE
              },
        '2212': {
          'speaker': 'player',
          'message': "WHAT DO I GET OUT OF THIS?",
          'responses': [] // ?
        },
  
  
  
  // Plays after Node: "Beverage Subsidiaries"
  '2213': {
    'speaker': 'SPINNER',
    'message': "HEY, PAL. GOT ANOTHER JOB FOR YOU.",
    'responses': [2214, 2222]
  },
    '2214': {
      'speaker': 'player',
      'message': "WHAT'S THE JOB?",
      'responses': [2215]
    },
      '2215': {
        'speaker': 'SPINNER',
        'message': "P.E.D. IS REPORTING A MALFUNCTIONING SECTOR IN THEIR PRIVILEGED ACCOUNTS NODE. SOMETHING THERE IS DESTROYING THE SURROUNDING MEMORY UNITS.",
        'responses': [2216]
      },
        '2216': {
          'speaker': 'player',
          'message': "GOT IT",
          'responses': [2217]
        },
          '2217': {
            'speaker': 'SPINNER',
            'message': "HEAD THERE AND CLEAN UP THE PROBLEM QUIETLY. P.E.D. WILL PROVIDE YOU WITH A PRIVILEGED REWARD",
            'responses': [2218, 2219]
          },
            '2218': {
              'speaker': 'player',
              'message': "LET ME THINK ABOUT IT.",
              'responses': [-3] // ?
            },
            '2219': {
              'speaker': 'player',
              'message': "SIGN ME UP",
              'responses': [2220]
            },
              '2220': {
                'speaker': 'SPINNER',
                'message': "I'LL PUT THE NODE UP ON YOUR MAP. AND, BETWEEN YOU AND ME, YOU MAY WANT TO CHECK OUT THE REST OF THE CONNECTING NODES TOO. THINGS SEEM A LITTLE SCREWY. CIAO",
                'responses': [2221]
              },
                '2221': {
                  'speaker': 'player',
                  'message': "READY TO RECEIVE NET DATA",
                  'responses': [],
                  'action': function() {
                    // Reveal a hidden node
                    UI.NETMAP.NODE.reveal('Privileged Accounts');
                  },
                },
    '2222': {
      'speaker': 'player',
      'message': "WHO IS IT FOR?",
      'responses': [-3] // ?
    },
  

  
  // Plays after Node: "Assimilation Timetable"
  '2223': {
    'speaker': 'WINTERMUTANT',
    'message': "WOW, YOU'RE LEVEL 4! THAT'S RADICAL!!!! I KNEW YOU'D MAKE IT!",
    'responses': [2224, 2235]
  },
    '2224': {
      'speaker': 'player',
      'message': "THANKS, WINTER.",
      'responses': [2225]
    },
      '2225': {
        'speaker': 'WINTERMUTANT',
        'message': "I FOUND SOMETHING BIG! I FINISHED MY NIGHTFALL SEARCH AND I FOUND ANOTHER SECRET STASH!",
        'responses': [2226, 2234]
      },
        '2226': {
          'speaker': 'player',
          'message': "WHAT DID YOU FIND?",
          'responses': [2227]
        },
          '2227': {
            'speaker': 'WINTERMUTANT',
            'message': "SOME KIND OF ACCESS CODES FOR A REALLY TIGHT PRIVATE SECURITY SET-UP. IT'S HIDDEN AWAY IN THE PHARMHAUS PROPRIETARY SEARCH NODE. NASTY DEFENSE SOFTWARE.",
            'responses': [2228]
          },
            '2228': {
              'speaker': 'player',
              'message': "OKAY.",
              'responses': [2229]
            },
              '2229': {
                'speaker': 'WINTERMUTANT',
                'message': "I'M PUTTING THE NODE ON YOUR MAP NOW. I TRIED TO GET THEM MYSELF, BUT I GOT REJECTED BEFORE I COULD BOOT UP. IT'S DEFINITELY NIGHTFALL THOUGH.",
                'responses': [2230, 2233]
              },
                '2230': {
                  'speaker': 'player',
                  'message': "GREAT WORK, WINTER.",
                  'responses': [2231]
                },
                  '2231': {
                    'speaker': 'WINTERMUTANT',
                    'message': "THANX A LOT. KICK BUTT! GO S.M.A.R.T.!",
                    'responses': [2232]
                  },
                    '2232': {
                      'speaker': 'player',
                      'message': "READY TO RECEIVE NET DATA",
                      'responses': [-1],
                      'action': function() {
                        // Reveal a hidden node
                        UI.NETMAP.NODE.reveal('Proprietary Research');
                      },
                    },
                '2233': {
                  'speaker': 'player',
                  'message': "I'LL HANDLE IT FROM HERE.",
                  'responses': [-3] // ?
                },
        '2234': {
          'speaker': 'player',
          'message': "WHERE IS IT?",
          'responses': [-3] // ?
        },
    '2235': {
      'speaker': 'player',
      'message': "WHAT'S UP?",
      'responses': [-3] // ?
    },
  
  
  
  // Plays when accessing the "Agora" Warez node
  '2236': {
    'speaker': 'Minerva',
    'message': "I knew you'd be back - Glad to see your energy is still flowing. I have that software you've been dreaming about. Are you ready to enter the magic circle?",
    'responses': [2126, 1014] // 2126 = Show me what you've got; 1014 = No thanks.
  },
  
  
  
  // Plays after Node: "Lucky Jungle Central"
  '2237': {
    'speaker': 'DISARRAY',
    'message': "TERRIFIC. THANKS FOR HANDLING THAT SECURITY. I COULD'VE DONE IT MYSELF, BUT THAT SAVED ME SOME TIME.",
    'responses': [2238]
  },
    '2238': {
      'speaker': 'player',
      'message': "NO PROBLEM",
      'responses': [2239]
    },
      '2239': {
        'speaker': 'DISARRAY',
        'message': "WELL, ONCE THE PROGRAM IS PUT TOGETHER, EVERYTHING WILL BE SET FOR S.M.A.R.T. SEE YOU SOON.",
        'responses': [1039] // Response: CLOSE
      },
      
      
  
  // Plays after Node: "Re-insurance Database"
  '2240': {
    'speaker': 'SPINNER',
    'message': "AS ALWAYS, AN EXCELLENT JOB FROM THE BEST AGENT S.M.A.R.T.'S GOT. HERE ARE THE CREDITS THEY PROMISED. KEEP IN TOUCH",
    'responses': [2238]
  },
    '2241': {
      'speaker': 'player',
      'message': "READY TO ACCEPT CREDIT TRANSFER",
      'responses': [-1],
      'action': function() {
        player.receiveCredits(500);
      },
    },
    
    
    
  // Plays after Node: "Sub-Station Gamma"
  '2242': {
    'speaker': 'Joana Boaventura',
    'message': "AGENT. I CAN SEE YOU'RE ABOUT TO ENTER OUR SYSADMIN ARCHIVES. THANK YOU FOR HANDLING THIS MISSIO. I WANTED TO GIVE YOU SOME ADVICE.",
    'responses': [2243]
  },
    '2243': {
      'speaker': 'player',
      'message': "GO AHEAD.",
      'responses': [2244],
    },
      '2244': {
        'speaker': 'Joana Boaventura',
        'message': "IF YOU ARE SUCCESSFUL, WE WILL REWARD YOU WITH A COPY OF SOME NEW SOFTWARE THAT WE JUST DEVELOPED. I'M TOLD THAT'S THE PROPER WAY TO MOTIVATE PEOPLE SUCH AS YOURSELF.",
        'responses': [2245]
      },
        '2245': {
          'speaker': 'player',
          'message': "THANKS...I GUESS.",
          'responses': [2246],
        },
          '2246': {
            'speaker': 'Joana Boaventura',
            'message': "GOOD LUCK, AGENT.",
            'responses': [2247]
          },
            '2247': {
              'speaker': 'player',
              'message': "OVER AND OUT",
              'responses': [-1],
            },
  
 

  // Plays after Node: "S.A. Archives"
  '2248': {
    'speaker': 'Joana Boaventura',
    'message': "WELL DONE, AGENT. YOU HAVE ACCOMPLISHED YOUR TASK, AND I AM HAPPY TO FULFILL THE TERMS OF OUR AGREEMENT. PREPARE TO RECEIVE THE SOFTWARE WE PROMISED.",
    'responses': [2249]
  },
    '2249': {
      'speaker': 'player',
      'message': "READY TO RECEIVE SOFTWARE TRANSFER.",
      'responses': [-1],
      'action': function() {
        player.addToInventory('Memory Hog');
      },
    },
 
 
 
  // Plays after Node: "Recipe Database"
  '2250': {
    'speaker': 'SUPERPHREAK',
    'message': "--- ---- -- ----- IT'S -------- HARDER AND HARDER TO ------ -- BUT I'VE GOT IMPORTANT INFORMATION ---- ---- READY?",
    'responses': [2251]
  },
    '2251': {
      'speaker': 'player',
      'message': "GO AHEAD.",
      'responses': [2252]
    },
      '2252': {
        'speaker': 'SUPERPHREAK',
        'message': "I FINISHED MY TRACE ON DISARRAY. SURPRISE SURPRISE, HE'S THE SOURCE --- ---- ---- CORRUPT PROGRAMS AND SECURITY SCREW-UPS. DISARRAY'S BEEN INFILTRATING -------- ----- --- THE WEB. I DON'T KNOW WHY.",
        'responses': [2253, 2262]
      },
        '2253': {
          'speaker': 'player',
          'message': "WHAT ABOUT THE PROGRAM HE TOOK?",
          'responses': [2254]
        },
          '2254': {
            'speaker': 'SUPERPHREAK',
            'message': "---- ------- A WELL-GUARDED COMMUNICATIONS HUB. HE'S USING THE STOLEN PROGRAM --- ------ ACCESS TO ALL THE NODES ON THE NET --- ------ I JUST DON'T UNDERSTAND THE POINT. ANY IDEAS?",
            'responses': [2255]
          },
            '2255': {
              'speaker': 'player',
              'message': "DOES NIGHTFALL MEAN ANYTHING TO YOU?",
              'responses': [2256]
            },
              '2256': {
                'speaker': 'SUPERPHREAK',
                'message': "NIGHTFALL? WHAT DOES THAT MEAN?",
                'responses': [2257]
              },
                '2257': {
                  'speaker': 'player',
                  'message': "DISARRAY'S SECRET PROJECT?",
                  'responses': [2258]
                },
                  '2258': {
                    'speaker': 'SUPERPHREAK',
                    'message': "NIGHTFALL...THAT'S IT! DISARRAY'S ------- --- USE HIS NIGHTFALL PROGRAM TO BLACK OUT THE NET. TOTAL MIDNIGHT! ----- -------- ---- CRASH THE ENTIRE SYSTEM YOU HAVE TO STOP HIM!",
                    'responses': [2259]
                  },
                    '2259': {
                      'speaker': 'player',
                      'message': "HOW?",
                      'responses': [2260]
                    },
                      '2260': {
                        'speaker': 'SUPERPHREAK',
                        'message': "GET -------- --- HIS PERSONAL NODE. DEFEAT THE SECURITY, ---- DEACTIVATE THE NIGHTFALL PROGRAM. AND HURRY, --- ------ HAVE MUCH TIME!",
                        'responses': [2261]
                      },
                        '2261': {
                          'speaker': 'player',
                          'message': "I'M ON IT!",
                          'responses': [-1]
                        },
        '2262': {
          'speaker': 'player',
          'message': "WHAT ABOUT THE NODE HE'S IN?",
          'responses': [-3] // ?
        },
 
 
 
  // Plays after Node: "Film Properties"
  '2263': {
    'speaker': 'WINTERMUTANT',
    'message': "THAT BATTLE WAS SOOO KEWL! YOU ROCK! AND MANAGED TO RETRIEVE THAT EXPERIMENTAL WIZARD SOFTWARE.",
    'responses': [2264]
  },
    '2264': {
      'speaker': 'player',
      'message': "HOW DOES IT WORK?",
      'responses': [2265]
    },
      '2265': {
        'speaker': 'SUPERPHREAK',
        'message': "THE PROGRAM SHOULD BE READY TO USE, JUST PLUG AND PLAY. OH, ONE MORE THING. I'VE BEEN SCANNING THESE NODES. BE SURE TO GET SOME LEVEL FOUR SOFTWARE AND BE READY FOR SOME NASTY SECURITY. GO GET 'EM PARTNER.",
        'responses': [2266]
      },
        '2266': {
          'speaker': 'player',
          'message': "READY TO RECEIVE SOFTWARE TRANSFER.",
          'responses': [-1],
          'action': function() {
            player.addToInventory('Wizard');
          }
        },

 
 
  // Plays after Node: "R&D Backup"
  '2267': {
    'speaker': 'Joana Boaventura',
    'message': "AGENT. I'M GLAD I FOUND YOU. WE'VE GOT A BIG PROBLEM HERE.",
    'responses': [2268]
  },
    '2268': {
      'speaker': 'player',
      'message': "WHAT IS IT?",
      'responses': [2269]
    },
      '2269': {
        'speaker': 'Joana Boaventura',
        'message': "WE'VE FOUND AN UNDOCUMENTED NODE REROUTING DATA TO OUR SYSTEM CORE. A SECURITY BREAK AT THIS LEVEL IS COMPLETELY UNACCEPTABLE. WHAT ARE YOU GOING TO DO ABOUT IT?",
        'responses': [2270]
      },
        '2270': {
          'speaker': 'player',
          'message': "I'M A LITTLE BUSY RIGHT NOW.",
          'responses': [2271]
        },
          '2271': {
            'speaker': 'Joana Boaventura',
            'message': "IF YOU CAN BYPASS OUR SECURITY, WE'LL SET UP A LINK TO THE UNDOCUMENTED NODE FOR YOU. THAT SHOULD GIVE YOU ACCESS TO WHOEVER IS CAUSING THIS CHAOS.",
            'responses': [2272]
          },
            '2272': {
              'speaker': 'player',
              'message': "FINE.",
              'responses': [2273]
            },
              '2273': {
                'speaker': 'Joana Boaventura',
                'message': "BE WARNED, AGENT. THE SECURITY MEASURES IN OUR CORE ARE PARTICULARLY FIERCE. GOOD LUCK.",
                'responses': [2274]
              },
                '2274': {
                  'speaker': 'player',
                  'message': "GOOD LUCK TO YOU TOO.",
                  'responses': [-1]
                },
 
 
 
  // Plays after Node: "System Core"
  '2275': {
    'speaker': 'Joana Boaventura',
    'message': "CONGRATULATIONS, AGENT. YOU'VE OPENED UP OUR SYSTEM. AS YOU CAN OBSERVE, WE'VE ESTABLISHED A LINK TO THAT MYSTERIOUS NODE. THERE IS A PROBLEM, HOWEVER.",
    'responses': [2276]
  },
    '2276': {
      'speaker': 'player',
      'message': "WHAT'S WRONG?",
      'responses': [2277]
    },
      '2277': {
        'speaker': 'Joana Boaventura',
        'message': "THE NODE HAS AN UNKNOWN SECURITY LEVEL. WE DON'T HAVE THE ACCESS CODES TO REACH IT. WITHOUT THOSE CODES, THE NODE IS INACCESSABLE.",
        'responses': [2278]
      },
        '2278': {
          'speaker': 'player',
          'message': "DON'T WORRY. I'LL GET THE CODES.",
          'responses': [2279]
        },
          '2279': {
            'speaker': 'Joana Boaventura',
            'message': "WE'LL MAINTAIN THE CURRENT LINK FOR YOU. GOOD LUCK AND THANK YOU, AGENT.",
            'responses': [2280]
          },
            '2280': {
              'speaker': 'player',
              'message': "YOU'RE WELCOME.",
              'responses': [-1]
            },
    
    
    
  // Plays after Node: "Executive Protocol"
  '2281': {
    'speaker': 'DISARRAY',
    'message': "HELLO THERE, S.M.A.R.T. AMAATEUR.",
    'responses': [2282]
  },
    '2282': {
      'speaker': 'player',
      'message': "WHAT DO YOU WANT?",
      'responses': [2283]
    },
      '2283': {
        'speaker': 'DISARRAY',
        'message': "WHAT'S THE MATTER? NO TIME TO CHAT WITH AN OLD S.M.A.R.T. BUDDY?",
        'responses': [2284]
      },
        '2284': {
          'speaker': 'player',
          'message': "S.M.A.R.T. KICKED YOU OUT.",
          'responses': [2285]
        },
          '2285': {
            'speaker': 'DISARRAY',
            'message': "CLEARLY THEIR LOSS. SO I GUESS BY NOW YOU KNOW THE WHOLE NIGHTFALL STORY, HUH?",
            'responses': [2286]
          },
            '2286': {
              'speaker': 'player',
              'message': "WHY ARE YOU TRYING TO CRASH THE NET?",
              'responses': [2287]
            },
              '2287': {
                'speaker': 'DISARRAY',
                'message': "SIMPLE. THE NIGHTFALL SOFTWARE I SET UP IS GOING TO TAKE EVERY SINGLE NODE OFF-LINE. THAT MEANS I WILL CONTROL WHO GETS ACCESS TO THE NET AND WHO DOESN'T.",
                'responses': [2288]
              },
                '2288': {
                  'speaker': 'player',
                  'message': "SO?",
                  'responses': [2289]
                },
                  '2289': {
                    'speaker': 'DISARRAY',
                    'message': "PEOPLE WILL BE BEGGING ME TO GET BACK ON-LINE. AND I'LL LET THEM, JUST AS LONG AS THEY'RE WILLING TO PAY FOR THE PRIVILEGE. I'LL MAKE BILLIONS. WHAT CAN I SAY - IT'S A BRILLIANT PLAN.",
                    'responses': [2290]
                  },
                    '2290': {
                      'speaker': 'player',
                      'message': "THAT WILL NEVER HAPPEN.",
                      'responses': [2291]
                    },
                      '2291': {
                        'speaker': 'DISARRAY',
                        'message': "ACTUALLY, IT WILL. YOU DON'T HAVE THE CODES TO ACCESS MY PRIVATE NODE, AND EVEN IF YOU DID, YOU'D NEVER BEAT MY SECURITY. YOU'RE JUST A PATHETIC NEWBIE. SO WHY DON'T YOU STOP WASTING YOUR TIME FIGHTING ME AND GO SAVE UP YOUR CREDITS TO PAY ME OFF LATER?",
                        'responses': [2292]
                      },
                        '2292': {
                          'speaker': 'player',
                          'message': "YOU'RE GOING DOWN, DISARRAY.",
                          'responses': [2293]
                        },
                          '2293': {
                            'speaker': 'DISARRAY',
                            'message': "SUIT YOURSELF. IT'LL BE FUN TO SHOW YOU JUST HOW INFERIOR YOU ARE. L8R, LOSER.",
                            'responses': [2294]
                          },
                            '2294': {
                              'speaker': 'player',
                              'message': "WE'LL SEE.",
                              'responses': [-1]
                            },

    
    
  // Plays after Node: "Treasury Funds"
  '2295': {
    'speaker': 'SUPERPHREAK',
    'message': "HEY. I GUESS YOU FOUND OUT -------- --- GET THE ACCESS CODES FOR DISARRAY'S NODE. GOOD WORK. I'M LOOKING INTO HOW TO STALL THE IGHTFALL SOFTWARE. YOU GO GET THE --------- CODES ANF THEN DE-ACTIVATE THE PROGRAM. BUT FIRST ---- ----- ------- ----- WHAT I KNOW ABOUT THIS JERK.",
    'responses': [2296]
  },
    '2296': {
      'speaker': 'player',
      'message': "TELL ME.",
      'responses': [2297]
    },
      '2297': {
        'speaker': 'SUPERPHREAK',
        'message': "I'M SURE DISARRAY ---- BOOBYTRAPPED THE NODE THAT HAS HIS ACCESS CODES. I DON'T KNOW ---- ---- ------ WHEN YOU ACCESS THAT NODE.",
        'responses': [2298]
      },
        '2298': {
          'speaker': 'player',
          'message': "OKAY",
          'responses': [2299]
        },
          '2299': {
            'speaker': 'SUPERPHREAK',
            'message': "IF YOU'VE GOT ANY UNFINISHED MISSIONS, COMPLETE THEM TO ---- ---- EXTRA CASH. ------ ------- BACK TO MINERVA'S AND STOCK UP ON WAREZ.",
            'responses': [2300]
          },
            '2300': {
              'speaker': 'player',
              'message': "GOT IT",
              'responses': [2301]
            },
              '2301': {
                'speaker': 'SUPERPHREAK',
                'message': "DISARRAY'S TACTICS: I KNOW THAT ------------ -- COWARD AND WILL USE RANGED PROGRAMS TO KEEP YOU -- - DISTANCE. BE PREPARED TO SEE LOTS OF RADAR AND SONAR ALONG WITH ----------- ------ ------ FOUGHT. I ALSO KNOW HE DELETES MEMORY CELLS AS A DEFENSE, SO BE SURE TO -----",
                'responses': [2302]
              },
                '2302': {
                  'speaker': 'player',
                  'message': "THANKS",
                  'responses': [2303]
                },
                  '2303': {
                    'speaker': 'SUPERPHREAK',
                    'message': "NO PROBLEM. DID ALL OF THAT MAKE SENSE?  -- ----- ------ PRETTY SOON THERE WILL BE NO TURNING BACK",
                    'responses': [2304, 2305]
                  },
                    '2304': {
                      'speaker': 'player',
                      'message': "GO OVER THAT AGAIN.",
                      'responses': [-3] // ?
                    },
                    '2305': {
                      'speaker': 'player',
                      'message': "I'M READY.",
                      'responses': [2306]
                    },
                      '2306': {
                        'speaker': 'SUPERPHREAK',
                        'message': "ALRIGHT, I'LL BE OFF-LINE FOR A WHILE. GOOD LUCK ------- ----- CODES, AND BE SURE -- SHOW DISARRAY WHAT IT MEANS TO MESS WITH S.M.A.R.T.",
                        'responses': [2307]
                      },
                        '2307': {
                          'speaker': 'player',
                          'message': "I'LL DO MY BEST.",
                          'responses': [-1]
                        },

    
    
  // Plays after Node: "Proprietary Research"
  '2308': {
    'speaker': 'DISARRAY',
    'message': "BRAVO, BRAVO! YOU HAVE HONESTLY SURPRISED ME. I NEVER THOUGHT A NEWBITE LIKE YOU COULD GET THIS FAR.",
    'responses': [2309]
  },
    '2309': {
      'speaker': 'player',
      'message': "YOU'RE NEXT, DISARRAY.",
      'responses': [2308]
    },
      '2308': {
        'speaker': 'DISARRAY',
        'message': "I'M AFRAID NOT. YOU SEE, YOU'RE TOO LATE. MY GRAND FINALE IS ALREADY AT HAND. IS EVERYONE READY? I HOPE YOU'RE NOT AFRAID OF THE DARK. THREE, TWO, ONE, NIGHTFALL!",
        'responses': [2309]
      },
        '2309': {
          'speaker': 'player',
          'message': "NO!",
          'responses': [-1],
          'action': function() {
            player.level = 5;
            
            // Nightfall is triggered...
            // TODO: Figure out how to block out the screen
            //   - Slightly opaque black / dark grey square over the entire netmap?
            //   - Redraw Disarray's node on top of the nightfall layer
            // Lock all nodes except for Disarray's?
          }
        },

    
    
  // Plays after Node: "Privileged Accounts"
  '2310': {
    'speaker': 'SPINNER',
    'message': "Great work, agent. P.E.D. thanks you. So, mind letting little old spinner know what all the big, bad news is about?",
    'responses': [2311]
  },
    '2311': {
      'speaker': 'player',
      'message': "Later. I've got to work.",
      'responses': [2312]
    },
      '2312': {
        'speaker': 'SPINNER',
        'message': "No problem, no problem. Duty first and all that. Just don't forget who's been your friend. Okay? Here are your credits. Ciao, buddy.",
        'responses': [2313]
      },
        '2313': {
          'speaker': 'player',
          'message': "Ready to receive credit transfer.",
          'responses': [-1],
          'action': function() {
            player.receiveCredits(2000);
          }
        },
    
    
    
  // Plays after failing Node: "Unknown Node"
  '2314': {
    'speaker': 'SUPERPHREAK',
    'message': "--- ------- ------ -------- HEY, ARE YOU READING ME?",
    'responses': [2315]
  },
    '2315': {
      'speaker': 'player',
      'message': "YEAH.",
      'responses': [2316]
    },
      '2316': {
        'speaker': 'SUPERPHREAK',
        'message': "WELL, -- ------- IT HAPPENED. NIGHTFALL. LUCKILY DISARRAY IS A SLOPPY PROGRAMMER. I FOUND A HOLE IN HIS CODE ----- --- ------ USE TO KEEP THE NETMAP UP FOR A BIT LONGER. I'M NOT SURE --- ---- I CAN HOLD ON THOUGH.",
        'responses': [2317]
      },
        '2317': {
          'speaker': 'player',
          'message': "GOT IT",
          'responses': [2318]
        },
          '2318': {
            'speaker': 'SUPERPHREAK',
            'message': "LOAD UP ON CREDITS AND WAREZ. --- ---- ----- HOLDING THE NET UP. ----- ---- ------ --- ------",
            'responses': [2319]
          },
            '2319': {
              'speaker': 'player',
              'message': "CLOSE.",
              'responses': [-1],
              'action': function() {
                // Nightfall is delayed
                // TODO: Remove the "Nightfall" layer from the netmap
                // Unlock all nodes
              }
            },

    
    
  // Plays after Node: "Unknown Node"
  '2320': {
    'speaker': 'SUPERPHREAK',
    'message': "Awesome job! That's how it's done!",
    'responses': [2321]
  },
    '2321': {
      'speaker': 'player',
      'message': "Thanks.",
      'responses': [2322]
    },
      '2322': {
        'speaker': 'SUPERPHREAK',
        'message': "You stood up for S.M.A.R.T. when everything was on the line and saved the net from complete shutdown, at least for now. I'd say that makes you an elite agent.",
        'responses': [2323]
      },
        '2323': {
          'speaker': 'player',
          'message': "You're not so bad yourself.",
          'responses': [2324]
        },
          '2324': {
            'speaker': 'SUPERPHREAK',
            'message': "Disarray was so arrogant that he never disguised his upload location. Once Nightfall was destroyed we traced his singal back to his home. S.M.A.R.T. agents are on their way right now to apprehend him.",
            'responses': [2325]
          },
            '2325': {
              'speaker': 'player',
              'message': "What a loser.",
              'responses': [2326]
            },
              '2326': {
                'speaker': 'SUPERPHREAK',
                'message': "It turns out he was working on this plan for years. All the time Disarray was a S.M.A.R.T. agent, he was really just casing the network in preparation for his master plan. But that's all over now.",
                'responses': [2327]
              },
                '2327': {
                  'speaker': 'player',
                  'message': "So, what now?",
                  'responses': [2328]
                },
                  '2328': {
                    'speaker': 'SUPERPHREAK',
                    'message': "What now? Well, until S.M.A.R.T. has another crisis for us to solve, take a break. You earned it. Kick back, relax, play some video games. :) CUL8R.",
                    'responses': [2329]
                  },
                    '2329': {
                      'speaker': 'player',
                      'message': "Who has time for games? ;)",
                      'responses': [-1]
                    },





  // Plays after initial conversation, while tutorial battle occurs
  '2340': {
    'speaker': 'SUPERPHREAK',
    'message': "WELCOME TO YOUR FIRST DATABATTLE. HERE YOUR PROGRAMS DUKE IT OUT WITH THE ENEMY PROGRAMS FOR CONTROL OF A NODE.",
    'responses': [2341, 2342],
    'action': function() {
      // Launches the tutorial battle
      UI.BATTLE.loadBattle('tutorial', 0);
      
      // Remove the modal class so that the player can interact with the battle while the chat is active
      $('#chat').removeClass('w3-modal');
    }
  },
    '2341': {
      'speaker': 'player',
      'message': "I ALREADY KNOW ALL THIS STUFF.",
      'responses': [-1], // Closes the battle and takes you directly to the netmap
      'action': function() {
        // Re-add the modal class so that the player can no longer interact with anything when the chat is active
        $('#chat').addClass('w3-modal');
      }
    },
    '2342': {
      'speaker': 'player',
      'message': "TELL ME MORE.",
      'responses': [2343]
    },
      '2343': {
        'speaker': 'SUPERPHREAK',
        'message': "FIRST YOU HAVE TO UPLOAD YOUR PROGRAMS. START BY CLICKING ON THIS UPLOAD SPOT. <CLICK UPLOAD SPOT INDICATED BY ARROW>",
        'responses': [2344]
      },
        '2344': {
          'speaker': 'player',
          'message': "NEXT.",
          'responses': [2345]
        },
        '2345': {
          'speaker': 'SUPERPHREAK',
          'message': "NOW CLICK ON THIS PROGRAM TO UPLOAD IT. <CLICK \"HACK\" FROM THE PROGRAMS LIST>",
          'responses': [2346]
        },
          '2346': {
            'speaker': 'player',
            'message': "NEXT.",
            'responses': [2347]
          },
          '2347': {
            'speaker': 'SUPERPHREAK',
            'message': "NOW CLICK ON THE NEXT UPLOAD SPOT.",
            'responses': [2348]
          },
            '2348': {
              'speaker': 'player',
              'message': "NEXT.",
              'responses': [2349]
            },
            '2349': {
              'speaker': 'SUPERPHREAK',
              'message': "UPLOAD THIS PROGRAM. <CLICK \"SLINGSHOT\" FROM THE PROGRAMS LIST>",
              'responses': [2350]
            },
              '2350': {
                'speaker': 'player',
                'message': "NEXT.",
                'responses': [2351]
              },
              '2351': {
                'speaker': 'SUPERPHREAK',
                'message': "ALRIGHT. LET'S GET THIS BATTLE STARTED. <CLICK \"begin databattle\">",
                'responses': [2352]
              },
                '2352': {
                  'speaker': 'player',
                  'message': "NEXT.",
                  'responses': [2353]
                },
                '2353': {
                  'speaker': 'SUPERPHREAK',
                  'message': "ALL OF YOUR PROGRAMS MOVE AND EXECUTE COMMANDS FIRST, AND THEN ALL OF THE ENEMY PROGRAMS GET THEIR CHANCE.",
                  'responses': [2354]
                },
                  '2354': {
                    'speaker': 'player',
                    'message': "NEXT.",
                    'responses': [2355]
                  },
                  '2355': {
                    'speaker': 'SUPERPHREAK',
                    'message': "CLICK ON THIS PROGRAM TO SELECT IT. <CLICK ON \"Hack\">",
                    'responses': [2356]
                  },
                    '2356': {
                      'speaker': 'player',
                      'message': "NEXT.",
                      'responses': [2357]
                    },
                    '2357': {
                      'speaker': 'SUPERPHREAK',
                      'message': "THE HIGHLIGHTED GRID OF SQUARES SHOW HOW FAR THIS PROGRAM CAN MOVE. BEFORE WE MOVE IT, LET'S SEE WHAT IT CAN DO. HACK IS A SIMPLE BATTLE PROGRAM WITH ONLY ONE COMMAND. CLICK ON THE COMMAND TO SEE WHAT IT DOES. <CLICK \"Slice\" ON THE COMMANDS MENU>",
                      'responses': [2358]
                    },
                      '2358': {
                        'speaker': 'player',
                        'message': "NEXT.",
                        'responses': [2359]
                      },
                      '2359': {
                        'speaker': 'SUPERPHREAK',
                        'message': "THE RED SQUARES SHOW YOU THE RANGE FOR THIS COMMAND. THIS PROGAM HAS TO MOVE NEXT TO AN ENEMY PROGRAM TO ATTACK. SO LET'S MOVE IT FIRST. <CLICK ON UNDO TO CANCEL THE COMMAND>",
                        'responses': [2360]
                      },
                        '2360': {
                          'speaker': 'player',
                          'message': "NEXT.",
                          'responses': [2361]
                        },
                        '2361': {
                          'speaker': 'SUPERPHREAK',
                          'message': "NOW CLICK ON THIS SQUARE TO MOVE THE PROGRAM. <CLICK ON THE INDICATED BLOCK TO MOVE TO THE RIGHT>",
                          'responses': [2362]
                        },
                          '2362': {
                            'speaker': 'player',
                            'message': "NEXT.",
                            'responses': [2363]
                          },
                          '2363': {
                            'speaker': 'SUPERPHREAK',
                            'message': "WHEN A PROGRAM MOVES THROUGH MEMORY, IT EXPANDS. EACH SQUARE OF A PROGRAM IS CALLED A SECTOR. THE MAX SIZE SHOWS HOW MUCH A PROGRAM WILL EXPAND AS IT MOVES. WHEN A PROGRAM REACHES ITS MAX SIZE, IT CAN STILL MOVE BUT THE OLDER SECTORS WILL DISAPPEAR.",
                            'responses': [2364]
                          },
                            '2364': {
                              'speaker': 'player',
                              'message': "NEXT.",
                              'responses': [2365]
                            },
                            '2365': {
                              'speaker': 'SUPERPHREAK',
                              'message': "We're still out of range. Click this squre to move the program again. <CLICK ON THE INDICATED BLOCK TO MOVE TO THE RIGHT>",
                              'responses': [2366]
                            },
                              '2366': {
                                'speaker': 'player',
                                'message': "NEXT.",
                                'responses': [2367]
                              },
                              '2367': {
                                'speaker': 'SUPERPHREAK',
                                'message': "OKAY, NOW THAT WE'RE NEXT TO THE PROGRAM, LET'S USE THAT ATTACK COMMAND. <CLICK ON THE COMMAND BUTTON>",
                                'responses': [2368]
                              },
                                '2368': {
                                  'speaker': 'player',
                                  'message': "NEXT.",
                                  'responses': [2369]
                                },
                                '2369': {
                                  'speaker': 'SUPERPHREAK',
                                  'message': "TO EXECUTE AN ATTACK COMMAND, CLICK ON ANY SECTOR OF AN ENEMY PROGRAM THAT IS WITHIN RANGE. CLICK HERE TO EXECUTE THIS COMMAND. <ATTACK THE ENEMY PROGRAM>",
                                  'responses': [2370]
                                },
                                  '2370': {
                                    'speaker': 'player',
                                    'message': "NEXT.",
                                    'responses': [2371]
                                  },
                                  '2371': {
                                    'speaker': 'SUPERPHREAK',
                                    'message': "NICE. NOW LET'S MOVE OUR OTHER PROGRAM. CLICK HERE TO SELECT IT. <CLICK SLINGSHOT>",
                                    'responses': [2372]
                                  },
                                    '2372': {
                                      'speaker': 'player',
                                      'message': "NEXT.",
                                      'responses': [2373]
                                    },
                                    '2373': {
                                      'speaker': 'SUPERPHREAK',
                                      'message': "MOVE THE PROGRAM CLOSER TO YOUR TARGET. <MOVE CLOSER>",
                                      'responses': [2374]
                                    },
                                      '2374': {
                                        'speaker': 'player',
                                        'message': "NEXT.",
                                        'responses': [2375]
                                      },
                                      '2375': {
                                        'speaker': 'SUPERPHREAK',
                                        'message': "SLINGSHOT IS A RANGED ATTACK PROGRAM. I THINK WE'RE IN RANGE NOW. CLICK ON THE COMMAND TO ACTIVATE IT. <CLICK ON \"STONE\">",
                                        'responses': [2376]
                                      },
                                        '2376': {
                                          'speaker': 'player',
                                          'message': "NEXT.",
                                          'responses': [2377]
                                        },
                                        '2377': {
                                          'speaker': 'SUPERPHREAK',
                                          'message': "GOOD. NOW CLICK ON THE ENEMY PROGRAM TO EXECUTE THE COMMAND. <DEFEAT THE ENEMY>",
                                          'responses': [2378]
                                        },
                                          '2378': {
                                            'speaker': 'player',
                                            'message': "NEXT.",
                                            'responses': [2379]
                                          },
                                          '2379': {
                                            'speaker': 'SUPERPHREAK',
                                            'message': "WAY TO GO. YOU JUST WON YOUR FIRST DATABATTLE.",
                                            'responses': [2380]
                                          },
                                            '2380': {
                                              'speaker': 'player',
                                              'message': "NEXT.",
                                              'responses': [2381]
                                            },
                                            '2381': {
                                              'speaker': 'SUPERPHREAK',
                                              'message': "OF COURSE, MOST DATABATTLES WON'T BE AS EASY AS THIS ONE. YOU'LL NEED TO PICK UP MORE POWERFUL PROGRAMS FROM WAREZ NODES ON THE NETWORK. SOME ADVANCED PROGRAMS HAVE MORE THAN ONE COMMAND. SPECIAL COMMANDS CAN BE USED TO INCREASE THE POWER OF YOUR OWN PROGRAMS OR EVEN CHANGE THE GRID.",
                                              'responses': [2382]
                                            },
                                              '2382': {
                                                'speaker': 'player',
                                                'message': "NEXT.",
                                                'responses': [2385]
                                              },
                                                '2385': {
                                                  'speaker': 'SUPERPHREAK',
                                                  'message': "OK, THOSE ARE THE BASICS. DO YOU WANT ME TO GO OVER IT AGAIN? WHEN YOU GET BACK TO THE NETMAP, YOU'LL BE ON YOUR OWN. CLICK ON A NODE AND SEE WHAT YOU CAN FIND OUT THERE. GOOD LUCK!",
                                                  'responses': [2386, 2387]
                                                },
                                                  '2386': {
                                                    'speaker': 'player',
                                                    'message': "REPEAT.",
                                                    'responses': [2340]
                                                  },
                                                  '2387': {
                                                    'speaker': 'player',
                                                    'message': "DONE.",
                                                    'responses': [-1],
                                                    'action': function() {
                                                      // Re-add the modal class so that the player can no longer interact with anything when the chat is active
                                                      $('#chat').addClass('w3-modal');
                                                    }
                                                  },










    

  // TECH DEMO
  '16': {
    'speaker': 'SUPERPHREAK',
    'message': "Two more things before you get started. First, here is 1000 credits, don't spend it all in one place. Second, let me introduce you to WinterMutant. Say 'Hi', Winter.",
    'responses': [17],
    'timeout': 8000,
    'action': function() {
      player.receiveCredits(1000);
    },
  },
  '17': {
    'speaker': 'WINTERMUTANT',
    'message': "'Hi', Winter.",
    'responses': [18]
  },
  '18': {
    'speaker': 'player',
    'message': "Nice to meet you! I'm looking forward to working with you. Now I better get to my training.",
    'responses': [-1]
  }
};