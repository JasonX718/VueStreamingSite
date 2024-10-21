<template>
  <div class="tv-series-intro">
    <div class="navbar">
      <button @click="goBack" class="nav-button">🡠</button>
    </div>
    <h1 style="color: aliceblue;">{{ title }}</h1>
    <div class="header">
      <img class="poster" :src="posterURL" alt="TV Series Poster">
      <el-card class="video-clip-card" @click="openClip">
        <video :src="videoClipURL" controls ref="videoClip" @mouseenter="hoverCard(true)" @mouseleave="hoverCard(false)"></video>
      </el-card>
    </div>
    <div class="divider"></div>
    <h2>Intro:</h2>
    <div class="introduction">
      <p style="color: aliceblue;">{{ introduction }}</p>
    </div>
    <div class="divider"></div>
    <div class="episodes">
      <el-card v-for="(episode, index) in episodes" :key="index" class="episode-card" @click="openEpisode(episode)">
        <img :src="episode.thumbnail" alt="">
        <p style="color: aliceblue;">{{ episode.shortIntro }}</p>
      </el-card>
    </div>
  </div>
</template>

<script>


export default {

  data() {
    return {
      title: 'The Shawshank Redemption',
      posterURL: 'src/assets/posters/ShawshankRedemptionMoviePoster.jpg',
      videoClipURL: "http://localhost:80/moviesources/ShawShark.mp4",
      introduction: 'Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency.',
      episodes: [
        {
          thumbnail: 'https://cms-assets.theasc.com/Shawshank-Featured.jpg',
          shortIntro: 'episode 1',
        },
        // Add more episodes...
      ],
    }
  },
  methods: {
    hoverCard(hovered) {
      const scaleFactor = hovered ? 1.05 : 1;
      this.$refs.videoClip.style.transform = `scale(${scaleFactor})`;
    },
    openClip() {
      // Implement the logic to open the video-play page
      console.log('Open clip');
    },
    openEpisode(episode) {
      // Implement the logic to open the selected episode's play-page
      this.$router.push({ name: 'videopage'});
      console.log('Open episode:', episode.shortIntro);
    },
    goBack() {
      this.$router.go(-1);
    },
  },
}
</script>

<style scoped>

.navbar {
  background-color: #212020;
  padding: 10px 0;
  display: flex;
  justify-content: start;
}

.nav-button {
  color: white;
  margin-left: 10px;
  transition: color 0.3s;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1.5em;
}

.nav-button:hover {
  color: rgb(28, 177, 236);
}
.header {
  display: flex;
  align-items: flex-start;
}

.poster {
  width: 300px;
  height: 450px;
}

.video-clip-card {
  background-color: #212020;
  border: none;
  cursor: pointer;
  width: calc(100% - 300px - 2rem);
  height: 450px;
  margin-left: 2rem;
}

.video-clip-card video {
  width: 900px;
  height: 410px;
  object-fit: cover;
  border-radius: 4px;
  transition: transform 0.3s;
}

.divider {
  border-bottom: 1px solid #eee;
  margin: 1rem 0;
}

.episodes {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.episode-card {
  background-color: #212020;
  cursor: pointer;
  width: 200px;
transition: transform 0.3s;
}

.episode-card:hover {
transform: scale(1.05);
}

.episode-card img {
width: 100%;
height: auto;
}
</style>


