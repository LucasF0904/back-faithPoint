import { IAddress } from '@modules/shared/address/domain/interfaces/IAddress';

interface ICreateUser {
	name: string;
	email: string;
	password_hash: string;
	image_url?: string;
	is_admin: boolean;
	address?: IAddress;
	created_at?: Date;
}

export default ICreateUser;