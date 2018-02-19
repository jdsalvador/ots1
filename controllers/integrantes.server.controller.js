// ./express-server/controllers/todo.server.controller.js
import mongoose from 'mongoose';

//import models
import ModelIntegrante from '../models/integrante.server.model';

export const getModelIntegrantes = (req,res) => {
  ModelIntegrante.find().exec((err,todos) => {
    if(err){
    return res.json({'success':false,'message':'Algún error al conseguir getMODELSOT'});
    }

    return res.json({'success':true,'message':'Conseguido integrantes',todos});
  });
}

export const addModelIntegrante = (req,res) => {
  console.log(req.body);
  const newModelIntegrante = new ModelIntegrante(req.body);
  newModelIntegrante.save((err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Algún error al agregar modelot'});
    }

    return res.json({'success':true,'message':'Orden de trabajo agregado',todo});
  })
}

export const updateModelIntegrante = (req,res) => {
  ModelIntegrante.findOneAndUpdate({ _id:req.body.id }, req.body, { new:true }, (err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Algún error al actualizar','error':err});
    }
    console.log(todo);
    return res.json({'success':true,'message':'Orden de trabajo actualizado',todo});
  })
}

export const getModelIntegrante = (req,res) => {
  ModelIntegrante.find({_id:req.params.id}).exec((err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Algún error al conseguir'});
    }
    if(todo.length){
      return res.json({'success':true,'message':'Orden de trabajo conseguido por id',todo});
    }
    else{
      return res.json({'success':false,'message':'Orden de trabajo con id indicada no se encontró'});
    }
  })
}

export const deleteModelIntegrante = (req,res) => {
  ModelIntegrante.findByIdAndRemove(req.params.id, (err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Algún error al borrar'});
    }

    return res.json({'success':true,'message':'Orden de trabajo borrado',todo});
  })
}
