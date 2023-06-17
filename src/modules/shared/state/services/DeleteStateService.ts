/* eslint-disable @typescript-eslint/ban-ts-comment */
import { inject, injectable } from 'tsyringe';
import IStateRepository from '@modules/shared/state/domain/repositories/IStateRepository';

@injectable()
class DeleteStateService {
	constructor(
        //@ts-ignore
		@inject('StateRepository')
		private stateRepository: IStateRepository,
	) {}

	public async delete(id: string): Promise<void> {
		await this.stateRepository.delete(id);
	}
}

export default DeleteStateService;
