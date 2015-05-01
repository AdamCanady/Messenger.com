var NwBuilder = require('node-webkit-builder');
var nw = new NwBuilder({
    files: './**', // use the glob format
    platforms: ['osx64', 'linux64'],
    macIcns: 'icon.icns',
    macZip: false
});

//Log stuff you want

nw.on('log',  console.log);

// Build returns a promise
nw.build().then(function (err) {
  // if(err) console.log(err);
  console.log('all done!');
}).catch(function (error) {
    console.error(error);
});