import React from 'react';
import tgLogo from '../images/tg-logo.png';
import ghLogo from '../images/gh-img.png';
import gmLogo from '../images/gm-logo.png';

const Footer: React.FC = () => (
  <>
    <footer>
      <nav>
        <a
          href="https://t.me/julllna"
          id="tg-link"
          target="_blank"
          rel="noreferrer"
        >
          <img src={tgLogo} alt="Telegram" />
        </a>
        <a
          href="https://github.com//fleeshka"
          id="gh-link"
          target="_blank"
          rel="noreferrer"
        >
          <img src={ghLogo} alt="GitHub" />
        </a>
        <a
          href="mailto:u.chaikovskaya@gmail.com"
          id="gm-link"
          target="_blank"
          rel="noreferrer"
        >
          <img src={gmLogo} alt="Email" />
        </a>
      </nav>
    </footer>
  </>
);

export default Footer;
