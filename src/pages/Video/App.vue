<template>
  <div @mousemove="resetTimer" @mouseleave="hideBars" class="container">
    <!-- Nav bar -->
    <div v-if="showBars" class="nav-bar">
      <button @click="goBack" style="color: aliceblue;">🡠</button>
      <span style="color: aliceblue;"></span>
    </div>

    <!-- Video player -->
    <div class="play_container">
      <vue3VideoPlay 
        width="100%"
        height="100%"
        :src="options.src"
        :poster="options.poster"
        @play="onPlay"
        @pause="onPause" 
        @timeupdate="onTimeupdate" 
        @canplay="onCanplay" />

      <!-- Video resolution conversion -->
      <div class="convert_resolution">
        <select v-model="selectedResolution">
          <option value="854x480">480p</option>
          <option value="1280x720">720p</option>
          <option value="1920x1080">1080p</option>
        </select>
        <button @click="convertResolution">Convert Resolution</button>
      </div>
    </div>

  </div>
</template>

<script>
import { reactive, ref, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';



export default {
  setup() {
    const router = useRouter();

    const options = reactive({
    src: "http://localhost:80/stream/ShawShark.mp4", // replace 'Batman_DK.mp4' with your actual video filename
    poster: '', // cover image
    });

    const showBars = ref(true);
    let timer = null;

    const resetTimer = () => {
      clearTimeout(timer);
      showBars.value = true;
      timer = setTimeout(() => {
        showBars.value = false;
      }, 2000); // Hide bars after 2 seconds of inactivity
    };

    const hideBars = () => {
      clearTimeout(timer);
      showBars.value = false;
    };

    onUnmounted(() => {
      clearTimeout(timer);
    });

    const onPlay = (ev) => {
      console.log('播放');
    };

    const onPause = (ev) => {
      console.log(ev, '暂停');
    };

    const onTimeupdate = (ev) => {
      console.log(ev, '时间更新');
    };

    const onCanplay = (ev) => {
      console.log(ev, '可以播放');
    };

    const goBack = () => {
      router.back();
    };
    const selectedResolution = ref("854x480"); // 默认选择480p

    const convertResolution = async () => {
      
      try {
        const response = await axios.post('/convert', {
          videoSrc: options.src,
          resolution: selectedResolution.value,
        });

        console.log('Conversion started for resolution', selectedResolution.value, 'Response:', response.data);
      } catch (error) {
        console.error('Error while converting video resolution:', error);
      }
    };


    return {
      options,
      showBars,
      resetTimer,
      hideBars,
      onPlay,
      onPause,
      onTimeupdate,
      onCanplay,
      goBack,
      selectedResolution,
      convertResolution,

    };
  },
};
</script>

<style scoped>
.container {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
  transform: scale(1);
}

.nav-bar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  background-color: #0b0b0b;
  display: flex;
  align-items: center;
  padding: 0 15px;
  z-index: 100;
  opacity: 0.9;
}

.nav-bar button {
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1.5em;
}

.play_container {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;

}

.convert_resolution {
    position: absolute;
    bottom: 20px;
    right: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 5px;
    z-index: 200;
  }

  .convert_resolution select, .convert_resolution button {
    margin-right: 10px;
  }
</style>
