import shortName from '@shared/util/ShortName';

interface IRequestUpdateCountry {
  id?: string;
  short_name?: shortName;
  long_name?: string;
  code?: string;
}

export default IRequestUpdateCountry;
