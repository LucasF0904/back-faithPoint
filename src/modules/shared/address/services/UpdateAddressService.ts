/* eslint-disable @typescript-eslint/ban-ts-comment */
import { inject, injectable } from 'tsyringe';
import ICountryRepository from '@modules/shared/country/domain/repositories/ICountryRepository';
import IRequestUpdateAddress from '../domain/interfaces/IRequestUpdateAddress';

@injectable()
class UpdateCountryService {
  constructor(
    //@ts-ignore
    @inject('CountryRepository')
    private countryRepository: ICountryRepository
  ) {}

  public async update(id: string, paramters: IRequestUpdateAddress): Promise<boolean> {
    const data = {};

    if (typeof paramters.id !== 'undefined') {
      Object.assign(data, { id: paramters.id });
    }

    if (typeof paramters.street !== 'undefined') {
      Object.assign(data, { street: paramters.street });
    }

    if (typeof paramters.number !== 'undefined') {
      Object.assign(data, { number: paramters.number });
    }    

    if (typeof paramters.complement !== 'undefined') {
      Object.assign(data, { complement: paramters.complement });
    }

    if (typeof paramters.neighborhood !== 'undefined') {
      Object.assign(data, { neighborhood: paramters.neighborhood });
    }

    if (typeof paramters.city !== 'undefined') {
      Object.assign(data, { city: paramters.city });
    }

    if (typeof paramters.updated_at !== 'undefined') {
      Object.assign(data, { updated_at: Date.now() });
    }

    if (Object.keys(data).length === 0) {
      return false;
    }

    await this.countryRepository.update(id, data);

    return true;
  }
}

export default UpdateCountryService;
