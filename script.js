function getComic(){

const email = 'u.chaikouskaya@innopolis.university';
const searchParams = new URLSearchParams();
searchParams.append('email', email);
const apiUrl = `https://fwd.innopolis.university/api/hw2?${searchParams.toString()}`;

fetch(apiUrl)
    .then(response => response.json())
    .then(comicId => {
        const getComicSearchParams = new URLSearchParams();
        getComicSearchParams.append('id', comicId);
        return fetch(`https://fwd.innopolis.university/api/comic?${getComicSearchParams.toString()}`);
    })
    .then(response => response.json())
    .then(comic => {
        displayComic(comic);
    })
   

function displayComic(comic) {
    const container = document.getElementById('comic-container');

    const title = document.createElement('h2');
    title.textContent = comic.title;

    const img = document.createElement('img');
    img.src = comic.img;
    img.alt = comic.alt;

    const date = document.createElement('p');
    const publishDate = new Date(comic.year, comic.month - 1, comic.day);
    date.textContent = `Published on: ${publishDate.toLocaleDateString()}`;

    container.appendChild(title);
    container.appendChild(img);
    container.appendChild(date);

    document.querySelector("#comicButton").remove()
}

}
