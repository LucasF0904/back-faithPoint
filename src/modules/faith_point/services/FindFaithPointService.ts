/* eslint-disable @typescript-eslint/ban-ts-comment */
import { inject, injectable } from 'tsyringe';
import IFaithPointRepository from '../domain/repositories/IFaithPointRepository';
import { IFaithPoint } from '../domain/interfaces/IFaithPoint';

@injectable()
class FindFaithPointService {    
    constructor(
        //@ts-ignore
        @inject('FaithPointRepository')
        private faithPointRepository: IFaithPointRepository,
    ) {}

    public async findAll(): Promise<IFaithPoint[] | undefined> {
        const faithPoint = await this.faithPointRepository.findAll();

        return faithPoint;
    }

    public async findById(id: string): Promise<IFaithPoint | undefined> {
        const faithPoint = await this.faithPointRepository.findById(id);

        return faithPoint;
    }

    public async findByName(name: string): Promise<IFaithPoint | undefined> {
        const faithPoint = await this.faithPointRepository.findByName(name);

        return faithPoint;
    }
        
}
export default FindFaithPointService;