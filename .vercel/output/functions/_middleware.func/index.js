export default function middleware(request) {
  const response = new Response();
  response.headers.set("x-spaghetti", "monster");
  response.headers.set("x-middleware-rewrite", "/");
  return response;
}
