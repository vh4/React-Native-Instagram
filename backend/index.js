const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');
const jwt = require('jsonwebtoken')
const {TokenVerifiyBearerJwt} = require('./middleware/Auth')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// koneksi database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tugas besar'
});

const maxAge = 1 * 24 * 60 * 60; //1 days
const createToken = (username) =>{
    return jwt.sign({username}, 'secret token mobile', {
        expiresIn: maxAge
    })
}

app.get('/connection',(req, res) => {
    db.connect(function(err) {
        if(err) {
            res.json({"status": 200, 
            "message": "Koneksi gagal dilakukan.", 
            "data": err});
        } else {
            res.json({
                "status": 200, 
                "message": "Koneksi berhasil dilakukan."});
            }
        });
    });

// tabel users -- start
// create
app.post('/register',(req, res) => {
    
    let sql = "INSERT INTO user SET username='"+req.body.username+"', fullname='"+req.body.fullname+"', password='"+req.body.password+"'";
    db.query(sql, (err, results) => {
        const token = createToken(req.body.username)
        res.cookie('jwt', token, {httpOnly:true, maxAge:maxAge * 1000})
        if(err) throw err;
        res.json({
            "status": "berhasil", 
            "error": null, 
            "response": results, 
            "data":req.body});
    });

});

app.get('/posts', (req,res)=>{
    var sql = "SELECT * FROM user JOIN post ON user.id_user = post.id_user";
        db.query(sql, (err, results) =>{
                if(err) throw err;
                res.json({
                    "status":200,
                    "message":"berhasil",
                    "post":results
                })
            })
})

// retrieve
// retrieve all data
app.post('/login', (req, res) => {
    console.log(req.body)
    let sql = "SELECT * FROM user WHERE username='"+req.body.username+"' ";
        db.query(sql, (err, results) => {
            if(results.length > 0){
                if(results[0].password == req.body.password){     
                    const token = createToken(req.body.username)
                    res.cookie('jwt', token, {httpOnly:true, maxAge:maxAge * 1000})
                    res.json({
                    "status": "berhasil",
                    "message":'data berhasil diambil', 
                    "data": results,
                    "token":token
                });
                }else{
                    res.json({"status": "gagal",
                    "message":'username or password salah', 
                    "data": null,
                    "token":null
                });
                }
    
            }else{
                res.json({"status": "gagal",
                "message":'username tidak ada di database', 
                "data": null,
                "token":null,
            });
            }
        
        });
    });
    
// update

// delete
// tabel user - end
app.listen(port, () => {
console.log(`cli-nodejs-api listening at http://localhost:${port}`)
});
