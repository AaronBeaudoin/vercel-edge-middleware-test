export default async function handler(request) {
  return new Response([
    "Handler: _alternate",
    `URL: ${request.url}`,
    `Location: ${request.headers.get("Location")}`
  ].join("\n"));
}
