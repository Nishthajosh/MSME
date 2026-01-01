import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    // Validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Name, email, phone, and message are required' },
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

    // Create contact submission
    const submission = await prisma.contactSubmission.create({
      data: {
        name,
        email,
        phone,
        company: company || null,
        message,
      },
    });

    return NextResponse.json(
      { success: true, message: 'Your message has been sent successfully!', id: submission.id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact form. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const submissions = await prisma.contactSubmission.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(submissions);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch submissions' },
      { status: 500 }
    );
  }
}
