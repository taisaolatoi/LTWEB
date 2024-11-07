import express from "express";
const router = express.Router()
import APIUserController from "../controller/APIUserController";
import APIproductController from "../controller/APIproductController";

import auth from "../middleware/auth";

const initAPIWebroute = (app) => {
    router.all('/', auth)
    router.get('/APIgetalluser', APIUserController.getAllUser)
    router.get('/APIgetoneuser/:Id', APIUserController.getOneUser)
    router.post('/APIcreateuser', APIUserController.createUser)
    router.put('/APIupdateuser/:Id', APIUserController.updateUser)
    router.delete('/APIdeluser/:Id', APIUserController.delUser)
    router.post('/APIloginuser', APIUserController.loginUser)
    router.get('/APIlogoutuser', APIUserController.logoutUser)
    router.get('/APIcategory',APIproductController.viewCategory)
    router.get('/APIproduct',APIproductController.viewProduct)
    router.get('/APIgetoneproduct/:Id', APIproductController.viewOneproduct)





    return app.use('/api', router)
}
export default initAPIWebroute;
