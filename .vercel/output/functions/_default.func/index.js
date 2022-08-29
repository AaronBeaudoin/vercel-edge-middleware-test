export default async function handler(request) {
  return Response(`Hello from default handler edge function via ${request.url}`);
}
