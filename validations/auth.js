import {body} from 'express-validator';


export const registerValidation = [
    body('email', 'No email').isEmail(),
    body('password', 'No password').isLength({min: 5}),
    body('fullName', 'Коротке імя').isLength({min: 2}),
    body('avatarUrl', 'werwe правильна ссилка').optional().isURL(),
];