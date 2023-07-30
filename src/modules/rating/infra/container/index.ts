import { container } from 'tsyringe';
import RatingRepository from '../typeorm/repositories/RatingRepository';
import IRatingRepository from '@modules/rating/domain/repositories/IRatingRepository';

container.registerSingleton<IRatingRepository>('RatingRepository', RatingRepository);