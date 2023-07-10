import IRequestCreateReligion from '../interfaces/IRequestCreateReligion';
import IRequestUpdateReligion from '../interfaces/IRequestUpdateReligion';
import ICreateReligion from '../interfaces/ICreateReligion';
import { IReligion } from '../interfaces/IReligion';

interface IReligionRepository {
    create(data: IRequestCreateReligion): Promise<ICreateReligion>
    update(id: string, religion: IRequestUpdateReligion): Promise<boolean>
    delete(id: string): Promise<void>
    findAll(): Promise<IReligion[]>
    findById(id: string): Promise<IReligion | undefined>
    findByName(name: string): Promise<IReligion | undefined>
}

export default IReligionRepository;