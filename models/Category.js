import  mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'
mongoose.plugin(slug)

const CategorySchema = new mongoose.Schema({
    title: {type: String, required: true, },
    slug:{type: String, slug: "title"},
    description:  {type: String, required: true, },
    imageCategoryUrl: String,},
    {
       timestamps: true,  
    },
    
);



export default mongoose.model('Category', CategorySchema);