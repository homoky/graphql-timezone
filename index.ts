import { createStringScalar } from 'graphql-scalar';
import { timezones } from './timezones';

type Props = {
  name?: string;
  description?: string;
};

export default ({ name, description }: Props = {}) =>
  createStringScalar({
    // @ts-ignore
    name: name || "Timezone",
    description:
      description ||
      'Accepts any valid timezone. List of available [timezones is here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (column "TZ database name").',
    nonEmpty: true,
    trim: true,
    // @ts-ignore
    validate: (value) => timezones.includes(value),
  });

export { timezones, Timezone } from "./timezones";
