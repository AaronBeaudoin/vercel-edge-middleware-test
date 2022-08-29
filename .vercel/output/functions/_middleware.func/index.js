function rewrite(url, path) {
  url = new URL(url);
  url.pathname = path;
  return url.toString();
}

export default function middleware(request) {
  const response = new Response();
  response.headers.set("x-custom-rewrite", rewrite(request.url, "/"));
  response.headers.set("x-middleware-rewrite", "/_alternate");
  return response;
}
