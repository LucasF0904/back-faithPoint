/* eslint-disable @typescript-eslint/ban-ts-comment */
import {MigrationInterface, QueryRunner, Table, TableIndex} from 'typeorm';
import { COUNTRY, IDX_COUNTRY_ID } from './options/TableCountry';

export class CreateCountry1684002598161 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // @ts-ignore country
        await queryRunner.createTable(new Table(COUNTRY));
        await queryRunner.createIndex('country', new TableIndex(IDX_COUNTRY_ID));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex('country', 'IDX_COUNTRY_ID');
        await queryRunner.dropTable('country');
    }

}