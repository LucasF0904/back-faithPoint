// import isAuthenticated from '@shared/http/middlewares/isAuthenticated';
import { Router } from 'express';
import UserController from '@modules/user/infra/http/controllers/UserController';

const routes = Router();
const userController = new UserController();

routes.post('/', userController.create);
routes.put('/:id', userController.update);
routes.delete('/:id', userController.delete);
routes.get('/', userController.findAll);
routes.get('/:id', userController.findById);
routes.get('/findByAddress', userController.findByAddress);

export default routes;




