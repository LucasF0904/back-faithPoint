import { IFaithPoint } from '@modules/faith_point/domain/interfaces/IFaithPoint';
import { IUser } from '@modules/user/domain/interfaces/IUser';

interface ICreateRating {
    faithPoint: IFaithPoint;
    user: IUser;
    score: number;
    comment: string;
    created_at?: Date;
}

export default ICreateRating;