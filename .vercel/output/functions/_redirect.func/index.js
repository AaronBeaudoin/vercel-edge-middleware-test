function rewrite(url, path) {
  url = new URL(url);
  url.pathname = path;
  return url.toString();
}

export default function middleware(request) {
  console.log(`Redirect to: ${"/_alternate" + new URL(request.url).search}`);

  return new Response(null, {
    status: 307,
    headers: {
      "location": "/_alternate" + new URL(request.url).search,
      "x-custom": rewrite(request.url, "/random")
    }
  });
}
