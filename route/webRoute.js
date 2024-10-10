import express from "express";
const router = express.Router()
import getHomePage from "../controller/HomeController";
import getAboutPage from "../controller/AboutController";
import getContactPage from "../controller/ContactController";
import getAllUser from "../controller/UserController";
const initWebroute = (app) => {
    router.get('/', getHomePage)
    router.get('/about',getAboutPage )
    router.get('/contact',getContactPage )
    router.get('/listUser',getAllUser )
    return app.use('/', router)
}
export default initWebroute;
