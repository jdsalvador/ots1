import mongoose from 'mongoose';

var Schema = mongoose.Schema({
  createdAt:{
    type: Date,
    default: Date.now
  },
  integrante:String,
  cargo:String,
  clave:String
},
{collection:'ColecIntegrantes'});

export default mongoose.model('ModelIntegrante', Schema);
