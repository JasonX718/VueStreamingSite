<template>
  <div class="zoomable-image" :style="{ backgroundImage: 'url(' + imageUrl + ')' }" @click="zoomIn">
    <div class="zoom-overlay" :class="{ 'zoomed-in': zoomedIn }" @click="zoomOut">
      <img :src="imageUrl" :alt="altText" class="zoomed-image">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
    altText: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      zoomedIn: false,
    };
  },
  methods: {
    zoomIn() {
      this.zoomedIn = true;
    },
    zoomOut() {
      this.zoomedIn = false;
    },
  },
};
</script>

<style scoped>
.zoomable-image {
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.zoom-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease-out;
  display: flex;
  justify-content: center;
  align-items: center;
}

.zoom-overlay.zoomed-in {
  opacity: 1;
  pointer-events: auto;
}

.zoomed-image {
  max-height: 100%;
  max-width: 100%;
}
</style>
