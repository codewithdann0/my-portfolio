"use client";
import { useState } from "react";
import {
  FaGithub,
  FaInstagram,
  FaTiktok,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("All fields are required.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setSuccess(data.message);
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          Contact Me
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          I'd love to hear from you! Please fill out the form below.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Your Name"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Your Email"
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md h-32 dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Your Message"
          />
          {/* Error message */}
          {error && <p className="text-red-500">{error}</p>}
          {/* Success message */}
          {success && <p className="text-green-500">{success}</p>}
          <button
            type="submit"
            className={`w-full p-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-md transition-all duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div> 
      <div className="flex gap-10 justify-center mt-10">
          {[
            { name: "GitHub", url: "https://github.com", icon: <FaGithub /> },
            { name: "Instagram", url: "https://instagram.com", icon: <FaInstagram /> },
            { name: "YouTube", url: "https://youtube.com", icon: <FaYoutube /> },
            { name: "TikTok", url: "https://tiktok.com", icon: <FaTiktok /> },
            { name: "LinkedIn", url: "https://linkedin.com", icon: <FaLinkedin /> },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.url}
              target="_blank"
              className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition-transform transform hover:scale-110"
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>
      
    </section>
  );
}
