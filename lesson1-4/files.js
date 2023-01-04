const fs = require('fs');

// reading files
fs.readFile('./doc/blog1.txt', (err, data)=>{
    if(err){
        console.log(err);
    }
    console.log(data);     //<Buffer 68 65 6c 6c 6f 20 61 67 61 69 6e>
    console.log(data.toString());
})
console.log("last line ");

// writing files
fs.writeFile('./doc/blog1.txt', 'hello again', ()=>{
    console.log("file was written")
})

// fs.writeFile('./doc/blog2.txt', 'hello again', ()=>{      // it creates a new one and write
//     console.log("file was written")
// })

// directories
if (! fs.existsSync('./assets')){
    fs.mkdir('./assets',(err)=>{
        if(err){
            console.log(err);
        }
        console.log("folder created")
    })
}else{
    fs.rmdir('./assets', (err)=>{
        if(err){
            console.log(err)
        } 
        console.log("folder deleted")
    })
}


// deleting files 
if(fs.existsSync('./doc/deleteme.txt')){
    fs.unlink('./doc/deleteme.txt',(err)=>{
        if(err){
            console.log(err);
        }
        console.log("file deleted")
    })
} 