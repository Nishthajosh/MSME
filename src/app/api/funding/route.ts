import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

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

    // Create funding application
    const application = await prisma.fundingApplication.create({
      data: {
        businessName,
        contactName,
        email,
        phone,
        businessType,
        fundingRequired,
        businessStage,
        annualRevenue: annualRevenue || null,
        employees: employees || null,
        industry: industry || null,
        state: state || null,
        description: description || null,
      },
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Your funding application has been submitted successfully! Our team will contact you within 24-48 hours.',
        id: application.id 
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
  try {
    const applications = await prisma.fundingApplication.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(applications);
  } catch (error) {
    console.error('Error fetching funding applications:', error);
    return NextResponse.json(
      { error: 'Failed to fetch applications' },
      { status: 500 }
    );
  }
}
