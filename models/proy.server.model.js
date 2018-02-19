import mongoose from 'mongoose';

var Schema = mongoose.Schema({
  createdAt:{
    type: Date,
    default: Date.now
  },
  num: String,
  nombre: String,
  cliente: String,
  arquitecto: String,
  ingeniero: String,
  fechaingreso: String,
  updated_date: { type: Date, default: Date.now },
  todoText: String,
  todoDesc: String
},
{collection:'ColecProyectos'});

export default mongoose.model('Proyecto', Schema);
