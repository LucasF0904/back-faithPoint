import { IFaithPoint } from '@modules/faith_point/domain/interfaces/IFaithPoint';
import { IUser } from '@modules/user/domain/interfaces/IUser';

export interface IRating {
    id: string;
    faithPoint: IFaithPoint;
    user: IUser;
    score: number;
    comment: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}