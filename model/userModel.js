import pool from '../connectDB';
const getAllUser = async () => {
    const [rows, fields] = await pool.execute('Select * from users')
    return rows
}

const getOneUser = async (user) => {
    const [rows, fields] = await pool.execute('select * from users where id=?', [user])
    return rows[0]

}

const updateUser = async (fullname, address, userId) => {
    const [rows, fields] = await pool.execute('update users set fullname=?,address=? where id=?',
        [fullname, address, userId]
    )

}

const delUser = async (user) => {
    const [rows, fields] = await pool.execute('delete from users where id=?', [user])
    return rows
}

export default { getAllUser, updateUser, getOneUser, delUser }