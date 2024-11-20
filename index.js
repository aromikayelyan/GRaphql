import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import sequelize from './utils/connect.js'
import movieschema from './sqlschema/movie.js'
import Query from './schemas/schema.js'
import add from './routes/add.js'

const app = express()
const PORT = 2573

app.use(express.json())
app.use('/graphql', graphqlHTTP({schema: Query, graphiql: true}))
app.use('/add', add)


movieschema.sync()


app.listen(PORT, async (err)=>{
    await sequelize.sync()
    err ? console.log(err) : console.log(`server run on port ${PORT}`)
})