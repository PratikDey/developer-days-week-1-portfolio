import React from "react";
import "./socials.css";
import twitter from "../../images/twitter.png";
import linkedin from "../../images/linkedin.png";
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";
import reddit from "../../images/reddit.png";
import discord from "../../images/discord.png";
export default function Socials() {
  return (
    <div>
      <div>
        <ul className="nav-links">
          <li>
            <a href="https://twitter.com/patrik_dey">
              <img src={twitter} className="social" />
            </a>
            <a href="https://www.linkedin.com/in/pratik-dey-912b9218b/">
              <img src={linkedin} className="social" />
            </a>
            <a href="https://www.facebook.com/420.mal.a6i.ami">
              <img src={facebook} className="social" />
            </a>
            <a href="https://www.instagram.com/pratiiiik_debe_na/">
              <img src={instagram} className="social" />
            </a>
            <a href="https://www.reddit.com/user/PratikDey">
              <img src={reddit} className="social" />
            </a>
            <a href="https://discordapp.com/users/localhost#8022/">
              <img src={discord} className="social" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
