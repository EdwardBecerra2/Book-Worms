const typeDefs = `
type User {
    id: ID!
    name: String!
    email: String!
    bookcount: Int
    savedBooks: [Book]
}
type Book {
    bookId: String!
    authors: [String]
    description: String!
    title: String!
    image: String
    link: String
}
type Auth {
    token: ID!
    user: User
}
type BookInput {
    authors: [String]
    description: String!
    title: String!
    bookId: String!
    image: String
    link: String
}
type Query {
    me: User
}
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookData: BookInput!): User
    removeBook(bookId: ID!): User
}
`;
module.exports = typeDefs;