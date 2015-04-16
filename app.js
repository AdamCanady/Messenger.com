// var fs = require('fs');
// var ytdl = require('ytdl-core');

// ytdl('http://www.youtube.com/watch?v=A02s8omM_hI')
//   .pipe(fs.createWriteStream('video.flv'));

var gui = require('nw.gui');
var mb = new gui.Menu({type:"menubar"});
mb.createMacBuiltin("Messenger.com");
gui.Window.get().menu = mb;