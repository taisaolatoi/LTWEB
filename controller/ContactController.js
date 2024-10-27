import express from "express";
const getContactPage = (req,res) =>{
    return res.render('home', {user: req.session.user, data: {title:'Contact Page', page: 'contact'}})
}
export default getContactPage;