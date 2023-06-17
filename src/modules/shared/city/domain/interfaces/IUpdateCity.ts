import { IState } from '@modules/shared/state/domain/interfaces/IState';
import shortName from '@shared/util/ShortName';

interface IUpdateCity {
  	id?: string;
  	short_name?: shortName;
	long_name?: string;
	code?: string;
	state?: IState;
	updated_at?: Date;
}

export default IUpdateCity;
