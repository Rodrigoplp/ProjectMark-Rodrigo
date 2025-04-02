import express from 'express'
import topicRoutes from './routes/topicRoutes'
import { errorHandler } from './middleware/errorHandler'

const app = express()
const port = 3000

app.use(express.json())

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/topics', topicRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`)
})
