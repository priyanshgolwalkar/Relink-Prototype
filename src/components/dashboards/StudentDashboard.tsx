import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/context/AuthContext';
import { 
  Users, 
  Calendar, 
  Briefcase, 
  ArrowRight, 
  Star, 
  MapPin,
  Clock,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
  const { user } = useAuth();

  const suggestedMentors = [
    {
      id: 1,
      name: 'Rohit Sharma',
      title: 'Senior Software Engineer',
      company: 'Infosys',
      avatar: 'https://images.unsplash.com/photo-1603415526960-f7e0328a01c2?w=100&h=100&fit=crop&crop=face',
      tags: ['React', 'Node.js', 'System Design'],
      rating: 4.9,
      aiSuggested: true
    },
    {
      id: 2,
      name: 'Priya Mehta',
      title: 'Product Manager',
      company: 'Flipkart',
      avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop&crop=face',
      tags: ['Product Strategy', 'UX', 'Analytics'],
      rating: 4.8,
      aiSuggested: true
    },
    {
      id: 3,
      name: 'Ankit Verma',
      title: 'Data Scientist',
      company: 'Tata Consultancy Services',
      avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop&crop=face',
      tags: ['Machine Learning', 'Python', 'AI'],
      rating: 4.7,
      aiSuggested: false
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'IIT Bombay Tech Fest',
      date: '2024-03-15',
      time: '10:00 AM',
      location: 'IIT Bombay Campus',
      attendees: 450,
      type: 'career'
    },
    {
      id: 2,
      title: 'NASSCOM Networking Meet',
      date: '2024-03-20',
      time: '6:00 PM',
      location: 'Bengaluru, Karnataka',
      attendees: 300,
      type: 'networking'
    },
    {
      id: 3,
      title: 'AI & Data Science Workshop',
      date: '2024-03-25',
      time: '2:00 PM',
      location: 'Virtual',
      attendees: 600,
      type: 'workshop'
    }
  ];

  const jobPostings = [
    {
      id: 1,
      title: 'Software Engineering Intern',
      company: 'Zomato',
      location: 'Gurgaon, Haryana',
      type: 'Internship',
      postedBy: 'Neha Singh (Class of 2019)',
      salary: '₹25,000 – ₹30,000/month',
      deadline: '2024-04-01'
    },
    {
      id: 2,
      title: 'Product Design Intern',
      company: 'Ola Cabs',
      location: 'Bengaluru, Karnataka',
      type: 'Internship',
      postedBy: 'Aditya Iyer (Class of 2020)',
      salary: '₹30,000 – ₹35,000/month',
      deadline: '2024-03-28'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, {user?.name}! 👋
          </h1>
          <p className="text-muted-foreground">
            Here's what's happening in your network today.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-card">
            <CardContent className="flex items-center p-6">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary-light rounded-lg">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">47</p>
                  <p className="text-sm text-muted-foreground">Mentors Available</p>
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
                  <p className="text-2xl font-bold text-foreground">12</p>
                  <p className="text-sm text-muted-foreground">Upcoming Events</p>
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
                  <p className="text-2xl font-bold text-foreground">23</p>
                  <p className="text-sm text-muted-foreground">Job Openings</p>
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
                  <p className="text-2xl font-bold text-foreground">87%</p>
                  <p className="text-sm text-muted-foreground">Profile Complete</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Suggested Mentors */}
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center space-x-2">
                      <Users className="w-5 h-5" />
                      <span>Suggested Mentors</span>
                    </CardTitle>
                    <CardDescription>
                      AI-powered matches based on your interests and goals
                    </CardDescription>
                  </div>
                  <Link to="/mentorship">
                    <Button variant="outline" size="sm">
                      View All
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {suggestedMentors.map((mentor) => (
                  <div key={mentor.id} className="flex items-center space-x-4 p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={mentor.avatar} alt={mentor.name} />
                      <AvatarFallback>{mentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold text-foreground">{mentor.name}</h4>
                        {mentor.aiSuggested && (
                          <Badge variant="secondary" className="text-xs">
                            AI Suggested
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {mentor.title} at {mentor.company}
                      </p>
                      <div className="flex items-center space-x-2 mt-2">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 fill-current text-yellow-500" />
                          <span className="text-sm">{mentor.rating}</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {mentor.tags.slice(0, 3).map((tag, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <Button size="sm">Connect</Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Events */}
          <div>
            <Card className="shadow-card mb-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Upcoming Events</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="p-3 border border-border rounded-lg">
                    <h4 className="font-semibold text-sm text-foreground mb-1">
                      {event.title}
                    </h4>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        <span>{event.date} at {event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        <span>{event.location}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {event.attendees} attending
                      </p>
                    </div>
                  </div>
                ))}
                <Link to="/events">
                  <Button variant="outline" size="sm" className="w-full">
                    View All Events
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Recent Job Postings */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Briefcase className="w-5 h-5" />
                  <span>New Opportunities</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {jobPostings.map((job) => (
                  <div key={job.id} className="p-3 border border-border rounded-lg">
                    <h4 className="font-semibold text-sm text-foreground mb-1">
                      {job.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {job.company} • {job.location}
                    </p>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">
                        {job.type}
                      </Badge>
                      <Button size="sm" variant="outline">Apply</Button>
                    </div>
                  </div>
                ))}
                <Link to="/jobs">
                  <Button variant="outline" size="sm" className="w-full">
                    View All Jobs
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

export default StudentDashboard;
