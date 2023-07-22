import { IReligion } from '@modules/religion/domain/interfaces/IReligion';
import { IAddress } from '@modules/shared/address/domain/interfaces/IAddress';

interface IRequestCreateFaithPoint {
    name: string;
    description: string;
    address?: IAddress
    latitude: string;
    longitude: string;
    religion?: IReligion;
    telephone: string;
    email: string;
    website: string;
    created_at?: Date;
}

export default IRequestCreateFaithPoint;
