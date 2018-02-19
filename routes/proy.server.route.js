// ./express-server/routes/todo.server.route.js
import express from 'express';

//import controller file
import * as proyController from '../controllers/proy.server.controller';

// get an instance of express router
const router = express.Router();

router.route('/')
     .get(proyController.getProyectos);

router.route('/:id')
      .get(proyController.getProyectos);


export default router;
