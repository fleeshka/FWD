import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { ComicProps } from '../../app/components/Comic';

interface ComicPageProps extends ComicProps {}

const ComicPage: React.FC<ComicPageProps> = ({ title, img, alt, date }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={`Comic titled ${title}`} />
      </Head>
      <h1>{title}</h1>
      <Image src={img} alt={alt} width={500} height={500} />
      <p>Published on: {date}</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };

  const apiUrl = `https://fwd.innopolis.university/api/comic?id=${id}`;
  const res = await fetch(apiUrl);

  if (!res.ok) {
    return {
      notFound: true,
    };
  }

  const comic = await res.json();

  return {
    props: {
      title: comic.title,
      img: comic.img,
      alt: comic.alt,
      date: comic.date,
    },
  };
};

export default ComicPage;