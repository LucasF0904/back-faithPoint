/* eslint-disable @typescript-eslint/ban-ts-comment */
import { inject, injectable } from 'tsyringe';
import ICityRepository from '@modules/shared/city/domain/repositories/ICityRepository';
import shortName from '@shared/util/ShortName';
import { ICity } from '../domain/interfaces/ICity';

@injectable()
class FindCityService {

    constructor(
        //@ts-ignore
        @inject('CityRepository')
        private cityRepository: ICityRepository,
    ) {}

    public async findAll(): Promise<ICity[] | undefined> {
        const city = await this.cityRepository.findAll();

        return city;
    }

    public async findById(id: string): Promise<ICity | undefined> {
        const city = await this.cityRepository.findById(id);

        return city;
    }

    public async findByState(code: string): Promise<ICity[] | undefined> {
        const city = await this.cityRepository.findByState(code);

        return city;
    }

    public async findByCode(code: string): Promise<ICity[] | undefined> {
        const city = await this.cityRepository.findByCode(code);

        return city;
    }

    public async findByShortName(shortName: shortName): Promise<ICity | undefined> {
        const city = await this.cityRepository.findByShortName(shortName);

        return city;
    }

    public async findByLongName(longName: string): Promise<ICity | undefined> {
        const city = await this.cityRepository.findByLongName(longName);

        return city;
    }
}

export default FindCityService;