import React from "react";

import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";

function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-gray-800	 text-white">
      <aside>
        <p>Copyright © 2023 - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://github.com/jaemonn" target="_blank" rel="noreferrer" className="pr-4 transition duration-300 hover:scale-125"><SiGithub size={50} /></a>
          <a href="https://github.com/jaemonn" target="_blank" rel="noreferrer" className="pr-4 transition duration-300 hover:scale-125"><SiLinkedin size={50} /></a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
