import { IFaithPoint } from '@modules/faith_point/domain/interfaces/IFaithPoint';
import { IReligion } from '@modules/religion/domain/interfaces/IReligion';
import Religion from '@modules/religion/infra/typeorm/entities/Religion';
import { IAddress } from '@modules/shared/address/domain/interfaces/IAddress';
import Address from '@modules/shared/address/infra/typeorm/entities/Address';
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

@Entity('faithPoint')
class FaithPoint implements IFaithPoint {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @ManyToOne(() => Address)
    @JoinColumn({ name: 'address_id' })
    address: IAddress;

    @Column()
    latitude: string;

    @Column()
    longitude: string;

    @ManyToOne(() => Religion)
    @JoinColumn({ name: 'religion_id' })
    religion: IReligion;

    @Column()
    telephone: string;

    @Column()
    email: string;

    @Column()
    website: string;
    
    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;
}

export default FaithPoint;