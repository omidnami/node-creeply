const http = require("http")
const host = '193.151.129.242'
const port = 8080

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("My first server! ok it change");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
