// ./express-server/routes/todo.server.route.js
import express from 'express';

//import controller file
import * as integrantesController from '../controllers/integrantes.server.controller';
// get an instance of express router
const router = express.Router();

router.route('/')
     .get(integrantesController.getModelIntegrantes)
     .post(integrantesController.addModelIntegrante)
     .put(integrantesController.updateModelIntegrante);

router.route('/:id')
     .get(integrantesController.getModelIntegrantes)
     .delete(integrantesController.deleteModelIntegrante);

export default router;
