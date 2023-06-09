/* eslint-disable @typescript-eslint/ban-ts-comment */
import { inject, injectable } from 'tsyringe';
import ICountryRepository from '@modules/shared/country/domain/repositories/ICountryRepository';
import shortName from '@shared/util/ShortName';
import { ICountry } from '../domain/interfaces/ICountry';

@injectable()
class FindCountryService {

    constructor(
        //@ts-ignore
        @inject('CountryRepository')
        private countryRepository: ICountryRepository,
    ) {}

    public async findAll(): Promise<ICountry[] | undefined> {
        const country = await this.countryRepository.findAll();

        return country;
    }

    public async findById(id: string): Promise<ICountry | undefined> {
        const country = await this.countryRepository.findById(id);

        return country;
    }

    public async findByCode(code: string): Promise<ICountry | undefined> {
        const country = await this.countryRepository.findByCode(code);

        return country;
    }

    public async findByShortName(shortName: shortName): Promise<ICountry | undefined> {
        const country = await this.countryRepository.findByShortName(shortName);

        return country;
    }

    public async findByLongName(longName: string): Promise<ICountry | undefined> {
        const country = await this.countryRepository.findByLongName(longName);

        return country;
    }
}

export default FindCountryService;