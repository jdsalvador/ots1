// ./express-server/controllers/todo.server.controller.js
import mongoose from 'mongoose';

//import models
import ModelOt from '../models/ot.server.model';

export const getModelOts = (req,res) => {
  ModelOt.find().sort( {"num": -1 } ).exec((err,todos) => {
    if(err){
    return res.json({'success':false,'message':'Algún error al conseguir getMODELSOT'});
    }

    return res.json({'success':true,'message':'Conseguido ot',todos});
  });
}

export const getFiltrados = (req,res) => {
  ModelOt.find({estado:"Iniciada"}).limit(6).sort( {"num": -1 } ).exec((err,todos) => {
    if(err){
    return res.json({'success':false,'message':'Algún error al conseguir getMODELSOT filtados'});
    }

    return res.json({'success':true,'message':'Conseguido ot',todos});
  });
}



export const act = (req,res) => {
  ModelOt.find().sort({"num":-1}).limit(1).exec((err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Algún error al conseguir getMODELSOT'});
    }
    //var numero=0;
    //numero=todo[0].num
    //todo=numero

    var number=todo[0].num
    return res.redirect('/proyectos');
  });
}


export const getMax = (req,res) => {
  ModelOt.find().sort({"num":-1}).limit(1).exec((err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Algún error al conseguir getMODELSOT'});
    }
    //var numero=0;
    //numero=todo[0].num
    //todo=numero
    var number=0;
   if(todo.length){
     number=todo[0].num
  }
    return res.json({'success':true,'message':'Conseguido max', number});
  });
}

// export const addModelOt = (req,res) => {

//   var number=10;
//     //var elem= ModelOt.find().sort({"num":-1}).limit(1)
//     var elem= ModelOt.find().sort({"num":-1}).limit(1)
//     var elem=ModelOt.find()
//     //var elem1=elem["count"]
//   console.log(elem);

//  var number1= ModelOt.count(function (err, count) {
//   console.log('there are %d jungle adventures', count);
//   number=count;
// });
  
// console.log(number);

  
//  req.body["num"]=100;
//   const newModelOt = new ModelOt(req.body);
//   newModelOt.save((err,todo) => {
//     if(err){
//     return res.json({'success':false,'message':'Algún error al agregar modelot'});
//     }

//     return res.json({'success':true,'message':'Orden de trabajo agregado',todo:todo});
//    //var iden=todo[0]._id
//    // return res.redirect(iden)
//   })
// }

// export const addModelOt = (req,res) => {
// var number=22;
// ModelOt.count(function (err, count) {
//   console.log('there are %d jungle adventures', count);
//   number=count;

  
// console.log(number);

  
//  req.body["num"]=count+3500;
//   const newModelOt = new ModelOt(req.body);
//   newModelOt.save((err,todo) => {
//     if(err){
//     return res.json({'success':false,'message':'Algún error al agregar modelot'});
//     }

//     return res.json({'success':true,'message':'Orden de trabajo agregado',todo:todo});
//    //var iden=todo[0]._id
//    // return res.redirect(iden)
//   })

// });

// }



export const addModelOt = (req,res) => {
var number=22;
ModelOt.find().sort({"num":-1}).limit(1).exec((err,todo) => {
//ModelOt.count(function (err, count) {
  //console.log('there are %d jungle adventures', count);
  //number=count;

  
//console.log(number);
  var number=3499;
   if(todo.length){
     number=todo[0].num
  }
  
 req.body["num"]=number+1;
  const newModelOt = new ModelOt(req.body);
  newModelOt.save((err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Algún error al agregar modelot'});
    }

    return res.json({'success':true,'message':'Orden de trabajo agregado',todo:todo});
   //var iden=todo[0]._id
   // return res.redirect(iden)
  })

});

}

export const addTodo = (io,T) => {
  var number=22;
ModelOt.find().sort({"num":-1}).limit(1).exec((err,todo) => {
//ModelOt.count(function (err, count) {
  //console.log('there are %d jungle adventures', count);
  //number=count;

  
//console.log(number);
  var number=3499;
   if(todo.length){
     number=todo[0].num

  }
  
 T["num"]=number+1;
  let result;
  const newModelOt = new ModelOt(T);
  newModelOt.save((err,todo) => {
    if(err){
      result = {'success':false,'message':'Some Error','error':err};
      console.log(result);
    }
    else{
      const result = {'success':true,'message':'Orden de trabajo creada',todo}
       io.emit('TodoAdded', result);
    }
  })

  });
}



export const updateModelOt = (req,res) => {
  ModelOt.findOneAndUpdate({ _id:req.body.id }, req.body, { new:true }, (err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Algún error al actualizar','error':err});
    }
    console.log(todo);
    return res.json({'success':true,'message':'Orden de trabajo actualizada',todo});
  })
}

export const updateTodo = (io,T) => {
  let result;
  ModelOt.findOneAndUpdate({ _id:T.id }, T, { new:true }, (err,todo) => {
    if(err){
    result = {'success':false,'message':'Algún error al actualizar la orden','error':err};
    console.log(result);
    }
    else{
     result = {'success':true,'message':'Orden de trabajo actualizada',todo};
     io.emit('TodoUpdated', result);
    }
  })
}

export const getModelOt = (req,res) => {
  ModelOt.find({_id:req.params.id}).exec((err,todo) => {
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

export const deleteModelOt = (req,res) => {
  ModelOt.findByIdAndRemove(req.params.id, (err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Algún error al borrar'});
    }

    return res.json({'success':true,'message':'Orden de trabajo borrada',todo});
  })
}

export const deleteTodo = (io,T) => {
  let result;
  ModelOt.findByIdAndRemove(T._id, (err,todo) => {
    if(err){
    result = {'success':false,'message':'Algún error al borrar orden de trabajo','error':err};
    console.log(result);
    }
    else {
      result = {'success':true,'message':'Orden de trabajo borrada', todo};
      io.emit('TodoDeleted', result);
    }
  })
}
