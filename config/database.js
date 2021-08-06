const { config } = require('dotenv');
const mongoose = require('mongoose');


mongoose.connect(process.env.DATABASE_URL_HOSTED, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

const db = mongoose.connection; 

db.once('connected', () => {
    console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});