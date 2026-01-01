import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Return mock data for dashboard
    return NextResponse.json({
      stats: {
        contacts: { total: 0, new: 0 },
        fundingApplications: { total: 0, pending: 0, approved: 0 },
        consultations: { total: 0, pending: 0 },
      },
      recentContacts: [],
      recentFundingApps: [],
      recentConsultations: [],
    });
  } catch (error) {
    console.error('Dashboard stats error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch dashboard data' },
      { status: 500 }
    );
  }
}
