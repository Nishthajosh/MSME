import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    if (!prisma) {
      return NextResponse.json(
        { error: 'Database not configured' },
        { status: 503 }
      );
    }

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

    // Create consultation booking
    const booking = await prisma.consultationBooking.create({
      data: {
        name,
        email,
        phone,
        service,
        preferredDate: preferredDate || null,
        message: message || null,
      },
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Your consultation has been booked successfully! We will contact you shortly.',
        id: booking.id 
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
  try {
    if (!prisma) {
      return NextResponse.json(
        { error: 'Database not configured' },
        { status: 503 }
      );
    }

    const bookings = await prisma.consultationBooking.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(bookings);
  } catch (error) {
    console.error('Error fetching consultations:', error);
    return NextResponse.json(
      { error: 'Failed to fetch bookings' },
      { status: 500 }
    );
  }
}
