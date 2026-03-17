import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import indexHtml from '../dist/index.html?raw'
import jrpassHtml from '../dist/jrpass.html?raw'
import docsHtml from '../dist/jrpass-docs.html?raw'

const app = new Hono()

// Serve static files
app.use('/static/*', serveStatic({ root: './' }))

// API endpoint for flight search
app.post('/api/search', async (c) => {
  const body = await c.req.json()
  return c.json({
    success: true,
    message: 'Search received',
    data: body
  })
})

// Routes that serve HTML
app.get('/', (c) => {
  return c.html(indexHtml)
})

app.get('/jrpass', (c) => {
  return c.html(jrpassHtml)
})

app.get('/jrpass-docs', (c) => {
  return c.html(docsHtml)
})

export default app
