import {body} from 'express-validator';


export const loginValidation = [
    body('email', 'No email').isEmail(),
    body('password', 'No password').isLength({min: 5}),
   
];

export const registerValidation = [
    body('email', 'No email').isEmail(),
    body('password', 'No password').isLength({min: 5}),
    body('fullName', 'Коротке імя').isLength({min: 2}),
    body('avatarUrl', 'werwe правильна ссилка').optional().isURL(),
];

export const postCreaterValidation = [
    body('title', 'Введіть заголовок статті').isString().isLength({min: 5}),
    body('text', 'Введіть текст статті').isString().isLength({min: 10}),
    body('tags', 'Введіть теги статті').optional().isString(),
    body('imageUrl', 'Неправcильне посила ння на зображення').optional().isString(),
];