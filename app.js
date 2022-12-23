import express from 'express';
import { registerValidation, loginValidation, postCreaterValidation } from './validations/validations.js';
import config from 'config';
import mongoose from 'mongoose';
import * as UserController from './controllers/UserController.js';
import * as PostController from './controllers/PostController.js';

import checkAuth from './utils/checkAuth.js';


/* CONSTANT */
const PORT = config.get('port') || 5000;
const  app = express();



/* USE */
/* app.use('/api/auth', registerValidation, require('./routes/auth.routes')) */
app.use(express.json())

app.post('/auth/login', loginValidation, UserController.login);
app.post('/auth/register', registerValidation, UserController.register );
app.get('/auth/me', checkAuth, UserController.getMe)


/* POSTS */
app.post('/posts', checkAuth, postCreaterValidation, PostController.create )
app.get('/posts/:id', PostController.getOne)
app.get('/posts', PostController.getAll)
app.delete('/posts/:id', PostController.remove)
/* app.patch('/posts/:id', PostController.update)  */















async function start(){
    try {

        //запит до монгоДВ по урл
            await mongoose.connect(config.get('mongoUri'), {
                    //useNewUrlParser: true,
                    //useUnifiedTopology: true,
                   // useCreateIndex: true

            })
            //тільки тоді слухаємо апп
            app.listen(PORT, () => console.log(` Server wotrk ${PORT}`) )

    } catch (e) {
            console.log('Server Error', e.message)
            process.exit(1)
    }
}

start()

