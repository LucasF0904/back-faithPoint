import shortName from '@shared/util/ShortName';

interface IUpdateCountry {
  id?: string;
  short_name?: shortName;
  long_name?: string;
  code?: string;
  updated_at?: Date;
}

export default IUpdateCountry;
