const fs = require('fs');
// read stream// right stream


const readStream = fs.createReadStream('./doc/blog3.txt', {encoding: 'utf-8'});
const writeStream  = fs.createWriteStream('./doc/blog4.txt');


// readStream.on('data',(chunk) =>{     //.on is an event listener // here we will listen to an buffer data
//     console.log("-------NEW CHUNK---------")
//     // console.log(chunk.toString());
//     console.log(chunk);
//     writeStream.write('\n NEW CHUNK\n');
//     writeStream.write(chunk);
// });

// piping
readStream.pipe(writeStream);
