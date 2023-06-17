import { ICountry } from '@modules/shared/country/domain/interfaces/ICountry';
import shortName from '@shared/util/ShortName';

export interface IState {
	id: string;
	short_name?: shortName;
	long_name?: string;
	code?: string;
	country?: ICountry;
	created_at: Date;
	updated_at: Date;
	deleted_at: Date;
}