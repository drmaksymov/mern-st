import CategorySchema from "../models/Category.js"
/* import { body } from 'express-validator'; */
/* import mongoose from './../models/User'; */


export const create = async (req, res) => {
    try {

        const doc = new CategorySchema ({

            title: req.body.title,
            description:  req.body.description,
            imageCategoryUrl: req.body.imageUrl,
            })

        const price = await doc.save();

        res.status(200).json(price)

    } catch (err) {
        console.log(err)
        res.status(500).json({message:"Не додали нову категорію"}); 
    }
};


export const getAll = async (req, res) => {
    try {

        const prices =  await CategorySchema.find({});


       /* const [title, ...postsData] = posts; */

       /* console.log(user) */

        res.status(200).json(prices)

    } catch (err) {
        console.log(err)
        res.status(500).json({message:"Категорії не знайдені"});
    }
};
