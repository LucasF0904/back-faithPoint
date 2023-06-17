import { ICity } from '@modules/shared/city/domain/interfaces/ICity';

interface IRequestUpdateAddress {
  	id?: string;
  	street: string;
	number: string;
	complement?: string;
	neighborhood: string;
	city: ICity;
	updated_at?: Date;
}

export default IRequestUpdateAddress;
