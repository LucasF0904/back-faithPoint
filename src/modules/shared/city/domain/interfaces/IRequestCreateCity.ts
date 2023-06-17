import { IState } from '@modules/shared/state/domain/interfaces/IState';
import shortName from '@shared/util/ShortName';

interface IRequestCreateCity {
	short_name?: shortName;
	long_name?: string;
	code?: string;
	state?: IState;
	created_at?: Date;
}

export default IRequestCreateCity;