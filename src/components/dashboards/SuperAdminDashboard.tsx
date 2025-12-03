import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/context/AuthContext';
import { 
  Building, 
  Users, 
  TrendingUp, 
  Globe, 
  Shield,
  BarChart3,
  CheckCircle,
  AlertTriangle,
  DollarSign,
  Calendar
} from 'lucide-react';

const SuperAdminDashboard = () => {
  const { user } = useAuth();

  const systemMetrics = [
    { title: 'Total Institutions', value: '47', change: '+3', icon: Building, color: 'bg-blue-50 text-blue-600' },
    { title: 'Active Users', value: '12,847', change: '+234', icon: Users, color: 'bg-green-50 text-green-600' },
    { title: 'Monthly Revenue', value: '$45,200', change: '+12%', icon: DollarSign, color: 'bg-purple-50 text-purple-600' },
    { title: 'Platform Uptime', value: '99.9%', change: 'Stable', icon: Shield, color: 'bg-orange-50 text-orange-600' },
  ];

  const pendingInstitutions = [
    { name: 'Stanford University', location: 'California, USA', students: 17000, status: 'pending' },
    { name: 'Oxford University', location: 'Oxford, UK', students: 24000, status: 'under_review' },
    { name: 'University of Tokyo', location: 'Tokyo, Japan', students: 28000, status: 'pending' },
  ];

  const recentActivity = [
    { type: 'institution', text: 'Harvard University onboarded', time: '2 hours ago', status: 'success' },
    { type: 'user', text: '1,200+ new user registrations', time: '6 hours ago', status: 'info' },
    { type: 'payment', text: '$12,500 in platform fees collected', time: '1 day ago', status: 'success' },
    { type: 'issue', text: 'Server maintenance completed', time: '2 days ago', status: 'warning' },
  ];

  const topInstitutions = [
    { name: 'MIT', users: 3420, engagement: '94%', revenue: '$8,500' },
    { name: 'Harvard', users: 2890, engagement: '92%', revenue: '$7,200' },
    { name: 'Stanford', users: 2650, engagement: '89%', revenue: '$6,800' },
    { name: 'Berkeley', users: 2100, engagement: '87%', revenue: '$5,400' },
  ];

  return (
    <div className="space-y-6 p-6">
      <div className="bg-gradient-subtle rounded-lg p-6">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Super Admin Console 🚀
        </h1>
        <p className="text-muted-foreground mb-4">
          {user?.name} • ReLink Platform Administrator
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Super Admin</Badge>
          <Badge variant="secondary">Full Access</Badge>
          <Badge variant="secondary">System Manager</Badge>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {systemMetrics.map((metric) => (
          <Card key={metric.title} className="hover:shadow-medium transition-smooth">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg ${metric.color} flex items-center justify-center`}>
                  <metric.icon className="h-6 w-6" />
                </div>
                <Badge variant="secondary" className="text-green-600">
                  {metric.change}
                </Badge>
              </div>
              <h3 className="font-semibold mb-2">{metric.title}</h3>
              <p className="text-2xl font-bold text-primary">{metric.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="h-5 w-5 text-primary" />
              Institution Approvals
            </CardTitle>
            <CardDescription>Review and onboard new institutions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {pendingInstitutions.map((institution, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{institution.name}</p>
                    <p className="text-sm text-muted-foreground">{institution.location}</p>
                    <p className="text-sm text-muted-foreground">
                      {institution.students.toLocaleString()} students
                    </p>
                  </div>
                  <Badge variant={institution.status === 'pending' ? 'secondary' : 'default'}>
                    {institution.status === 'pending' ? (
                      <>
                        <AlertTriangle className="h-3 w-3 mr-1" />
                        Pending
                      </>
                    ) : (
                      <>
                        <Shield className="h-3 w-3 mr-1" />
                        Under Review
                      </>
                    )}
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="default">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Approve
                  </Button>
                  <Button size="sm" variant="outline">Review Details</Button>
                  <Button size="sm" variant="ghost">Reject</Button>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full">View All Pending</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-accent" />
              System Activity
            </CardTitle>
            <CardDescription>Recent platform events and updates</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  activity.status === 'success' ? 'bg-green-500' :
                  activity.status === 'warning' ? 'bg-yellow-500' :
                  'bg-blue-500'
                }`} />
                <div className="flex-1">
                  <p className="text-sm">{activity.text}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full">View Activity Log</Button>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-accent" />
            Top Performing Institutions
          </CardTitle>
          <CardDescription>Institutions with highest engagement and revenue</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topInstitutions.map((institution, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="text-2xl font-bold text-muted-foreground">#{index + 1}</div>
                  <div>
                    <p className="font-medium">{institution.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {institution.users.toLocaleString()} active users
                    </p>
                  </div>
                </div>
                <div className="text-right space-y-1">
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Engagement</p>
                      <p className="font-semibold text-accent">{institution.engagement}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Monthly Revenue</p>
                      <p className="font-semibold text-primary">{institution.revenue}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              Global Reach
            </CardTitle>
            <CardDescription>Platform usage across regions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">North America</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-gray-200 rounded-full">
                    <div className="w-16 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span className="text-sm text-muted-foreground">67%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Europe</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-gray-200 rounded-full">
                    <div className="w-8 h-2 bg-accent rounded-full"></div>
                  </div>
                  <span className="text-sm text-muted-foreground">23%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Asia Pacific</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-gray-200 rounded-full">
                    <div className="w-3 h-2 bg-purple-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-muted-foreground">10%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-accent" />
              System Health
            </CardTitle>
            <CardDescription>Platform performance metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">API Response Time</span>
                <Badge variant="secondary" className="text-green-600">125ms</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Database Performance</span>
                <Badge variant="secondary" className="text-green-600">Excellent</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Error Rate</span>
                <Badge variant="secondary" className="text-green-600">0.02%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Active Connections</span>
                <Badge variant="secondary" className="text-blue-600">2,847</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;