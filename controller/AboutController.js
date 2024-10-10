import express from "express";
const getAboutPage = (req,res) => {
    return res.render('home', {data: {title: 'About Page', page: 'about'}})
}
export default getAboutPage;