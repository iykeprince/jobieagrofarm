const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const { https } = require('firebase-functions/v1')

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, conf: { distDir: '.next' }, })
const handle = app.getRequestHandler()

//  app.prepare().then(() => {
//   createServer((req, res) => {
//     if(req.url === "") {
//         req.url = "/"
//     }
//     const parsedUrl = parse(req.url, true)
//     handle(req, res, parsedUrl)
//   }).listen(port)

//   console.log(
//     `> Server listening at http://localhost:${port} as ${
//       dev ? 'development' : process.env.NODE_ENV
//     }`
//   )
// }).catch(ex => {
//     console.error(ex.stack)
//     process.exit(1)
// })

exports.jobieFarmNextServerFn = https.onRequest((req, res) => {
    // return res.status(200).send("Hello world")
     app.prepare().then(() => {
        console.log(
          `> Server listening at ${req.baseUrl} as ${
            dev ? 'development' : process.env.NODE_ENV
          }`
        )
        if(req.url === "") {
            req.url = "/"
        }
        const parsedUrl = parse(req.url, true)
       return handle(req, res, parsedUrl)
      
      }).catch(ex => {
         console.log('see error')
          console.error(ex.stack)
          process.exit(1)
      })
})