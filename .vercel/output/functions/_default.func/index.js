export default async function handler(request) {
  // return new Response([
  //   "Handler: _default",
  //   `URL: ${request.url}`,
  //   `Headers: ${Array.from(request.headers.keys()).join(", ")}`,
  //   `Rewrite: ${request.headers.get("x-custom-rewrite")}`
  // ].join("\n"));

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
      <title>Edge Middleware Test</title>
    </head>
    <body>
      <div style="hsl(000, 50%, 50%);">Handler: _default</div>
      <div style="hsl(100, 50%, 50%);">URL: ${request.url}</div>
      <div style="hsl(200, 50%, 50%);">${headers.join("")}</div>
    </body>
    </html>
  `, {
    status: 200,
    headers: { "Content-Type": "text/html" }
  });
}
