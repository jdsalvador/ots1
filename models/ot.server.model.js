import mongoose from 'mongoose';

var Schema = mongoose.Schema({
  createdAt:{
    type: Date,
    default: Date.now
  },
num: Number,
  proyecto: String,
  ingeniero: String,
  proyectista: {type:Array,default: "N/A"},
  listaproyectista: {type:Array,default: "N/A"},
  asunto: String,
  motivo: String,
  referencia: String,
  categoria: String,
  fechasolicitud: { type: Date, default: Date.now },
  fechaplazo:Date,
  fechainicio:Date,
  fechatermino:Date,
  estado:{type:Array,default: "Cero"},
  listaestadoalter:{type:Array,default: "Cero"},
  updated_date: { type: Date, default: Date.now },
  todoText: String,
  todoDesc: String
},
{collection:'ColecOt'});

export default mongoose.model('ModelOt', Schema);
