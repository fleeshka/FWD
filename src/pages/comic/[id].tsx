import React from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { ComicProps } from '../../app/components/Comic';

interface ComicPageProps extends ComicProps {}

const ComicPage: React.FC<ComicPageProps> = ({
  title,
  img,
  alt,
  day,
  month,
  year,
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={`Comic titled ${title}`} />
      </Head>
      <h1>{title}</h1>
      <Image src={img} alt={alt} width={500} />
      <p>
        Published on: {day}.{month}.{year}
      </p>
    </div>
  );
};

ComicPage.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };

  const apiUrl = `https://fwd.innopolis.university/api/comic?id=${id}`;
  console.log(`Fetching comic data from URL: ${apiUrl}`);

  try {
    const res = await fetch(apiUrl);
    if (!res.ok) {
      console.error(`Failed to fetch comic data: ${res.statusText}`);
      return {
        notFound: true,
      };
    }

    const comic = await res.json();
    console.log('Fetched Comic Data:', comic);

    return {
      props: {
        title: comic.title,
        img: comic.img,
        alt: comic.alt,
        day: comic.day,
        month: comic.month,
        year: comic.year,
      },
    };
  } catch (error) {
    console.error(`Error fetching comic data: ${error}`);
    return {
      notFound: true,
    };
  }
};

export default ComicPage;
