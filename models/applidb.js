const {Schema,model} = require(`mongoose`);

const UsuarioSchema = Schema({
    
    firstName:{
        type: String,
        required: [true,`El campo es obligatorio`],
        unique: true,

    },
    middleName:{
        type:String,
        required:[true,`El campo es obligatorio`]
    },
    lastName:{
        type:String,
        required:[true,`El campo es obligatorio`]
    },
    suffixId:{
        type:String,
        required:[true,`El campo es obligatorio`]
    },
    dateOfBirth:{
        type:String,
        required:[true,`El campo es obligatorio`]
    },
    mothersMaidenName:{
        type:String,
        required:[true,`El campo es obligatorio`]
    },
    license:{
        type:String,
        required:[true,`El campo es obligatorio`]
    },
    socialSecurityNumber:{
        type:String,
        required:[true,`El campo es obligatorio`]
    },
    Routing:{
        type:String,
        required:[true,`El campo es obligatorio`]
    },
    Account:{
        type:String,
        required:[true,`El campo es obligatorio`]
    },
    Type:{
        type:String,
        required:[true,`El campo es obligatorio`]
    },
    streetAddress:{
        type:String,
        required:[true,`El campo es obligatorio`]
    },
    apartmentNumber:{
        type:String,
        required:[true,`El campo es obligatorio`]
    },
    zipCode:{
        type:String,
        required:[true,`El campo es obligatorio`]
    },
    cityId:{
        type:String,
        required:[true,`El campo es obligatorio`]
    },
    stateId:{
        type:String,
        required:[true,`El campo es obligatorio`]
    },
    emailAddress:{
        type:String,
        required:[true,`El campo es obligatorio`]
    },
    phoneNumber:{
        type:String,
        required:[true,`El campo es obligatorio`]
    },
    residenceOwnershipOptionId:{
        type:String,
        required:[true,`El campo es obligatorio`]
    },
    primaryIncomeSourceId:{
        type:String,
        required:[true,`El campo es obligatorio`]
    },
    EmployName:{
        type:String,
        required:[true,`El campo es obligatorio`]
    },
    grossAnnualIncome:{
        type:String,
        required:[true,`El campo es obligatorio`]
    }

});

// UsuarioSchema.methods.toJSON = function(){
//     const {__v, password,_id, ...user} = this.toObject();
//     user.uid = _id;
//     return user
// }

module.exports = model(`AppliCS`,UsuarioSchema)