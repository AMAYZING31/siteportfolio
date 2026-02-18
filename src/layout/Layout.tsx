import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300 selection:bg-primary selection:text-white overflow-x-hidden">
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24" 
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};

export default Layout;
