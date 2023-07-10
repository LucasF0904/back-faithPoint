/* eslint-disable @typescript-eslint/ban-ts-comment */
import { inject, injectable } from 'tsyringe';
import IReligionRepository from '../domain/repositories/IReligionRepository';
import { IReligion } from '../domain/interfaces/IReligion';

@injectable()
class FindReligionService {    
    constructor(
        //@ts-ignore
        @inject('ReligionRepository')
        private religionRepository: IReligionRepository,
    ) {}

    public async findAll(): Promise<IReligion[] | undefined> {
        const religion = await this.religionRepository.findAll();

        return religion;
    }

    public async findById(id: string): Promise<IReligion | undefined> {
        const religion = await this.religionRepository.findById(id);

        return religion;
    }

    public async findByName(name: string): Promise<IReligion | undefined> {
        const religion = await this.religionRepository.findByName(name);

        return religion;
    }
        
}
export default FindReligionService;