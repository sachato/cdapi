/*************************/
/*** Import used modules */
const express = require('express')
const cors = require('cors')


/************************/
/*** API Initialization */
const app = express()

app.use(cors({
  origin: "*",
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: "Origin, X-Requested-With, x-access-token, role, Content, Accept, Content-Type, Authorization"
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/****************************/
/*** Import routers modules */
const marcel_router = require('./routers/marcel')
const roger_router = require('./routers/roger')

/****************************/
/*** Main router parameters */

app.get('/', (req, res) => res.send(`I'm online. All is OK !`))

app.use('/marcel', marcel_router)
app.use('/roger', roger_router)

app.get('*', (req, res) => res.status(501).send('What the hell are you doing !?!'))


/********************************/
/*** Start serveur avec test DB */

app.listen(process.env.SERVER_PORT, () => {
  console.log(`This server is running on port ${process.env.SERVER_PORT}. Have fun !`)
})




