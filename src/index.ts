import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

interface Comic {
    title: string;
    img: string;
    alt: string;
    year: number;
    month: number;
    day: number;
}

document.addEventListener('DOMContentLoaded', () => {
    const loadComicButton: HTMLElement | null = document.getElementById('comicButton');

    if (loadComicButton) {
        loadComicButton.addEventListener('click', () => {
            getComic();
        });
    }
});

async function getComic(): Promise<void> {
    const email: string = 'u.chaikouskaya@innopolis.university';
    const searchParams: URLSearchParams = new URLSearchParams();
    searchParams.append('email', email);
    const apiUrl: string = `https://fwd.innopolis.university/api/hw2?${searchParams.toString()}`;

    try {
        const response: Response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch comic ID');
        }
        const comicId: string = await response.json();

        const getComicSearchParams: URLSearchParams = new URLSearchParams();
        getComicSearchParams.append('id', comicId);
        const comicResponse: Response = await fetch(`https://fwd.innopolis.university/api/comic?${getComicSearchParams.toString()}`);
        if (!comicResponse.ok) {
            throw new Error('Failed to fetch comic');
        }
        const comic: Comic = await comicResponse.json();
        
        displayComic(comic);
    } catch (error) {
        console.error(error);
    }
}

function displayComic(comic: Comic): void {
    const container: HTMLElement | null = document.getElementById('comic-container');
    if (!container) {
        throw new Error('Comic container not found');
    }

    const title: HTMLHeadingElement = document.createElement('h2');
    title.textContent = comic.title;

    const img: HTMLImageElement = document.createElement('img');
    img.src = comic.img;
    img.alt = comic.alt;

    const date: HTMLParagraphElement = document.createElement('p');
    const publishDate: Date = new Date(comic.year, comic.month - 1, comic.day);
    date.textContent = `Published on: ${publishDate.toLocaleDateString()}`;

    const fromNow: HTMLParagraphElement = document.createElement('p');
    fromNow.textContent = dayjs(publishDate).fromNow();

    container.appendChild(title);
    container.appendChild(img);
    container.appendChild(date);
    container.appendChild(fromNow);

    const comicButton: Element | null = document.querySelector("#comicButton");
    if (comicButton) {
        comicButton.remove();
    }
}
