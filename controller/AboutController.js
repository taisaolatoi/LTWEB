import express from "express";
const getAboutPage = (req, res) => {
    return res.render('home', {user: req.session.user, data: { title: 'About Page', page: 'about' } })
}
export default getAboutPage;