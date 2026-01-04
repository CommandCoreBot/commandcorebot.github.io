import { type FC, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Replace with your actual Discord User ID
const DISCORD_USER_ID = 'YOUR_DISCORD_USER_ID'; 

const DeveloperPage: FC = () => {
  // 1. Placeholder State for fetching Discord Data
  const [discordStatus, setDiscordStatus] = useState<'online' | 'offline' | 'idle' | 'dnd'>('offline');
  const [username] = useState('CommandCoreDev');

  // 2. Fetch data (Replace this with your Lanyard/API logic)
  useEffect(() => {
    // Example: fetch('https://api.lanyard.ws/v1/users/' + DISCORD_USER_ID)
    // .then(res => res.json())
    // .then(data => {
    //   setUsername(data.data.discord_user.username);
    //   setDiscordStatus(data.data.discord_status);
    // });
    
    // Simulate API load
    const timer = setTimeout(() => {
        setDiscordStatus('online'); // Assume they are online!
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Map status to Tailwind colors
  const statusColors = {
    online: 'bg-green-500',
    idle: 'bg-amber-500',
    dnd: 'bg-red-500',
    offline: 'bg-gray-500',
  };

  const statusText = {
    online: 'Online',
    idle: 'Idle',
    dnd: 'Do Not Disturb',
    offline: 'Offline',
  };

  return (
    <div className="max-w-4xl mx-auto py-20 px-4 text-white">
      <motion.h1 
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold mb-12 text-center text-shadow-glow-css"
      >
        Meet the Developer
      </motion.h1>

      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
        className="liquid-glass-css p-8 rounded-2xl flex items-center justify-between"
      >
        <div className="flex items-center space-x-4">
          <div className="relative">
            {/* Placeholder Discord Avatar */}
            <div className="size-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">
              C D
            </div>
            
            {/* Status Dot with Animation */}
            <span className="relative flex size-4 -bottom-0.5 -right-0.5">
              {/* Ping animation (standard Tailwind utility) */}
              <span className={`absolute inline-flex h-full w-full rounded-full ${statusColors[discordStatus]} opacity-75 animate-ping`}></span>
              {/* Solid Status Dot */}
              <span className={`relative inline-flex rounded-full size-4 ${statusColors[discordStatus]}`}></span>
            </span>
          </div>

          <div>
            <p className="text-2xl font-semibold">{username}</p>
            <p className="text-white/60 text-sm">{statusText[discordStatus]}</p>
          </div>
        </div>
        
        <a 
          href={`https://discordapp.com/users/${DISCORD_USER_ID}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-white/10 text-white/80 rounded-lg hover:bg-white/20 transition"
        >
          View Profile
        </a>
      </motion.div>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-10 text-white/70 text-center"
      >
        Building the best moderation tools for the Discord community.
      </motion.p>
    </div>
  );
};

export default DeveloperPage;