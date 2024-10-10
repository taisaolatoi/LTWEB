import express from "express";
import userModel from '../model/userModel'
const getAllUser = async (req,res) => {
    let userList = await userModel.getAllUser()
    return res.render('home', {data: {title: 'List User', page: 'listUser', rows: userList}})
}
// const editUser = async(req,res) =>{
//     let userList = await userModel.
// }
export default getAllUser;