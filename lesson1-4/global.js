console.log(global);    

setTimeout(()=>{
    console.log("In the timeout");
    clearInterval(int);      // until we get 3 second
},3000);

const int = setInterval(()=>{             // in every 1 sec time interval   
    console.log("in the interval");
},1000);

console.log(__dirname);
console.log(__filename);
