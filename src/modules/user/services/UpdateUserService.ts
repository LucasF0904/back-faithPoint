/* eslint-disable @typescript-eslint/ban-ts-comment */
import { inject, injectable } from 'tsyringe';
import IUserRepository from '@modules/user/domain/repositories/IUserRepository';
import IRequestUpdateUser from '../domain/interfaces/IRequestUpdateUser';

@injectable()
class UpdateUserService {
  constructor(
    //@ts-ignore
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  public async update(id: string, paramters: IRequestUpdateUser): Promise<boolean> {
    
    const data = {};

    if (typeof paramters.name !== 'undefined') {
      Object.assign(data, { name: paramters.name });
    }

    if (typeof paramters.email !== 'undefined') {
      Object.assign(data, { email: paramters.email });
    }

    if (typeof paramters.password_hash !== 'undefined') {
      Object.assign(data, { password_hash: paramters.password_hash });
    }

    if (typeof paramters.image_url !== 'undefined') {
      Object.assign(data, { image_url: paramters.image_url });
    }

    if (typeof paramters.is_admin !== 'undefined') {
      Object.assign(data, { is_admin: paramters.is_admin });
    }

    if (typeof paramters.address !== 'undefined') {
      Object.assign(data, { address: paramters.address });
    }

    if (typeof paramters.updated_at !== 'undefined') {
      Object.assign(data, { updated_at: Date.now() });
    }

    if (Object.keys(data).length === 0) {
      return false;
    }

    await this.userRepository.update(id, data);

    return true;

  }
}

export default UpdateUserService;
