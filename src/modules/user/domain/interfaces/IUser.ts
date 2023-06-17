import { IAddress } from '@modules/shared/address/domain/interfaces/IAddress';

export interface IUser {
	id: string;
	name: string;
	email: string;
	password_hash: string;
	image_url: string;
	is_admin: boolean;
	address: IAddress;
	created_at: Date;
	updated_at: Date;
	deleted_at: Date;
}