import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import Navigation from "@/components/layout/Navigation";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Mentorship from "./pages/Mentorship";
import Events from "./pages/Events";
import AlumniMap from "./pages/AlumniMap";
import Donations from "./pages/Donations";
import News from "./pages/News";
import NotFound from "./pages/NotFound";

import AdminDashboard from "./components/dashboards/AdminDashboard";
import AlumniDashboard from "./components/dashboards/AlumniDashboard";
import StudentDashboard from "./components/dashboards/StudentDashboard";
import SuperAdminDashboard from "./components/dashboards/SuperAdminDashboard";

const queryClient = new QueryClient();

const AppContent = () => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Login />;
  }

  let dashboardComponent;
  switch (user?.role) {
    case 'super_admin':
      dashboardComponent = <SuperAdminDashboard />;
      break;
    case 'admin':
      dashboardComponent = <AdminDashboard />;
      break;
    case 'alumni':
      dashboardComponent = <AlumniDashboard />;
      break;
    case 'student':
      dashboardComponent = <StudentDashboard />;
      break;
    default:
      dashboardComponent = <Dashboard />;
      break;
  }

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={dashboardComponent} />
        <Route path="/dashboard" element={dashboardComponent} />
        <Route path="/mentorship" element={<Mentorship />} />
        <Route path="/events" element={<Events />} />
        <Route path="/map" element={<AlumniMap />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/news" element={<News />} />
        <Route path="/profile" element={<Dashboard />} />
        <Route path="/admin" element={dashboardComponent} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;