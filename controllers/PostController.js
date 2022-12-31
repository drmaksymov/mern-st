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

        const postId = req.params.id;

         PostModel.findOneAndDelete({
            _id: postId
        }, (err, doc) => {
            if(err) {
               return res.status(500).json({message: "Щось пішло не так"})
            }

            if(!doc) {
                return res.status(404).json({message: "Таgкого документу не знайдено"})
            }
            res.status(200).json({message: "Посdавіт видиалено"})
        }

       
        
        )
        


       /* const [title, ...postsData] = posts; */

       /* console.log(user) */

       

    } catch (err) {
        console.log(err)
        res.status(500).json({message:"Стdаттdsі не знайдені"});
    }
};



export const update = async (req, res) => {
    try {

        const postId = req.params.id;

        PostModel.findByIdAndUpdate({
            _id: postId
        }, {
            title: req.body.title,
            text: req.body.text,
        }, {
            returnDocument: "after"
        }, 
        
        (err, doc) => {
            if(err) {
               return res.status(500).json({message: "Щоfсь пішло не так"})
            }

            if(!doc) {
                return res.status(404).json({message: "Таgкого доfdкументу не знайдено"})
            }
            res.status(200).json(doc)
        }

       
        
        )
        


       /* const [title, ...postsData] = posts; */

       /* console.log(user) */

       

    } catch (err) {
        console.log(err)
        res.status(500).json({message:"Стdаттdsі не знайдені"});
    }
};


export const getTags = async (req, res) => {
    try {

        const tags =  await PostModel.distinct("tags");


       /* const [title, ...postsData] = posts; */

       /* console.log(user) */

        res.status(200).json(tags)

    } catch (err) {
        console.log(err)
        res.status(500).json({message:"Стdаттdsі не знайдені"});
    }
};


export const getOneTag = async (req, res) => {
    try {

        const tag = req.params.tag;
        const tags =  await PostModel.find({tags: tag});


        res.status(200).json(tags)

    } catch (err) {
        console.log(err)
        res.status(500).json({message:"Стdаттdsі не знайдені"});
    }
};