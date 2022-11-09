const {Router} = require('express')
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const router = Router()


// /api/auth/register  (створення енд поінт)
router.post('/register', 
    [   //валідуємо емейл та пароль https://express-validator.github.io/docs/
       check('email', 'Некоректний емейл').isEmail(),
       check('password', 'Мінімальний пароль має містити 6 символів').isLength({min: 6})
    ],
    async (req, res) => { 
    /////////////////початок///////////////   
        try {
            
            const errors = validationResult(req)
            //якщо не пусто в помилці еррорс то повернути статус 400 та повідомлення
            if(!errors.isEmpty()){
                return res.status(400).json({errors: errors.array(), 
                message: 'Некоректні дані при реєстрації'})}

            const {email, password} = req.body 

            //створюємо нову конст яка буде приймати на себе емейл
            const candidate = await User.findOne({email:email})

            if(candidate) { //якщо таки канддат є то повертає помилку і повертає
                return res.status(400).json({message: 'Такий користувач вже є'})}

                //створюємо захешований пароль з підключеню бібліотекою const bcrypt = require('bcryptjs')
                const hashedPassword = await bcrypt.hash(password, 12 )

                //створюється новий користучач
                const user = new User ({email: email, password: hashedPassword})

                //зберігання користувача
                await user.save()
                //відправляємо відповідь зі статусом та текстом
                res.status(201).json({message:'Користувач створений' })


            } catch (e) {
                res.status (500).json({message: 'Щось пішло не так, спробуй знову'})
            
            }
///////////////кінець///////////////////////
            })



// /api/auth/login (створення енд поінт)
router.post('/login', 
        [   //валідація емейла та пароля
            check('email', 'Введіть нормальний емейл').normalizeEmail().isEmail(),
            check('password', 'Введіть коректний пароль').exists()
        ],

        async (req, res) => { 
         /////////////////початок///////////////   
        try {
            
            const errors = validationResult(req)
            //якщо не пусто в помилці еррорс то повернути статус 400 та повідомлення
            if(!errors.isEmpty()){
                return res.status(400).json({errors: errors.array(), 
                message: 'Некоректні дані пр и вході в систему'})}


                const {email, password} = req.body
                const user = await User.findOne({ email })
                if(!user) {
                    return res.status(400).json({message: 'Такого користувача не знайдено'})}

                const isMatch = await bcrypt.compare(password, user.password)

                if(!isMatch){
                    return res.status(400).json({message:'Неправильний пароль'})
                }


            const token = jwt.sign({userId: user.id}, config.get('jwtSecret'), {expiresIn: '1h'})
            res.json({token, userId: user.id })


          /*   const {email, password} = req.body 

            //створюємо нову конст яка буде приймати на себе емейл
            const candidate = await User.findOne({email:email})

            if(candidate) { //якщо таки канддат є то повертає помилку і повертає
                return res.status(400).json({message: 'Такий користувач вже є'})}

                //створюємо захешований пароль з підключеню бібліотекою const bcrypt = require('bcryptjs')
                const hashedPassword = await bcrypt.hash(password, 12 )

                //створюється новий користучач
                const user = new User ({email: email, password: hashedPassword})

                //зберігання користувача
                await user.save()
                //відправляємо відповідь зі статусом та текстом
                res.status(201).json({message:'Користувач створений' }) */


            } catch (e) {
                res.status (500).json({message: 'Щось пішло не так, спробуй знову'})
            
            }
///////////////кінець///////////////////////
})







module.exports = router

