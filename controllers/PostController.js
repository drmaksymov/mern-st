import PostModel from "../models/Post.js"
/* import { body } from 'express-validator'; */
/* import mongoose from './../models/User'; */


export const create = async (req, res) => {
    try {

        const doc = new PostModel ({

            title: req.body.title,
            text:  req.body.text,
            imageUrl: req.body.imageUrl,
            tags: req.body.tags,
            user: req.userId

        })

        const post = await doc.save();

        res.status(200).json(post)

    } catch (err) {
        console.log(err)
        res.status(500).json({message:"Не додати статтю"}); 
    }
};


export const getAll = async (req, res) => {
    try {

        const posts =  await PostModel.find({}).populate('user').exec();


       /* const [title, ...postsData] = posts; */

       /* console.log(user) */

        res.status(200).json(posts)

    } catch (err) {
        console.log(err)
        res.status(500).json({message:"Стdаттdsі не знайдені"});
    }
};


export const getOne = async (req, res) => {
    try {
        const postId = req.params.id;

        PostModel.findByIdAndUpdate({
            _id: postId,
        },
        {
            $inc: {viewsCount: 1}
        },
        {
            returnDocument: "after"
        }, 
        (err, doc) => {
            if(err){
                console.log(err)
                return res.status(500).json({message:"Невдалося повернути статю з серевера"});
            }


            if(!doc) {
                return res.status(404).json({message: "Не вдалось знайти статтю"})
            }

            res.status(200).json(doc)
        },
       
        );

       

    } catch (err) {
        console.log(err)
        res.status(500).json({message:"Стаgт ті vgне знайдені"});
    }
};


export const remove = async (req, res) => {
    try {

        const postId = req.params.id

         PostModel.findOneAndDelete({
            _id: postId
        }
        
        )
        


       /* const [title, ...postsData] = posts; */

       /* console.log(user) */

        res.status(200).json({message: "Посdавіт видалено"})

    } catch (err) {
        console.log(err)
        res.status(500).json({message:"Стdаттdsі не знайдені"});
    }
};