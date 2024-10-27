import express from "express";
import userModel from "../model/userModel";
const getAllUser = async (req, res) => {
    let users = await userModel.getAllUser()
    return res.status(200).json({
        errCode: 1,
        message: "Sucess",
        user: users
    })
}

const getOneUser = async (req, res) => {
    let id = req.params.Id
    let user = await userModel.getOneUser(id)
    if (user) {
        return res.status(200).json({
            errCode: 1,
            message: "Sucess",
            user: user
        })
    } else {
        return res.status(200).json({
            message: "Không có dữ liệu"
        })
    }

}

const createUser = async (req, res) => {
    const username = "vanphatdat2"
    const pass = "1"
    const fullname = "maicodeptrai"
    const email = "naruto@gmai.com"
    const sex = "Nam"
    const role = 1;
    const exitsUser = await userModel.checkExistingUser(username)
    if (exitsUser) {
        return res.status(200).json({
            errCode: 0,
            message: "Username đã tồn tại"
        })
    }
    const createUser = await userModel.createUser(username, pass, fullname, email, sex, role)
    return res.status(200).json({
        errCode: 1,
        message: "Tạo tài khoản thành công",
        user: createUser
    })
}

const updateUser = async (req, res) => {
    let id = req.params.Id
    const fullname = "quy du"
    const address = "Tran Quang Dieu"
    const userId = id
    const user = await userModel.updateUser(fullname, address, userId)
    return res.status(200).json({
        errCode: 1,
        message: "Cập nhật thành công",
        user: user
    })
}

const delUser = async (req, res) => {
    let id = req.params.Id
    const user = await userModel.delUser(id)
    return res.status(200).json({
        errCode: 1,
        message: "Xóa thành công",
        user: user
    })
}

const loginUser = async (req, res) => {
    const username = "admin"
    const pass = "1"
    const user = await userModel.checkUser(username, pass)
    if (user.length > 0) {
        req.session.user = user[0]
        return res.status(200).json({
            errCode: 1,
            message: "Đăng nhập thành công",
            user: user[0]
        })
    } else {
        return res.status(401).json({
            errCode: 0,
            message: "Đăng nhập thất bại",
        })
    }
}

const logoutUser = async (req, res) => {
    if (req.session.user) {
        req.session.user = null
        return res.status(200).json({
            errCode: 1,
            message: 'Đăng xuất thành công'
        })
    } else {
        return res.status(401).json({
            errCode: 0,
            message: 'Bạn chưa đăng nhập'
        })
    }
}
export default { getAllUser, getOneUser, createUser, updateUser, delUser, loginUser, logoutUser }