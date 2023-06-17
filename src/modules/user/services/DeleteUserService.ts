/* eslint-disable @typescript-eslint/ban-ts-comment */
import { inject, injectable } from 'tsyringe';
import IUserRepository from '@modules/user/domain/repositories/IUserRepository';

@injectable()
class DeleteUserService {
	constructor(
        //@ts-ignore
		@inject('UserRepository')
		private userRepository: IUserRepository,
	) {}

	public async delete(id: string): Promise<void> {
		await this.userRepository.delete(id);
	}
}

export default DeleteUserService;
