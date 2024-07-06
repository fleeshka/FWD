import React from 'react';

import Skills from './Skills';
import Bio from './Bio';

const Comic = React.lazy(() => import('./Comic'));

const Main: React.FC = () => {
  const [comic, setComic] = React.useState<any | null>(null);

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

      const getComicSearchParams = new URLSearchParams();
      getComicSearchParams.append('id', comicId);
      const comicResponse = await fetch(
        `https://fwd.innopolis.university/api/comic?${getComicSearchParams.toString()}`,
      );
      if (!comicResponse.ok) {
        throw new Error('Failed to fetch comic');
      }
      const comicData: typeof Comic = await comicResponse.json();
      setComic(comicData);
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
      <div id="comic-container">{comic && <Comic title={''} img={''} alt={''} date={''} {...comic} />}</div>
    </main>
  );
};

export default Main;
