import User from '../models/UserModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from '../config/auth.config.js'

export const getUser = async(req, res) => {
    try {
        const menu = await User.findAll()
        res.json(menu)
    } catch (e) {
        res.json({
            message: e.message
        })
    }
}

export const signIn = (req, res) => {
    User.findOne({
      where: {
        username: req.body.username
      }
    })
      .then(user => {
        if (!user) {
          return res.status(404).send({ message: "Pengguna tidak ditemukan." });
        }
  
        var passwordIsValid = bcrypt.compareSync(
          req.body.password,
          user.password
        );
  
        if (!passwordIsValid) {
          return res.status(401).send({
            accessToken: null,
            message: "Kata sandi salah"
          });
        }
  
        var token = jwt.sign({ id: user.id }, config.secret, {
          expiresIn: 86400 //24jam
        });

        res.status(200).send({
            massage: 'ok',
            token: token
        });
      })
      .catch(err => {
        res.status(500).send({ message: "Kendala internal" });
      });
  };