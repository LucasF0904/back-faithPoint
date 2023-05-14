import shortName from '@shared/util/ShortName';

interface ICountry {
	id: string;
	short_name?: shortName;
	long_name?: string;
	code?: string;
	created_at: Date;
	updated_at: Date;
	deleted_at: Date;
}
export default ICountry;