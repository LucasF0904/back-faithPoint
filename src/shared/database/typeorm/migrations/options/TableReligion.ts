export const RELIGION = {
    name: 'religion',
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
            length: '100',
            isNullable: false,
        },
        {
            name: 'description',
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
		}
    ]
};

export const IDX_RELIGION_ID = {
    name: 'IDX_RELIGION_ID',
    columnNames: ['id'],
};