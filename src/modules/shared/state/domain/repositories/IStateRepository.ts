import shortName from '@shared/util/ShortName';
import IRequestCreateState from '../interfaces/IRequestCreateState';
import ICreateState from '../interfaces/ICreateState';
import IRequestUpdateState from '../interfaces/IRequestUpdateState';
import { IState } from '../interfaces/IState';

  
interface IStateRepository {
    create(data: IRequestCreateState): Promise<ICreateState>;
    update(id: string, state: IRequestUpdateState): Promise<boolean>;
    delete(id: string): Promise<void>;
    findAll(): Promise<IState[]>;
    findById(id: string): Promise<IState | undefined>;
    findByCountry(country: string): Promise<IState[] | undefined>;
    findByShortName(shortName: shortName): Promise<IState | undefined>;
    findByLongName(longName: string): Promise<IState | undefined>;
    findByCode(code: string): Promise<IState[] | undefined>;
  }
  
  export default IStateRepository;
  