


const { ApolloServer, gql } = require('apollo-server');
const typeDefs = gql `
  type book {
    id: Int,
    name: String
  }

  type Query {
    "A simple type for getting started!"
    hello: String,
    id: Int
    books: [book]
    book(name: String!): book
    bookById(id: Int!): book
  }
`;
const resolvers = {
  Query: {
    hello: () => 'world',
    id: () => 5520,
    books: () => db.books,
    book:  (root, { name }, context) => {
      return db.books.find(e=>e.name === name);
    },
    bookById: (root, { id }, context) => {
      return db.books.find(e=>e.id === id);
    },
  }
};
const server = new ApolloServer({
  typeDefs,
  resolvers
});
server.listen().then(({url}) => {
  console.log(`? server ready at ${url}`);
});
// ==== data ====
const db = {};
db.books = [
  {
    id: 1,
    name: 'T1'
  },
  {
    id: 2,
    name: 'T2'
  },
  {
    id: 3,
    name: 'T3'
  }
];
