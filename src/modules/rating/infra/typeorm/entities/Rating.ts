
import { IFaithPoint } from '@modules/faith_point/domain/interfaces/IFaithPoint';
import FaithPoint from '@modules/faith_point/infra/typeorm/entities/FaithPoint';
import { IRating } from '@modules/rating/domain/interfaces/IRating';
import { IUser } from '@modules/user/domain/interfaces/IUser';
import User from '@modules/user/infra/typeorm/entities/User';
import {
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity('rating')
class Rating implements IRating {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => FaithPoint)
    @JoinColumn({ name: 'faith_point_id' })
    faithPoint: IFaithPoint;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: IUser;

    @Column()
    score: number;

    @Column()
    comment: string;
    
    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;
}

export default Rating;