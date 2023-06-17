import { IState } from '@modules/shared/state/domain/interfaces/IState';
import shortName from '@shared/util/ShortName';

export interface ICity {
	id: string;
	short_name?: shortName;
	long_name?: string;
	code?: string;
	state?: IState;
	created_at: Date;
	updated_at: Date;
	deleted_at: Date;
}