export default async function handler(request) {
  return new Response([
    "Handler: _alternate",
    `URL: ${request.url}`,
    `Headers: ${Array.from(request.headers.keys()).join(", ")}`,
    `Rewrite: ${request.headers.get("x-custom-rewrite")}`
  ].join("\n"));
}
