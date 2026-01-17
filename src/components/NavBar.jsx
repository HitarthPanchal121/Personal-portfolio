import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa"; 

const NavBar = () => {
  return(
     <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
        </div>
        <div className="m-8 flex item-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/hitarth-panchal-1b424524a/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </a>
            <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
            <a href="https://twitter.com/your-twitter-username" target="_blank" rel="noopener noreferrer">
                <FaSquareXTwitter />
            </a>
            <a href="https://www.instagram.com/your-instagram-username" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
            </a>
        </div>
     </nav>
  );
};

export default NavBar;