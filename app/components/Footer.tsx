// app/components/Footer.tsx
'use client'
import { FaLinkedin, FaInstagram, FaYoutube, FaTiktok} from 'react-icons/fa';
import { FaSquareUpwork } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-4">
          <h3 className="text-xl font-bold">Connect with Me</h3>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaLinkedin size={30} />
            </a>
            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaInstagram size={30} />
            </a>
            <a href="https://www.youtube.com/c/yourchannel" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaYoutube size={30} />
            </a>
            <a href="https://www.tiktok.com/@yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaTiktok size={30} />
            </a>
            <a href="https://www.upwork.com/freelancers/~yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaSquareUpwork size={30} />
            </a>
          </div>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
