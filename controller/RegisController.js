import express from "express";
const getRegisPage = (req,res) => {
    return res.render('home', {data: {title: 'Regis Page', page: 'createUser'}})
}
export default getRegisPage;