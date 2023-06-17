import IUserRepository from '@modules/user/domain/repositories/IUserRepository';
import { getRepository, Repository } from 'typeorm';
import User from '@modules/user/infra/typeorm/entities/User';
import ICreateUser from '@modules/user/domain/interfaces/ICreateUser';
import { IUser } from '@modules/user/domain/interfaces/IUser';
import IRequestCreateUser from '@modules/user/domain/interfaces/IRequestCreateUser';
import IRequestUpdateUser from '@modules/user/domain/interfaces/IRequestUpdateUser';
import Address from '@modules/shared/address/infra/typeorm/entities/Address';

class UserRepository implements IUserRepository {
  private ormRepository: Repository<User>;
  private ormRepositoryAddress: Repository<Address>;

  constructor() {
    this.ormRepository = getRepository(User);
    this.ormRepositoryAddress = getRepository(Address);
  }

  public async create(parameters: IRequestCreateUser): Promise<ICreateUser> {
    const user = this.ormRepository.create({
      name: parameters.name,
      email: parameters.email,
      password_hash: parameters.password_hash,
      image_url: parameters.image_url,
      is_admin: parameters.is_admin,
      address: parameters.address,
      created_at: parameters.created_at,
    });
    await this.ormRepository.save(user);

    return user;
  }
  public async update(id: string, user: IRequestUpdateUser): Promise<boolean> {
    await this.ormRepository.update(id, user);

    return true;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async findAll(): Promise<User[]> {
    const user = this.ormRepository.find();

    return user;
  }

  public async findById(id: string): Promise<IUser | undefined> {
    const user = this.ormRepository.findOne(id);

    return user;
  }

  public async findByAddress(code: string): Promise<IUser[] | undefined> {

    const findAddress = await this.ormRepositoryAddress.findOne({
      where: {
        id: code
      }
    });
    const user = this.ormRepository.find(
      {
        where: {
          city: findAddress
        }
      }
    );

    return user;
  }
}

export default UserRepository;
