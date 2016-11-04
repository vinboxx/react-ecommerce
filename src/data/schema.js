import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType,
} from 'graphql';

import intl from './queries/intl';

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      intl,
    },
  }),
});

export default schema;
