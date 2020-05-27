const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client')

const resolvers = { 
    Mutation: {
        post: (root, args, context) => {
            return context.prisma.createLink({
                url: args.url,
                description: args.description,
            })
        },
    }
};

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