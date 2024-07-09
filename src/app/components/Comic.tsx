import React from 'react';
import Image from 'next/image';

export interface ComicProps {
  title: string;
  img: string;
  alt: string;
  date: string;
}

const Comic: React.FC<ComicProps> = ({ title, img, alt, date }) => (
  <div>
    <h2>{title}</h2>
    <Image src={img} alt={alt} width={500} height={500} />
    <p>Published on: {date}</p>
  </div>
);

export default Comic;