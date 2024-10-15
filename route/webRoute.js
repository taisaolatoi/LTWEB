import express from "express";
const router = express.Router()
import getHomePage from "../controller/HomeController";
import getAboutPage from "../controller/AboutController";
import getContactPage from "../controller/ContactController";
import UserController from "../controller/UserController";
const initWebroute = (app) => {
    router.get('/', getHomePage)
    router.get('/about',getAboutPage )
    router.get('/contact',getContactPage )
    router.get('/detailUser/:userId', UserController.getOneUser)
    router.get('/edit-user/:Id', UserController.editUser)
    router.post('/update-user/:Id', UserController.updateUser)
    router.get('/delete-user/:Id', UserController.deleteUser)
    router.get('/listUser',UserController.getAllUser )
    return app.use('/', router)
}
export default initWebroute;
