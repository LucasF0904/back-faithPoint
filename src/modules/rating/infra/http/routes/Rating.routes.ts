// import isAuthenticated from '@shared/http/middlewares/isAuthenticated';
import { Router } from 'express';
import RatingController from '../controllers/RatingController';

const routes = Router();
const ratingController = new RatingController();

routes.post('/', ratingController.create);
routes.put('/:id', ratingController.update);
routes.delete('/:id', ratingController.delete);
routes.get('/', ratingController.findAll);
routes.get('/:id', ratingController.findById);
routes.get('/findByName', ratingController.findByName);

export default routes;