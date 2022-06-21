import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ng6lxx01j001xy7sh66jdm/master',
  cache: new InMemoryCache(),
});
