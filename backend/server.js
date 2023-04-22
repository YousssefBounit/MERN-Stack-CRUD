const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");

const salt = 10;

const app = express();

app.use(express.json());

app.use(cors());

app.use(cookieParser());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"murndb"
});

app.post('/auth/register',(req,res)=>{
    const sql = "INSERT INTO login (`name`,`email`,`password`) VALUES (?)";
    bcrypt.hash(req.body.password.toString(),salt,(err,hash)=>{
        if(err) return res.json({Error:"Error for hashing password"});
        const values = [
            req.body.name,
            req.body.email,
            hash
        ]
        db.query(sql,[values],(err,result)=>{
            if(err) return res.json({Error:"Inserting data Error in Server"});
            return res.json({Status:"Success"});
        })
    });
    
})

app.post('/auth/login',(req,res)=>{
    const sql = "SELECT * FROM login WHERE email = ?";

    db.query(sql,[req.body.email],(err,data)=>{
        if(err) return res.json({Error:"Login Error in server"});
        if(data.length > 0){
            bcrypt.compare(req.body.password.toString(), data[0].password,(err,response)=>{
                if(err) return res.json({Error:"Password Compare Error"});
                if(response){
                    return res.json({Status:"Success"});
                }else{
                    return res.json({Status:"Password incorrect"});
                }
            })
        }else{
            return res.json({Error:"No Email existed"});
        }
    })
    
})

app.get("/students",(req,res)=>{
    const sql =  "SELECT * FROM students";
    db.query(sql,(err,data)=>{
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.post('/students/create',(req,res)=>{
    const sql = "INSERT INTO students (`name`,`email`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email
    ];

    db.query(sql,[values],(err,data)=>{
        if(err) return res.json("Error");
        return res.json(data);
    });
})

app.put('/students/update/:id',(req,res)=>{
    const sql = "UPDATE students SET `name` = ?, `email` = ? WHERE id = ?";

    const values = [
        req.body.name,
        req.body.email
    ];

    const id = req.params.id;


    db.query(sql,[...values,id],(err,data)=>{
        if(err) return res.json("Error");
        return res.json(data);
    });
})

app.delete('/students/delete/:id',(req,res)=>{
    const sql = "DELETE FROM students WHERE id = ?";

    const id = req.params.id;

    db.query(sql,[id],(err,data)=>{
        if(err) return res.json("Error");
        return res.json(data);
    });
})

app.get("/students/read/:id",(req,res)=>{
    const sql =  "SELECT * FROM students WHERE id = ?";

    const id = req.params.id;

    db.query(sql,[id],(err,data)=>{
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.listen(8081,()=>{
    console.log('Running. ...');
})