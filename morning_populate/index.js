const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mongoose_populate',
{useUnifiedTopology: true, useNewUrlParser : true});


const StudentModel = require('./models/Student');
const AdressModel = require('./models/Adress');