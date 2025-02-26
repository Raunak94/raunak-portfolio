import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import logo from "../assets/RG.webp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Close menu on click (for mobile)
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" aria-label="Home">
          <img src={logo} alt="logo" className="h-10 w-auto" />
        </a>

        {/* Navigation Menu (Desktop - Centered) */}
        <div className="hidden md:flex space-x-8 text-lg font-semibold">
          <button
            onClick={() => scrollToSection("hero")}
            className="hover:text-gray-300"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("technologies")}
            className="hover:text-gray-300"
          >
            Technologies
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="hover:text-gray-300"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("work")}
            className="hover:text-gray-300"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-gray-300"
          >
            Contact
          </button>
        </div>

        {/* Social Icons (Always Visible) */}
        <div className="flex space-x-4 text-2xl">
          <a
            href="https://linkedin.com/in/raunak-gaggar-aba2401ab/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Raunak94"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/gaggarraunak/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>

          {/* Hamburger Menu Button (Mobile) */}
        </div>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* Collapsible Menu (Mobile) */}
      <div
        className={`md:hidden bg-black w-full absolute top-16 left-0 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center text-lg font-semibold space-y-4 py-4">
          <li>
            <button
              onClick={() => scrollToSection("hero")}
              className="hover:text-gray-300"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("technologies")}
              className="hover:text-gray-300"
            >
              Technologies
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("projects")}
              className="hover:text-gray-300"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("work")}
              className="hover:text-gray-300"
            >
              Work
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-gray-300"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
