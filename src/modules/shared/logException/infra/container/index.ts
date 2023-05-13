import { container } from 'tsyringe';
import ILogExceptionRepository from '../../domain/interfaces/repositories/ILogExceptionRepository';
import LogExceptionRepository from '../typeorm/repositories/LogExceptionRepository';

container.registerSingleton<ILogExceptionRepository>('LogExceptionRepository', LogExceptionRepository);
