import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Docs', path: '/docs' },
  { name: 'Developer', path: '/developer' },
];

const Header = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50">
      {/* Apply the liquid-glass utility to the background */}
      <nav className="liquid-glass mx-4 mt-4 p-3 rounded-2xl flex justify-between items-center max-w-7xl lg:mx-auto">
        
        {/* Logo/Bot Name */}
        <Link to="/" className="text-white-primary text-xl font-extrabold tracking-tight hover:opacity-80 transition">
          CommandCore
        </Link>
        
        {/* Navigation Links */}
        <div className="flex space-x-6 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`
                text-white-primary/80 hover:text-white-primary transition 
                font-medium 
                ${location.pathname === item.path ? 'text-white-primary font-semibold' : ''}
              `}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Action Button (Dashboard) */}
        <Link 
          to="/dashboard"
          className="px-4 py-2 bg-white-primary text-black-primary text-sm font-semibold rounded-full hover:bg-white-primary/90 transition shadow-lg hover:shadow-xl"
        >
          Dashboard
        </Link>
      </nav>
    </header>
  );
};

export default Header;