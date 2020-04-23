const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer(function(req, res) {

    res.writeHead(200, {'Content-Type':'text/html'})
    fs.readFile('index.html', function(error, data) {
        if (error){
            res.writeHead(400)
            res.write('Error: File not Found')
        } else {
            res.write(data)
        }
    })
})



server.listen(port, function(error) {
    if(error) {
        console.log('something went wrong', error)
    } else{
        console.log('server is listening on port '+ port) 
   }
})