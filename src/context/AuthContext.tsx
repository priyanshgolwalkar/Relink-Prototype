import React, { createContext, useContext, useState, ReactNode } from 'react';

export type UserRole = 'student' | 'alumni' | 'admin' | 'super_admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  company?: string;
  title?: string;
  graduationYear?: number;
  major?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const demoUsers: User[] = [
  { id: '1', name: 'Raju Gupta', email: 'student@relink.edu', role: 'student', graduationYear: 2025, major: 'Computer Science', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' },
  { id: '2', name: 'kailash Rathore', email: 'alumni@relink.edu', role: 'alumni', company: 'Google', title: 'Senior Software Engineer', graduationYear: 2018, major: 'Computer Science', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b069?w=100&h=100&fit=crop&crop=face' },
  { id: '3', name: 'Sara Mishra', email: 'admin@relink.edu', role: 'admin', company: 'University', title: 'Alumni Relations Director', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face' },
  { id: '4', name: 'Jennifer Martinez', email: 'superadmin@relink.edu', role: 'super_admin', company: 'University System', title: 'Platform Administrator', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' }
];

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string): Promise<boolean> => {
    const foundUser = demoUsers.find(u => u.email === email);
    if (foundUser && password === 'demo123') {
      setUser(foundUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};