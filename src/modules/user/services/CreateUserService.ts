/* eslint-disable @typescript-eslint/ban-ts-comment */
import { inject, injectable } from 'tsyringe';
import IUserRepository from '@modules/user/domain/repositories/IUserRepository';
import IRequestCreateUser from '../domain/interfaces/IRequestCreateUser';
import ICreateUser from '../domain/interfaces/ICreateUser';

@injectable()
class CreateUserService {
    constructor(
        // @ts-ignore
        @inject('UserRepository')
        private userRepository: IUserRepository,
    ){}

    public async create(parameters: IRequestCreateUser): Promise<ICreateUser> {
        const user = await this.userRepository.create({
            name: parameters.name,
            email: parameters.email,
            password_hash: parameters.password_hash,
            image_url: parameters.image_url,
            is_admin: parameters.is_admin,
            address: parameters.address,
            created_at: parameters.created_at,
        });
        return user;
    }
}

export default CreateUserService;