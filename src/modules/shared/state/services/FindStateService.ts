/* eslint-disable @typescript-eslint/ban-ts-comment */
import { inject, injectable } from 'tsyringe';
import IStateRepository from '@modules/shared/state/domain/repositories/IStateRepository';
import shortName from '@shared/util/ShortName';
import { IState } from '../domain/interfaces/IState';

@injectable()
class FindStateService {

    constructor(
        //@ts-ignore
        @inject('StateRepository')
        private stateRepository: IStateRepository,
    ) {}

    public async findAll(): Promise<IState[] | undefined> {
        const state = await this.stateRepository.findAll();

        return state;
    }

    public async findById(id: string): Promise<IState | undefined> {
        const state = await this.stateRepository.findById(id);

        return state;
    }

    public async findByCountry(code: string): Promise<IState[] | undefined> {
        const state = await this.stateRepository.findByCountry(code);

        return state;
    }

    public async findByShortName(shortName: shortName): Promise<IState | undefined> {
        const state = await this.stateRepository.findByShortName(shortName);

        return state;
    }

    public async findByLongName(longName: string): Promise<IState | undefined> {
        const state = await this.stateRepository.findByLongName(longName);

        return state;
    }
}

export default FindStateService;