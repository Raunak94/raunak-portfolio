import logo from "../assets/RG.webp";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} alt="logo" className="mx-2 " width={50} height={33} />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://linkedin.com/in/raunak-gaggar-aba2401ab/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-white"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Raunak94"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
          className="text-white"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/gaggarraunak/?hl=en/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-white"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
}
