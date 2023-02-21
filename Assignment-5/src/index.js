// var http = require("http");

// const httpServer = http.createServer(handleServer);


// function handleServer(req, resp) {
//   if(resp.url === '/welcome'){
//     resp.writeHead(200,{'content-Type':'text/plain'});
//     resp.end(' Welcome to Dominos!');
//   }
 
//   if(resp.url==='/contact us'){
//     resp.writeHead(200,{'content-Type':'text/plain' });
//     resp.end({  
//              phone: '18602100000', 
//              email: 'guestcaredominos@jublfood.com' 
//        })
//   }


//   else{
//     resp.writeHead(404,{'content-Type' : 'text/html' });
//     resp.end('<h1>404 Error</h1>')
//   }
// }
// httpServer.listen(8081,()=>{
//     console.log('the server is running on 8081 port')
// })
// module.exports = httpServer;






//Using ExpressJs APIs

let express = require('express');
let dominosApp = express();


dominosApp.get('',(req,resp) =>{
    resp.send('<h2>Welcome to Dominos!</h2>')
});

dominosApp.get('/contact_us', (req,resp) =>{
    resp.send(
      "<h2> phone:18602100000<br>email: 'guestcaredominos@jublfood.com'</h2>")
});

dominosApp.listen(8081)
