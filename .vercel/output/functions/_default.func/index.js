export default async function handler(request) {
  return new Response([
    "Handler: _default",
    `URL: ${request.url}`,
    `Location: ${request.headers.get("Location")}`
  ].join("\n"));
}
