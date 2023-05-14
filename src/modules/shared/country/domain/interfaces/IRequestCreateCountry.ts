import shortName from '@shared/util/ShortName';

interface IRequestCreateCountry {
	short_name?: shortName;
	long_name?: string;
	code?: string;
}

export default IRequestCreateCountry;