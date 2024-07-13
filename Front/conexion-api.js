async function consumirApi() {
    const url = 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '435c9342a2msh6cd7fb2d1481044p189644jsn904ce076bad6',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    };
    const respuesta = await fetch(url, options); 
    const data = await respuesta.json();
    console.log(data.results); //debug
    return data.results;
}

const MAIN = document.querySelector("#card-container");
consumirApi().then((peliculas) => {
    peliculas.forEach((e) => {
        let carta = document.createElement("div");
        let contenido = document.createElement("div");
        carta.classList.add("col-lg-4", "col-md-6", "mb-4");
        contenido.classList.add("card", "h-100", "w-100");
        insertarImagen(contenido, e)
        insertarTitulo(contenido, e)
        carta.appendChild(contenido);
        MAIN.appendChild(carta);
    });    
})

function insertarImagen(contenido, pelicula) {
    let imagen = document.createElement("img");
    // En algunas películas, parece que no hay imagen.
    if (pelicula.primaryImage !== null) {
        imagen.src = pelicula.primaryImage.url;
    }
    imagen.alt = pelicula.titleText.text
    contenido.appendChild(imagen);
}

function insertarTitulo(contenido, pelicula) {
    let texto = document.createElement("div");
    let titulo = document.createElement("h5");
    texto.classList.add("card-body", "d-flex", "justify-content-between", "flex-column")
    titulo.classList.add("card-title")
    titulo.textContent = pelicula.titleText.text;
    contenido.appendChild(texto);
    contenido.appendChild(titulo);
}