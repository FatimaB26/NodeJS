async function run () {
    
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mongoose_populate',
{useUnifiedTopology: true, useNewUrlParser : true});

const adressSchema = new mongoose.Schema({
    streetName : String,
    streetNumber : String,
    postCode : String,
    city : String,
    created : {type : Date, 
            default : Date.now}
})

const AdressModel = mongoose.model('Adress', adressSchema);

const adress1 = new AdressModel ({
    streetName : "allée Pierre Paul Jacque",
    streetNumber : "1",
    postCode : "12345",
    city : "North Blue",
})

// const resultAdress1 = await adress1.save()
const adressID = await AdressModel.findById("5fb3084d4a740d1ea2d3e9f8").exec();

console.log (adressID)

module.exports = AdressModel;

}

run ()