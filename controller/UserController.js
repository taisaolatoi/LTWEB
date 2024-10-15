import express from "express";
import userModel from '../model/userModel'
const getAllUser = async (req, res) => {
    let userList = await userModel.getAllUser()
    return res.render('home', { data: { title: 'List User', page: 'listUser', rows: userList } })
}

const getOneUser = async (req, res) => {
    let user = req.params.userId
    let detailUser = await userModel.getOneUser(user)
    return res.render('home', { data: { title: 'Detail User', page: 'detailUser', rows: detailUser } })
}

const editUser = async (req, res) => {
    let user = req.params.Id
    let dataUser = await userModel.getOneUser(user)
    return res.render('home', { data: { title: 'Edit User', page: 'editUser', rows: dataUser } })
}

const updateUser = async (req, res) => {
    console.log(req.body)
    let {fullname, address,userId } = req.body
    await userModel.updateUser(fullname, address, userId)
    res.redirect("/listUser")
}

const deleteUser = async (req, res) => {
    let user = req.params.Id
    let delUser = await userModel.delUser(user)
    return res.render('home', { data: { title: 'Del User', page: 'listUser', rows: delUser } })
}

export default { getAllUser, getOneUser, editUser, updateUser, deleteUser }