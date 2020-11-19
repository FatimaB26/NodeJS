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

    const studentSchema = new mongoose.Schema({
        ID : mongoose.Types.ObjectId,
        firstName : String,
        surname : String,
        adress : {
            type : mongoose.Types.ObjectId,
            ref : AdressModel},
    })

    const StudentModel = mongoose.model('Student', studentSchema);



    const adress1 = new AdressModel ({
        streetName : "allée Pierre Paul Jacque",
        streetNumber : "1",
        postCode : "12345",
        city : "North Blue",
    })

    adress1.save(function (err) {
      
        const student1 = new StudentModel({
            firstName : "Fatima",
            surname : "Fafa",
            adress : adress1._id,
        });

        console.log (student1)
        
        adress1.save((err) => {
          });
        });

}

run ()