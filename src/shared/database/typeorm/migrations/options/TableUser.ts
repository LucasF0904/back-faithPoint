export const USER = {
    name: 'user',
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
            name: 'email',
            type: 'varchar',
            length: '100',
            isNullable: false,
        },
        {
            name: 'password_hash',
            type: 'varchar',
            length: '100',
            isNullable: false,
        },
        {
            name: "image_url",
            type: "varchar",
            length: "255",
            isNullable: true,
        },
        {
            name: 'is_admin',
            type: 'boolean',
            default: false,
            isNullable: false,
        },
        {
            name: 'address_id',
            type: 'uuid',
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

export const IDX_USER_ID = {
    name: 'IDX_USER_ID',
    columnNames: ['id'],
};
export const IDX_USER_ADDRESS_ID = {
    name: 'IDX_USER_ADDRESS_ID',
    columnNames: ['address_id'],
};