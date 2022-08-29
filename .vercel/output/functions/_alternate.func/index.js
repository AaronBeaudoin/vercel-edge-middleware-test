export default async function handler(request) {
  return new Response([
    "Handler: _alternate",
    `URL: ${request.url}`,
    `Rewrite: ${request.headers.get("x-middleware-url")}`,
    `Headers: ${Array.from(request.headers.keys()).join(", ")}`
  ].join("\n"));
}
