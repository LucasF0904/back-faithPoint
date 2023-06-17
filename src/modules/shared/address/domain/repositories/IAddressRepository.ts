import IRequestCreateAddress from '../interfaces/IRequestCreateAddress';
import ICreateAddress from '../interfaces/ICreateAddress';
import IRequestUpdateAddress from '../interfaces/IRequestUpdateAddress';
import { IAddress } from '../interfaces/IAddress';

  
interface IAddressRepository {
    create(data: IRequestCreateAddress): Promise<ICreateAddress>;
    update(id: string, address: IRequestUpdateAddress): Promise<boolean>;
    delete(id: string): Promise<void>;
    findAll(): Promise<IAddress[]>;
    findById(id: string): Promise<IAddress | undefined>;
    findByCity(city: string): Promise<IAddress[] | undefined>;    
  }
  
  export default IAddressRepository;
  