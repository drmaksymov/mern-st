const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const app = express()



app.use('/api/auth', require('./routes/auth.routes'))



const PORT = config.get('port') || 5000

async function start(){
    try {

        //запит до монгоДВ по урл
            await mongoose.connect(config.get('mongoUri'), {
                    //useNewUrlParser: true,
                    //useUnifiedTopology: true,
                   // useCreateIndex: true

            })
            //тільки тоді слухаємо апп
            app.listen(PORT, () => console.log(` Ajjjjdssdrtyrtytry ddddddsfdssddpp ${PORT}`) )

    } catch (e) {
            console.log('Server Error', e.message)
            process.exit(1)
    }
}

start()

