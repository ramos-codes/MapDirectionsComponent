<template>
  <div class="App">
    <GoogleMap />
  </div>
</template>

<script>
import GoogleMap from './components/GoogleMap';

export default {
  name: 'App',
  components: {
    GoogleMap
  }
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