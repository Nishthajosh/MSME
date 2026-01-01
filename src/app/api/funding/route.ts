import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      businessName,
      contactName,
      email,
      phone,
      businessType,
      fundingRequired,
      businessStage,
      annualRevenue,
      employees,
      industry,
      state,
      description,
    } = body;

    // Validation
    if (!businessName || !contactName || !email || !phone || !businessType || !fundingRequired || !businessStage) {
      return NextResponse.json(
        { error: 'Required fields are missing' },
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

    // Log the application (you can integrate email service here)
    console.log('Funding application:', { businessName, contactName, email, phone, businessType, fundingRequired, businessStage });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Your funding application has been submitted successfully! Our team will contact you within 24-48 hours.'
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Funding application error:', error);
    return NextResponse.json(
      { error: 'Failed to submit funding application. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Funding API is working' });
}
