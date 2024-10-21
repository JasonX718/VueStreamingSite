<template>
  <div class="main_upper_elements" style="height: 350px;">
    <post-carousel style="padding-left: 10px;"></post-carousel>
    <side-posters style="margin-left: 0;"></side-posters>
  </div>
  <div class="trending">
    <h1 class="movies__title" style="color: antiquewhite;font-weight: bold;">
      Trending now
    </h1>
    <video-list></video-list>
  </div>
  <div class="trending">
    <h1 class="movies__title" style="color: antiquewhite;font-weight: bold;">
      Hollywood Movies
    </h1>
    <video-list></video-list>
  </div>
  <div class="trending">
    <h1 class="movies__title" style="color: antiquewhite;font-weight: bold;">
      Popular Dramas
    </h1>
    <video-list></video-list>
  </div>
  <div class="trending">
    <h1 class="movies__title" style="color: antiquewhite;font-weight: bold;">
      New Releases
    </h1>
    <video-list></video-list>
  </div>
</template>

<script>
import PostCarousel from '../PostCarousel.vue';
import SidePosters from '../SidePosters.vue';
import VideoList from '../VideoPostList.vue';

export default {
  components:{
    PostCarousel,
    SidePosters,
    VideoList,
  },
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

.el-main > div:nth-child(1) {
 padding-top: 20px;
 padding-left: 10px;
}

.main_upper_elements {
  padding-left: 0px;
  background-color:rgba(29, 28, 28, 20);
  box-shadow: 0 5px 5px rgba(0,0,0, 0.2);
  display:flex;
  gap:1em;
  z-index: 50;
}

.trending {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 2rem;
  padding-top: 0;
  background-color: rgb(30, 30, 30);
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
  box-shadow: 0 0 1rem rgba(0,0,0, 0.2);
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