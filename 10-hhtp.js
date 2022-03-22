const http = require('http');

// we can write ('Welcome to our home page') in the res.end()
//res.write('Welcome to our home page')
//res.end()
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Here is our short History')
    }
    res.end(`    
    <h1>0ops!</h1>
<p>We can't seem to find the page you are looking for</p>
<a href="/">back home</a>    
    `)
// this is HTML '|' 
})

server.listen(5000);