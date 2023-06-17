export const STATE = {
    name: 'state',
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
                'AC',
                'AL',
                'AP',
                'AM',
                'BA',
                'CE',
                'DF',
                'ES',
                'GO',
                'MA',
                'MT',
                'MS',
                'MG',
                'PA',
                'PB',
                'PR',
                'PE',
                'PI',
                'RJ',
                'RN',
                'RS',
                'RO',
                'RR',
                'SC',
                'SP',
                'SE',
                'TO'
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
            name: 'country_id',
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

export const IDX_STATE_ID = {
    name: 'IDX_STATE_ID',
    columnNames: ['id'],
};
export const IDX_STATE_COUNTRY_ID = {
    name: 'IDX_STATE_COUNTRY_ID',
    columnNames: ['country_id'],
};