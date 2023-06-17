/* eslint-disable @typescript-eslint/ban-ts-comment */
import { inject, injectable } from 'tsyringe';
import IAddressRepository from '@modules/shared/address/domain/repositories/IAddressRepository';

@injectable()
class DeleteAddressService {
	constructor(
        //@ts-ignore
		@inject('AddressRepository')
		private addressRepository: IAddressRepository,
	) {}

	public async delete(id: string): Promise<void> {
		await this.addressRepository.delete(id);
	}
}

export default DeleteAddressService;
