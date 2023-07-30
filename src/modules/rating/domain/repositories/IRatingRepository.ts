import IRequestCreateReligion from '../interfaces/IRequestCreateRating';
import IRequestUpdateReligion from '../interfaces/IRequestUpdateRating';
import ICreateReligion from '../interfaces/ICreateRating';
import { IRating } from '../interfaces/IRating';

interface IRatingRepository {
    create(data: IRequestCreateReligion): Promise<ICreateReligion>
    update(id: string, rating: IRequestUpdateReligion): Promise<boolean>
    delete(id: string): Promise<void>
    findAll(): Promise<IRating[]>
    findById(id: string): Promise<IRating | undefined>
    findByName(name: string): Promise<IRating | undefined>
}

export default IRatingRepository;