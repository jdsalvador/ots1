// ./express-server/routes/todo.server.route.js
import express from 'express';

//import controller file
import * as todoController from '../controllers/todo.server.controller';
import * as otController from '../controllers/ot.server.controller';

// get an instance of express router
const router = express.Router();

router.route('/')
     .get(otController.getModelOts);
router.route('/filtrados')
     .get(otController.getFiltrados);
router.route('/:id')
      .get(otController.getModelOt);


export default router;
