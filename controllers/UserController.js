import { validationResult } from 'express-validator';
import UserModel from '../models/User.js'
import jwt from 'jsonwebtoken';
import  bcrypt from 'bcryptjs';


export const register = async (req, res) => {
    try {
        const errors = validationResult(req)
    
        if(!errors.isEmpty()){
            res.status(400).json(errors.array())
        }
    
    
        const password = req.body.password;
    
    
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt)
    
    
    
        const doc = new UserModel({
            email: req.body.email,
            passwordHash: hash,
            roles: req.body.roles, 
            fullName: req.body.fullName,
            avatarUrl: req.body.avatarUrl,
    
        })
    
    
        const user = await doc.save();
    
        const token = jwt.sign(
            {
                _id:user._id,
                roles:user.roles,
            },
            'myCot86',
            {
                expiresIn: '30d'
            }
        );
    
        const {passwordHash, ...userData } = user._doc;
    
        res.status(200).json({
             ...userData,
             token
        });
    
    
    
        } catch (err) {
            console.log(err)
            res.status(500).json({message:"Не вдалось зареєструватися"}); 
        }
};

export const login = async(req, res) => {
    try {
        const user = await UserModel.findOne({email:req.body.email});
        if(!user) {
            return res.status(404).json({message:"Користувач не знайдений"})
        }


            const isValidPass = await bcrypt.compare(req.body.password, user._doc.passwordHash);

            if(!isValidPass) {
                res.status(400).json({message:'Н або пароль'});
            }

            const token =jwt.sign(
                {
                    _id:user._id,
                   
                },
                'myCot86',
                {
                    expiresIn: '30d'
                },
            );


            const {passwordHash, ...userData} = user._doc;


            res.status(200).json({
                userData,
                token
            })

    } catch (err) {
        console.log(err)
    }


};

export const getMe = async(req, res) => {
    try {
        const user = await UserModel.findById(req.userId);
        if(!user) {
            return res.status(404).json({message:"Користувач не"});
        }
        
        /* if(!isValidPass) {
            res.status(400).json({message:'Н або пароль'});
        }
 */


        

        const {passwordHash, ...userData } = user._doc;

        res.status(500).json({
             userData
             
        });



    } catch (err) {
          console.log("e")
    }
}


