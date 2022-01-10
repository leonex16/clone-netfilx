<template>
  <main>
    <Navbar />
    <Home />
  </main>
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
