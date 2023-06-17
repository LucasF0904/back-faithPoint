import { ICountry } from '@modules/shared/country/domain/interfaces/ICountry';
import shortName from '@shared/util/ShortName';

interface ICreateState {
	short_name?: shortName;
	long_name?: string;
	country?: ICountry;
	created_at?: Date;
}

export default ICreateState;