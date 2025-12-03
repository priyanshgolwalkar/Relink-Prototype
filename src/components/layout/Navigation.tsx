import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Users, 
  Calendar,
  MapPin,
  Heart,
  Bell,
  User,
  Settings,
  LogOut,
  Briefcase
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  if (!user) return null;

  const navigationItems = [
    { name: 'Home', href: '/dashboard', icon: Home, roles: ['student', 'alumni', 'admin', 'super_admin'] },
    { name: 'Mentorship', href: '/mentorship', icon: Users, roles: ['student', 'alumni'] },
    { name: 'Events & Jobs', href: '/events', icon: Calendar, roles: ['student', 'alumni', 'admin', 'super_admin'] },
    { name: 'Alumni Map', href: '/map', icon: MapPin, roles: ['student', 'alumni', 'admin', 'super_admin'] },
    { name: 'Donations', href: '/donations', icon: Heart, roles: ['student', 'alumni', 'admin', 'super_admin'] },
    { name: 'News', href: '/news', icon: Bell, roles: ['student', 'alumni', 'admin', 'super_admin'] },
    { name: 'Profile', href: '/profile', icon: User, roles: ['student', 'alumni', 'admin', 'super_admin'] },
    { name: 'Admin Panel', href: '/admin', icon: Settings, roles: ['admin', 'super_admin'] },
  ];

  const visibleItems = navigationItems.filter(item => 
    item.roles.includes(user.role)
  );

  return (
    <nav className="bg-card border-b border-border shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            {/* <Link to="/dashboard" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">ReLink</span>
            </Link> */}

            <Link to="/dashboard" className="flex items-center space-x-2">
              <img 
                src="/favicon.png" 
                alt="ReLink Logo" 
                className="w-8 h-8 rounded-lg"
              />
              <span className="text-xl font-bold text-foreground">ReLink</span>
            </Link>

            {/* Navigation Items */}
            <div className="hidden md:ml-8 md:flex md:space-x-1">
              {visibleItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    )}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex md:items-center md:space-x-3">
              <img
                src={user.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face'}
                alt={user.name}
                className="w-8 h-8 rounded-full"
              />
              <div className="text-sm">
                <p className="font-medium text-foreground">{user.name}</p>
                <p className="text-muted-foreground capitalize">{user.role.replace('_', ' ')}</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={logout}
              className="flex items-center space-x-2"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden pb-3">
          <div className="flex flex-wrap gap-2">
            {visibleItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "flex items-center px-3 py-2 rounded-md text-xs font-medium transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  <Icon className="w-3 h-3 mr-1" />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;