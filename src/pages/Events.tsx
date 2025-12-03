import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Briefcase,
  GraduationCap,
  Ticket,
  ExternalLink,
  Heart,
  TrendingUp,
  Building,
  Video,
  Coffee
} from 'lucide-react';

const Events = () => {
  const [activeTab, setActiveTab] = useState('events');

  const events = [
    {
      id: 1,
      title: 'Tech Career Fair 2024',
      description: 'Connect with top tech companies and explore career opportunities in software engineering, data science, and product management.',
      date: '2024-03-15',
      time: '10:00 AM - 4:00 PM',
      location: 'Main Campus - Student Center',
      type: 'career',
      isVirtual: false,
      attendees: 156,
      maxAttendees: 300,
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=200&fit=crop',
      organizer: {
        name: 'Career Services',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face'
      },
      tags: ['Technology', 'Career', 'Networking'],
      featured: true
    },
    {
      id: 2,
      title: 'Alumni Networking Mixer',
      description: 'Join fellow alumni for an evening of networking, refreshments, and meaningful connections across industries.',
      date: '2024-03-20',
      time: '6:00 PM - 9:00 PM',
      location: 'Downtown Marriott Hotel',
      type: 'networking',
      isVirtual: false,
      attendees: 89,
      maxAttendees: 150,
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=200&fit=crop',
      organizer: {
        name: 'Alumni Association',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face'
      },
      tags: ['Networking', 'Social', 'Alumni'],
      featured: false
    },
    {
      // id: 3,
      // title: 'Spring Internship Workshop',
      // description: 'Learn how to land your dream internship with resume reviews, interview prep, and insider tips from recent graduates.',
      // date: '2024-03-25',
      // time: '2:00 PM - 4:00 PM',
      // location: 'Virtual Event',
      // type: 'workshop',
      // isVirtual: true,
      // attendees: 234,
      // maxAttendees: 500,
      // image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop',
      // organizer: {
      //   name: 'Student Success Center',
      //   avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b069?w=50&h=50&fit=crop&crop=face'
      // },
      // tags: ['Workshop', 'Career', 'Internship'],
      // featured: true
      id: 2,
    title: 'Blood Donation Drive',
    description: 'Join us in giving back to the community. Your single donation can help save up to three lives. All donors receive a free t-shirt and snacks.',
    date: '2024-03-25',
    time: '10:00 AM - 3:00 PM',
    location: 'Student Union, Room 101',
    type: 'community',
    isVirtual: false,
    attendees: 150,
    maxAttendees: null,
    image: '/blood-donation.png', 
    organizer: {
      name: 'University Health Services',
      avatar: 'https://images.unsplash.com/photo-1542810634-71277d9e4a30?q=80&w=2574&auto=format&fit=crop'
    },
    tags: ['Health', 'Community Service', 'Volunteer'],
    featured: true

    },
    {
      id: 4,
      title: 'AI in Healthcare Symposium',
      description: 'Explore the cutting-edge applications of artificial intelligence in healthcare with industry leaders and researchers.',
      date: '2024-04-02',
      time: '9:00 AM - 5:00 PM',
      location: 'Medical School Auditorium',
      type: 'conference',
      isVirtual: false,
      attendees: 67,
      maxAttendees: 200,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=200&fit=crop',
      organizer: {
        name: 'Dr. Jennifer Park',
        avatar: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=50&h=50&fit=crop&crop=face'
      },
      tags: ['AI', 'Healthcare', 'Research'],
      featured: false
    },
    {
      id: 5,
      title: 'City Cleaning Drive',
      description: 'Join us to help clean up our city streets and public spaces. A great opportunity to give back to the community and meet fellow volunteers.',
      date: '2024-04-10',
      time: '9:00 AM - 1:00 PM',
      location: 'City Park - Main Entrance',
      type: 'community service',
      isVirtual: false,
      attendees: 30,
      maxAttendees: null,
      image: '/city-cleaning-drive.png',
      organizer: {
        name: 'Community Outreach Club',
        avatar: 'https://images.unsplash.com/photo-1517048676732-b2127027d75d?w=50&h=50&fit=crop&crop=face'
      },
      tags: ['Community Service', 'Volunteer', 'Environment'],
      featured: false
    }
  ];

  const jobPostings = [
    {
      id: 1,
      title: 'Software Engineering Intern',
      company: 'Spotify',
      location: 'New York, NY',
      type: 'Internship',
      postedBy: {
        name: 'Alex Thompson',
        title: 'Senior Engineer',
        graduationYear: 2019,
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face'
      },
      salary: '$25-30/hour',
      deadline: '2024-04-01',
      applicants: 23,
      description: 'Join our engineering team to work on music recommendation algorithms and user experience features.',
      requirements: ['Computer Science or related field', 'React/JavaScript experience', 'Strong problem-solving skills'],
      tags: ['React', 'JavaScript', 'Music Tech'],
      featured: true
    },
    {
      id: 2,
      title: 'Product Design Intern',
      company: 'Airbnb',
      location: 'San Francisco, CA',
      type: 'Internship',
      postedBy: {
        name: 'Jessica Wu',
        title: 'Senior Product Designer',
        graduationYear: 2020,
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face'
      },
      salary: '$30-35/hour',
      deadline: '2024-03-28',
      applicants: 18,
      description: 'Help design the future of travel experiences through user research and interface design.',
      requirements: ['Design or HCI background', 'Figma proficiency', 'Portfolio required'],
      tags: ['Design', 'UX', 'Travel'],
      featured: false
    },
    {
      id: 3,
      title: 'Data Science Analyst',
      company: 'Netflix',
      location: 'Los Angeles, CA',
      type: 'Full-time',
      postedBy: {
        name: 'Michael Chen',
        title: 'Data Science Manager',
        graduationYear: 2017,
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face'
      },
      salary: '$95,000 - $120,000',
      deadline: '2024-04-15',
      applicants: 41,
      description: 'Analyze user behavior and content performance to drive strategic decisions for our streaming platform.',
      requirements: ['Statistics or Data Science degree', 'Python/R expertise', '2+ years experience'],
      tags: ['Python', 'Statistics', 'Entertainment'],
      featured: true
    },
    {
      id: 4,
      title: 'Marketing Coordinator',
      company: 'Tesla',
      location: 'Austin, TX',
      type: 'Full-time',
      postedBy: {
        name: 'Sarah Rodriguez',
        title: 'Marketing Director',
        graduationYear: 2018,
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&h=50&fit=crop&crop=face'
      },
      salary: '$55,000 - $70,000',
      deadline: '2024-04-05',
      applicants: 32,
      description: 'Support marketing campaigns for sustainable energy products and electric vehicles.',
      requirements: ['Marketing or Communications degree', 'Social media experience', 'Creative thinking'],
      tags: ['Marketing', 'Sustainability', 'Automotive'],
      featured: false
    }
  ];

  const getEventTypeIcon = (type: string) => {
    switch (type) {
      case 'career': return <Briefcase className="w-4 h-4" />;
      case 'networking': return <Users className="w-4 h-4" />;
      case 'workshop': return <GraduationCap className="w-4 h-4" />;
      case 'conference': return <Building className="w-4 h-4" />;
      case 'competition': return <TrendingUp className="w-4 h-4" />;
      default: return <Calendar className="w-4 h-4" />;
    }
  };

  const getJobTypeColor = (type: string) => {
    switch (type) {
      case 'Internship': return 'bg-primary/10 text-primary';
      case 'Full-time': return 'bg-accent/10 text-accent';
      case 'Part-time': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Events & Opportunities</h1>
          <p className="text-muted-foreground">
            Discover networking events, career opportunities, and professional development sessions.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="events" className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Events</span>
            </TabsTrigger>
            <TabsTrigger value="jobs" className="flex items-center space-x-2">
              <Briefcase className="w-4 h-4" />
              <span>Job Opportunities</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="events" className="space-y-6">
            {/* Featured Events */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">Featured Events</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {events.filter(event => event.featured).map((event) => (
                  <Card key={event.id} className="shadow-elevated border-2 border-primary/20">
                    <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <Badge variant="secondary" className="flex items-center space-x-1">
                          {getEventTypeIcon(event.type)}
                          <span className="capitalize">{event.type}</span>
                        </Badge>
                        <Badge variant="outline" className="bg-primary/10 text-primary">
                          Featured
                        </Badge>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-foreground mb-2">{event.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{event.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{event.date}</span>
                          <Clock className="w-4 h-4 ml-2" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          {event.isVirtual ? <Video className="w-4 h-4" /> : <MapPin className="w-4 h-4" />}
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Users className="w-4 h-4" />
                          <span>{event.attendees}/{event.maxAttendees} attending</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {event.tags.map((tag, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Avatar className="w-6 h-6">
                            <AvatarImage src={event.organizer.avatar} alt={event.organizer.name} />
                            <AvatarFallback className="text-xs">{event.organizer.name[0]}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm text-muted-foreground">by {event.organizer.name}</span>
                        </div>
                        <Button size="sm">
                          <Ticket className="w-4 h-4 mr-2" />
                          Register
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* All Events */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">All Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                  <Card key={event.id} className="shadow-card hover:shadow-elevated transition-shadow">
                    <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="flex items-center space-x-1">
                          {getEventTypeIcon(event.type)}
                          <span className="capitalize text-xs">{event.type}</span>
                        </Badge>
                        {event.isVirtual && (
                          <Badge variant="outline" className="text-xs">
                            Virtual
                          </Badge>
                        )}
                      </div>
                      
                      <h3 className="font-semibold text-foreground mb-2">{event.title}</h3>
                      <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{event.description}</p>
                      
                      <div className="space-y-1 mb-3">
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          <span>{event.date} • {event.time.split(' - ')[0]}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                          {event.isVirtual ? <Video className="w-3 h-3" /> : <MapPin className="w-3 h-3" />}
                          <span className="truncate">{event.location}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          {event.attendees} attending
                        </span>
                        <Button size="sm" variant="outline">Register</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="jobs" className="space-y-6">
            {/* Featured Jobs */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">Featured Opportunities</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {jobPostings.filter(job => job.featured).map((job) => (
                  <Card key={job.id} className="shadow-elevated border-2 border-accent/20">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
                            <Badge variant="outline" className="bg-accent/10 text-accent">
                              Featured
                            </Badge>
                          </div>
                          <p className="text-primary font-medium">{job.company}</p>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{job.location}</span>
                            </div>
                            <Badge className={getJobTypeColor(job.type)}>
                              {job.type}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-foreground">{job.salary}</p>
                          <p className="text-xs text-muted-foreground">Deadline: {job.deadline}</p>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mb-4">{job.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.tags.map((tag, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src={job.postedBy.avatar} alt={job.postedBy.name} />
                            <AvatarFallback className="text-xs">{job.postedBy.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium text-foreground">{job.postedBy.name}</p>
                            <p className="text-xs text-muted-foreground">
                              Class of {job.postedBy.graduationYear} • {job.applicants} applicants
                            </p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Heart className="w-4 h-4 mr-2" />
                            Save
                          </Button>
                          <Button size="sm">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Apply
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* All Jobs */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">All Opportunities</h2>
              <div className="space-y-4">
                {jobPostings.map((job) => (
                  <Card key={job.id} className="shadow-card hover:shadow-elevated transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
                            <Badge className={getJobTypeColor(job.type)}>
                              {job.type}
                            </Badge>
                          </div>
                          <p className="text-primary font-medium mb-2">{job.company}</p>
                          <div className="flex items-center space-x-4 mb-3 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="w-4 h-4" />
                              <span>{job.applicants} applicants</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>Deadline: {job.deadline}</span>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">{job.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {job.tags.map((tag, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="ml-6 text-right">
                          <p className="text-lg font-semibold text-foreground mb-2">{job.salary}</p>
                          <div className="flex items-center space-x-2 mb-4">
                            <Avatar className="w-8 h-8">
                              <AvatarImage src={job.postedBy.avatar} alt={job.postedBy.name} />
                              <AvatarFallback className="text-xs">{job.postedBy.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-sm font-medium text-foreground">{job.postedBy.name}</p>
                              <p className="text-xs text-muted-foreground">Class of {job.postedBy.graduationYear}</p>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Heart className="w-4 h-4 mr-2" />
                              Save
                            </Button>
                            <Button size="sm">Apply</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Events;