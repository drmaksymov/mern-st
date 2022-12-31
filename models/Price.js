import  mongoose from 'mongoose'

const PriceSchema = new mongoose.Schema({
    title: {type: String, required: true, },
    slug:{type: String, required: true,},
    description:  {type: String, required: true, },
    price: {type: Number, required: true,},
    currency: {type: String, default: "UAH",},
    category:{type: [String], 
        required: true,},
    tags:  {type: Array, default: [],},
    imagePriceUrl: String,},
    {
       timestamps: true, 
    },
    
);



export default mongoose.model('Price', PriceSchema);