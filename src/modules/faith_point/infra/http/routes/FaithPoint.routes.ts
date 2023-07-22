// import isAuthenticated from '@shared/http/middlewares/isAuthenticated';
import { Router } from 'express';
import FaithPointController from '../controllers/FaithPointController';

const routes = Router();
const faithPointController = new FaithPointController();

routes.post('/', faithPointController.create);
routes.put('/:id', faithPointController.update);
routes.delete('/:id', faithPointController.delete);
routes.get('/', faithPointController.findAll);
routes.get('/:id', faithPointController.findById);
routes.get('/findByName', faithPointController.findByName);

export default routes;