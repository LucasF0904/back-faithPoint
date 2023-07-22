import {MigrationInterface, QueryRunner, Table, TableIndex} from "typeorm";
import { IDX_FAITH_POINT_ADDRESS_ID, IDX_FAITH_POINT_ID, IDX_FAITH_POINT_RELIGION_ID } from "./options/TableFaithPoint";

export class CreateFaithPoint1690058163858 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // @ts-ignore faith_point
        await queryRunner.createTable(new Table(FAITH_POINT));
        await queryRunner.createIndex('faith_point', new TableIndex(IDX_FAITH_POINT_ID));
        await queryRunner.createIndex('faith_point', new TableIndex(IDX_FAITH_POINT_ADDRESS_ID));
        await queryRunner.createIndex('faith_point', new TableIndex(IDX_FAITH_POINT_RELIGION_ID));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex('faith_point', 'IDX_FAITH_POINT_ID');
        await queryRunner.dropIndex('faith_point', 'IDX_FAITH_POINT_ADDRESS_ID');
        await queryRunner.dropIndex('faith_point', 'IDX_FAITH_POINT_RELIGION_ID');
        await queryRunner.dropTable('faith_point');
    }

}
