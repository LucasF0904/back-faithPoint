import IRequestCreateReligion from '../interfaces/IRequestCreateFaithPoint';
import IRequestUpdateReligion from '../interfaces/IRequestUpdateFaithPoint';
import ICreateReligion from '../interfaces/ICreateFaithPoint';
import { IFaithPoint } from '../interfaces/IFaithPoint';

interface IFaithPointRepository {
    create(data: IRequestCreateReligion): Promise<ICreateReligion>
    update(id: string, faithPoint: IRequestUpdateReligion): Promise<boolean>
    delete(id: string): Promise<void>
    findAll(): Promise<IFaithPoint[]>
    findById(id: string): Promise<IFaithPoint | undefined>
    findByName(name: string): Promise<IFaithPoint | undefined>
}

export default IFaithPointRepository;