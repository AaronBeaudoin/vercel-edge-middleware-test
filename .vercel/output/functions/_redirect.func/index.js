function rewrite(url, path) {
  url = new URL(url);
  url.pathname = path;
  return url.toString();
}

export default function middleware(request) {
  return new Response(null, {
    status: 307,
    headers: {
      "location": "/_alternate",
      "x-custom": rewrite(request.url, "/random")
    }
  });
}
