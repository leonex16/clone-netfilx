<template>
  <article class="app-container">
    <Navbar />
    <Home />
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from './components/Navbar.vue';
import Home from './pages/Home.vue';

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
    Home,
  },
});
</script>

<style lang="scss">
@import "./main.scss";

.app-container {
  background-color: $primary-500;
  min-height: 100vh;
  max-width: 100vw;
  min-width: 100vw;
}
</style>
