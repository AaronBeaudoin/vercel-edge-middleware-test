export default async function handler(request) {
  return new Response(`Hello from alternate handler edge function via ${request.url}`);
}
