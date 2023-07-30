const {Schema,model} = require(`mongoose`);

const UsuarioSchema = Schema({
    
    user:{
        type: String,
        required: [true,`El campo es obligatorio`],
        unique: true,

    },
    pass:{
        type:String,
        required:[true,`El campo es obligatorio`]
    }

});

// UsuarioSchema.methods.toJSON = function(){
//     const {__v, password,_id, ...user} = this.toObject();
//     user.uid = _id;
//     return user
// }

module.exports = model(`UserAminCS`,UsuarioSchema)