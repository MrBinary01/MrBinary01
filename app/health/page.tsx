export const dynamic = 'force-dynamic';
export default function HealthPage() {
  return Response.json({ status: 'ok', timestamp: new Date().toISOString() });
}