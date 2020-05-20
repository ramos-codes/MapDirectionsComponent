<template>
  <div class="App">
    <GoogleMap :route="route" />
    <DirectionsList
      :html_steps="html_steps"
      :distance="distance"
      :duration="duration"
      :destination="destination"
    />
  </div>
</template>

<script>
// Dependencies
import googleResponse from "./googleResponse.json";
import polyline from "@mapbox/polyline";
// Components
import GoogleMap from "./components/GoogleMap";
import DirectionsList from "./components/DirectionsList";

export default {
  name: "App",
  components: {
    GoogleMap,
    DirectionsList,
  },
  data() {
    return {
      myPosition: {
        lat: 0,
        lng: 0,
      },
      route: [],
      html_steps: [],
      distance: "",
      duration: "",
      destination: "",
    };
  },
  mounted() {
    this.route = polyline.decode(
      googleResponse.routes[0].overview_polyline.points
    );

    let newRoute = [];
    for (let i = 0; i < this.route.length - 1; i += 1) {
      if (i) {
        const path = [
          {
            lat: this.route[i][0],
            lng: this.route[i][1],
          },
          {
            lat: this.route[i + 1][0],
            lng: this.route[i + 1][1],
          },
        ];
        newRoute = [...newRoute, path];
      }
    }
    this.route = newRoute;

    this.distance = googleResponse.routes[0].legs[0].distance.text;
    this.duration = googleResponse.routes[0].legs[0].duration.text;
    this.destination = googleResponse.routes[0].legs[0].end_address;

    googleResponse.routes[0].legs[0].steps.map(step => {
      this.html_steps = [...this.html_steps, step.html_instructions];
    });
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

.App {
  width: 100vw;
  height: 100vh;
}
</style>
