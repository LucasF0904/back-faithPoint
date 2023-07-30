import { IFaithPoint } from '@modules/faith_point/domain/interfaces/IFaithPoint';
import { IUser } from '@modules/user/domain/interfaces/IUser';

interface IRequestUpdateRating {
    faithPoint: IFaithPoint;
    user: IUser;
    score?: number;
    comment?: string;
    updated_at?: Date;
}

export default IRequestUpdateRating;