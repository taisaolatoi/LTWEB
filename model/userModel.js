import pool from '../connectDB';
const getAllUser = async() =>{
    const [rows, fields] = await pool.execute('Select * from users')
    return rows
}
const editUser = async() =>{
    const [rows, fields] = await pool.execute('update users set fullname=?,pass=?,adress=? where user=?',
        [fullname,pass,adress,user]
    )
}

export default {getAllUser, editUser}