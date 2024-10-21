<template>
    <div class="movies__list">
      <div class="movies__item" v-for="movie in movies" :key="movie.id" @click="goToIntro">
        <img :src="movie.posterUrl" alt="movie.title" class="movies__poster">
        <div class="movies__info">
          <h2 class="movies__name" style="color: aliceblue;">{{ movie.title }}</h2>
          <p class="movies__description" style="color: aliceblue;">{{ movie.description }}</p>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios';


export default {
  data() {
    return {
      movies: [],
    };
  },
  methods: {
    goToIntro(){
      this.$router.push({ name: 'intro'});
    },
  },
  async created(){
    try {
      const res = await axios.get('http://localhost:80/movieposters');
      this.movies=res.data.map(movie=>({
        ...movie,
        posterUrl: `http://localhost:80/posters/`+movie.posterUrl.split('\\').pop(),
      }));

    } catch (err) {
      console.log(err);
    }

  },
};
</script>

<style scoped>
.movies__list {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  gap: 1rem;
  padding: 1rem;
  width:100%-2rem;
}

.movies__item {
  flex: 0 0 calc(25% - 1rem);
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-out;
  width: 250px;
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
