import pool from '../connectDB';
const getCategory = async() => {
    const[rows,fields] = await pool.execute('select * from nhom')
    return rows
}

const getProduct = async() => {
    const [rows,fields] = await pool.execute('select * from sanpham')
    return rows
}

const getOneproduct = async (Id) => {
    const [rows, fields] = await pool.execute('select * from sanpham where masp=?', [Id])
    return rows[0]

}
export default {getCategory,getProduct,getOneproduct}