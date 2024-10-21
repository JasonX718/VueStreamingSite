exports.login = (req, res) => {
    const sql = 'SELECT * FROM user WHERE username = ?';
    db.query(sql, [req.body.username], (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).json({ success: false, message: 'Server error' });
            return;
        }

        if (results.length > 0) {
            const user = results[0];
            if (user.password === req.body.password) {
                res.json({ success: true, message: 'Login successful', ismanager: user.ismanager });
            } else {
                res.json({ success: false, message: 'Incorrect password' });
            }
        } else {
            res.json({ success: false, message: 'User not found' });
        }
    });
}
