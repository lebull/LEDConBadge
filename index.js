// const jscad = require('@jscad/openjscad')
// const fs = require('fs')
//
// var script = `function main() {
//    return [
//       torus()
//   ]
// }`
//
// // generate compiled version
// var params = {}
// jscad.compile(script, params).then(function(compiled) {
//   // generate final output data, choosing your prefered format
//   var outputData = jscad.generateOutput('stlb', compiled)
//   // hurray ,we can now write an stl file from our OpenJsCad script!
//   fs.writeFileSync('torus.stl', outputData.asBuffer())
// })


//Convert the image to greyscale

// var Jimp = require("jimp");
//
// Jimp.read("images/windy.jpg").then(function (workImage) {
//
//     bigNumber = Math.max(workImage.bitmap.width, workImage.bitmap.height);
//     scaleFactor = 512/bigNumber;
//
//     workImage.scale(scaleFactor)            // resize
//          //.quality(60)                 // set JPEG quality
//          .greyscale()                 // set greyscale
//          .invert()
//          .write("work/windy_greyscale.png"); // save
// }).catch(function (err) {
//     console.error(err);
// });

//Convert greyscale to stl
var exec = require('child_process').exec;
exec('java', [ '-jar','lib/heightmap2stl.jar', 'work/windy_greyscale.png', '1.4', '0.6'], function callback(error, stdout, stderr){
    // result
    console.log('process exit code ' + error);
});
