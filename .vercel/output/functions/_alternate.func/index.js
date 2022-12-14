export default async function handler(request) {
  const headers = Array.from(request.headers.entries()).map(entry => {
    return `<div>${entry[0]}: ${entry[1]}</div>`;
  });

  return new Response(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>div { margin: 0; padding: 0; font-family: monospace; }</style>
      <style>body { margin: 2em; } body > div:first-of-type { font-weight: bold; }</style>
      <style>body > div:last-of-type { margin-top: 1em; }</style>
      <title>Edge Middleware Test</title>
    </head>
    <body>
      <div style="color: hsl(000, 50%, 50%);">Handler: _alternate</div>
      <div style="color: hsl(100, 50%, 40%);">URL: ${request.url}</div>
      <div style="color: hsl(200, 50%, 50%);">${headers.join("")}</div>
    </body>
    </html>
  `, {
    status: 200,
    headers: { "Content-Type": "text/html" }
  });
}
