import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, preferredDate, message } = body;

    // Validation
    if (!name || !email || !phone || !service) {
      return NextResponse.json(
        { error: 'Name, email, phone, and service are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Log the booking (you can integrate email service here)
    console.log('Consultation booking:', { name, email, phone, service, preferredDate, message });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Your consultation has been booked successfully! We will contact you shortly.'
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Consultation booking error:', error);
    return NextResponse.json(
      { error: 'Failed to book consultation. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Consultation API is working' });
}
