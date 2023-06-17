import IAddressRepository from '@modules/shared/address/domain/repositories/IAddressRepository';
import { getRepository, Repository } from 'typeorm';
import Address from '@modules/shared/address/infra/typeorm/entities/Address';
import ICreateAddress from '@modules/shared/address/domain/interfaces/ICreateAddress';
import { IAddress } from '@modules/shared/address/domain/interfaces/IAddress';
import IRequestCreateAddress from '@modules/shared/address/domain/interfaces/IRequestCreateAddress';
import IRequestUpdateAddress from '@modules/shared/address/domain/interfaces/IRequestUpdateAddress';
import City from '@modules/shared/city/infra/typeorm/entities/City';

class AddressRepository implements IAddressRepository {
  private ormRepository: Repository<Address>;
  private ormRepositoryCity: Repository<City>;

  constructor() {
    this.ormRepository = getRepository(Address);
    this.ormRepositoryCity = getRepository(City);
  }

  public async create(parameters: IRequestCreateAddress): Promise<ICreateAddress> {
    const address = this.ormRepository.create({
      street: parameters.street,
      number: parameters.number,
      complement: parameters.complement,
      neighborhood: parameters.neighborhood,
      city: parameters.city,
      created_at: parameters.created_at,
    });
    await this.ormRepository.save(address);

    return address;
  }
  public async update(id: string, address: IRequestUpdateAddress): Promise<boolean> {
    await this.ormRepository.update(id, address);

    return true;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async findAll(): Promise<Address[]> {
    const address = this.ormRepository.find();

    return address;
  }

  public async findById(id: string): Promise<IAddress | undefined> {
    const address = this.ormRepository.findOne(id);

    return address;
  }

  public async findByCity(code: string): Promise<IAddress[] | undefined> {

    const findCity = await this.ormRepositoryCity.findOne({
      where: {
        id: code
      }
    });
    const address = this.ormRepository.find(
      {
        where: {
          city: findCity
        }
      }
    );

    return address;
  }
}

export default AddressRepository;
