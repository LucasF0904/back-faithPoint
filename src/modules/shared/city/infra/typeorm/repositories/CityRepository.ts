import ICityRepository from '@modules/shared/city/domain/repositories/ICityRepository';
import shortName from '@shared/util/ShortName';
import { getRepository, Repository } from 'typeorm';
import City from '@modules/shared/city/infra/typeorm/entities/City';
import ICreateCity from '@modules/shared/city/domain/interfaces/ICreateCity';
import { ICity } from '@modules/shared/city/domain/interfaces/ICity';
import IRequestCreateCity from '@modules/shared/city/domain/interfaces/IRequestCreateCity';
import IRequestUpdateCity from '@modules/shared/city/domain/interfaces/IRequestUpdateCity';
import State from '@modules/shared/state/infra/typeorm/entities/State';

class CityRepository implements ICityRepository {
  private ormRepository: Repository<City>;
  private ormRepositoryState: Repository<State>;

  constructor() {
    this.ormRepository = getRepository(City);
    this.ormRepositoryState = getRepository(State);
  }

  public async create(parameters: IRequestCreateCity): Promise<ICreateCity> {
    const city = this.ormRepository.create({
      short_Name: parameters.short_name,
      long_Name: parameters.long_name,
      code: parameters.code,
      state: parameters.state,
      created_at: parameters.created_at,
    });
    await this.ormRepository.save(city);

    return city;
  }
  public async update(id: string, city: IRequestUpdateCity): Promise<boolean> {
    await this.ormRepository.update(id, city);

    return true;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async findAll(): Promise<City[]> {
    const city = this.ormRepository.find();

    return city;
  }

  public async findById(id: string): Promise<ICity | undefined> {
    const city = this.ormRepository.findOne(id);

    return city;
  }

  public async findByState(code: string): Promise<ICity[] | undefined> {

    const findState = await this.ormRepositoryState.findOne({
      where: {
        id: code
      }
    });
    const city = this.ormRepository.find(
      {
        where: {
          country: findState
        }
      }
    );

    return city;
  }

  public async findByShortName(
    shortname: shortName
  ): Promise<ICity | undefined> {
    const city = this.ormRepository.findOne({
      where: {
        short_Name: shortname,
      },
    });

    return city;
  }
  public async findByLongName(longName: string): Promise<ICity | undefined> {
    const city = this.ormRepository.findOne({
      where: {
        long_Name: longName,
      },
    });

    return city;
  }

  public async findByCode(code: string): Promise<ICity[] | undefined> {
    const city = this.ormRepository.find({
      where: {
        code: code,
      },
    });

    return city;
  }
}

export default CityRepository;
