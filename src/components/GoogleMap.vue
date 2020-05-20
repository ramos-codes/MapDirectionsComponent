<template>
  <div class="map-box">
    <gmap-map
      ref="mapRef"
      class="google-map"
      :center="myPosition"
      :zoom="15"
      map-type-id="roadmap"
      style="width: 1000px; height: 600px"
    >
      <gmap-polyline
        v-for="path in route"
        :key="path[0][0]"
        :path="path"
        :editable="false"
        @path_changed="updateEdited($event)"
        ref="polyline"
      ></gmap-polyline>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: "GoogleMap.vue",
  data() {
    return {
      myPosition: {
        lat: 0,
        lng: 0,
      },
    };
  },
  props: {
    route: {
      type: Array,
    },
  },
  created() {
    window.navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      this.myPosition.lat = latitude;
      this.myPosition.lng = longitude;
    });
  },
};
</script>

<style scoped>
.google-map {
  margin: 10vh auto;
}
</style>
