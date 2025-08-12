import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const sig = req.headers.get('stripe-signature');
  if (!sig) {
    return new Response('No signature', { status: 400 });
  }
  // Ici, vous ajouterez la vérification avec Stripe
  return new Response(JSON.stringify({ received: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}