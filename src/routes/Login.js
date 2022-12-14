import express from 'express'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import db from '../config/database.js'
import jwt from 'jsonwebtoken'
import Login from '../controllers/Login.js'

dotenv.config()

const router = express.Router()

router.post('/toba/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const data = await new Login().login(username)
        const user = data.rows;
        if (user.length === 0) {
            res.status(400).json({
                error: "Pengguna tidak terdaftar",
            });
        }
        else {
            bcrypt.compare(password, user[0].password, (err, result) => { 
                if (err) {
                    res.status(500).json({
                        error: "Kendala internal",
                    });
                } else if (result === true) { 
                    const token = jwt.sign({
                        username: username,
                    }, process.env.SECRET_KEY);
                    
                    res.status(200).json({
                        message: "ok",
                        token: token
                    });
                }
                else {
                    if (result != true)
                    res.status(401).json({
                        error: "Kata sandi salah",
                    });
                }
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: "Database error",
        });
    };
});

router.post('/toba/register', async (req, res) => {
    const { id, username, password, role_id, branch_id, is_active, nama } =  req.body;
    try {
        const data  =  await db.query(`SELECT * FROM public.mst_user WHERE username= $1;`, [username]);
        const arr  =  data.rows;
        if (arr.length  !=  0) {
                return  res.status(400).json({
                error: "Pengguna sudah terdaftar",
            });
        }
        else {
            bcrypt.hash(password, 10, (err, hash) => {
                if (err)
                    res.status(err).json({
                        error: "Server error",
                    });
                const user  = {
                    id,
                    username,
                    password,
                    role_id,
                    branch_id,
                    is_active,
                    nama
                };
                var flag  =  1; 

                db.query(`INSERT INTO public.mst_user(
                    id, username, password, role_id, branch_id, is_active, nama) VALUES ($1,$2,$3,$4,$5,$6,$7);`, 
                    [user.id, user.username, user.password, user.role_id, user.branch_id, user.is_active, user.nama], (err) => {
                        if (err) {
                            flag  =  0;
                            console.error(err);
                            return  res.status(500).json({
                                error: "Database error"
                            })
                        }
                        else {
                            flag  =  1;
                            res.status(200).send({ message: 'success' });
                        }
                })
                if (flag) {
                    jwt.sign(
                        {username: user.username}, process.env.SECRET_KEY
                    );
                };
            });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            error: "Database error",
        });
    };
});

export default router