const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mongoose_populate',
{useUnifiedTopology: true, useNewUrlParser : true});
const AdressModel = require('../models/adress');

const studentSchema = new mongoose.Schema({
    ID : mongoose.Types.ObjectId,
    firstName : String,
    surname : String,
    adress : {
        type : mongoose.Types.ObjectId,
        ref : AdressModel},
    created : {type : Date, 
            default : Date.now}
})

const StudentModel = mongoose.model('Student', studentSchema);

const student1 = new StudentModel ({
    firstName : "Fatima",
    surname : "Fafa",
    adress : {adressID},
    created : {type : Date, 
            default : Date.now}
})

module.exports = StudentModel;

