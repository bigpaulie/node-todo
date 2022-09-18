import express, {Request, Response} from 'express';
import cors from 'cors';
import router from './routes/router';

const app = express()
const port = process.env.PORT || 8080

/**
 * Setup CORS middleware
 */
app.use(cors())
app.use(express.json())

/**
 * Group routes under the api/v1 prefix
 */
app.use("/api/v1", router)

/**
 * Start the application and listen for connections
 */
app.listen(port, () => {
    console.log(`Express server running on port ${port}`)
})