/* eslint-disable @typescript-eslint/ban-ts-comment */
import { inject, injectable } from 'tsyringe';
import IUserRepository from '@modules/user/domain/repositories/IUserRepository';
import { IUser } from '../domain/interfaces/IUser';

@injectable()
class FindUserService {

    constructor(
        //@ts-ignore
        @inject('UserRepository')
        private userRepository: IUserRepository,
    ) {}

    public async findAll(): Promise<IUser[] | undefined> {
        const user = await this.userRepository.findAll();

        return user;
    }

    public async findById(id: string): Promise<IUser | undefined> {
        const user = await this.userRepository.findById(id);

        return user;
    }

    public async findByAddress(code: string): Promise<IUser[] | undefined> {
        const user = await this.userRepository.findByAddress(code);

        return user;
    }
    
}

export default FindUserService;