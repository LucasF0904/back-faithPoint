/* eslint-disable @typescript-eslint/ban-ts-comment */
import { inject, injectable } from 'tsyringe';
import ICityRepository from '@modules/shared/city/domain/repositories/ICityRepository';

@injectable()
class DeleteCityService {
	constructor(
        //@ts-ignore
		@inject('CityRepository')
		private cityRepository: ICityRepository,
	) {}

	public async delete(id: string): Promise<void> {
		await this.cityRepository.delete(id);
	}
}

export default DeleteCityService;
