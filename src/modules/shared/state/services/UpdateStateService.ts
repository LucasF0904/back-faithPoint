/* eslint-disable @typescript-eslint/ban-ts-comment */
import { inject, injectable } from 'tsyringe';
import ICountryRepository from '@modules/shared/country/domain/repositories/ICountryRepository';
import IRequestUpdateState from '../domain/interfaces/IRequestUpdateState';

@injectable()
class UpdateCountryService {
  constructor(
    //@ts-ignore
    @inject('CountryRepository')
    private countryRepository: ICountryRepository
  ) {}

  public async update(id: string, paramters: IRequestUpdateState): Promise<boolean> {
    const data = {};

    if (typeof paramters.id !== 'undefined') {
      Object.assign(data, { id: paramters.id });
    }

    if (typeof paramters.country !== 'undefined') {
      Object.assign(data, { code: paramters.country });
    }

    if (typeof paramters.short_name !== 'undefined') {
      Object.assign(data, { shortName: paramters.short_name });
    }

    if (typeof paramters.long_name !== 'undefined') {
      Object.assign(data, { long_name: paramters.long_name });
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
