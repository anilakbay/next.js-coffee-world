import React from "react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Services", link: "/#" },
  { id: 3, name: "About", link: "/#" },
  { id: 4, name: "Contact", link: "/#" },
];

function Footer() {
  return (
    <div className="bg-[url('/images/f1.jpg')] bg-center bg-no-repeat bg-cover h-full w-full">
      <div className="bg-black/60 py-16">
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="text-center md:text-left text-light">
            <h1 className="text-3xl font-semibold mb-4">CoffePub</h1>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
              tempore ea, illo cumque corporis expedita nulla numquam.
            </p>
            <a
              className="inline-block border-2 border-red-600 bg-red-600 text-white font-semibold py-2 px-4 rounded-full"
              href="https://www.youtube.com/@EfeGorkemUmit"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Our YouTube Channel
            </a>
          </div>

          {/* Important and Quick Links */}
          <div className="grid grid-cols-2 gap-8 md:gap-16">
            {/* Important Links */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">
                Important Links
              </h2>
              <ul className="space-y-3">
                {Menu.map(({ id, name, link }) => (
                  <li key={id}>
                    <a
                      className="text-light hover:text-white transition duration-300"
                      href={link}
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">
                Quick Links
              </h2>
              <ul className="space-y-3">
                {Menu.map(({ id, name, link }) => (
                  <li key={id}>
                    <a
                      className="text-light hover:text-white transition duration-300"
                      href={link}
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Address and Social Media */}
          <div className="text-center md:text-left text-light">
            <h2 className="text-xl font-semibold mb-4">Address</h2>
            <p className="mb-2">Turkey, Istanbul</p>
            <p>+90 555 444 33 22</p>

            <div className="flex justify-center md:justify-start gap-4 mt-6">
              <a
                href="https://www.youtube.com/@anlakbay3206"
                aria-label="YouTube Kanalı"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="text-3xl text-light hover:text-white transition-transform duration-300 transform hover:scale-110" />
              </a>
              <a
                href="https://www.linkedin.com/in/akbayanil/"
                aria-label="LinkedIn Profili"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-3xl text-light hover:text-white transition-transform duration-300 transform hover:scale-110" />
              </a>
              <a
                href="https://www.instagram.com/anil_akbay/"
                aria-label="Instagram Profili"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-3xl text-light hover:text-white transition-transform duration-300 transform hover:scale-110" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
