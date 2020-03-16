const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json({ extended: true }))

app.use(cors({
   origin: 'http://localhost:3000'
}))
app.use('/api', require('./routes/api'))

const PORT = 5000;

async function start(){
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => console.log(`App has been started on ${PORT}`))
    } catch (e) {
        console.log('Server Error:', e);
        process.exit(1)
    }
}
start()

