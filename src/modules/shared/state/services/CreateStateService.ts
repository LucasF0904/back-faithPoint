/* eslint-disable @typescript-eslint/ban-ts-comment */
import { inject, injectable } from 'tsyringe';
import IStateRepository from '@modules/shared/state/domain/repositories/IStateRepository';
import IRequestCreateState from '../domain/interfaces/IRequestCreateState';
import ICreateState from '../domain/interfaces/ICreateState';

@injectable()
class CreateStateService {
    constructor(
        // @ts-ignore
        @inject('StateRepository')
        private stateRepository: IStateRepository,
    ){}

    public async create(parameters: IRequestCreateState): Promise<ICreateState> {
        const state = await this.stateRepository.create({
            country: parameters.country,
            short_name: parameters.short_name,
            long_name: parameters.long_name,
            code: parameters.code,
            created_at: parameters.created_at,
        });
        return state;
    }
}

export default CreateStateService;