import  mongoose from 'mongoose'

const CaseSchema = new mongoose.Schema({
    title: {type: String, required: true, },
    description:  {type: String, required: true, },
    tags:  {
        type: Array,
        default: [],
            },
    viewsCount: {
            type: Number,
            default: 0,
        },
    imageUrlCase: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
    },

   
    {
       timestamps: true, 
    },
    
);



export default mongoose.model('Case', CaseSchema);