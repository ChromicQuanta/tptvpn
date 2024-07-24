http = require("http")
http.createServer((q,s)=>{
  console.log("Connection! Woohoo!")
  q.on('data',(d)=>{
    console.log(d.toString())
  })
}).listen(80)
