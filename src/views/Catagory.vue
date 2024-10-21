<template>
  <div>
    <div class="filters">
      <el-select v-model="selectedStyle" placeholder="Select style">
        <el-option
          v-for="style in styles"
          :key="style"
          :label="style"
          :value="style">
        </el-option>
      </el-select>

      <el-select v-model="selectedType" placeholder="Select type">
        <el-option
          v-for="type in types"
          :key="type"
          :label="type"
          :value="type">
        </el-option>
      </el-select>

    </div>

    <div class="content">
      <el-card 
        class="movie-card" 
        v-for="movie in filteredMovies" 
        :key="movie.id"
        :body-style="{ padding: '0px' }">
        <img :src="movie.poster" class="movie-poster"/>
      </el-card>
    </div>

    <el-pagination
      layout="prev, pager, next" small background
      :total="filteredMovies.length">
    </el-pagination>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'

export default {
  setup() {
    const selectedStyle = ref('');
    const selectedType = ref('');
    const styles = ref(['Drama', 'Crime', 'Action', 'Science Fiction','Romance','Fantasy','Sitcom','Anthology']);
    const types = ref(['Movie', 'TV Series']);
    const movies = ref([]);

    const filteredMovies = computed(() => {
        return movies.value.filter(movie => {
            let matchesStyle = selectedStyle.value ? movie.style === selectedStyle.value : true;
            let matchesType = selectedType.value ? movie.type === selectedType.value : true;

            return matchesStyle && matchesType;
        })
    })

    onMounted(() => {
      axios.get('http://localhost:80/style')
        .then(response => {
          movies.value = response.data.map(movie => {
            return {
              ...movie,
              poster: `http://localhost:80/posters/${movie.poster.split('\\').pop()}`
            };
          });
        })
        .catch(error => {
          console.log('There was an error:', error);
        });
    })

    return {
      selectedStyle,
      selectedType,
      styles,
      types,
      movies,
      filteredMovies
    }
  }
}
</script>

<style scoped>
.filters {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  height: 100%;
}

.content {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
}

.movie-card {
    height: 300px;
    background-color: rgb(52, 53, 53);
    opacity: 0.8;
    border: none;
  transition: transform 0.3s;
}

.movie-card:hover {
  transform: scale(1.05);
}

.movie-poster {
  width: 200px;
  height: auto;
}
</style>
