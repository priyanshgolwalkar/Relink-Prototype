import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/context/AuthContext';
import { 
  Plus, 
  Users, 
  Heart, 
  MessageSquare, 
  TrendingUp,
  Calendar,
  Briefcase,
  Award,
  DollarSign
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AlumniDashboard = () => {
  const { user } = useAuth();

  const mentorshipStats = {
    activeMentees: 3,
    totalHours: 47,
    avgRating: 4.8,
    completedSessions: 12
  };

  const recentMentees = [
    {
      id: 1,
      name: 'Rahul Sharma',
      major: 'Computer Science',
      year: '2025',
      avatar: 'https://images.unsplash.com/photo-1603415526960-f7e0328a41b8?w=100&h=100&fit=crop&crop=face',
      lastSession: '2 days ago',
      status: 'active'
    },
    {
      id: 2,
      name: 'Priya Nair',
      major: 'Data Science',
      year: '2026',
      avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop&crop=face',
      lastSession: '1 week ago',
      status: 'scheduled'
    },
    {
      id: 3,
      name: 'Amit Verma',
      major: 'Electronics',
      year: '2024',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
      lastSession: '5 days ago',
      status: 'active'
    }
  ];

  const contributionStats = {
    totalDonated: 2500,
    jobsPosted: 5,
    eventsHosted: 2,
    studentsHelped: 15
  };

  const upcomingEvents = [
    {
      id: 1,
      title: 'Startup Meetup Bengaluru',
      date: '2024-03-18',
      role: 'Panelist',
      attendees: 120
    },
    {
      id: 2,
      title: 'IIT Delhi Alumni Mentorship',
      date: '2024-03-22',
      role: 'Mentor',
      attendees: 8
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, {user?.name}! 🌟
          </h1>
          <p className="text-muted-foreground">
            Thank you for giving back to the community. Here's your impact summary.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-card">
            <CardContent className="flex items-center p-6">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary-light rounded-lg">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{mentorshipStats.activeMentees}</p>
                  <p className="text-sm text-muted-foreground">Active Mentees</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="flex items-center p-6">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-accent-light rounded-lg">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">₹{contributionStats.totalDonated.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">Total Donated</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="flex items-center p-6">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary-light rounded-lg">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{contributionStats.jobsPosted}</p>
                  <p className="text-sm text-muted-foreground">Jobs Posted</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="flex items-center p-6">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-accent-light rounded-lg">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{contributionStats.studentsHelped}</p>
                  <p className="text-sm text-muted-foreground">Students Helped</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Mentorship Activity */}
          <div className="lg:col-span-2">
            <Card className="shadow-card mb-6">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center space-x-2">
                      <Users className="w-5 h-5" />
                      <span>Mentorship Activity</span>
                    </CardTitle>
                    <CardDescription>
                      Your current mentees and recent sessions
                    </CardDescription>
                  </div>
                  <Link to="/mentorship">
                    <Button size="sm">
                      <Plus className="w-4 h-4 mr-2" />
                      Take New Mentee
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                {/* Mentorship Stats Summary */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 p-4 bg-muted rounded-lg">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-foreground">{mentorshipStats.totalHours}</p>
                    <p className="text-xs text-muted-foreground">Total Hours</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-foreground">{mentorshipStats.completedSessions}</p>
                    <p className="text-xs text-muted-foreground">Sessions Done</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-foreground">{mentorshipStats.avgRating}</p>
                    <p className="text-xs text-muted-foreground">Avg Rating</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-accent">⭐</p>
                    <p className="text-xs text-muted-foreground">Top Mentor</p>
                  </div>
                </div>

                {/* Current Mentees */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Current Mentees</h4>
                  {recentMentees.map((mentee) => (
                    <div key={mentee.id} className="flex items-center space-x-4 p-4 border border-border rounded-lg">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={mentee.avatar} alt={mentee.name} />
                        <AvatarFallback>{mentee.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h5 className="font-semibold text-foreground">{mentee.name}</h5>
                        <p className="text-sm text-muted-foreground">
                          {mentee.major} • Class of {mentee.year}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Last session: {mentee.lastSession}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={mentee.status === 'active' ? 'default' : 'secondary'}>
                          {mentee.status}
                        </Badge>
                        <Button size="sm" variant="outline">
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Message
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>
                  Ways to contribute to the community
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button variant="outline" className="h-20 flex-col space-y-2">
                    <Briefcase className="w-6 h-6" />
                    <span className="text-sm">Post Job</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col space-y-2">
                    <Calendar className="w-6 h-6" />
                    <span className="text-sm">Host Event</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col space-y-2">
                    <Heart className="w-6 h-6" />
                    <span className="text-sm">Donate</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col space-y-2">
                    <Users className="w-6 h-6" />
                    <span className="text-sm">Update Profile</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Engagements */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Upcoming</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="p-3 border border-border rounded-lg">
                    <h4 className="font-semibold text-sm text-foreground mb-1">
                      {event.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {event.date} • {event.role}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {event.attendees} expected attendees
                    </p>
                  </div>
                ))}
                <Link to="/events">
                  <Button variant="outline" size="sm" className="w-full">
                    View All Events
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Contribution Summary */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5" />
                  <span>Your Impact</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-accent-light rounded-lg">
                  <div className="text-2xl font-bold text-accent mb-1">🏆</div>
                  <p className="text-sm font-semibold text-foreground">Top Contributor</p>
                  <p className="text-xs text-muted-foreground">This quarter</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Events Hosted</span>
                    <span className="font-semibold">{contributionStats.eventsHosted}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Jobs Posted</span>
                    <span className="font-semibold">{contributionStats.jobsPosted}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Students Helped</span>
                    <span className="font-semibold">{contributionStats.studentsHelped}</span>
                  </div>
                </div>

                <Link to="/donations">
                  <Button variant="outline" size="sm" className="w-full">
                    <DollarSign className="w-4 h-4 mr-2" />
                    Make Donation
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniDashboard;
