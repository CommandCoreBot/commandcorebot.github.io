import { motion } from 'framer-motion';
import { containerVariants, itemVariants, cardVariants } from '../AnimationUtility';

interface FeatureCardProps {
    title: string;
    description: string;
}

function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      className="liquid-glass p-6 rounded-2xl text-left hover:border-white/30 transition duration-300"
    >
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-white/70">{description}</p>
    </motion.div>
  );
}

export default function LandingPage() {
  return (
    <section className="text-white-primary text-center py-20 lg:py-32 overflow-hidden px-4">
      
      {/* 1. Hero Section - Use the main container variant here */}
      <motion.div 
        className="max-w-4xl mx-auto"
        variants={containerVariants} // Apply parent variants
        initial="hidden" // Start from hidden
        animate="visible" // Animate to visible on load
      >
        {/* Child 1: Heading */}
        <motion.h1 
          variants={itemVariants} 
          className="text-6xl md:text-8xl font-black mb-6 leading-tight text-shadow-glow"
        >
          The only moderation bot you'll ever need.
        </motion.h1>
        
        {/* Child 2: Sub-text */}
        <motion.p 
          variants={itemVariants}
          className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
        >
          Powerful, intuitive, and designed for simplicity. Keep your community safe with cutting-edge tools and effortless setup.
        </motion.p>
        
        {/* Child 3: Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-center space-x-4"
        >
          <a
            href="https://discord.com/oauth2/authorize?client_id=YOUR_BOT_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-white text-black text-lg font-bold rounded-full hover:bg-white/90 transition shadow-2xl hover:scale-[1.02] transform"
          >
            Invite Bot
          </a>
          <a
            href="/docs"
            className="px-8 py-3 border border-white/20 text-white/80 text-lg font-medium rounded-full hover:bg-white/10 transition"
          >
            Read Docs
          </a>
        </motion.div>
      </motion.div>
      
      {/* 2. Mockup/Feature Visual */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 100 }}
        className="mt-20"
      >
        <div className="relative inline-block">
          {/* Subtle background glow/gradient to enhance the floating feel */}
          <div className="absolute inset-0 bg-white/5 rounded-[3rem] blur-3xl z-0"></div>
          
          {/* Mockup area with the liquid glass effect */}
          <div className="liquid-glass p-4 rounded-[3rem] inline-block relative z-10">
            <div className="w-full h-auto max-w-5xl rounded-[2.5rem] bg-black/50 flex items-center justify-center p-20 shadow-2xl border border-white/10">
              <p className="text-white/50 text-xl">
                dsf
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 3. Feature Grid Section - Use whileInView to trigger animation on scroll */}
      <motion.div
        initial="offscreen"
        whileInView="onscreen" 
        viewport={{ once: true, amount: 0.3 }} 
        variants={containerVariants} 
        className="mt-32 max-w-7xl mx-auto grid md:grid-cols-3 gap-8"
      >
        <FeatureCard title="Lightning Fast" description="Utilizes modern technology for near-instant command responses." />
        <FeatureCard title="Effortless Setup" description="Get started in seconds. No complex configurations required." />
        <FeatureCard title="Advanced Mod Log" description="A clean, secure, and detailed log of every action taken." />
      </motion.div>
      
    </section>
  );
};