export const CITY = {
    name: 'city',
    columns: [
        {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
        },
        {
            name: 'short_name',
            type: 'enum',
            precision: 2,
            isNullable: false,
            enum:[
                'BR',
                'US',
                'CA',
                'MX',
                'AR',
                'CL',
                'CO',
                'EC',
                'PY',
                'PE',
                'UY',
                'VE',
                'BO',
                'GY',
                'SR',
                'GF',
            ]
        },
        {
            name: 'long_name',
            type: 'varchar',
            precision: 50,
            isNullable: false,
        },
        {
            name: 'code',
            type: 'varchar',
            isNullable: true,
        },
        {
            name: 'state_id',
            type: 'uuid',
            isNullable: false,
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

export const IDX_CITY_ID = {
    name: 'IDX_CITY_ID',
    columnNames: ['id'],
};
export const IDX_CITY_STATE_ID = {
    name: 'IDX_CITY_STATE_ID',
    columnNames: ['state_id'],
};