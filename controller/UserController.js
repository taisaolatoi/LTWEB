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
    let { fullname, address, userId } = req.body
    await userModel.updateUser(fullname, address, userId)
    res.redirect("/listUser")
}

const deleteUser = async (req, res) => {
    let user = req.params.Id
    let delUser = await userModel.delUser(user)
    return res.render('home', { data: { title: 'Del User', page: 'listUser', rows: delUser } })
}

const createUser = async (req, res) => {
    let { username, pass, fullname, email, sex } = req.body
    const role = 0;
    const insert = await userModel.createUser(username, pass, fullname, email, sex, role)
    if (insert.affectedRows > 0) {
        res.status(201).json({ message: 'Tạo tài khoản thành công!' }); 
    } else {
        res.status(500).json({ message: 'Lỗi khi tạo tài khoản!' }); 
    }
}

const loginUser = async (req, res) => {
    let { username, pass } = req.body
    const user = await userModel.checkUser(username, pass)
    if (user.length > 0) {
        req.session.user = user;
        res.redirect("/")
    } else {
        res.status(401).json({ message: 'Tên đăng nhập hoặc mật khẩu không đúng!' });
    }
}

export default { getAllUser, getOneUser, editUser, updateUser, deleteUser, loginUser, createUser }