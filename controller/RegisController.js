import express from "express";
const getRegisPage = (req,res) => {
    return res.render('home', {user: req.session.user, data: {title: 'Regis Page', page: 'createUser'}})
}
export default getRegisPage;