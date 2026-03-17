const fs = require('fs');

// Read jrpass-docs.html
const docsHtml = fs.readFileSync('public/jrpass-docs.html', 'utf-8');

// Read index.tsx
let indexContent = fs.readFileSync('src/index.tsx', 'utf-8');

// Check if route already exists
if (indexContent.includes("app.get('/jrpass-docs'")) {
  console.log('Route already exists, skipping...');
  process.exit(0);
}

// Find the export line
const exportLine = 'export default app';
const exportIndex = indexContent.lastIndexOf(exportLine);

if (exportIndex === -1) {
  console.error('Export line not found');
  process.exit(1);
}

// Escape backticks and dollar signs in HTML
const escapedHtml = docsHtml
  .replace(/\\/g, '\\\\')
  .replace(/`/g, '\\`')
  .replace(/\$/g, '\\$');

// Create the new route
const newRoute = `
// JR Pass Documentation Route
app.get('/jrpass-docs', (c) => {
  return c.html(\`${escapedHtml}\`)
})

`;

// Insert before export
const before = indexContent.substring(0, exportIndex);
const after = indexContent.substring(exportIndex);
const newContent = before + newRoute + after;

// Write back
fs.writeFileSync('src/index.tsx', newContent);
console.log('Successfully added /jrpass-docs route to index.tsx');
console.log('New file size:', newContent.length, 'bytes');
