const mongoose = require('mongoose');
 
// esquema de como se requiere grabar la información

//  se importa la clase schema desde mongoose

const Schema = mongoose.Schema;

//se crea una instancia del modelo de como voy a enviar los datos
const userSchema = new Schema({
    name: {
      type: String,
      required: true,

    },
    email: {
        type: String,
        required: true,
        unique: true, // para que solo se pueda registrar mediante un correo
        
    },
    password: {
        type:String,
        required:true
    },
    state:{
      type: Number,
      required: false,
      default: 0
      
    }
  });

  
const User = mongoose.model('User', userSchema);

  module.exports = User;
