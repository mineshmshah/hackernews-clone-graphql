const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Link = require('./resolvers/Link')

const resolvers = {
    Query,
    Mutation,
    User,
    Link
  }

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: request => {
        return {
          ...request,
          prisma,
        }
      },});

server.start(() => console.log('Server is running on http://localhost:4000'))


  // updateLink:(parent, {id, url, description}) => {
        //     let newLink;
        //     links = links.map( link => {
        //     if(link.id === id){
        //         newLink = {
        //             id,
        //             url,
        //             description
        //         }
        //         return newLink
        //     } else return link
        // }
        // )
        // return newLink;
        // },
        // deleteLink: (parents, {id}) => {
        //     let deletedLink;
        //     links = links.filter(link => {
        //         if(link.id === id){
        //             deletedLink = link;
        //             return false
        //         } else return true
        //     });
        //     return deletedLink;
        // }