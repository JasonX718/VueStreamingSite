<template>
  <div class="movies">
    <h1 class="movies__title">Browse Movies</h1>
    <div class="movies__list">
      <div class="movies__item" v-for="movie in movies" :key="movie.id">
        <img :src="movie.posterUrl" alt="movie.title" class="movies__poster">
        <div class="movies__info">
          <h2 class="movies__name">{{ movie.title }}</h2>
          <p class="movies__description">{{ movie.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movies: [
        {
          id: 1,
          title: 'The Godfather',
          posterUrl: 'https://image.tmdb.org/t/p/w342/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg',
          description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
        },
        {
          id: 2,
          title: 'The Dark Knight',
          posterUrl: 'https://image.tmdb.org/t/p/w342/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg',
          description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
        },
        {
          id: 3,
          title: 'The Dark Knight',
          posterUrl: 'https://image.tmdb.org/t/p/w342/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg',
          description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
        },{
          id: 4,
          title: 'The Dark Knight',
          posterUrl: 'https://image.tmdb.org/t/p/w342/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg',
          description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
        },{
          id: 5,
          title: 'The Dark Knight',
          posterUrl: 'https://image.tmdb.org/t/p/w342/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg',
          description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
        },{
          id: 6,
          title: 'The Dark Knight',
          posterUrl: 'https://image.tmdb.org/t/p/w342/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg',
          description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
        },{
          id: 7,
          title: 'The Dark Knight',
          posterUrl: 'https://image.tmdb.org/t/p/w342/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg',
          description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
        },{
          id: 8,
          title: 'The Dark Knight',
          posterUrl: 'https://image.tmdb.org/t/p/w342/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg',
          description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
        },
      ],
    };
  },
};
</script>

<style>
.movies {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 2rem;
}

.movies__title {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.movies__list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.movies__item {
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-out;
}

.movies__item:hover {
  transform: scale(1.05);
}

.movies__poster {
  width: 100%;
  height: auto;
}

.movies__info {
  padding: 1rem;
}

.movies__name {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.movies__description {
  font-size: 1rem;
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>