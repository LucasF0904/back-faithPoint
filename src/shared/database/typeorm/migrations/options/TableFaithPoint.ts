export const FAITH_POINT = {
    name: 'faith_point',
    columns: [
        {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
        },
        {
            name: 'name',
            type: 'varchar',
            precision: 255,
            isNullable: false,
        },
        {
            name: 'description',
            type: 'varchar',
            precision: 255,
            isNullable: false,
        },
        {
            name: 'address_id',
            type: 'uuid',
            isNullable: false,
        },
        {
            name: 'latitude',
            type: 'varchar',
            precision: 255,
            isNullable: true,
        },
        {
            name: 'longitude',
            type: 'varchar',
            precision: 255,
            isNullable: true,
        },
        {
            name: 'religion_id',
            type: 'uuid',
            isNullable: false,
        },
        {
            name: 'telephone',
            type: 'varchar',
            precision: 255,
            isNullable: true,
        },
        {
            name: 'email',
            type: 'varchar',
            precision: 255,
            isNullable: true,
        },
        {
            name: 'website',
            type: 'varchar',
            precision: 255,
            isNullable: true,
        },
        {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
            isNullable: true,
        },
        {
            name: 'updated_at',
            type: 'timestamp',
            default: 'null',
            isNullable: true,
        },
        {
            name: 'deleted_at',
            type: 'timestamp',
            default: 'null',
            isNullable: true,
        },
    ]
};

export const IDX_FAITH_POINT_ID = {
    name: 'IDX_FAITH_POINT_ID',
    columnNames: ['id'],
};

export const IDX_FAITH_POINT_ADDRESS_ID = {
    name: 'IDX_FAITH_POINT_ADDRESS_ID',
    columnNames: ['address_id'],
};

export const IDX_FAITH_POINT_RELIGION_ID = {
    name: 'IDX_FAITH_POINT_RELIGION_ID',
    columnNames: ['religion_id'],
};