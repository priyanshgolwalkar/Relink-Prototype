import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  MapPin, 
  Search, 
  Filter, 
  Users, 
  Briefcase,
  GraduationCap,
  Globe,
  Building2,
  MessageSquare,
  Coffee,
  Calendar
} from 'lucide-react';

const AlumniMap = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRegion, setFilterRegion] = useState('all');
  const [filterIndustry, setFilterIndustry] = useState('all');

  // Mock alumni data with geographic distribution
  const alumniData = [
    {
      id: 1,
      name: 'Sara Mishra',
      title: 'Senior Software Engineer',
      company: 'Google',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b069?w=100&h=100&fit=crop&crop=face',
      location: 'San Francisco, CA',
      region: 'North America',
      country: 'United States',
      coordinates: { lat: 37.7749, lng: -122.4194 },
      industry: 'Technology',
      graduationYear: 2018,
      experience: '8 years',
      connections: 347,
      openToConnect: true,
      lastActive: '2 days ago'
    },
    {
      id: 2,
      name: 'Manish Thakur',
      title: 'Product Manager',
      company: 'Microsoft',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      location: 'Seattle, WA',
      region: 'North America',
      country: 'United States',
      coordinates: { lat: 47.6062, lng: -122.3321 },
      industry: 'Technology',
      graduationYear: 2019,
      experience: '6 years',
      connections: 289,
      openToConnect: true,
      lastActive: '5 hours ago'
    },
    {
      id: 3,
      name: 'kailash Rathore',
      title: 'Data Scientist',
      company: 'Tesla',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      location: 'Austin, TX',
      region: 'North America',
      country: 'United States',
      coordinates: { lat: 30.2672, lng: -97.7431 },
      industry: 'Automotive',
      graduationYear: 2020,
      experience: '5 years',
      connections: 156,
      openToConnect: true,
      lastActive: '1 day ago'
    },
    {
      id: 4,
      name: 'Raju Gupta',
      title: 'Investment Banker',
      company: 'Goldman Sachs',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      location: 'London, UK',
      region: 'Europe',
      country: 'United Kingdom',
      coordinates: { lat: 51.5074, lng: -0.1278 },
      industry: 'Finance',
      graduationYear: 2016,
      experience: '10 years',
      connections: 512,
      openToConnect: false,
      lastActive: '1 week ago'
    },
    {
      id: 5,
      name: 'Priya Patel',
      title: 'Software Architect',
      company: 'Infosys',
      avatar: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=100&h=100&fit=crop&crop=face',
      location: 'Bangalore, India',
      region: 'Asia',
      country: 'India',
      coordinates: { lat: 12.9716, lng: 77.5946 },
      industry: 'Technology',
      graduationYear: 2017,
      experience: '9 years',
      connections: 234,
      openToConnect: true,
      lastActive: '3 hours ago'
    },
    {
      id: 6,
      name: 'Cherry Shukla',
      title: 'Marketing Director',
      company: 'Unilever',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      location: 'São Paulo, Brazil',
      region: 'South America',
      country: 'Brazil',
      coordinates: { lat: -23.5505, lng: -46.6333 },
      industry: 'Consumer Goods',
      graduationYear: 2015,
      experience: '11 years',
      connections: 401,
      openToConnect: true,
      lastActive: '12 hours ago'
    },
    {
      id: 7,
      name: 'Rahul Sharma',
      title: 'Research Scientist',
      company: 'University of Toronto',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
      location: 'Toronto, Canada',
      region: 'North America',
      country: 'Canada',
      coordinates: { lat: 43.6532, lng: -79.3832 },
      industry: 'Education',
      graduationYear: 2021,
      experience: '4 years',
      connections: 187,
      openToConnect: true,
      lastActive: '6 hours ago'
    },
    {
      id: 8,
      name: 'Rakehsh Prajapat',
      title: 'Renewable Energy Engineer',
      company: 'Siemens',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      location: 'Dubai, UAE',
      region: 'Middle East',
      country: 'United Arab Emirates',
      coordinates: { lat: 25.2048, lng: 55.2708 },
      industry: 'Energy',
      graduationYear: 2018,
      experience: '7 years',
      connections: 298,
      openToConnect: true,
      lastActive: '8 hours ago'
    }
  ];

  const regions = ['all', 'North America', 'Europe', 'Asia', 'South America', 'Middle East', 'Africa', 'Oceania'];
  const industries = ['all', 'Technology', 'Finance', 'Healthcare', 'Education', 'Energy', 'Consumer Goods', 'Automotive'];

  // Regional statistics
  const regionalStats = {
    'North America': { count: 4, percentage: 50 },
    'Europe': { count: 1, percentage: 12.5 },
    'Asia': { count: 1, percentage: 12.5 },
    'South America': { count: 1, percentage: 12.5 },
    'Middle East': { count: 1, percentage: 12.5 },
    'Africa': { count: 0, percentage: 0 },
    'Oceania': { count: 0, percentage: 0 }
  };

  const filteredAlumni = alumniData.filter(alumni => {
    const matchesSearch = alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alumni.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alumni.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alumni.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesRegion = filterRegion === 'all' || alumni.region === filterRegion;
    const matchesIndustry = filterIndustry === 'all' || alumni.industry === filterIndustry;
    
    return matchesSearch && matchesRegion && matchesIndustry;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center space-x-3">
            <Globe className="w-8 h-8 text-primary" />
            <span>Alumni World Map</span>
          </h1>
          <p className="text-muted-foreground">
            Discover where our alumni are making an impact around the world. Connect with professionals in your field or location.
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
                    placeholder="Search by name, company, or location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <Select value={filterRegion} onValueChange={setFilterRegion}>
                  <SelectTrigger className="w-40">
                    <MapPin className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Region" />
                  </SelectTrigger>
                  <SelectContent>
                    {regions.map(region => (
                      <SelectItem key={region} value={region}>
                        {region === 'all' ? 'All Regions' : region}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={filterIndustry} onValueChange={setFilterIndustry}>
                  <SelectTrigger className="w-40">
                    <Building2 className="w-4 h-4 mr-2" />
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
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Map Visualization (Simulated) */}
          <div className="lg:col-span-3">
            <Card className="shadow-card mb-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="w-5 h-5" />
                  <span>Global Alumni Distribution</span>
                </CardTitle>
                <CardDescription>
                  Interactive visualization of alumni locations worldwide
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Simulated World Map */}
                <div className="relative bg-gradient-to-br from-primary-light to-accent-light rounded-lg h-96 flex items-center justify-center overflow-hidden">
                  {/* Map Background Pattern */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPgo8L3N2Zz4K')] opacity-20"></div>
                  
                  {/* Simulated location pins */}
                  <div className="relative w-full h-full">
                    {/* North America */}
                    <div className="absolute top-1/4 left-1/4 group cursor-pointer">
                      <div className="w-6 h-6 bg-primary rounded-full border-2 border-white shadow-lg flex items-center justify-center hover:scale-125 transition-transform">
                        <span className="text-xs font-bold text-white">4</span>
                      </div>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-card border border-border rounded px-2 py-1 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        <span className="text-xs font-medium">North America (4)</span>
                      </div>
                    </div>
                    
                    {/* Europe */}
                    <div className="absolute top-1/3 left-1/2 group cursor-pointer">
                      <div className="w-5 h-5 bg-accent rounded-full border-2 border-white shadow-lg flex items-center justify-center hover:scale-125 transition-transform">
                        <span className="text-xs font-bold text-white">1</span>
                      </div>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-card border border-border rounded px-2 py-1 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        <span className="text-xs font-medium">Europe (1)</span>
                      </div>
                    </div>
                    
                    {/* Asia */}
                    <div className="absolute top-2/5 right-1/4 group cursor-pointer">
                      <div className="w-5 h-5 bg-primary rounded-full border-2 border-white shadow-lg flex items-center justify-center hover:scale-125 transition-transform">
                        <span className="text-xs font-bold text-white">1</span>
                      </div>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-card border border-border rounded px-2 py-1 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        <span className="text-xs font-medium">Asia (1)</span>
                      </div>
                    </div>
                    
                    {/* Middle East */}
                    <div className="absolute top-2/5 left-3/5 group cursor-pointer">
                      <div className="w-4 h-4 bg-accent rounded-full border-2 border-white shadow-lg flex items-center justify-center hover:scale-125 transition-transform">
                        <span className="text-xs font-bold text-white">1</span>
                      </div>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-card border border-border rounded px-2 py-1 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        <span className="text-xs font-medium">Middle East (1)</span>
                      </div>
                    </div>
                    
                    {/* South America */}
                    <div className="absolute bottom-1/4 left-1/3 group cursor-pointer">
                      <div className="w-4 h-4 bg-primary rounded-full border-2 border-white shadow-lg flex items-center justify-center hover:scale-125 transition-transform">
                        <span className="text-xs font-bold text-white">1</span>
                      </div>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-card border border-border rounded px-2 py-1 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        <span className="text-xs font-medium">South America (1)</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Center overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Globe className="w-16 h-16 text-primary/20 mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground/60">
                        Interactive map visualization
                      </p>
                      <p className="text-xs text-muted-foreground/40">
                        Hover over pins to see regional data
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map Legend */}
                <div className="mt-4 flex items-center justify-center space-x-6 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Alumni Location</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">High Concentration</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Alumni Directory */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5" />
                    <span>Alumni Directory</span>
                  </div>
                  <Badge variant="secondary">{filteredAlumni.length} alumni</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredAlumni.map((alumni) => (
                    <div key={alumni.id} className="p-4 border border-border rounded-lg hover:bg-muted/30 transition-colors">
                      <div className="flex items-start space-x-3">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={alumni.avatar} alt={alumni.name} />
                          <AvatarFallback>{alumni.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="font-semibold text-foreground">{alumni.name}</h4>
                            {alumni.openToConnect && (
                              <Badge variant="outline" className="text-xs bg-accent-light text-accent">
                                Open to Connect
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{alumni.title}</p>
                          <p className="text-sm font-medium text-primary">{alumni.company}</p>
                          <div className="flex items-center space-x-4 mt-2 text-xs text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-3 h-3" />
                              <span>{alumni.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <GraduationCap className="w-3 h-3" />
                              <span>{alumni.graduationYear}</span>
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            {alumni.connections} connections • Last active {alumni.lastActive}
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 flex space-x-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Message
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          <Coffee className="w-4 h-4 mr-2" />
                          Meet
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Regional Statistics Sidebar */}
          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>Regional Stats</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(regionalStats).map(([region, stats]) => (
                  <div key={region} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{region}</span>
                      <span className="text-sm text-muted-foreground">{stats.count}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${stats.percentage}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-muted-foreground">{stats.percentage}% of alumni</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Send Broadcast Message
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Plan Regional Meetup
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Join Alumni Groups
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Briefcase className="w-4 h-4 mr-2" />
                  Post Job Opportunity
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Recent Connections</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {alumniData.slice(0, 3).map((alumni) => (
                  <div key={alumni.id} className="flex items-center space-x-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={alumni.avatar} alt={alumni.name} />
                      <AvatarFallback className="text-xs">{alumni.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{alumni.name}</p>
                      <p className="text-xs text-muted-foreground">{alumni.location}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniMap;