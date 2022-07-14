// module
const http = require("http")

//req - the incomming request, res - the response to the request
const server = http.createServer((req, res) => {
    // Home page
    if(req.url === '/'){
        return res.end("<h1>Welcome to MiceX!</h1>")
    }

    // about page
    if(req.url === "/about"){
        return res.end("<h1>Here is our history: </h1>")
    }

    // No page
    return res.end(`
        <h1>No such Page!</h1>
        <a href="/">back home</a>
    `)
})

// The assigned port to the server
server.listen(8000)