import { Hono } from 'hono'

const app = new Hono()

// Import HTML content as strings (will be bundled at build time)
const jrpassHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JR Pass Order - FlightSearch</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
</head>
<body>
    <div id="jrpass-app"></div>
    <script src="/static/jrpass.js"></script>
</body>
</html>`

// Serve JR Pass page
app.get('/jrpass', (c) => {
  return c.html(jrpassHTML)
})

// Serve main page (will use existing large HTML)
app.get('/', (c) => {
  return c.html(`<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>航空券予約システム - FlightSearch</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
    <link href="/static/style.css" rel="stylesheet">
</head>
<body>
    <!-- Content loaded from app.js -->
    <div id="app"></div>
    <script src="/static/app.js"></script>
</body>
</html>`)
})

export default app
