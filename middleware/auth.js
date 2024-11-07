const auth = (req, res, next) => {
    if (req.session.user) {
        const isAdmin = req.session.user[0].role === 0;
        const isUser = req.session.user[0].role === 1;

        if (isAdmin) {
            next();
        } else {
            next();
            // res.send('Không có quyền')
        }
    } else {
        if (req.path === '/' || req.path === '/login' || req.path === '/login-user' || req.path === '/listUser' || req.path === '/createUser' || req.path === '/createUserA' || req.path === '/api/APIcreateuser' || req.path === '/api/APIcategory') { // Cho phép truy cập vào trang đăng nhập
            next();
        } else {
            // res.redirect("/login"); // Chuyển hướng đến trang đăng nhập
            res.send('Bạn không có quyền truy cập chức năng này')
        }
    }
};

export default auth;