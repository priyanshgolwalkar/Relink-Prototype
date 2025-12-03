import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search, 
  Filter, 
  Star, 
  MapPin, 
  Users, 
  Clock,
  Briefcase,
  GraduationCap,
  MessageSquare,
  Calendar,
  Sparkles
} from 'lucide-react';

const Mentorship = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterIndustry, setFilterIndustry] = useState('all');
  const [filterLocation, setFilterLocation] = useState('all');

  const mentors = [
    {
      id: 1,
      name: 'Sarah Chen',
      title: 'Senior Software Engineer',
      company: 'Google',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b069?w=150&h=150&fit=crop&crop=face',
      location: 'San Francisco, CA',
      industry: 'Technology',
      experience: '8 years',
      rating: 4.9,
      totalMentees: 15,
      availableSlots: 2,
      skills: ['React', 'Node.js', 'System Design', 'Leadership'],
      bio: 'Passionate about helping students transition into tech careers. Specialized in full-stack development and engineering leadership.',
      aiSuggested: true,
      graduationYear: 2018,
      responseTime: '< 24 hours'
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      title: 'Product Manager',
      company: 'Microsoft',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      location: 'Seattle, WA',
      industry: 'Technology',
      experience: '6 years',
      rating: 4.8,
      totalMentees: 12,
      availableSlots: 1,
      skills: ['Product Strategy', 'UX Research', 'Data Analytics', 'Agile'],
      bio: 'Former engineer turned PM. I help students understand product management and career pivoting in tech.',
      aiSuggested: true,
      graduationYear: 2019,
      responseTime: '< 48 hours'
    },
    {
      id: 3,
      name: 'Emily Park',
      title: 'Data Scientist',
      company: 'Tesla',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      location: 'Austin, TX',
      industry: 'Automotive/AI',
      experience: '5 years',
      rating: 4.7,
      totalMentees: 8,
      availableSlots: 3,
      skills: ['Machine Learning', 'Python', 'SQL', 'Deep Learning'],
      bio: 'Specializing in ML applications in autonomous vehicles. Happy to mentor on data science career paths.',
      aiSuggested: false,
      graduationYear: 2020,
      responseTime: '< 24 hours'
    },
    {
      id: 4,
      name: 'David Kim',
      title: 'Investment Banking VP',
      company: 'Goldman Sachs',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      location: 'New York, NY',
      industry: 'Finance',
      experience: '10 years',
      rating: 4.6,
      totalMentees: 6,
      availableSlots: 1,
      skills: ['Financial Modeling', 'M&A', 'Valuation', 'Client Relations'],
      bio: 'Helping students break into investment banking and understand finance careers.',
      aiSuggested: false,
      graduationYear: 2016,
      responseTime: '< 72 hours'
    },
    {
      id: 5,
      name: 'Jennifer Martinez',
      title: 'Marketing Director',
      company: 'Nike',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      location: 'Portland, OR',
      industry: 'Consumer Goods',
      experience: '7 years',
      rating: 4.9,
      totalMentees: 10,
      availableSlots: 2,
      skills: ['Brand Strategy', 'Digital Marketing', 'Campaign Management', 'Analytics'],
      bio: 'Passionate about brand building and digital marketing. Mentoring the next generation of marketers.',
      aiSuggested: true,
      graduationYear: 2017,
      responseTime: '< 24 hours'
    },
    {
      id: 6,
      name: 'Robert Thompson',
      title: 'Startup Founder & CEO',
      company: 'TechFlow Solutions',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      location: 'Austin, TX',
      industry: 'Startups',
      experience: '12 years',
      rating: 4.8,
      totalMentees: 5,
      availableSlots: 1,
      skills: ['Entrepreneurship', 'Fundraising', 'Team Building', 'Strategy'],
      bio: 'Serial entrepreneur with 2 successful exits. Mentoring aspiring founders and early-stage entrepreneurs.',
      aiSuggested: false,
      graduationYear: 2014,
      responseTime: '< 48 hours'
    }
  ];

  const industries = ['all', 'Technology', 'Finance', 'Consumer Goods', 'Automotive/AI', 'Startups'];
  const locations = ['all', 'San Francisco, CA', 'Seattle, WA', 'Austin, TX', 'New York, NY', 'Portland, OR'];

  const filteredMentors = mentors.filter(mentor => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentor.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentor.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentor.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesIndustry = filterIndustry === 'all' || mentor.industry === filterIndustry;
    const matchesLocation = filterLocation === 'all' || mentor.location === filterLocation;
    
    return matchesSearch && matchesIndustry && matchesLocation;
  });

  const aiSuggestedMentors = filteredMentors.filter(mentor => mentor.aiSuggested);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Mentorship Network</h1>
          <p className="text-muted-foreground">
            Connect with experienced alumni for career guidance and professional development.
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="shadow-card mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by name, company, or skills..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <Select value={filterIndustry} onValueChange={setFilterIndustry}>
                  <SelectTrigger className="w-40">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Industry" />
                  </SelectTrigger>
                  <SelectContent>
                    {industries.map(industry => (
                      <SelectItem key={industry} value={industry}>
                        {industry === 'all' ? 'All Industries' : industry}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={filterLocation} onValueChange={setFilterLocation}>
                  <SelectTrigger className="w-40">
                    <MapPin className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map(location => (
                      <SelectItem key={location} value={location}>
                        {location === 'all' ? 'All Locations' : location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Suggested Mentors */}
        {aiSuggestedMentors.length > 0 && (
          <div className="mb-8">
            <Card className="shadow-card border-2 border-primary/20 bg-primary-light/30">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-primary">
                  <Sparkles className="w-5 h-5" />
                  <span>AI Recommended for You</span>
                </CardTitle>
                <CardDescription>
                  Based on your profile, interests, and career goals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {aiSuggestedMentors.slice(0, 3).map((mentor) => (
                    <div key={mentor.id} className="bg-card p-4 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-3 mb-3">
                        <Avatar className="w-12 h-12 border-2 border-primary/20">
                          <AvatarImage src={mentor.avatar} alt={mentor.name} />
                          <AvatarFallback>{mentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-semibold text-foreground">{mentor.name}</h4>
                            <Badge variant="secondary" className="text-xs bg-primary/10 text-primary">
                              AI Match
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{mentor.title}</p>
                          <p className="text-sm font-medium text-foreground">{mentor.company}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 fill-current text-yellow-500" />
                          <span>{mentor.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-3 h-3" />
                          <span>{mentor.totalMentees} mentees</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{mentor.responseTime}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {mentor.skills.slice(0, 3).map((skill, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      <Button size="sm" className="w-full">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Connect
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* All Mentors */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredMentors.map((mentor) => (
            <Card key={mentor.id} className="shadow-card hover:shadow-elevated transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={mentor.avatar} alt={mentor.name} />
                    <AvatarFallback>{mentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="text-lg font-semibold text-foreground">{mentor.name}</h3>
                      {mentor.aiSuggested && (
                        <Badge variant="secondary" className="text-xs bg-primary/10 text-primary">
                          <Sparkles className="w-3 h-3 mr-1" />
                          AI Match
                        </Badge>
                      )}
                    </div>
                    <p className="text-foreground font-medium">{mentor.title}</p>
                    <p className="text-primary font-medium">{mentor.company}</p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{mentor.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GraduationCap className="w-4 h-4" />
                        <span>Class of {mentor.graduationYear}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-1">
                      <Star className="w-4 h-4 fill-current text-yellow-500" />
                      <span className="font-semibold">{mentor.rating}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{mentor.totalMentees} mentees</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4">{mentor.bio}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {mentor.skills.map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <div className="flex items-center space-x-4 text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Briefcase className="w-4 h-4" />
                        <span>{mentor.experience} experience</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>Responds {mentor.responseTime}</span>
                      </div>
                    </div>
                    <p className="text-xs text-accent mt-1">
                      {mentor.availableSlots} available slots
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule
                    </Button>
                    <Button size="sm">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Message
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredMentors.length === 0 && (
          <Card className="shadow-card">
            <CardContent className="text-center py-12">
              <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No mentors found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search criteria or browse all available mentors.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Mentorship;