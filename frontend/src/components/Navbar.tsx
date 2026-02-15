import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const role = localStorage.getItem('userRole');

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <h1 
              className="text-2xl font-bold text-blue-600 cursor-pointer tracking-tight"
              onClick={() => navigate('/dashboard')}
            >
              Book<span className="text-gray-800">Scout</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => navigate('/dashboard')} className="text-gray-600 hover:text-blue-600 font-medium">Home</button>
            
            {role === 'owner' && (
              <button className="text-gray-600 hover:text-blue-600 font-medium">My Libraries</button>
            )}

            <button 
              onClick={handleLogout}
              className="bg-red-50 text-red-600 px-4 py-2 rounded-lg font-bold hover:bg-red-600 hover:text-white transition-all border border-red-200"
            >
              Logout
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-4 space-y-1 shadow-lg">
          <button className="block w-full text-left px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50" onClick={() => {navigate('/dashboard'); setIsOpen(false);}}>Home</button>
          {role === 'owner' && (
            <button className="block w-full text-left px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50">My Libraries</button>
          )}
          <hr className="my-2" />
          <button onClick={handleLogout} className="block w-full text-left px-3 py-3 text-base font-bold text-red-600">Logout</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;