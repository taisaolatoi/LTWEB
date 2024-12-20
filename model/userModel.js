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

const checkUser = async (username, pass) => {
    const [rows, fields] = await pool.execute('select * from users where username=? and password =?', [username, pass])
    return rows
}

const createUser = async (username, pass, fullname, email, sex, role) => {
    const [rows, fields] = await pool.execute('insert into users(username,password,fullname,email,sex,role) values (?, ?, ?, ?, ?, ?)', [username, pass, fullname, email, sex, role])
    return rows
}

const checkExistingUser = async (username) => {
    const [rows, fields] = await pool.execute('SELECT * FROM users WHERE username = ?', [username]);
    return rows.length > 0;
};

export default { getAllUser, updateUser, getOneUser, delUser, checkUser, createUser, checkExistingUser }