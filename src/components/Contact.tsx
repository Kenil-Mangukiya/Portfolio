import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Linkedin, Github, Mail, MessageCircle, X } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      setToast({ message: 'Message sent successfully!', type: 'success' });
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setToast(null), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/kenil-mangukiya-579a40363/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/Kenil-Mangukiya', label: 'GitHub' },
    { icon: Mail, href: 'mailto:kenil.mangukiya.work@gmail.com', label: 'Email' },
    { icon: MessageCircle, href: 'https://wa.me/919904665554', label: 'WhatsApp' },
  ];

  return (
    <section id="contact" className="pt-24 pb-24 bg-white dark:bg-neutral-50">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-900 mb-12"
        >
          Contact Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form (Left) - Slides from left */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-700 mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none bg-white dark:bg-white text-neutral-900 dark:text-neutral-900 ${
                    errors.name ? 'border-red-500' : 'border-neutral-300 dark:border-neutral-400'
                  }`}
                  placeholder="Your Name"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none bg-white dark:bg-white text-neutral-900 dark:text-neutral-900 ${
                    errors.email ? 'border-red-500' : 'border-neutral-300 dark:border-neutral-400'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none bg-white dark:bg-white text-neutral-900 dark:text-neutral-900 resize-none ${
                    errors.message ? 'border-red-500' : 'border-neutral-300 dark:border-neutral-400'
                  }`}
                  placeholder="Your message..."
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors"
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Let's Connect Section (Right) - Slides from right */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col justify-center mb-10"
          >
            <div>
              <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-900 mb-4">
                Let's Connect
              </h3>
              <p className="text-neutral-600 dark:text-neutral-600 mb-8">
                Feel free to reach out through any of these platforms. I'm always open to discussing new projects, creative ideas, or opportunities.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 border border-neutral-300 dark:border-neutral-400 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-100 transition-colors bg-white dark:bg-white"
                  >
                    <Icon className="w-6 h-6 text-primary-600 dark:text-primary-600" />
                    <span className="font-medium text-neutral-700 dark:text-neutral-700">
                      {social.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Toast Notification */}
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={`fixed bottom-6 right-6 flex items-center gap-3 px-6 py-4 rounded-lg shadow-lg ${
              toast.type === 'success'
                ? 'bg-green-500 text-white'
                : 'bg-red-500 text-white'
            }`}
          >
            <span>{toast.message}</span>
            <button onClick={() => setToast(null)} className="ml-2">
              <X size={18} />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Contact;