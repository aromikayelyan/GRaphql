import {GraphQLObjectType, GraphQLString, GraphQLSchema} from 'graphql'
import moviesschema from '../sqlschema/movie.js'

const MovieType = new GraphQLObjectType({
    name: 'Movie',
    fields: () =>({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
    }),
})


const Query = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
    movie: {
        type: MovieType,
        args: {id:{type: GraphQLString}},
        async resolve(parent, args){
            const a = await moviesschema.findAll({where: {id: args.id}})
            return a[0]
        }
      }
   })
})





export default new GraphQLSchema({
    query: Query
})