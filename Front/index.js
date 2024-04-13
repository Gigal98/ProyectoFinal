// Creamos un arreglo de películas, en donde guardaremos solo el id, nombre,
// y la URL de la imagen.

const peliculas = [
    
    {
        id: 1,
        nombre : "The Shawshank Redemption",
        url : "./Media/aclamada_1.jpg",
        descripcion: "Andy Dufresne, un hombre tranquilo, sobrelleva la dura vida en Shawshank, prisión plagada de corrupción.",
        generos: ["Drama", "Suspenso"]

    } ,

    {

        id: 2,
        nombre : "El Padrino",
        url : "./Media/aclamada_2.jpg",
        descripcion : "Vito Corleone, patriarca conocido por su lealtad inquebrantable y su perspicacia empresarial despiadada, debe proteger el legado familiar entre rivalidades y luchas internas.",
        generos: ["Drama", "Acción"]


    },

    {

        id: 3,
        nombre : "El Padrino 2",
        url : "./Media/aclamada_3.jpg",
        descripcion : "La película explora el ascenso al poder de Michael Corleone mientras revela los orígenes de su padre, Vito, en Sicilia.",
        generos: ["Drama", "Acción"]

    },

    {

        id: 4,
        nombre : "La Lista de Schindler",
        url : "./Media/aclamada_4.jpg",
        descripcion : "Narra la historia real de Oskar Schindler, un empresario alemán que salvó a más de mil judíos durante el Holocausto al emplearlos en su fábrica.",
        generos: ["Drama", "Historia"]

    },

    {

        id: 5,
        nombre : "12 Angry Men",
        url : "./Media/aclamada_5.jpg",
        descripcion : "Drama judicial dirigido por Sidney Lumet que sigue a un jurado que deliberan el veredicto de un caso de asesinato.",
        generos: ["Drama"]


    },

    {

        id: 6,
        nombre : "El Viaje de Chihiro",
        url : "./Media/aclamada_6.jpg",
        descripcion : "Película animada dirigida por Hayao Miyazaki que sigue a una niña llamada Chihiro que se encuentra atrapada en un mundo espiritual lleno de criaturas mágicas.",
        generos: ["Fantasía", "Animé", "Aventura"]


    },

    {

        id: 7,
        nombre : "Batman: El Caballero de la Noche",
        url : "./Media/aclamada_7.jpg",
        descripcion : "Thriller dirigido por Christopher Nolan que sigue la lucha del héroe de Gotham contra el caos provocado por el Joker.",
        generos: ["Suspenso", "Acción"]


    },

    {

        id: 8,
        nombre : "Parasite",
        url : "./Media/aclamada_8.jpg",
        descripcion : "Thriller surcoreano que explora las desigualdades sociales y las tensiones de clase a través de la historia de dos familias, una pobre y otra adinerada.",
        generos: ["Suspenso", "Drama"]


    },

    {

        id: 9,
        nombre : "The Green Mile",
        url : "./Media/aclamada_9.jpg",
        descripcion : "Drama carcelario dirigido por Frank Darabont que sigue la vida de los guardias y prisioneros en el corredor de la muerte de una prisión en el sur de Estados Unidos.",
        generos: ["Drama"]


    },

    {

        id: 10,
        nombre : "Forrest Gump",
        url : "./Media/aclamada_10.jpg",
        descripcion : "Drama épico que narra la vida de un hombre con discapacidad intelectual que atraviesa décadas de acontecimientos históricos en Estados Unidos",
        generos: ["Drama", "Historia"]


    },

    {

        id: 11,
        nombre : "Pulp Fiction",
        url : "./Media/aclamada_11.jpg",
        descripcion : "Thriller neo-noir dirigido por Quentin Tarantino que sigue las vidas interconectadas de diversos personajes en Los Ángeles.",
        generos: ["Suspenso", "Drama"]


    },

    {

        id: 12,
        nombre : "El Señor de los Anillos: El Retorno del Rey",
        url : "./Media/aclamada_12.jpg",
        descripcion : "La película sigue la batalla final por la Tierra Media mientras Frodo y Sam se acercan al Monte del Destino.",
        generos: ["Fantasía", "Aventura"]


    }

]


// Función para cargar todas las tarjetas de cada película, contemplando el uso de Bootstrap.

const cargarPeliculas = () => {

    // Conseguimos el id del contenedor de las tarjetas/cards:

    const contenedorPeliculas = document.getElementById('card-container');

    for (let pelicula of peliculas) {

        const generos = pelicula.generos.join(', ');
        const tarjeta =
        `
    <div class="card h-100 w-100">
        <img src="${pelicula.url}" class="card-img-top img-fluid" alt="${pelicula.nombre}">
            <div class="card-body d-flex justify-content-between flex-column">
                <h5 class="card-title">${pelicula.nombre}</h5>
                <p class="card-text">${pelicula.descripcion}</p>
                <p class="card-text"><small class="text-body-secondary">${generos}</small></p>
            </div>
    </div>
        `;

        const nuevaPelicula = document.createElement('div');
        nuevaPelicula.classList.add('col-lg-4', 'col-md-6', 'mb-4');
        nuevaPelicula.innerHTML = tarjeta;
        contenedorPeliculas.appendChild(nuevaPelicula);
    }

}


// Recordar que un addEventListener siempre toma dos argumentos, el tipo de evento y otra función.
document.addEventListener('DOMContentLoaded', ( evento ) => {
    cargarPeliculas();
    // Más adelante podemos agregar más funcionalidad... como filtrar por nombre de película, etc.
})