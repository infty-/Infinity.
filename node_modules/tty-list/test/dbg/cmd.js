var Cmd = require('cmd');

var cmd = new Cmd({
	ansi: [
	    '\033[51H',
	    '\033[2J',
	    '\033[H',
	    'abc',
	    {
		ansi: ['\ndef']
	    },
	    '\033[52H'
	]
    });
cmd.put();