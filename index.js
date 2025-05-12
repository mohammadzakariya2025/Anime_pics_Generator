const btnElement = document.getElementById('btn');
const animeContainerElement = document.querySelector('.anime-container');
const animeImageElement = document.querySelector('.anime-img');
const animeNameElement = document.querySelector('.anime-name');

btnElement.addEventListener("click", async function(){
    try{
        btnEl.disabled = true;
        btnElement.innerText = "Loading...";
        animeNameElement.innerText = "updating...";
        animeImageElement.src = "spinner.svg"
        const response = await fetch("https://api.waifu.pics/sfw/waifu");
        const data = await response.json();
        btnEl.disabled = false;
        btnElement.innerText = "Get Anime";
        animeContainerElement.style.display = "block";
        animeImageElement.src = data.url;
        animeNameElement.innerText = data.artist;
    }catch (error) {
    console.log(error);
    }
});