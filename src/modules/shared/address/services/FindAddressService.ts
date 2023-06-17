/* eslint-disable @typescript-eslint/ban-ts-comment */
import { inject, injectable } from 'tsyringe';
import IAddressRepository from '@modules/shared/address/domain/repositories/IAddressRepository';
import { IAddress } from '../domain/interfaces/IAddress';

@injectable()
class FindAddressService {

    constructor(
        //@ts-ignore
        @inject('AddressRepository')
        private addressRepository: IAddressRepository,
    ) {}

    public async findAll(): Promise<IAddress[] | undefined> {
        const address = await this.addressRepository.findAll();

        return address;
    }

    public async findById(id: string): Promise<IAddress | undefined> {
        const address = await this.addressRepository.findById(id);

        return address;
    }

    public async findByCity(code: string): Promise<IAddress[] | undefined> {
        const address = await this.addressRepository.findByCity(code);

        return address;
    }
}

export default FindAddressService;