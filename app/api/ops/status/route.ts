export async function GET() {
  return Response.json({ status: 'ok', env: process.env.NODE_ENV });
}