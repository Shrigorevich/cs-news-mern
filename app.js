const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const path = require('path')
const app = express();
const cors = require('cors') /*for development*/
//text editor - nano

app.use(express.json({ extended: true }))
app.use(cors()) /*for development*/
app.use('/api', require('./routes/api'))

if(process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

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

