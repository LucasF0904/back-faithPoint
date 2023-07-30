/* eslint-disable @typescript-eslint/ban-ts-comment */
import { inject, injectable } from 'tsyringe';
import IFaithPointRepository from '../domain/repositories/IFaithPointRepository';
import IRequestUpdateFaithPoint from '../domain/interfaces/IRequestUpdateFaithPoint';

@injectable()
class UpdateFaithPointService {
    constructor(
        //@ts-ignore
        @inject('FaithPointRepository')
        private faithPointRepository: IFaithPointRepository,
    ) {}

    public async update(id: string, parameters: IRequestUpdateFaithPoint): Promise<IRequestUpdateFaithPoint> {
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

        if (typeof parameters.faithPoint !== 'undefined') {
            Object.assign(data, { faithPoint: parameters.faithPoint });
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

        await this.faithPointRepository.update(id, data);

        return parameters;
    }
}

export default UpdateFaithPointService;