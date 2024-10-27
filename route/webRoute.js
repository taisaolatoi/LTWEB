import express from "express";
const router = express.Router()
import getHomePage from "../controller/HomeController";
import getAboutPage from "../controller/AboutController";
import getContactPage from "../controller/ContactController";
import UserController from "../controller/UserController";
import getLoginPage from "../controller/LoginController";
import getRegisPage from '../controller/RegisController'
import auth from "../middleware/auth";
const initWebroute = (app) => {
    router.all('*',auth)
    router.get('/', getHomePage)
    router.get('/about', getAboutPage)
    router.get('/contact', getContactPage)
    router.get('/login', getLoginPage)
    router.get('/createUser', getRegisPage)
    router.get('/detailUser/:userId', UserController.getOneUser)
    router.get('/edit-user/:Id', UserController.editUser)
    router.post('/update-user/:Id', UserController.updateUser)
    router.get('/delete-user/:Id', UserController.deleteUser)
    router.get('/listUser', UserController.getAllUser)
    router.post('/createUserA',UserController.createUser)
    router.post('/login-user', UserController.loginUser)
    router.get('/logout', UserController.logoutUser)
    router.get('/get-session', (req, res) => {
        res.send(req.session)
    })




    return app.use('/', router)
}
export default initWebroute;
