import express from 'express';
import { registerValidation, loginValidation, postCreaterValidation } from './validations/validations.js';
import config from 'config';
import mongoose from 'mongoose';
import * as UserController from './controllers/UserController.js';
import * as PostController from './controllers/PostController.js';
import * as PriceController from './controllers/PriceController.js';
import * as CategoryController from './controllers/CategoryController.js';
import checkAuth from './utils/checkAuth.js';
import RoleAuth from './utils/RoleAuth.js';



/* CONSTANT */
const PORT = config.get('port') || 5000;
const  app = express();



/* USE */
/* app.use('/ api/auth', registerValidation,  require('./routes/auth.routes')) */
app.use(express.json())

app.post('/auth/login', loginValidation, UserController.login);
app.post('/auth/register', registerValidation, UserController.register );
app.get('/auth/me', checkAuth, UserController.getMe)


/* POSTS */
app.post('/posts',  RoleAuth, postCreaterValidation, PostController.create )
app.get('/posts/:id', RoleAuth, PostController.getOne)
app.get('/posts', PostController.getAll)
app.get('/tags', PostController.getTags)
app.get('/tags/:tag', PostController.getOneTag)
app.delete('/posts/:id', PostController.remove)
app.patch('/posts/:id', PostController.update) 

/* Pric e*/
app.post('/price', PriceController.create )
app.get('/price', PriceController.getAll )

/*Category*/
app.post('/category', CategoryController.create )
app.get('/category', CategoryController.getAll ) 















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

