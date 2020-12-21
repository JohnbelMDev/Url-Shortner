const express = require('express');


const app = express();


app.use(express.json({
  extented: false
}))


// Steps 1: have some fake data
// orginaurl:'google.com'
// 'replace':2q
// orginaurl:'google.com'
// 'replace':2q

// orginaurl:'google.com'
// 'replace':2q


const PORT = 5000;
const mongoose = require('mongoose')

var shortUrl = require('node-url-shortener');
const config = require('config')
const db = config.get('mongoURI')
const urlModel = require('./urlModel/urlModel.js')
const cors = require('cors')
// console.log('dbconnect', db);
app.use(cors())
mongoose.connect(db, {
  useNewUrlParser: true
});

//
// app.get(/(.*)/, function(req, res) {
//
//   const id = req.path.slice(1)
//   // console.log(id);
//   urlModel.findById(id, function(err, url) {
//     console.log(url)
//   res.send(url);
//   });
//
//
//
//
//
// res.send('error');
// });
//

// shortUrl.short('https://codeportal.in', function(err, url){
//     console.log('hello',url);
// });

app.post('/test', function(req, res) {
  // const urltest = new urlModel(req.body)
    // urltest.save( (err,result) => {
    // if(err) console.log(err);
    // else {
    //   console.log(result);
    // }
    // })
    shortUrl.short(req.body.url, function(err, url){
      const urltest = new urlModel({
        url:req.body.url,
        shortenUrl:url
      })
      urltest.save( (err,result) => {
      if(err) console.log(err);
      else {
        console.log(result);
        res.json({shortUrl:url})

      }
      })
        console.log('hello',url);
    });
  console.log('hello',req.body);


});



// app.get('/test4', (req, res) => {
//     res.send("hey");
//     console.log('route found');
// });


// const connectDB = async () => {
//   try {
//     await mongoose.connect(db, {
//
//       useNewUrlParser: true
//     });
//     console.log('Mongodb Connected');
//   } catch (err) {
//     console.error(err.message)
//     process.exit(1)
//   }
// }

app.listen(PORT, () => console.log(`Server runiing on port ${PORT}`))
