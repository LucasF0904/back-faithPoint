/* eslint-disable @typescript-eslint/ban-ts-comment */
import { inject, injectable } from 'tsyringe';
import IFaithPointRepository from '../domain/repositories/IFaithPointRepository';
import ICreateFaithPoint from '../domain/interfaces/ICreateFaithPoint';

@injectable()
class CreateFaithPointService {
    constructor(
        // @ts-ignore
        @inject('FaithPointRepository')
        private religionRepository: IFaithPointRepository,
    ){}

    public async create(parameters: ICreateFaithPoint): Promise<ICreateFaithPoint> {
        const religion = await this.religionRepository.create({
            name: parameters.name,
            description: parameters.description,
            address: parameters.address,
            latitude: parameters.latitude,
            longitude: parameters.longitude,
            religion: parameters.religion,
            telephone: parameters.telephone,
            email: parameters.email,
            website: parameters.website,
            created_at: parameters.created_at,
        });
        return religion;
    }
}

export default CreateFaithPointService;