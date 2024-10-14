'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); // Track submission state
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('All fields are required.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      // Simulate API call
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setSuccess(data.message);
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <motion.input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 border rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            aria-label="Your Name"
          />
          <motion.input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            aria-label="Your Email"
          />
          <motion.textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full p-3 border rounded h-32 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            aria-label="Your Message"
          />
          {/* Error message */}
          {error && <p className="text-red-500">{error}</p>}
          {/* Success message */}
          {success && <p className="text-green-500">{success}</p>}
          <motion.button
            type="submit"
            className={`w-full p-3 bg-blue-600 text-white rounded ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
            disabled={loading}
            whileHover={{ scale: 1.1 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            animate={{ y: [0, -5, 0], transition: { duration: 0.5, repeat: Infinity, repeatType: "reverse" }}} // Sweeping animation
          >
            {loading ? 'Sending...' : 'Send Message'}
          </motion.button>
        </form>
      </div>
    </section>
  );
}
