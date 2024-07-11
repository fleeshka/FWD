import React from 'react';
import Image from 'next/image';
import tgLogo from '/public/images/tg-logo.png';
import ghLogo from '/public/images/gh-img.png';
import gmLogo from '/public/images/gm-logo.png';

const Footer: React.FC = () => (
  <footer>
    <nav>
      <a
        href="https://t.me/julllna"
        id="tg-link"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={tgLogo} alt="Telegram" width={30} height={32} />
      </a>
      <a
        href="https://github.com//fleeshka"
        id="gh-link"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={ghLogo} alt="GitHub" width={30} height={32} />
      </a>
      <a
        href="mailto:u.chaikovskaya@gmail.com"
        id="gm-link"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={gmLogo} alt="Email" width={30} height={32} />
      </a>
    </nav>
  </footer>
);

export default Footer;
