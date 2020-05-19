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
    <div></div>
  </div>
</template>

<script>
import stepsData from "./steps.json";
import polyline from "@mapbox/polyline";

export default {
  name: "GoogleMap.vue",
  data() {
    return {
      myPosition: {
        lat: 0,
        lng: 0
      },
      route: [],
      steps: stepsData
    };
  },
  created() {
    window.navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      this.myPosition.lat = latitude;
      this.myPosition.lng = longitude;
    });
  },
  mounted() {
    stepsData.map(step => {
      return (this.route = [
        ...this.route,
        ...polyline.decode(step.polyline.points)
      ]);
    });

    let newRoute = [];

    for (let i = 0; i < this.route.length - 1; i += 1) {
      if (i) {
        const path = [
          {
            lat: this.route[i][0],
            lng: this.route[i][1]
          },
          {
            lat: this.route[i + 1][0],
            lng: this.route[i + 1][1]
          }
        ];

        newRoute = [...newRoute, path];
      }
    }

    this.route = newRoute;
  }
};
</script>

<style scoped>
.google-map {
  margin: 10vh auto;
}
</style>