// import isAuthenticated from '@shared/http/middlewares/isAuthenticated';
import { Router } from 'express';
import ReligionController from '@modules/religion/infra/http/controllers/ReligionController';

const routes = Router();
const religionController = new ReligionController();

routes.post('/', religionController.create);
routes.put('/:id', religionController.update);
routes.delete('/:id', religionController.delete);
routes.get('/', religionController.findAll);
routes.get('/:id', religionController.findById);
routes.get('/findByName', religionController.findByName);

export default routes;