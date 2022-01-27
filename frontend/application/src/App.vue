<template>
  <main>
    <!-- <Navbar /> -->
        <router-link to="/">Go to Home</router-link>
        <br class="">
    <router-link to="/movie/test">Go to About</router-link>
    <router-view></router-view>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from './components/Navbar.vue';

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
  },
});
</script>
