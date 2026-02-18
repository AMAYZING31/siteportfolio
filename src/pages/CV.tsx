import React from 'react';
import { motion } from 'framer-motion';
import { Download, Printer } from 'lucide-react';

// Link to the real PDF file
const CV_PDF_PATH = "/cv.pdf"; 

const CV = () => {
  return (
    <div className="min-h-screen pt-24 px-4 pb-20 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-secondary tracking-widest uppercase font-bold text-sm mb-4">Curriculum Vitae</h2>
          <h1 className="font-display font-bold text-5xl md:text-7xl mb-6">
            Mon Parcours <span className="text-stroke-primary">Professionnel</span>
          </h1>
          
          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            <a 
              href={CV_PDF_PATH} 
              download="CV_Sidney_Richards.pdf" 
              className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-primary transition-colors flex items-center gap-2 group"
            >
              <Download size={18} />
              <span>Télécharger PDF</span>
            </a>
            <button 
              onClick={() => window.print()} 
              className="px-8 py-3 glass border border-white/10 text-white rounded-full hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <Printer size={18} />
              <span>Imprimer</span>
            </button>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.2 }}
           className="w-full bg-white rounded-sm shadow-2xl overflow-hidden aspect-[1/1.414] mx-auto max-w-[800px] relative group h-[1100px]"
        >
          <iframe 
            src={`${CV_PDF_PATH}#view=FitH`} 
            title="CV Sidney Richards"
            className="w-full h-full border-none"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default CV;
