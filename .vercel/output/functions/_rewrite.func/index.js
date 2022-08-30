function rewrite(url, path) {
  url = new URL(url);
  url.pathname = path;
  return url.toString();
}

export default function middleware(request) {
  const response = new Response();
  response.headers.set("x-middleware-rewrite", "/_alternate" + new URL(request.url).search);
  response.headers.set("x-custom", rewrite(request.url, "/random"));
  return response;
}
