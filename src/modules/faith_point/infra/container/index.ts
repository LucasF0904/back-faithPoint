import { container } from 'tsyringe';
import FaithPointRepository from '../typeorm/repositories/FaithPointRepository';
import IFaithPointRepository from '@modules/faith_point/domain/repositories/IFaithPointRepository';

container.registerSingleton<IFaithPointRepository>('FaithPointRepository', FaithPointRepository);