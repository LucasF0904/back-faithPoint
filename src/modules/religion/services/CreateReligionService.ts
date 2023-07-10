/* eslint-disable @typescript-eslint/ban-ts-comment */
import { inject, injectable } from 'tsyringe';
import IReligionRepository from '../domain/repositories/IReligionRepository';
import ICreateReligion from '../domain/interfaces/ICreateReligion';

@injectable()
class CreateReligionService {
    constructor(
        // @ts-ignore
        @inject('ReligionRepository')
        private religionRepository: IReligionRepository,
    ){}

    public async create(parameters: ICreateReligion): Promise<ICreateReligion> {
        const religion = await this.religionRepository.create({
            name: parameters.name,
            description: parameters.description,
            created_at: parameters.created_at,
        });
        return religion;
    }
}

export default CreateReligionService;