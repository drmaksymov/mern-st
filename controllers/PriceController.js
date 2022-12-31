import PriceSchema from "../models/Price.js"
/* import { body } from 'express-validator'; */
/* import mongoose from './../models/User'; */


export const create = async (req, res) => {
    try {

        const doc = new PriceSchema ({

            title: req.body.title,
            slug:req.body.slug,
            description:  req.body.description,
            imagePriceUrl: req.body.imageUrl,
            tags: req.body.tags,
            price: req.body.price,

        })

        const price = await doc.save();

        res.status(200).json(price)

    } catch (err) {
        console.log(err)
        res.status(500).json({message:"Не додали нову ціну"}); 
    }
};


export const getAll = async (req, res) => {
    try {

        const prices =  await PriceSchema.find({});


       /* const [title, ...postsData] = posts; */

       /* console.log(user) */

        res.status(200).json(prices)

    } catch (err) {
        console.log(err)
        res.status(500).json({message:"Стdаттdsі не знайдені"});
    }
};
