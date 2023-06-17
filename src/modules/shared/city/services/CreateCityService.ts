/* eslint-disable @typescript-eslint/ban-ts-comment */
import { inject, injectable } from 'tsyringe';
import ICityRepository from '@modules/shared/city/domain/repositories/ICityRepository';
import IRequestCreateCity from '../domain/interfaces/IRequestCreateCity';
import ICreateCity from '../domain/interfaces/ICreateCity';

@injectable()
class CreateCityService {
    constructor(
        // @ts-ignore
        @inject('CityRepository')
        private cityRepository: ICityRepository,
    ){}

    public async create(parameters: IRequestCreateCity): Promise<ICreateCity> {
        const city = await this.cityRepository.create({
            state: parameters.state,
            short_name: parameters.short_name,
            long_name: parameters.long_name,
            code: parameters.code,
            created_at: parameters.created_at,
        });
        return city;
    }
}

export default CreateCityService;