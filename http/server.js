const http = require('http')
const fs = require('fs')

http.createServer((req,res) => {
    if(req.url === '/')
        return res.end('<h1>HomePage</>')

    if(req.url === '/contato')
        return res.end('<h1>Contato</h1>')
}).listen(5000, () => console.log('Serve is running'))