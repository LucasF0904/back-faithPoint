import { IReligion } from '@modules/religion/domain/interfaces/IReligion';
import { IAddress } from '@modules/shared/address/domain/interfaces/IAddress';

export interface IFaithPoint {
    id: string;
    name: string;
    description: string;
    address: IAddress;
    latitude: string;
    longitude: string;
    religion: IReligion;
    telephone: string;
    email: string;
    website: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}