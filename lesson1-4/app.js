const express = require('express');


const app = express();


app.get('/', (req,res)=>{
    // res.send('<p>Home page</p>');
    res.sendFile('./views/index.html', {root:__dirname});
})
app.get('/', (req,res)=>{
    res.send('<p>home page</p>')
})
app.get('/', (req,res)=>{
    res.send('<p>home page</p>')
})


app.listen(3000, ()=>{
    console.log("listening on port 3000");
});