import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useAuth } from '@/context/AuthContext';
import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  Calendar,
  AlertCircle,
  CheckCircle,
  Clock,
  BarChart3,
  Plus,
  Eye
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data for the alumni report
const mockAlumniData = [
  { id: 1, name: 'Sara Mishra', major: 'Computer Science', graduationYear: 2020, email: 'saramishra@example.com' },
  { id: 2, name: 'kailash Rathore', major: 'Mechanical Engineering', graduationYear: 2018, email: 'kailashRathore@example.com' },
  { id: 3, name: 'Manish Thakur', major: 'Product Management', graduationYear: 2017, email: 'manishthakur@example.com' },
  { id: 4, name: 'Raju Gupta', major: 'Business Administration', graduationYear: 2021, email: 'RajuGupta@example.com' },
];

const AdminDashboard = () => {
  const { user } = useAuth();

  const platformStats = {
    totalUsers: 2847,
    activeUsers: 1923,
    newUsersThisMonth: 156,
    alumniMembers: 1245,
    students: 1456,
    totalDonations: 125400,
    donationsThisMonth: 18500,
    eventsThisMonth: 23,
    jobPostings: 67
  };

  const recentActivity = [
    {
      id: 1,
      type: 'user_registration',
      message: 'New student registration: Alex Kim',
      timestamp: '2 hours ago',
      status: 'success'
    },
    {
      id: 2,
      type: 'donation',
      message: 'New donation: $500 from Sarah Chen',
      timestamp: '4 hours ago',
      status: 'success'
    },
    {
      id: 3,
      type: 'event',
      message: 'Tech Career Fair registration opened',
      timestamp: '1 day ago',
      status: 'info'
    },
    {
      id: 4,
      type: 'job_posting',
      message: 'New job posted: Software Engineer at Google',
      timestamp: '2 days ago',
      status: 'success'
    },
    {
      id: 5,
      type: 'alert',
      message: 'Server maintenance scheduled for this weekend',
      timestamp: '3 days ago',
      status: 'warning'
    }
  ];

  const pendingApprovals = [
    {
      id: 1,
      type: 'Alumni Verification',
      item: 'Michael Rodriguez - Product Manager at Microsoft',
      submittedBy: 'Michael Rodriguez',
      date: '2024-03-10'
    },
    {
      id: 2,
      type: 'Event Proposal',
      item: 'AI in Healthcare Symposium',
      submittedBy: 'Dr. Jennifer Park',
      date: '2024-03-12'
    },
    {
      id: 3,
      type: 'Job Posting',
      item: 'Senior Data Scientist - Netflix',
      submittedBy: 'Alumni Relations Office',
      date: '2024-03-13'
    }
  ];

  // Function to handle the mock report download
  const handleDownloadReport = () => {
    // 1. Convert the JSON data to a CSV string
    const headers = Object.keys(mockAlumniData[0]).join(',');
    const rows = mockAlumniData.map(alumnus => 
      Object.values(alumnus).join(',')
    ).join('\n');
    const csvContent = `${headers}\n${rows}`;

    // 2. Create a Blob from the CSV string
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    
    // 3. Create a temporary URL for the Blob
    const url = URL.createObjectURL(blob);
    
    // 4. Create a temporary link element to trigger the download
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'alumni-report.csv');
    link.style.visibility = 'hidden';

    // 5. Append the link to the body, click it, and then remove it
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // 6. Release the temporary URL
    URL.revokeObjectURL(url);
  };


  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="w-4 h-4 text-accent" />;
      case 'warning':
        return <AlertCircle className="w-4 h-4 text-yellow-500" />;
      case 'info':
        return <Clock className="w-4 h-4 text-primary" />;
      default:
        return <Clock className="w-4 h-4 text-muted-foreground" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground">
            Monitor platform performance and manage community activities.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-card">
            <CardContent className="flex items-center p-6">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary-light rounded-lg">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{platformStats.totalUsers.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">Total Users</p>
                  <p className="text-xs text-accent">+{platformStats.newUsersThisMonth} this month</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="flex items-center p-6">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-accent-light rounded-lg">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{platformStats.activeUsers.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">Active Users</p>
                  <p className="text-xs text-accent">
                    {Math.round((platformStats.activeUsers / platformStats.totalUsers) * 100)}% engagement
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="flex items-center p-6">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary-light rounded-lg">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">${platformStats.totalDonations.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">Total Donations</p>
                  <p className="text-xs text-accent">+${platformStats.donationsThisMonth.toLocaleString()} this month</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="flex items-center p-6">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-accent-light rounded-lg">
                  <Calendar className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{platformStats.eventsThisMonth}</p>
                  <p className="text-sm text-muted-foreground">Events This Month</p>
                  <p className="text-xs text-accent">{platformStats.jobPostings} job postings</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Analytics Overview */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center space-x-2">
                      <BarChart3 className="w-5 h-5" />
                      <span>Platform Analytics</span>
                    </CardTitle>
                    <CardDescription>
                      Key performance indicators and growth metrics
                    </CardDescription>
                  </div>
                  <Link to="/admin">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-2" />
                      Full Analytics
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* User Growth */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">User Growth</span>
                    <span className="text-sm text-muted-foreground">
                      {platformStats.activeUsers}/{platformStats.totalUsers} active
                    </span>
                  </div>
                  <Progress value={(platformStats.activeUsers / platformStats.totalUsers) * 100} className="h-2" />
                </div>

                {/* Alumni vs Students */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-primary-light rounded-lg">
                    <p className="text-sm text-muted-foreground">Alumni</p>
                    <p className="text-2xl font-bold text-primary">{platformStats.alumniMembers}</p>
                    <p className="text-xs text-muted-foreground">
                      {Math.round((platformStats.alumniMembers / platformStats.totalUsers) * 100)}% of total
                    </p>
                  </div>
                  <div className="p-4 bg-accent-light rounded-lg">
                    <p className="text-sm text-muted-foreground">Students</p>
                    <p className="text-2xl font-bold text-accent">{platformStats.students}</p>
                    <p className="text-xs text-muted-foreground">
                      {Math.round((platformStats.students / platformStats.totalUsers) * 100)}% of total
                    </p>
                  </div>
                </div>

                {/* Monthly Performance */}
                <div className="grid grid-cols-3 gap-4 p-4 border border-border rounded-lg">
                  <div className="text-center">
                    <p className="text-lg font-bold text-foreground">{platformStats.newUsersThisMonth}</p>
                    <p className="text-xs text-muted-foreground">New Users</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-foreground">{platformStats.eventsThisMonth}</p>
                    <p className="text-xs text-muted-foreground">Events</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-foreground">${(platformStats.donationsThisMonth / 1000).toFixed(1)}k</p>
                    <p className="text-xs text-muted-foreground">Donations</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>
                  Latest platform activities and system events
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3 p-3 border border-border rounded-lg">
                      {getStatusIcon(activity.status)}
                      <div className="flex-1">
                        <p className="text-sm text-foreground">{activity.message}</p>
                        <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pending Approvals */}
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <AlertCircle className="w-5 h-5" />
                    <span>Pending Approvals</span>
                  </CardTitle>
                  <Badge variant="secondary">{pendingApprovals.length}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {pendingApprovals.map((approval) => (
                  <div key={approval.id} className="p-3 border border-border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {approval.type}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{approval.date}</span>
                    </div>
                    <h4 className="font-semibold text-sm text-foreground mb-1">
                      {approval.item}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-3">
                      Submitted by {approval.submittedBy}
                    </p>
                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1">Approve</Button>
                      <Button size="sm" variant="outline" className="flex-1">Review</Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" size="sm" className="h-16 flex-col space-y-1">
                    <Plus className="w-5 h-5" />
                    <span className="text-xs">Add User</span>
                  </Button>
                  <Button variant="outline" size="sm" className="h-16 flex-col space-y-1">
                    <Calendar className="w-5 h-5" />
                    <span className="text-xs">New Event</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="h-16 flex-col space-y-1"
                    onClick={handleDownloadReport} // Added onClick handler
                  >
                    <BarChart3 className="w-5 h-5" />
                    <span className="text-xs">Reports</span>
                  </Button>
                  <Button variant="outline" size="sm" className="h-16 flex-col space-y-1">
                    <Users className="w-5 h-5" />
                    <span className="text-xs">Manage</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* System Status */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>System Status</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Platform Health</span>
                  <Badge variant="default" className="bg-accent">Healthy</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">API Response</span>
                  <Badge variant="default" className="bg-accent">98.5%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Uptime</span>
                  <Badge variant="default" className="bg-accent">99.9%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Last Backup</span>
                  <span className="text-sm text-muted-foreground">2 hours ago</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;