/* eslint-disable @typescript-eslint/ban-ts-comment */
import { inject, injectable } from 'tsyringe';
import IReligionRepository from '../domain/repositories/IFaithPointRepository';
import IRequestUpdateReligion from '../domain/interfaces/IRequestUpdateFaithPoint';

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

        if (typeof parameters.address !== 'undefined') {
            Object.assign(data, { address: parameters.address });
        }

        if (typeof parameters.latitude !== 'undefined') {
            Object.assign(data, { latitude: parameters.latitude });
        }

        if (typeof parameters.longitude !== 'undefined') {
            Object.assign(data, { longitude: parameters.longitude });
        }

        if (typeof parameters.religion !== 'undefined') {
            Object.assign(data, { religion: parameters.religion });
        }

        if (typeof parameters.telephone !== 'undefined') {
            Object.assign(data, { telephone: parameters.telephone });
        }

        if (typeof parameters.email !== 'undefined') {
            Object.assign(data, { email: parameters.email });
        }

        if (typeof parameters.website !== 'undefined') {
            Object.assign(data, { website: parameters.website });
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