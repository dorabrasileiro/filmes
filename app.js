const films = [
  {
    title: 'A Origem',
    year: 2010,
    genre: 'Ficção Científica',
    poster: 'https://image.tmdb.org/t/p/original/9e3Dz7aCANy5aRUQF745IlNloJ1.jpg',
    description: 'Um ladrão de sonhos embarca em uma missão para plantar uma ideia na mente de um herdeiro de império tecnológico.',
  },
  {
    title: 'O Poderoso Chefão',
    year: 1972,
    genre: 'Drama',
    poster: 'https://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg',
    description: 'A jornada de uma família mafiosa pelo poder, lealdade e sacrifício em um mundo governado pela violência.',
  },
  {
    title: 'O Senhor dos Anéis: A Sociedade do Anel',
    year: 2001,
    genre: 'Fantasia',
    poster: 'https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg',
    description: 'Um hobbit parte em uma missão épica para destruir o anel que ameaça dominar a Terra-média.',
  },
  {
    title: 'Coringa',
    year: 2019,
    genre: 'Thriller',
    poster: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
    description: 'Um homem solitário e rejeitado mergulha em caos enquanto luta para ser visto em uma cidade implacável.',
  },
  {
    title: 'Clube da Luta',
    year: 1999,
    genre: 'Drama',
    poster: 'https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg',
    description: 'Dois homens criam um clube secreto de luta para escapar de suas vidas cinzentas e descobrir sua própria verdade.',
  },
  {
    title: 'Interestelar',
    year: 2014,
    genre: 'Ficção Científica',
    poster: 'https://image.tmdb.org/t/p/original/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    description: 'Uma tripulação cruza um buraco de minhoca em busca de um novo lar para a humanidade em um futuro próximo.',
  },
  {
    title: 'Parasita',
    year: 2019,
    genre: 'Thriller',
    poster: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
    description: 'Uma família pobre se infiltra na casa de uma família rica, mas o choque entre classes gera consequências devastadoras.',
  },
  {
    title: 'A Viagem de Chihiro',
    year: 2001,
    genre: 'Fantasia',
    poster: 'https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg',
    description: 'Uma garota entra em um mundo mágico de espíritos e precisa resgatar seus pais para voltar ao mundo real.',
  },
  {
    title: 'Mad Max: Estrada da Fúria',
    year: 2015,
    genre: 'Ação',
    poster: 'https://lh4.googleusercontent.com/proxy/K95sV4se8iar7kIuF9ozLbax_kEBJ18daAd0-pBpqCsGpqttx-ae2kOPl_jmLAl3qQLRcncXcwLPZcK19EgRXpVX-uWRwpxow3yIBIGV4R2XECh4qucbfgEJpzn2',
    description: 'Em um futuro pós-apocalíptico, um herói e uma rebelde fogem de um tirano em um carro carregado de altas apostas.',
  },
  {
    title: 'Pulp Fiction: Tempo de Violência',
    year: 1994,
    genre: 'Crime',
    poster: 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
    description: 'Histórias entrelaçadas de crime e redenção em Los Angeles, contadas com ritmo e violência estilizada.',
  },
];

const filmList = document.getElementById('filmList');
const searchInput = document.getElementById('searchInput');
const genreSelect = document.getElementById('genreSelect');
const yearInput = document.getElementById('yearInput');

function getUniqueGenres() {
  return Array.from(new Set(films.map((film) => film.genre))).sort();
}

function renderGenres() {
  const genres = getUniqueGenres();
  genres.forEach((genre) => {
    const option = document.createElement('option');
    option.value = genre;
    option.textContent = genre;
    genreSelect.appendChild(option);
  });
}

function renderFilms(filteredFilms) {
  filmList.innerHTML = '';

  if (filteredFilms.length === 0) {
    filmList.innerHTML = '<div class="no-results">Nenhum filme corresponde ao filtro atual.</div>';
    return;
  }

  filteredFilms.forEach((film) => {
    const card = document.createElement('article');
    card.className = 'film-card';

    card.innerHTML = `
      <div class="poster-wrapper">
        <img class="film-poster" src="${film.poster}" alt="Capa de ${film.title}" onerror="this.onerror=null;this.src='https://via.placeholder.com/400x600/111111/ff0000?text=Sem+Capa'" />
      </div>
      <div class="film-details">
        <h2>${film.title}</h2>
        <div class="film-meta">
          <span>${film.genre}</span>
          <span>${film.year}</span>
        </div>
        <p class="film-description">${film.description}</p>
      </div>
    `;

    filmList.appendChild(card);
  });
}

function filterFilms() {
  const query = searchInput.value.trim().toLowerCase();
  const selectedGenre = genreSelect.value;
  const yearValue = parseInt(yearInput.value, 10);

  const filtered = films.filter((film) => {
    const matchesTitle = film.title.toLowerCase().includes(query);
    const matchesGenre = selectedGenre === 'all' || film.genre === selectedGenre;
    const matchesYear = Number.isNaN(yearValue) || film.year === yearValue;

    return matchesTitle && matchesGenre && matchesYear;
  });

  renderFilms(filtered);
}

searchInput.addEventListener('input', filterFilms);
genreSelect.addEventListener('change', filterFilms);
yearInput.addEventListener('input', filterFilms);

renderGenres();
renderFilms(films);
