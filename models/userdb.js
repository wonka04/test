const {Schema,model} = require(`mongoose`);

const UsuarioSchema = new Schema({
    
    userId:{
        type: String,
        required: true,
        unique: true

    },
    password:{
        type:String,
        required:true
    }

});

// UsuarioSchema.methods.toJSON = function(){
//     const {__v, password,_id, ...user} = this.toObject();
//     user.uid = _id;
//     return user
// }

const User = model(`UsuarioCS`,UsuarioSchema);

module.exports = User;