export default async function handler(request) {
  return new Response([
    "Handler: _default",
    `URL: ${request.url}`,
    `Headers: ${Array.from(request.headers.keys()).join(", ")}`,
    `Rewrite: ${request.headers.get("x-middleware-url")}`
  ].join("\n"));
}
