import { container } from 'tsyringe';
import ReligionRepository from '../typeorm/repositories/ReligionRepository';
import IReligionRepository from '@modules/religion/domain/repositories/IReligionRepository';

container.registerSingleton<IReligionRepository>('ReligionRepository', ReligionRepository);