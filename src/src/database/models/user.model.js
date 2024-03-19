const mongoose = require('mongoose');
 
// esquema de como se requiere grabar la información

//  se importa la clase schema desde mongoose

const Schema = mongoose.Schema;

//se crea una instancia del modelo de como voy a enviar los datos
const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true // para que solo se pueda registrar mediante un correo
    },
    password: String
  });
  
const User = mongoose.model('User', userSchema);

  module.exports = User
