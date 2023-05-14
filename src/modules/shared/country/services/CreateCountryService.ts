/* eslint-disable @typescript-eslint/ban-ts-comment */
import { inject, injectable } from 'tsyringe';
import ICountryRepository from '@modules/shared/country/domain/repositories/ICountryRepository';
import IRequestCreateCountry from '../domain/interfaces/IRequestCreateCountry';
import { ICountry } from '../domain/interfaces/ICountry';

@injectable()
class CreateCountryService {
    constructor(
        // @ts-ignore
        @inject('CountryRepository')
        private countryRepository: ICountryRepository,
    ){}

    public async create(parameters: IRequestCreateCountry): Promise<ICountry> {
        const country = await this.countryRepository.create({
            code: parameters.code,
            short_name: parameters.short_name,
            long_name: parameters.long_name,
        });
        return country;
    }
}

export default CreateCountryService;