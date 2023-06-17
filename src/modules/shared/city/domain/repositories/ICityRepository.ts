import shortName from '@shared/util/ShortName';
import IRequestCreateCity from '../interfaces/IRequestCreateCity';
import ICreateCity from '../interfaces/ICreateCity';
import IRequestUpdateCity from '../interfaces/IRequestUpdateCity';
import { ICity } from '../interfaces/ICity';

  
interface ICityRepository {
    create(data: IRequestCreateCity): Promise<ICreateCity>;
    update(id: string, city: IRequestUpdateCity): Promise<boolean>;
    delete(id: string): Promise<void>;
    findAll(): Promise<ICity[]>;
    findById(id: string): Promise<ICity | undefined>;
    findByState(state: string): Promise<ICity[] | undefined>;
    findByShortName(shortName: shortName): Promise<ICity | undefined>;
    findByLongName(longName: string): Promise<ICity | undefined>;
    findByCode(code: string): Promise<ICity[] | undefined>;
  }
  
  export default ICityRepository;
  