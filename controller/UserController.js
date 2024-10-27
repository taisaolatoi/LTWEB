import express from "express";
import userModel from '../model/userModel'
import { parse } from "dotenv";
const getAllUser = async (req, res) => {
    let userList = await userModel.getAllUser()
    return res.render('home', { user: req.session.user, data: { title: 'List User', page: 'listUser', rows: userList } })
}

const getOneUser = async (req, res) => {
    let user = req.params.userId
    if (req.session.user[0].role === 0) {
        let detailUser = await userModel.getOneUser(user)
        return res.render('home', { user: req.session.user, data: { title: 'Detail User', page: 'detailUser', rows: detailUser } })
    } else if (req.session.user[0].role === 1 && req.session.user[0].id === parseInt(user)) {
        let detailUser = await userModel.getOneUser(user)
        return res.render('home', { user: req.session.user, data: { title: 'Detail User', page: 'detailUser', rows: detailUser } })
    }else{
        res.send('Bạn không có quyền xem người dùng này')
    }

}

const editUser = async (req, res) => {
    let user = req.params.Id;
    let dataUser = await userModel.getOneUser(user);

    if (req.session.user[0].role === 0) {
        return res.render('home', {
            user: req.session.user,
            data: { title: 'Edit User', page: 'editUser', rows: dataUser }
        });
    } else if (req.session.user[0].role === 1 && req.session.user[0].id === parseInt(user)) {
        return res.render('home', {
            user: req.session.user,
            data: { title: 'Edit User', page: 'editUser', rows: dataUser }
        });
    } else {
        res.send('Bạn không có quyền sửa người dùng này.');
    }
};

const updateUser = async (req, res) => {
    console.log(req.body)
    let { fullname, address, userId } = req.body
    if (req.session.user[0].role === 0) {
        await userModel.updateUser(fullname, address, userId)
        res.redirect("/listUser")
    } else if (req.session.user[0].role === 1 && req.session.user[0].id === parseInt(userId)) {
        await userModel.updateUser(fullname, address, userId)
        res.redirect("/listUser")
    } else {
        res.send('Bạn không có quyền sử dụng')
    }

}

const deleteUser = async (req, res) => {
    let user = req.params.Id
    if (req.session.user[0].id === parseInt(user)) {
        res.send('Không thể xóa chính mình')
        return;
    } else if (req.session.user[0].role === 0) {
        let delUser = await userModel.delUser(user)
        return res.render('home', { user: req.session.user, data: { title: 'Del User', page: 'listUser', rows: delUser } })
    } else if (req.session.user[0].role === 1 && req.session.user[0].id === parseInt(user)) {
        let delUser = await userModel.delUser(user)
        return res.render('home', { user: req.session.user, data: { title: 'Del User', page: 'listUser', rows: delUser } })
    } else {
        res.send('Không có quyền xóa');
    }
}

const createUser = async (req, res) => {
    let { username, pass, fullname, email, sex } = req.body
    const role = 1;
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

const logoutUser = async (req, res) => {
    req.session.user = null
    res.redirect('/')
}

export default { getAllUser, getOneUser, editUser, updateUser, deleteUser, loginUser, createUser, logoutUser }