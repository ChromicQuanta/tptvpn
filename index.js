http = require("http")
http.createServer((q,s)=>{
  s.end("Hi")
}).listen(80)
