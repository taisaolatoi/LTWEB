import express from "express";
import productModel from "../model/productModel";
const viewCategory = (req, res) => {
    let category = productModel.getCategory()
    return res.status(200).json({
        errCode: 1,
        data: category
    })
}

const viewProduct = (req, res) => {
    let product = productModel.getProduct()
    return res.status(200).json({
        errCode: 1,
        data: product
    })
}

const viewOneproduct = (req, res) => {
    let Id = req.params.Id
    let product = productModel.getOneproduct(Id)
    return res.status(200).json({
        errCode: 1,
        data: product
    })
}
export default { viewCategory, viewProduct, viewOneproduct }