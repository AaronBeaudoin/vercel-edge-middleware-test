export default async function middleware(request) {
  const response = new Response();
  response.headers.set("x-spaghetti", "monster");
  return response
}
