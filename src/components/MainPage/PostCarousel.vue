<template>
  <el-carousel :interval="5000" arrow="always" style="height:360px;border-radius: 1rem;width: 50%;padding-top: 15px;" >
    <el-carousel-item v-for="movie in movies" :key="movie.id" style="border-radius: 1rem;height: 100%;">
      <img :src="movie.poster" alt="Movie Poster" class="movie-poster"/>
      <div class="movie-info">
        <h3 style="color: azure;">{{ movie.title }}</h3>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data() {
    return {
      movies: [
        { id: 1, title: 'Batman: The Dark Knight', poster: "src/assets/posters/batman_02.jpg" },
        { id: 2, title: 'Pulp Fiction', poster: 'src/assets/posters/Pulp_Fiction_(1994)_poster.jpg' },
        { id: 3, title: 'The Godfather', poster: 'src/assets/posters/godfather.jpg' },
        { id: 4, title: 'Forrest Gump', poster: 'src/assets/posters/forrest.jpg' },
      ],
    };
  },
};
</script>

<style scoped>
.movie-poster {
  width: 100%;
  height: auto;
}

.movie-info {
  position: absolute;
  bottom: 20px;
  left: 20px;
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>



