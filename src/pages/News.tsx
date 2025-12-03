import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bell, Calendar, User, Eye } from 'lucide-react';

const News = () => {
  const announcements = [
    {
      id: 1,
      title: 'New Alumni Mentorship Program Launch',
      content: 'We are excited to announce the launch of our enhanced AI-powered mentorship matching system...',
      author: 'Alumni Relations Team',
      date: '2024-03-12',
      type: 'Program',
      views: 234,
      featured: true
    },
    {
      id: 2,
      title: 'Spring Career Fair - Registration Open',
      content: 'Registration is now open for our Spring 2024 Career Fair featuring 50+ companies...',
      author: 'Career Services',
      date: '2024-03-10',
      type: 'Event',
      views: 156,
      featured: true
    },
    {
      id: 3,
      title: 'Alumni Achievement: Sarah Chen Promoted to Engineering Director',
      content: 'Congratulations to Sarah Chen (Class of 2018) on her promotion to Engineering Director at Google...',
      author: 'Communications Team',
      date: '2024-03-08',
      type: 'Achievement',
      views: 89,
      featured: false
    },
    {
      id: 4,
      title: 'New Scholarship Fund Established',
      content: 'Thanks to generous alumni donations, we have established a new scholarship fund for underrepresented students...',
      author: 'Development Office',
      date: '2024-03-05',
      type: 'Scholarship',
      views: 178,
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center space-x-3">
            <Bell className="w-8 h-8 text-primary" />
            <span>News & Announcements</span>
          </h1>
          <p className="text-muted-foreground">
            Stay updated with the latest news, achievements, and opportunities from our alumni community.
          </p>
        </div>

        <div className="space-y-6">
          {announcements.map((announcement) => (
            <Card key={announcement.id} className={`shadow-card ${announcement.featured ? 'border-2 border-primary/20' : ''}`}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Badge variant={announcement.featured ? 'default' : 'secondary'}>
                      {announcement.type}
                    </Badge>
                    {announcement.featured && (
                      <Badge variant="outline" className="bg-primary/10 text-primary">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{announcement.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{announcement.date}</span>
                    </div>
                  </div>
                </div>
                
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  {announcement.title}
                </h2>
                
                <p className="text-muted-foreground mb-4">
                  {announcement.content}
                </p>
                
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <User className="w-4 h-4" />
                  <span>By {announcement.author}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;