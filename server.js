import express from 'express';
import myDateTime from './date';
import getURL from './getURL';
import dotenv from 'dotenv/config';
import viewEngine from './viewEngine';
const app = express();
const port = process.env.PORT
viewEngine(app)

app.get('/', (req, res) => {
    res.render("home")
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/date', (req, res) => {
    res.send(myDateTime());
})

app.get('/geturl', (req,res) => {
    res.send(getURL.getPath(req) + "<br/>" + getURL.getParamsURL(req)
);
})

app.get('/ejs',(req,res) => {
    res.render("test")
})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
