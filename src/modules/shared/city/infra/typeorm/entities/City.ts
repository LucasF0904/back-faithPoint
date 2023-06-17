import { ICity } from '@modules/shared/city/domain/interfaces/ICity';
import shortName from '@shared/util/ShortName';

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
import { IState } from '@modules/shared/state/domain/interfaces/IState';
import State from '@modules/shared/state/infra/typeorm/entities/State';

@Entity('city')
class City implements ICity {
    @PrimaryGeneratedColumn('uuid')
	id: string;

    @Column({
		type: 'enum',
		enum: shortName,
	})
	short_Name: shortName;

	@Column()
	long_Name: string;	

	@Column()
	code: string;
	
	@ManyToOne(() => State)
	@JoinColumn({ name: 'state_id' })
	state: IState;
    
    @CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@DeleteDateColumn()
	deleted_at: Date;
}

export default City;
