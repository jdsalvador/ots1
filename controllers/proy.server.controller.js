// ./express-server/controllers/todo.server.controller.js
import mongoose from 'mongoose';

//import models
import Proyecto from '../models/proy.server.model';

export const getProyectos = (req,res) => {
  Proyecto.find().sort( {"num": -1 } ).exec((err,todos) => {
    if(err){
    return res.json({'success':false,'message':'Algún error al conseguir getMODELSOT'});
    }

    return res.json({'success':true,'message':'Conseguido ot',todos});
  });
}

export const getFiltrados = (req,res) => {
  Proyecto.find({estado:"Iniciada"}).limit(6).sort( {"num": -1 } ).exec((err,todos) => {
    if(err){
    return res.json({'success':false,'message':'Algún error al conseguir getMODELSOT filtados'});
    }

    return res.json({'success':true,'message':'Conseguido ot',todos});
  });
}



export const act = (req,res) => {
  Proyecto.find().sort({"num":-1}).limit(1).exec((err,todo) => {
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
  Proyecto.find().sort({"num":-1}).limit(1).exec((err,todo) => {
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

// export const addProyecto = (req,res) => {

//   var number=10;
//     //var elem= Proyecto.find().sort({"num":-1}).limit(1)
//     var elem= Proyecto.find().sort({"num":-1}).limit(1)
//     var elem=Proyecto.find()
//     //var elem1=elem["count"]
//   console.log(elem);

//  var number1= Proyecto.count(function (err, count) {
//   console.log('there are %d jungle adventures', count);
//   number=count;
// });
  
// console.log(number);

  
//  req.body["num"]=100;
//   const newProyecto = new Proyecto(req.body);
//   newProyecto.save((err,todo) => {
//     if(err){
//     return res.json({'success':false,'message':'Algún error al agregar modelot'});
//     }

//     return res.json({'success':true,'message':'Orden de trabajo agregado',todo:todo});
//    //var iden=todo[0]._id
//    // return res.redirect(iden)
//   })
// }

// export const addProyecto = (req,res) => {
// var number=22;
// Proyecto.count(function (err, count) {
//   console.log('there are %d jungle adventures', count);
//   number=count;

  
// console.log(number);

  
//  req.body["num"]=count+3500;
//   const newProyecto = new Proyecto(req.body);
//   newProyecto.save((err,todo) => {
//     if(err){
//     return res.json({'success':false,'message':'Algún error al agregar modelot'});
//     }

//     return res.json({'success':true,'message':'Orden de trabajo agregado',todo:todo});
//    //var iden=todo[0]._id
//    // return res.redirect(iden)
//   })

// });

// }



export const addProyecto = (req,res) => {
var number=22;
Proyecto.find().sort({"num":-1}).limit(1).exec((err,todo) => {
//Proyecto.count(function (err, count) {
  //console.log('there are %d jungle adventures', count);
  //number=count;

  
//console.log(number);
  var number=3499;
   if(todo.length){
     number=todo[0].num
  }
  
 req.body["num"]=number+1;
  const newProyecto = new Proyecto(req.body);
  newProyecto.save((err,todo) => {
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
Proyecto.find().sort({"num":-1}).limit(1).exec((err,todo) => {
//Proyecto.count(function (err, count) {
  //console.log('there are %d jungle adventures', count);
  //number=count;

  
//console.log(number);
  var number=3499;
   if(todo.length){
     number=todo[0].num

  }
  
 T["num"]=number+1;
  let result;
  const newProyecto = new Proyecto(T);
  newProyecto.save((err,todo) => {
    if(err){
      result = {'success':false,'message':'Some Error','error':err};
      console.log(result);
    }
    else{
      const result = {'success':true,'message':'Todo Added Successfully',todo}
       io.emit('TodoAdded', result);
    }
  })

  });
}



export const updateProyecto = (req,res) => {
  Proyecto.findOneAndUpdate({ _id:req.body.id }, req.body, { new:true }, (err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Algún error al actualizar','error':err});
    }
    console.log(todo);
    return res.json({'success':true,'message':'Orden de trabajo actualizado',todo});
  })
}

export const updateTodo = (io,T) => {
  let result;
  Proyecto.findOneAndUpdate({ _id:T.id }, T, { new:true }, (err,todo) => {
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

export const getProyecto = (req,res) => {
  Proyecto.find({_id:req.params.id}).exec((err,todo) => {
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

export const deleteProyecto = (req,res) => {
  Proyecto.findByIdAndRemove(req.params.id, (err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Algún error al borrar'});
    }

    return res.json({'success':true,'message':'Orden de trabajo borrado',todo});
  })
}

export const deleteTodo = (io,T) => {
  let result;
  Proyecto.findByIdAndRemove(T._id, (err,todo) => {
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
