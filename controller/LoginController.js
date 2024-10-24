import express from "express";
const getLoginPage = (req,res) =>{
    return res.render('home', {data: {title:'Login Page', page: 'login'}})
}
export default getLoginPage;