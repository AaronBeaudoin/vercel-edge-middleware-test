export default async function handler(request) {
  return new Response(`Hello from default handler edge function via ${request.url}`);
}
