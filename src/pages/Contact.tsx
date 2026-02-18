import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Loader2, Github, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Opportunité de stage/alternance',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Sidney', 
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert('Merci ! Votre message a bien été envoyé.');
      setFormData({ name: '', email: '', subject: 'Opportunité de stage/alternance', message: '' });
    } catch (error) {
      console.error('Erreur d\'envoi:', error);
      alert('Une erreur est survenue. Veuillez réessayer ou utiliser mon adresse email directe.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen pt-20 px-4 md:px-8 max-w-7xl mx-auto flex flex-col items-center">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full text-center mb-16"
      >
        <h2 className="text-sm font-bold tracking-widest text-secondary mb-4 uppercase">Contact</h2>
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
          Une opportunité ? <br/>
          <span className="text-stroke-primary">Discutons-en.</span>
        </h1>
        <p className="text-foreground/60 max-w-2xl mx-auto text-lg leading-relaxed">
          Je suis actuellement à l'écoute d'offres de stage ou d'alternance.
          N'hésitez pas à me contacter pour échanger sur mes compétences et mes motivations.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-5xl mb-20">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="glass p-8 rounded-2xl relative overflow-hidden group border border-white/5">
            <h3 className="text-2xl font-display font-bold mb-8">Coordonnées</h3>
            
            <div className="space-y-6 relative z-10">
              <a href="mailto:sidneyrichards31@gmail.com" className="flex items-center space-x-4 text-foreground/80 hover:text-primary transition-colors group/link p-4 rounded-xl bg-surface hover:bg-white/5 border border-white/5">
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center group-hover/link:bg-primary group-hover/link:text-black transition-all shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-foreground/40 uppercase tracking-widest mb-1">Email</p>
                  <p className="font-mono text-base md:text-lg break-all">sidneyrichards31@gmail.com</p>
                </div>
              </a>

              <a href="tel:0632564550" className="flex items-center space-x-4 text-foreground/80 hover:text-primary transition-colors group/link p-4 rounded-xl bg-surface hover:bg-white/5 border border-white/5">
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center group-hover/link:bg-primary group-hover/link:text-black transition-all shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-foreground/40 uppercase tracking-widest mb-1">Téléphone</p>
                  <p className="font-mono text-base md:text-lg">06 32 56 45 50</p>
                </div>
              </a>

              <div className="flex items-center space-x-4 text-foreground/80 p-4 rounded-xl bg-surface border border-white/5">
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-foreground/40 uppercase tracking-widest mb-1">Localisation</p>
                  <p className="font-mono text-base md:text-lg">Toulouse, France</p>
                </div>
              </div>

              <div className="flex gap-4">
                  <a href="https://github.com/AMAYZING31" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center space-x-4 text-foreground/80 hover:text-primary transition-colors group/link p-4 rounded-xl bg-surface hover:bg-white/5 border border-white/5">
                    <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center group-hover/link:bg-primary group-hover/link:text-black transition-all shrink-0">
                      <Github size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-foreground/40 uppercase tracking-widest mb-1">GitHub</p>
                      <p className="font-mono text-sm">AMAYZING31</p>
                    </div>
                  </a>

                  <a href="https://www.linkedin.com/in/sidney-richards-67897938b/" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center space-x-4 text-foreground/80 hover:text-primary transition-colors group/link p-4 rounded-xl bg-surface hover:bg-white/5 border border-white/5">
                    <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center group-hover/link:bg-primary group-hover/link:text-black transition-all shrink-0">
                      <Linkedin size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-foreground/40 uppercase tracking-widest mb-1">LinkedIn</p>
                      <p className="font-mono text-sm">Sidney Richards</p>
                    </div>
                  </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="glass p-8 rounded-2xl border border-white/5"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
                <label className="text-sm text-foreground/60 ml-1">Nom complet</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all placeholder:text-foreground/20 text-foreground"
                  placeholder="Votre nom"
                />
            </div>

            <div className="space-y-2">
                <label className="text-sm text-foreground/60 ml-1">Email</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all placeholder:text-foreground/20 text-foreground"
                  placeholder="votre@email.com"
                />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm text-foreground/60 ml-1">Sujet</label>
              <div className="relative">
                  <select 
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all text-foreground appearance-none cursor-pointer"
                  >
                    <option>Opportunité de stage/alternance</option>
                    <option>Proposition de projet</option>
                    <option>Information supplémentaire</option>
                    <option>Autre</option>
                  </select>
                  <MessageSquare size={16} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-foreground/50" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-foreground/60 ml-1">Message</label>
              <textarea 
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all placeholder:text-foreground/20 text-foreground resize-none"
                placeholder="Bonjour, je vous contacte concernant..."
              />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-foreground text-background font-bold py-4 rounded-xl hover:bg-primary hover:text-white transition-colors flex items-center justify-center space-x-2 group shadow-lg shadow-black/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>{isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}</span>
              {isSubmitting ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
