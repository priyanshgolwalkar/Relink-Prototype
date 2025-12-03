import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Heart, DollarSign, Users, TrendingUp, Calendar, Award } from 'lucide-react';

const Donations = () => {
  const [donationAmount, setDonationAmount] = useState('');

  const recentDonations = [
    { id: 1, donor: 'Sarah Chen', amount: 500, date: '2024-03-10', purpose: 'Scholarship Fund' },
    { id: 2, donor: 'Anonymous', amount: 1000, date: '2024-03-09', purpose: 'General Fund' },
    { id: 3, donor: 'Michael Rodriguez', amount: 250, date: '2024-03-08', purpose: 'Student Programs' },
    { id: 4, donor: 'Emily Park', amount: 750, date: '2024-03-07', purpose: 'Research Grant' },
  ];

  const donationStats = {
    totalRaised: 125400,
    totalDonors: 847,
    thisMonth: 18500,
    averageDonation: 148
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center space-x-3">
            <Heart className="w-8 h-8 text-accent" />
            <span>Support Our Community</span>
          </h1>
          <p className="text-muted-foreground">
            Your contributions help fund scholarships, programs, and opportunities for current and future students.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-card">
            <CardContent className="flex items-center p-6">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-accent-light rounded-lg">
                  <DollarSign className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">${donationStats.totalRaised.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">Total Raised</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="flex items-center p-6">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary-light rounded-lg">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{donationStats.totalDonors}</p>
                  <p className="text-sm text-muted-foreground">Total Donors</p>
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
                  <p className="text-2xl font-bold text-foreground">${donationStats.thisMonth.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">This Month</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="flex items-center p-6">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary-light rounded-lg">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">${donationStats.averageDonation}</p>
                  <p className="text-sm text-muted-foreground">Avg Donation</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Donation Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Make a Donation</CardTitle>
                <CardDescription>
                  Support student scholarships and university programs
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  {[50, 100, 250].map(amount => (
                    <Button 
                      key={amount}
                      variant="outline" 
                      onClick={() => setDonationAmount(amount.toString())}
                      className="h-16 text-lg"
                    >
                      ${amount}
                    </Button>
                  ))}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Custom Amount</label>
                  <Input
                    type="number"
                    placeholder="Enter amount"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                  />
                </div>
                <Button className="w-full" size="lg">
                  <Heart className="w-5 h-5 mr-2" />
                  Donate ${donationAmount || '0'}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Recent Donations */}
          <div>
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Recent Donations</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentDonations.map((donation) => (
                  <div key={donation.id} className="p-3 border border-border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <p className="font-semibold text-foreground">{donation.donor}</p>
                      <Badge variant="secondary">${donation.amount}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{donation.purpose}</p>
                    <p className="text-xs text-muted-foreground">{donation.date}</p>
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

export default Donations;