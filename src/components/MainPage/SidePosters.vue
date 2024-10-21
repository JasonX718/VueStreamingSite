<template>
  <div class="movie_list">
    <div class="movie_item" v-for="movie in movies" :key="movie.id">
      <img :src="movie.posterUrl" alt="movie.title" class="movie_poster">
      <div class="movie_title">{{ movie.title }}</div>
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
          title: 'Breaking Bad',
          posterUrl: 'src/assets/posters/breaking_bad.jpg',
          description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
        },
        {
          id: 3,
          title: 'Stranger Things',
          posterUrl: 'src/assets/posters/stranger_things.jpg',
          description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
        },
      ],
    };
  },
};
</script>

<style scoped>
.el-main {
  display: flex;
  align-items: center;
}

.movie_list {
  display: flex;
  gap: 1rem;
  margin: 1rem;
}

.movie_item {
  position: relative;
  box-shadow: 10px 10px 5px rgb(5, 5, 5);
  overflow: hidden;
  transition: transform 0.3s;
}

.movie_item:hover {
  transform: scale(1.05);
}

.movie_poster {
  width: 200px;
  height: auto;
  border-radius: 0.5rem;
}

.movie_title {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  padding-top: 200px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.5rem;
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
  border-bottom-right-radius: 0.5rem;
}
</style>

  