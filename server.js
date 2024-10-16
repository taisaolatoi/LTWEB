import express from 'express';
import myDateTime from './date';
import getURL from './getURL';
import dotenv from 'dotenv/config';
import viewEngine from './viewEngine';
import initWebroute from './route/webRoute';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
dotenv.config
const port = process.env.PORT
initWebroute(app)
viewEngine(app)


// app.get('/', (req, res) => {
//     res.render('home' , {data: {page: 'main'}})
// })

// app.get('/about', (req, res) => {
//     res.render('home' , {data: {page: 'about'}})
// })

// app.get('/date', (req, res) => {
//     res.send(myDateTime());
// })

// app.get('/geturl', (req,res) => {
//     res.send(getURL.getPath(req) + "<br/>" + getURL.getParamsURL(req)
// );
// })

// app.get('/ejs',(req,res) => {
//     res.render("test")
// })




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
