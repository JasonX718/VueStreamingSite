let db = require('../db/index')

exports.get = (req, res) => {
    var sql = 'select * from user'
    db.query(sql, (err, data) => {
        if(err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}

exports.signup = (req, res) => {
    const { username, password, email } = req.body;
    const ismanager = 0;

    const sql = "INSERT INTO user (username, password, email, ismanager) VALUES (?, ?, ?, ?)";
    db.query(sql, [username, password, email, ismanager], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({ success: false, message: 'Server error' });
            return;
        }

        res.json({ success: true, message: 'Signup successful', username: username });
    });
};



exports.login = (req, res) => {
    const sql = 'SELECT * FROM user WHERE username = ? AND password = ?';
    db.query(sql, [req.body.username, req.body.password], (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).json({ success: false, message: 'Server error' });
            return;
        }

        if (results.length > 0) {
            const user = results[0];
            res.json({ success: true, message: 'Login successful', ismanager: user.ismanager });
        } else {
            res.json({ success: false, message: 'Incorrect username or password' });
        }
    });
}



