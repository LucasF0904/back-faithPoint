import Country from '@modules/shared/country/infra/typeorm/entities/Country';
import ICreateCountry from '../interfaces/ICreateCountry';
import IUpdateCountry from '../interfaces/IUpdateCountry';
import shortName from '@shared/util/ShortName';
import { ICountry } from '../interfaces/ICountry';

  
interface ICountryRepository {
    create(data: ICreateCountry): Promise<Country>;
    update(id: string, country: IUpdateCountry): Promise<boolean>;
    delete(id: string): Promise<void>;
    findAll(): Promise<Country[]>;
    findById(id: string): Promise<ICountry | undefined>;
    findByCode(code: string): Promise<ICountry | undefined>;
    findByShortName(shortName: shortName): Promise<ICountry | undefined>;
    findByLongName(longName: string): Promise<ICountry | undefined>;
  }
  
  export default ICountryRepository;
  