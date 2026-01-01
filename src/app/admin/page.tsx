import type { Metadata } from 'next';
import { AdminLoginForm } from '@/components/admin/admin-login-form';

export const metadata: Metadata = {
  title: 'Admin Login | Ewolyn',
  description: 'Admin login portal for Ewolyn dashboard',
};

export default function AdminLoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-4">
      <AdminLoginForm />
    </main>
  );
}
