<template>
  <div class="list-container">
    <div v-for="step in html_steps" v-html="step" :key="step"></div>
  </div>
</template>

<script>
export default {
  name: "DirectionsList",
  props: {
    html_steps: {
      type: Array,
    },
    distance: {
      type: String,
    },
    duration: {
      type: String,
    },
    destination: {
      type: String,
    },
  },
};
</script>
