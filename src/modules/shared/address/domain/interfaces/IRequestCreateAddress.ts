import { ICity } from '@modules/shared/city/domain/interfaces/ICity';

interface IRequestCreateAddress {
	street: string;
	number: string;
	complement?: string;
	neighborhood: string;
	city: ICity;
	created_at?: Date;
}

export default IRequestCreateAddress;