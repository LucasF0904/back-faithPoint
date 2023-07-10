import {MigrationInterface, QueryRunner, Table, TableIndex} from 'typeorm';
import { IDX_RELIGION_ID, RELIGION } from './options/TableReligion';

export class CreateReligion1688981217998 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // @ts-ignore religion
        await queryRunner.createTable(new Table(RELIGION));
        await queryRunner.createIndex('religion', new TableIndex(IDX_RELIGION_ID));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex('religion', 'IDX_RELIGION_ID');
        await queryRunner.dropTable('religion');
    }

}
