export const RATING = {
    name: 'rating',
    columns: [
        {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
        },
        {
            name: 'faith_point_id',
            type: 'uuid',
            isNullable: false,
        },
        {
            name: 'user_id',
            type: 'uuid',
            isNullable: false,
        },
        {
            name: 'score',
            type: 'integer',
            isNullable: false,
        },
        {
            name: 'comment',
            type: 'varchar',
            length: '255',
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

export const IDX_RATING_ID = {
    name: 'IDX_RATING_ID',
    columnNames: ['id'],
};

export const IDX_RATING_FAITH_POINT_ID = {
    name: 'IDX_RATING_FAITH_POINT_ID',
    columnNames: ['faith_point_id'],
};

export const IDX_RATING_USER_ID = {
    name: 'IDX_RATING_USER_ID',
    columnNames: ['user_id'],
};