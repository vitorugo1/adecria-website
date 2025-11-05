import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // receive data from the frontend
    const body = await request.json();
    const { amount, isRecurring } = body;

    // Zod validation

    // Access mercado pago key

    if (isRecurring) {
      // for monthly donations
      // calls for mercado pago subscription API
      // creates the order to generate the link for payment
    } else {
      // one time payment
      // same procedure as before, but with Checkout Pro link
    }

    // send checkout link back to the frontend
    // mocked link below
    const checkoutUrl = 'https://mercadopago.com.br/';
    return NextResponse.json({ checkoutUrl: checkoutUrl });
  } catch (err) {
    // deal with errors
    return NextResponse.json(
      { error: 'Falha ao iniciar pagamento' },
      { status: 500 },
    );
  }
}
