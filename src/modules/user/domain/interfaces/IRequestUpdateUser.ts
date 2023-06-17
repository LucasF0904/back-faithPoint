import { IAddress } from '@modules/shared/address/domain/interfaces/IAddress';

interface IRequestUpdateUser {
  	id?: string;
  	name: string;
	email: string;
	password_hash: string;
	image_url?: string;
	is_admin: boolean;
	address?: IAddress;
	updated_at?: Date;
}

export default IRequestUpdateUser;
