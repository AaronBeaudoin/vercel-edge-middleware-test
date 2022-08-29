export default async function handler(request) {
  return new Response(`Hello from alternate handler edge function via ${request.url}\n at location ${request.headers.get("Location")}`);
}
