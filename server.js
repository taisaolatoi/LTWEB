import express from 'express';
import myDateTime from './date';
import getURL from './getURL';
import dotenv from 'dotenv/config';
import viewEngine from './viewEngine';
import initWebroute from './route/webRoute';
import initAPIWebroute from './route/apiRoute';
import bodyParser from 'body-parser';
import session from 'express-session';
import RedisStore from "connect-redis"
import { createClient } from "redis"
import cors from 'cors'
import auth from './middleware/auth';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
dotenv.config
const port = process.env.PORT
let redisClient = createClient()
redisClient.connect().catch(console.error)


let redisStore = new RedisStore({
    client: redisClient,
    prefix: "myapp:",
})


app.use(session({
    store: redisStore,
    resave: false,
    saveUninitialized: false,
    secret: "keyboard cat",

}))
const corsOption = {
    origin: ['http://localhost:3000'],
    optionSuccessStatus: 200
}
app.use(cors(corsOption))
// app.use(auth)
initAPIWebroute(app)
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
