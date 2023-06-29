// const { createServer } = require('http')
// const { parse } = require('url')
// const next = require('next')
const functions = require('firebase-functions');
const { createTransport } = require('nodemailer');
// const functions = require('firebase-functions')


// const port = parseInt(process.env.PORT || '3000', 10)
// const dev = process.env.NODE_ENV !== 'production'
// const app = next({ dev, conf: { distDir: '.next' }, })
// const handle = app.getRequestHandler()


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

// exports.jobieFarmNextServerFn = https.onRequest((req, res) => {
//     // return res.status(200).send("Hello world")
//      app.prepare().then(() => {
//         console.log(
//           `> Server listening at ${req.baseUrl} as ${
//             dev ? 'development' : process.env.NODE_ENV
//           }`
//         )
//         if(req.url === "") {
//             req.url = "/"
//         }
//         const parsedUrl = parse(req.url, true)
//        return handle(req, res, parsedUrl)
      
//       }).catch(ex => {
//          console.log('see error')
//           console.error(ex.stack)
//           process.exit(1)
//       })
// })

const transporter = createTransport({
  host: 'jobieagrofarm.com',
  port: 465,
  secure: true,
  auth: {
      user: 'hello@jobieagrofarm.com',
      pass: '$$J0b1e@agroF@rm2023'
  }
});

exports.sendWelcomeMessage = functions.auth.user().onCreate(async (user) => {
  console.log('sendWelcomeMessage',user)
  const displayName = user.displayName || 'User';
  const email = user.email || '';

  const welcomeMessage = `Welcome, ${displayName}! Thank you for signing up with JobieAgro Farm.`;

  try {
    const mailOptions = {
      from: "hello@jobieagrofarm.com",
      to:  email,
      subject: "Account Created",
      html: welcomeMessage,
    };
  
    console.log(welcomeMessage);
    return transporter.sendMail(mailOptions, (error, data) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log("Sent!");
    });
    // Send a notification or perform any other action here
  } catch (error) {
    console.error('Error sending welcome message:', error);
  }
});

exports.sendOrderEmail = functions.firestore.document('orders/{orderId}').onCreate((snap, context) => {
  console.log("data from snap", snap.data()?.email);
  const mailOptions = {
    from: "admin@jobieagrofarm.com",
    to: snap.data().email,
    subject: "Order Created",
    html: `<h1>Hello ${
      snap.data().customerName
    }, Your order request has been successfully created</h1>`,
  };

  return transporter.sendMail(mailOptions, (error, data) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log("Sent!");
  });
});