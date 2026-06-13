async function getdata(){
    const url="https://raw.githubusercontent.com/lomsadze123/movie-api/refs/heads/main/data.json"
    try{
    const response = await fetch(url)
    const data = await response.json();
    const movies = document.getElementById('movie');
    for (const i of data) {
        movies.innerHTML += `<div>
        <img class='thumbnail' src=${i.thumbnail.regular.small} alt=""></img>
        <img class='bookmarklogo'src="/Assets/Group 27.png" alt=""></img>
        <h2 class='title'>${i.title}</h2>
        <h3>${i.year}</h3>
        <h3>${i.category}</h3>
        <h3>${i.rating}</h3>
        </div>`
    }
    }catch (error) {
    console.log(error);}
    
}


getdata()


