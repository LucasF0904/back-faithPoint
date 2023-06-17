import { IUser } from '@modules/user/domain/interfaces/IUser';
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
import Address from '@modules/shared/address/infra/typeorm/entities/Address';
import { IAddress } from '@modules/shared/address/domain/interfaces/IAddress';

@Entity('user')
class User implements IUser {
    @PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	name: string;

	@Column()
	email: string;

	@Column()
	password_hash: string;

	@Column()
	image_url: string;

	@Column()
	is_admin: boolean;
	
	@ManyToOne(() => Address)
	@JoinColumn({ name: 'address_id' })
	address: IAddress;
    
    @CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@DeleteDateColumn()
	deleted_at: Date;
}

export default User;
