const films = [
  {
    title: 'A Origem',
    year: 2010,
    review: 10,
    genre: 'Ficção Científica',
    poster: 'https://image.tmdb.org/t/p/original/9e3Dz7aCANy5aRUQF745IlNloJ1.jpg',
    description: 'Um ladrão de sonhos embarca em uma missão para plantar uma ideia na mente de um herdeiro de império tecnológico.',
  },
  {
    title: 'O Poderoso Chefão',
    year: 1972,
    review: 9.2,
    genre: 'Drama',
    poster: 'https://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg',
    description: 'A jornada de uma família mafiosa pelo poder, lealdade e sacrifício em um mundo governado pela violência.',
  },
  {
   title: 'Missão: Impossível - Acerto de Contas',
   year: 2023,
   review: 7.7,
   genre: 'Ação',
   poster: 'https://www.papodecinema.com.br/wp-content/uploads/2022/12/20230705-missao-impossivel-contas-papo-de-cinema-cartaz.webp',
   description: 'o agente Ethan Hunt (Tom Cruise) e sua equipe da IMF devem rastrear uma nova e aterrorizante arma de inteligência artificial que ameaça toda a humanidade.',
  },
  {
   title: 'Tropa de Eite',
   year: 2007,
   review: 8.0,
   genre: 'Crime',
   poster: 'https://m.media-amazon.com/images/M/MV5BNjA4NTM4MzUtZGQ3NS00ZDIxLWJiYjYtNjU5OWMzYWE1OTFjXkEyXkFqcGc@._V1_.jpg',
   description: 'Tropa de Elite é uma aclamada franquia de filmes brasileira dirigida por José Padilha, que retrata a dura realidade da violência urbana no Rio de Janeiro e a atuação do Batalhão de Operações Policiais Especiais (BOPE). ',
  },
  {
    title: 'O Senhor dos Anéis: A Sociedade do Anel',
    year: 2001,
    review: 8.9,
    genre: 'Fantasia',
    poster: 'https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg',
    description: 'Um hobbit parte em uma missão épica para destruir o anel que ameaça dominar a Terra-média.',
  },
  {
    title: 'Coringa',
    year: 2019,
    review: 8.4,
    genre: 'Thriller',
    poster: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
    description: 'Um homem solitário e rejeitado mergulha em caos enquanto luta para ser visto em uma cidade implacável.',
  },
  {
    title: 'Clube da Luta',
    year: 1999,
    review: 8.8,
    genre: 'Drama',
    poster: 'https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg',
    description: 'Dois homens criam um clube secreto de luta para escapar de suas vidas cinzentas e descobrir sua própria verdade.',
  },
  {
    title: 'Interestelar',
    year: 2014,
    review: 8.7,
    genre: 'Ficção Científica',
    poster: 'https://image.tmdb.org/t/p/original/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    description: 'Uma tripulação cruza um buraco de minhoca em busca de um novo lar para a humanidade em um futuro próximo.',
  },
  {
    title: 'Parasita',
    year: 2019,
    review: 8.5,
    genre: 'Thriller',
    poster: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
    description: 'Uma família pobre se infiltra na casa de uma família rica, mas o choque entre classes gera consequências devastadoras.',
  },
  {
    title: 'A Viagem de Chihiro',
    year: 2001,
    review: 8.6,
    genre: 'Fantasia',
    poster: 'https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg',
    description: 'Uma garota entra em um mundo mágico de espíritos e precisa resgatar seus pais para voltar ao mundo real.',
  },
  {
    title: 'Mad Max: Estrada da Fúria',
    review: 8.1,
    year: 2015,
    genre: 'Ação',
    poster: 'https://lh4.googleusercontent.com/proxy/K95sV4se8iar7kIuF9ozLbax_kEBJ18daAd0-pBpqCsGpqttx-ae2kOPl_jmLAl3qQLRcncXcwLPZcK19EgRXpVX-uWRwpxow3yIBIGV4R2XECh4qucbfgEJpzn2',
    description: 'Em um futuro pós-apocalíptico, um herói e uma rebelde fogem de um tirano em um carro carregado de altas apostas.',
  },
  {
    title: 'Pulp Fiction: Tempo de Violência',
    review: 8.9,
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
const review = document.getElementById('review');

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
          <span>⭐ ${film.review.toFixed(1)}</span>
        </div>
        <p class="film-description">${film.description}</p>
      </div>
       <div class="rating-stars" data-index="${films.indexOf(film)}">
       <span data-value="1">☆</span>
       <span data-value="2">☆</span>
       <span data-value="3">☆</span>
       <span data-value="4">☆</span>
       <span data-value="5">☆</span>
      </div>

      <div class="poster-wrapper">
      ...
      </div>

      <div class="film-details">
      <h2>${film.title}</h2>
      ...
      </div>
      `;

    filmList.appendChild(card);
    const stars = card.querySelectorAll('.rating-stars span');

stars.forEach((star) => {
  star.addEventListener('click', () => {
    const rating = Number(star.dataset.value);

    film.review = rating;

    stars.forEach((s, index) => {
      if (index < rating) {
        s.classList.add('active');
        s.textContent = '★';
      } else {
        s.classList.remove('active');
        s.textContent = '☆';
      }
    });
  });
});
  });
  star.addEventListener('click', () => {
  const rating = Number(star.dataset.value);

  film.review = rating;

  localStorage.setItem(`rating-${film.title}`, rating);

  renderFilms(films);
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
