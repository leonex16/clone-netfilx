<template>
  <main class="main-container">
    <Banner/>
    <Section />
  </main>
</template>

<script>
import { defineComponent } from 'vue'
import Banner from '../components/Banner/Banner.vue';
import Section from '../components/Section/Section.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Banner,
    Section
  }
});
</script>

<style>

</style>