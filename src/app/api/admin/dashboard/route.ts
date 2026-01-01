import { NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { getSession } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Check if database is available
    if (!prisma) {
      return NextResponse.json(
        { error: 'Database not configured' },
        { status: 503 }
      );
    }

    const session = await getSession();
    
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Get statistics
    const [
      totalContacts,
      newContacts,
      totalFundingApps,
      pendingFundingApps,
      approvedFundingApps,
      totalConsultations,
      pendingConsultations,
    ] = await Promise.all([
      prisma.contactSubmission.count(),
      prisma.contactSubmission.count({ where: { status: 'new' } }),
      prisma.fundingApplication.count(),
      prisma.fundingApplication.count({ where: { status: 'pending' } }),
      prisma.fundingApplication.count({ where: { status: 'approved' } }),
      prisma.consultationBooking.count(),
      prisma.consultationBooking.count({ where: { status: 'pending' } }),
    ]);

    // Recent submissions
    const recentContacts = await prisma.contactSubmission.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
    });

    const recentFundingApps = await prisma.fundingApplication.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
    });

    const recentConsultations = await prisma.consultationBooking.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json({
      stats: {
        contacts: { total: totalContacts, new: newContacts },
        fundingApplications: { total: totalFundingApps, pending: pendingFundingApps, approved: approvedFundingApps },
        consultations: { total: totalConsultations, pending: pendingConsultations },
      },
      recentContacts,
      recentFundingApps,
      recentConsultations,
    });
  } catch (error) {
    console.error('Dashboard stats error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch dashboard data' },
      { status: 500 }
    );
  }
}
