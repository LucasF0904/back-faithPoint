import IStateRepository from '@modules/shared/state/domain/repositories/IStateRepository';
import shortName from '@shared/util/ShortName';
import { getRepository, Repository } from 'typeorm';
import State from '@modules/shared/state/infra/typeorm/entities/State';
import ICreateState from '@modules/shared/state/domain/interfaces/ICreateState';
import { IState } from '@modules/shared/state/domain/interfaces/IState';
import IRequestCreateState from '@modules/shared/state/domain/interfaces/IRequestCreateState';
import IRequestUpdateState from '@modules/shared/state/domain/interfaces/IRequestUpdateState';
import Country from '@modules/shared/country/infra/typeorm/entities/Country';

class StateRepository implements IStateRepository {
  private ormRepository: Repository<State>;
  private ormRepositoryCountry: Repository<Country>;

  constructor() {
    this.ormRepository = getRepository(State);
    this.ormRepositoryCountry = getRepository(Country);
  }

  public async create(parameters: IRequestCreateState): Promise<ICreateState> {
    const state = this.ormRepository.create({
      short_Name: parameters.short_name,
      long_Name: parameters.long_name,
      country: parameters.country,
      created_at: parameters.created_at,
    });
    await this.ormRepository.save(state);

    return state;
  }
  public async update(id: string, state: IRequestUpdateState): Promise<boolean> {
    await this.ormRepository.update(id, state);

    return true;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async findAll(): Promise<State[]> {
    const state = this.ormRepository.find();

    return state;
  }

  public async findById(id: string): Promise<IState | undefined> {
    const state = this.ormRepository.findOne(id);

    return state;
  }

  public async findByCountry(code: string): Promise<IState[] | undefined> {

    const findCountry = await this.ormRepositoryCountry.findOne({
      where: {
        id: code
      }
    });
    const state = this.ormRepository.find(
      {
        where: {
          country: findCountry
        }
      }
    );

    return state;
  }

  public async findByShortName(
    shortname: shortName
  ): Promise<IState | undefined> {
    const state = this.ormRepository.findOne({
      where: {
        short_Name: shortname,
      },
    });

    return state;
  }
  public async findByLongName(longName: string): Promise<IState | undefined> {
    const state = this.ormRepository.findOne({
      where: {
        long_Name: longName,
      },
    });

    return state;
  }
}

export default StateRepository;
