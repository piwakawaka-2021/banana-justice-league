
console.log("Hey banana justice league!!!");


const server = require('./server')

const PORT = process.env.PORT || 3000

server.listen(PORT, function () {
  // eslint-disable-next-line no-console
    console.log('Server is listening on port', port)
})

