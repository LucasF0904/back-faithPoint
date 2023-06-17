/* eslint-disable @typescript-eslint/ban-ts-comment */
import { inject, injectable } from 'tsyringe';
import IAddressRepository from '@modules/shared/address/domain/repositories/IAddressRepository';
import IRequestCreateAddress from '../domain/interfaces/IRequestCreateAddress';
import ICreateAddress from '../domain/interfaces/ICreateAddress';

@injectable()
class CreateAddressService {
    constructor(
        // @ts-ignore
        @inject('AddressRepository')
        private addressRepository: IAddressRepository,
    ){}

    public async create(parameters: IRequestCreateAddress): Promise<ICreateAddress> {
        const address = await this.addressRepository.create({
            street: parameters.street,
            number: parameters.number,
            complement: parameters.complement,
            neighborhood: parameters.neighborhood,
            city: parameters.city,
            created_at: parameters.created_at,
        });
        return address;
    }
}

export default CreateAddressService;