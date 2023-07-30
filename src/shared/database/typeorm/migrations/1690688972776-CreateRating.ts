import {MigrationInterface, QueryRunner, Table, TableIndex} from "typeorm";
import { IDX_RATING_FAITH_POINT_ID, IDX_RATING_ID, IDX_RATING_USER_ID } from "./options/TableRating";

export class CreateRating1690688972776 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // @ts-ignore rating
        await queryRunner.createTable(new Table(RATING));
        await queryRunner.createIndex('rating', new TableIndex(IDX_RATING_ID));
        await queryRunner.createIndex('rating', new TableIndex(IDX_RATING_FAITH_POINT_ID));
        await queryRunner.createIndex('rating', new TableIndex(IDX_RATING_USER_ID));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex('rating', 'IDX_RATING_ID');
        await queryRunner.dropIndex('rating', 'IDX_RATING_FAITH_POINT_ID');
        await queryRunner.dropIndex('rating', 'IDX_RATING_USER_ID');
    }

}
