import  mongoose from 'mongoose'
import { slug } from 'mongoose-slug-generator';
mongoose.plugin(slug)

const DoctorSchema = new mongoose.Schema({
    nameFirst: {type: String, required: true,},
    nameLast: {type: String, required: true,},
    description: {type: String, },
    specialty: {type: Array, default: [],},
    status: {type: Boolean},
    email: {type: String, required: true, unique: true},
    passwordHash: {type: String, required: true},
    roles: {type: String,},
    education: {type: String,},
    avatatUrl: String,
    },
    {
       timestamps: true, 
    },
    
);



export default mongoose.model('User', DoctorSchema);