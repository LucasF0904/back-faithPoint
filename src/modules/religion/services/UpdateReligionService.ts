/* eslint-disable @typescript-eslint/ban-ts-comment */
import { inject, injectable } from 'tsyringe';
import IReligionRepository from '../domain/repositories/IReligionRepository';
import IRequestUpdateReligion from '../domain/interfaces/IRequestUpdateReligion';

@injectable()
class UpdateReligionService {
    constructor(
        //@ts-ignore
        @inject('ReligionRepository')
        private religionRepository: IReligionRepository,
    ) {}

    public async update(id: string, parameters: IRequestUpdateReligion): Promise<IRequestUpdateReligion> {
        const data = {};

        if (typeof parameters.name !== 'undefined') {
            Object.assign(data, { name: parameters.name });
        }

        if (typeof parameters.description !== 'undefined') {
            Object.assign(data, { description: parameters.description });
        }

        if (typeof parameters.updated_at !== 'undefined') {
            Object.assign(data, { updated_at: Date.now() });
        }
        
        if(Object.keys(data).length === 0) {
            throw new Error('No data to update');
        }

        await this.religionRepository.update(id, data);

        return parameters;
    }
}

export default UpdateReligionService;