import React from 'react';
import Skills from './Skills';
import Bio from './Bio';

const Main: React.FC = () => {
  const getComic = async () => {
    const email = 'u.chaikouskaya@innopolis.university';
    const searchParams = new URLSearchParams();
    searchParams.append('email', email);
    const apiUrl = `https://fwd.innopolis.university/api/hw2?${searchParams.toString()}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch comic ID');
      }
      const comicId: string = await response.json();
      console.log(`Fetched Comic ID: ${comicId}`);

      window.location.href = `/comic/${comicId}`;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <Skills />
      <Bio />
      <button id="comicButton" onClick={getComic}>
        Get comic
      </button>
    </main>
  );
};

export default Main;
