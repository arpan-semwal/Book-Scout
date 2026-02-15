import Navbar from '../components/Navbar';
// Hum do alag components banayenge
import OwnerDashboard from '../components/OwnerDashboard'; 
import StudentDashboard from '../components/StudentDashboard';

const Dashboard = () => {
  // Local storage se role uthao
  const role = localStorage.getItem("userRole");

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto p-6">
        {/* Yahan ho rahi hai role-based baat! */}
        {role === 'owner' ? (
          <OwnerDashboard /> 
        ) : (
          <StudentDashboard />
        )}
      </div>
    </div>
  );
};

export default Dashboard;