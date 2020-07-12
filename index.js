const { ApolloServer, gql } = require('apollo-server');
const typeDefs = gql `
  type Query {
    "A simple type for getting started!"
    hello: String,
    id: Int
  }
`;
const resolvers = {
  Query: {
    hello: () => 'world',
    id: () => 5520
  }
};
const server = new ApolloServer({
  typeDefs,
  resolvers
});
server.listen().then(({url}) => {
  console.log(`? server ready at ${url}`);
});
