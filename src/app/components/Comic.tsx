// Comic.tsx
import React from 'react';

export interface ComicProps {
  title: string;
  img: string;
  alt: string;
  date: string;
}

const Comic: React.FC<ComicProps> = ({ title, img, alt, date }) => (
  <div>
    <h2>{title}</h2>
    <img src={img} alt={alt} />
    <p>Published on: {date}</p>
  </div>
);

export default Comic;
