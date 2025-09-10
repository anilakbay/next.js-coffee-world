import React from "react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Menu = [
  { id: 1, name: "Home", link: "/#hero" },
  { id: 2, name: "Services", link: "/#services" },
  { id: 3, name: "About", link: "/#about" },
  { id: 4, name: "Contact", link: "/#contact" },
];

const FooterLinks = [
  { id: 1, name: "Privacy Policy", link: "/privacy" },
  { id: 2, name: "Terms of Service", link: "/terms" },
  { id: 3, name: "Coffee Guide", link: "/guide" },
  { id: 4, name: "Brewing Tips", link: "/tips" },
];

function Footer() {
  return (
    <footer 
      id="contact"
      className="bg-[url('/images/f1.jpg')] bg-center bg-no-repeat bg-cover h-full w-full relative"
      aria-labelledby="contact-heading"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40"></div>
      
      <div className="relative z-10 py-16">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="text-center lg:text-left text-light">
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
                <span className="text-sm font-semibold text-white/90">☕ Premium Coffee</span>
              </div>
              <h1 id="contact-heading" className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-primary/80 bg-clip-text text-transparent">
                Coffee World
              </h1>
              <p className="mb-6 text-base leading-relaxed max-w-md mx-auto lg:mx-0">
                Coffee World is your ultimate destination for premium coffee experiences. Join our community of coffee enthusiasts, discover amazing blends, and share your passion for the perfect cup.
              </p>
              
              {/* Newsletter Signup */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 px-3 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold hover:scale-105 transition-transform duration-300 text-sm">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            <div className="text-center lg:text-left">
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
                <span className="text-sm font-semibold text-white/90">🔗 Quick Access</span>
              </div>
              <h2 className="text-xl font-bold text-white mb-4">
                Quick Links
              </h2>
              <ul className="space-y-3">
                {FooterLinks.map(({ id, name, link }) => (
                  <li key={id}>
                    <a
                      className="text-light hover:text-white transition duration-300 hover:translate-x-1 inline-block text-sm flex items-center gap-2"
                      href={link}
                    >
                      <span className="w-1 h-1 bg-primary rounded-full"></span>
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Address and Social Media */}
            <div className="text-center lg:text-left text-light">
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
                <span className="text-sm font-semibold text-white/90">📞 Get In Touch</span>
              </div>
              <h2 className="text-xl font-bold mb-4">Contact Info</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <p className="text-sm">Turkey, Istanbul</p>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <p className="text-sm">+90 546 593 80 36</p>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <p className="text-sm">info@coffeeworld.com</p>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <p className="text-sm">anilakbay20@gmail.com</p>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <p className="text-sm">Mon-Fri: 8AM-6PM</p>
                </div>
              </div>

              <div className="flex justify-center lg:justify-start gap-4 mt-6">
                <a
                  href="https://www.youtube.com/@JamesHoffmann"
                  aria-label="YouTube Channel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-br from-red-500/20 to-red-600/20 backdrop-blur-md rounded-xl hover:from-red-500/30 hover:to-red-600/30 transition-all duration-300 transform hover:scale-105 border border-red-500/30"
                >
                  <FaYoutube className="text-xl text-red-400 hover:text-red-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/akbayanil/"
                  aria-label="LinkedIn Profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-md rounded-xl hover:from-blue-500/30 hover:to-blue-600/30 transition-all duration-300 transform hover:scale-105 border border-blue-500/30"
                >
                  <FaLinkedin className="text-xl text-blue-400 hover:text-blue-300" />
                </a>
                <a
                  href="https://www.instagram.com/anil_akbay"
                  aria-label="Instagram Profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-br from-pink-500/20 to-purple-600/20 backdrop-blur-md rounded-xl hover:from-pink-500/30 hover:to-purple-600/30 transition-all duration-300 transform hover:scale-105 border border-pink-500/30"
                >
                  <FaInstagram className="text-xl text-pink-400 hover:text-pink-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/20 mt-12 pt-6">
          <div className="container mx-auto text-center">
            <p className="text-light text-sm">
              © 2024 Coffee World. All rights reserved. Made with ☕ and ❤️
            </p>
            <p className="text-light/70 text-xs mt-1">
              Crafted with passion for coffee lovers worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;