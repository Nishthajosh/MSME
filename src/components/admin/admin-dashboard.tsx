"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { 
  Users, 
  FileText, 
  CalendarDays, 
  TrendingUp, 
  LogOut, 
  RefreshCw,
  Mail,
  Phone,
  Building,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle
} from 'lucide-react';
import { EwolynLogo } from '@/components/ewolyn-logo';

interface DashboardData {
  stats: {
    contacts: { total: number; new: number };
    fundingApplications: { total: number; pending: number; approved: number };
    consultations: { total: number; pending: number };
  };
  recentContacts: Array<{
    id: string;
    name: string;
    email: string;
    phone: string;
    company: string | null;
    message: string;
    status: string;
    createdAt: string;
  }>;
  recentFundingApps: Array<{
    id: string;
    businessName: string;
    contactName: string;
    email: string;
    phone: string;
    businessType: string;
    fundingRequired: string;
    businessStage: string;
    status: string;
    createdAt: string;
  }>;
  recentConsultations: Array<{
    id: string;
    name: string;
    email: string;
    phone: string;
    service: string;
    status: string;
    createdAt: string;
  }>;
}

export function AdminDashboard() {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<DashboardData | null>(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/admin/dashboard');
      if (response.status === 401) {
        router.push('/admin');
        return;
      }
      const dashboardData = await response.json();
      setData(dashboardData);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to load dashboard data',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' });
      router.push('/admin');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getStatusBadge = (status: string) => {
    const statusConfig: Record<string, { color: string; icon: React.ReactNode }> = {
      new: { color: 'bg-blue-100 text-blue-800', icon: <AlertCircle className="h-3 w-3" /> },
      pending: { color: 'bg-yellow-100 text-yellow-800', icon: <Clock className="h-3 w-3" /> },
      reviewing: { color: 'bg-purple-100 text-purple-800', icon: <FileText className="h-3 w-3" /> },
      approved: { color: 'bg-green-100 text-green-800', icon: <CheckCircle2 className="h-3 w-3" /> },
      rejected: { color: 'bg-red-100 text-red-800', icon: <XCircle className="h-3 w-3" /> },
      read: { color: 'bg-gray-100 text-gray-800', icon: <Mail className="h-3 w-3" /> },
      responded: { color: 'bg-green-100 text-green-800', icon: <CheckCircle2 className="h-3 w-3" /> },
      confirmed: { color: 'bg-green-100 text-green-800', icon: <CheckCircle2 className="h-3 w-3" /> },
      completed: { color: 'bg-green-100 text-green-800', icon: <CheckCircle2 className="h-3 w-3" /> },
      cancelled: { color: 'bg-red-100 text-red-800', icon: <XCircle className="h-3 w-3" /> },
    };
    const config = statusConfig[status] || statusConfig.new;
    return (
      <Badge className={`${config.color} flex items-center gap-1`}>
        {config.icon}
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="h-12 w-12 animate-spin text-orange-500 mx-auto mb-4" />
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center">
        <Card className="p-8 text-center">
          <XCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-900 mb-2">Failed to Load</h2>
          <p className="text-gray-600 mb-4">Could not load dashboard data.</p>
          <Button onClick={fetchData}>Retry</Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <EwolynLogo className="h-8" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-sm text-gray-500">Manage applications and submissions</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" onClick={fetchData}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
            <Button variant="destructive" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100">Contact Submissions</p>
                  <p className="text-3xl font-bold">{data.stats.contacts.total}</p>
                  <p className="text-sm text-blue-200">{data.stats.contacts.new} new</p>
                </div>
                <Mail className="h-12 w-12 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-emerald-100">Funding Applications</p>
                  <p className="text-3xl font-bold">{data.stats.fundingApplications.total}</p>
                  <p className="text-sm text-emerald-200">{data.stats.fundingApplications.pending} pending</p>
                </div>
                <TrendingUp className="h-12 w-12 text-emerald-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100">Consultations</p>
                  <p className="text-3xl font-bold">{data.stats.consultations.total}</p>
                  <p className="text-sm text-purple-200">{data.stats.consultations.pending} pending</p>
                </div>
                <CalendarDays className="h-12 w-12 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100">Approved Funding</p>
                  <p className="text-3xl font-bold">{data.stats.fundingApplications.approved}</p>
                  <p className="text-sm text-orange-200">applications approved</p>
                </div>
                <CheckCircle2 className="h-12 w-12 text-orange-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs for different data */}
        <Tabs defaultValue="funding" className="space-y-6">
          <TabsList className="bg-white shadow-sm">
            <TabsTrigger value="funding">Funding Applications</TabsTrigger>
            <TabsTrigger value="contacts">Contact Submissions</TabsTrigger>
            <TabsTrigger value="consultations">Consultations</TabsTrigger>
          </TabsList>

          {/* Funding Applications */}
          <TabsContent value="funding">
            <Card>
              <CardHeader>
                <CardTitle>Recent Funding Applications</CardTitle>
                <CardDescription>Latest funding application submissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {data.recentFundingApps.length === 0 ? (
                    <p className="text-center text-gray-500 py-8">No funding applications yet</p>
                  ) : (
                    data.recentFundingApps.map((app) => (
                      <div key={app.id} className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-bold text-gray-900">{app.businessName}</h3>
                              {getStatusBadge(app.status)}
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                              <div>
                                <span className="text-gray-500">Contact:</span>
                                <p className="font-medium">{app.contactName}</p>
                              </div>
                              <div>
                                <span className="text-gray-500">Funding:</span>
                                <p className="font-medium text-emerald-600">{app.fundingRequired}</p>
                              </div>
                              <div>
                                <span className="text-gray-500">Stage:</span>
                                <p className="font-medium">{app.businessStage}</p>
                              </div>
                              <div>
                                <span className="text-gray-500">Type:</span>
                                <p className="font-medium">{app.businessType}</p>
                              </div>
                            </div>
                            <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
                              <span className="flex items-center gap-1">
                                <Mail className="h-4 w-4" />
                                {app.email}
                              </span>
                              <span className="flex items-center gap-1">
                                <Phone className="h-4 w-4" />
                                {app.phone}
                              </span>
                            </div>
                          </div>
                          <div className="text-right text-sm text-gray-500">
                            <Clock className="h-4 w-4 inline mr-1" />
                            {formatDate(app.createdAt)}
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Contact Submissions */}
          <TabsContent value="contacts">
            <Card>
              <CardHeader>
                <CardTitle>Recent Contact Submissions</CardTitle>
                <CardDescription>Latest contact form submissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {data.recentContacts.length === 0 ? (
                    <p className="text-center text-gray-500 py-8">No contact submissions yet</p>
                  ) : (
                    data.recentContacts.map((contact) => (
                      <div key={contact.id} className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-bold text-gray-900">{contact.name}</h3>
                              {getStatusBadge(contact.status)}
                            </div>
                            {contact.company && (
                              <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
                                <Building className="h-4 w-4" />
                                {contact.company}
                              </div>
                            )}
                            <p className="text-gray-700 text-sm mb-2">{contact.message}</p>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <span className="flex items-center gap-1">
                                <Mail className="h-4 w-4" />
                                {contact.email}
                              </span>
                              <span className="flex items-center gap-1">
                                <Phone className="h-4 w-4" />
                                {contact.phone}
                              </span>
                            </div>
                          </div>
                          <div className="text-right text-sm text-gray-500">
                            <Clock className="h-4 w-4 inline mr-1" />
                            {formatDate(contact.createdAt)}
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Consultations */}
          <TabsContent value="consultations">
            <Card>
              <CardHeader>
                <CardTitle>Recent Consultation Bookings</CardTitle>
                <CardDescription>Latest consultation requests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {data.recentConsultations.length === 0 ? (
                    <p className="text-center text-gray-500 py-8">No consultation bookings yet</p>
                  ) : (
                    data.recentConsultations.map((consultation) => (
                      <div key={consultation.id} className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-bold text-gray-900">{consultation.name}</h3>
                              {getStatusBadge(consultation.status)}
                            </div>
                            <div className="mb-2">
                              <Badge variant="outline" className="text-purple-600 border-purple-300">
                                {consultation.service}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <span className="flex items-center gap-1">
                                <Mail className="h-4 w-4" />
                                {consultation.email}
                              </span>
                              <span className="flex items-center gap-1">
                                <Phone className="h-4 w-4" />
                                {consultation.phone}
                              </span>
                            </div>
                          </div>
                          <div className="text-right text-sm text-gray-500">
                            <Clock className="h-4 w-4 inline mr-1" />
                            {formatDate(consultation.createdAt)}
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
