import { ICountry } from '@modules/shared/country/domain/interfaces/ICountry';
import shortName from '@shared/util/ShortName';

interface IRequestUpdateState {
  id?: string;
  short_name?: shortName;
	long_name?: string;
	country?: ICountry;
	updated_at?: Date;
}

export default IRequestUpdateState;
