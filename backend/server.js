const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

// get root path and it returns simple json response
app.get('/', (req, res) => {
    res.json('this is from asce backend');
})

// confirms the server is running
app.listen(5000, () => {
    console.log('listening');
})

// here handle the blogs datasets
app.get('/blogs', (req, res) => {
    const sql = "select * from blogs";
    db.query(sql, (err, data) => {
        if (err) {
            return res.json(err);
        }
        return res.json(data);
    })
})

// here handle the contact datasets
app.post('/inquiries', (req, res) => {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
        return res.json({ error: "All fields are required" });
    }

    const sql = "insert into inquiries (name, email, subject, message) values (?, ? ,?, ?)";

    db.query(sql, [name, email, subject, message], (err, data) => {
        if (err) {
            return res.json({ insertError: "Failed to sent message" })
        }
        res.json({ message: "Message sent successfully" })
    });
});

// here handle the class schedule datas
app.get('/class_schedule', (req, res) => {

    const sql = "select * from class_schedule";

    db.query(sql, (err, data) => {
        if (err) {
            return res.json(err)
        }
        res.json(data)
    })
})

// here handle the register database
app.post('/register', (req, res) => {

    const { name, email, password, mobile, plan } = req.body;

    if (!name || !email || !password || !mobile || !plan) {
        return res.json({ error: "All fields are required" });
    }

    const sql = "insert into register(member_name, email, password, mobile, plan) values (?,?,?,?,?)"

    db.query(sql, [name, email, password, mobile, plan], (err, data) => {
        if (err) {
            return res.json(err)
        }
        res.json({ data })
    })

})
app.get('/register', (req, res) => {
    const sql = "select * from register";

    db.query(sql, (err, data) => {
        if (err) {
            return res.json(err)
        }
        res.json(data)
    })
})

// here handle login
app.get('/login', (req, res) => {

    const sql = "select * from register";
    db.query(sql, (err, data) => {
        if (err) {
            return res.json(err);
        }
        res.json(data);
    })
})

app.patch('/register/:id', (req, res) => {
    const id = req.params.id;
    const { member_name, email, mobile } = req.body;
    const sql = `update register set member_name=?, email=?, mobile=? where id=?`;
    db.query(sql, [member_name, email, mobile, id], (err, data) => {
        if (err) {
            return res.json(err);
        }
        res.json(data);
    })
})
