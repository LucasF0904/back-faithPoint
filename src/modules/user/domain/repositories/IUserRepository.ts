import IRequestCreateUser from '../interfaces/IRequestCreateUser';
import ICreateUser from '../interfaces/ICreateUser';
import IRequestUpdateUser from '../interfaces/IRequestUpdateUser';
import { IUser } from '../interfaces/IUser';

  
interface IUserRepository {
    create(data: IRequestCreateUser): Promise<ICreateUser>;
    update(id: string, user: IRequestUpdateUser): Promise<boolean>;
    delete(id: string): Promise<void>;
    findAll(): Promise<IUser[]>;
    findById(id: string): Promise<IUser | undefined>;
    findByAddress(address: string): Promise<IUser[] | undefined>;    
  }
  
  export default IUserRepository;
  