import type { Metadata } from 'next';
import { AdminDashboard } from '@/components/admin/admin-dashboard';

export const metadata: Metadata = {
  title: 'Admin Dashboard | Ewolyn',
  description: 'Admin dashboard for managing Ewolyn applications and submissions',
};

export default function AdminDashboardPage() {
  return <AdminDashboard />;
}
