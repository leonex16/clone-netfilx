<template>
  <main class="main-container">
    <Banner/>
    <Section :mountPostOnCarousel="true" :navElements="navSectionOne" :posts="dataSectionOne"/>
    <Section :mountPostOnCarousel="false" :navElements="navSectionTwo" :posts="dataSectionOne"/>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Banner from '../components/Banner/Banner.vue';
import Section from '../components/Section/Section.vue';
import { PropsNav } from '../shared/interfaces/Props';

const dataSectionOne: any[] = [
  {
    title: 'jurassic World El reino caido',
    image: 'https://es.web.img2.acsta.net/pictures/18/04/19/11/20/0552856.jpg',
    year: '2018',
    imDbRating: '5.7'
  },
    {
    title: 'jurassic World El reino caido',
    image: 'https://es.web.img2.acsta.net/pictures/18/04/19/11/20/0552856.jpg',
    year: '2018',
    imDbRating: '5.7'
  },
    {
    title: 'jurassic World El reino caido',
    image: 'https://es.web.img2.acsta.net/pictures/18/04/19/11/20/0552856.jpg',
    year: '2018',
    imDbRating: '5.7'
  },
    {
    title: 'jurassic World El reino caido',
    image: 'https://es.web.img2.acsta.net/pictures/18/04/19/11/20/0552856.jpg',
    year: '2018',
    imDbRating: '5.7'
  },  {
    title: 'jurassic World El reino caido',
    image: 'https://es.web.img2.acsta.net/pictures/18/04/19/11/20/0552856.jpg',
    year: '2018',
    imDbRating: '5.7'
  },
    {
    title: 'jurassic World El reino caido',
    image: 'https://es.web.img2.acsta.net/pictures/18/04/19/11/20/0552856.jpg',
    year: '2018',
    imDbRating: '5.7'
  },
    {
    title: 'jurassic World El reino caido',
    image: 'https://es.web.img2.acsta.net/pictures/18/04/19/11/20/0552856.jpg',
    year: '2018',
    imDbRating: '5.7'
  },
    {
    title: 'jurassic World El reino caido',
    image: 'https://es.web.img2.acsta.net/pictures/18/04/19/11/20/0552856.jpg',
    year: '2018',
    imDbRating: '5.7'
  },
    {
    title: 'jurassic World El reino caido',
    image: 'https://es.web.img2.acsta.net/pictures/18/04/19/11/20/0552856.jpg',
    year: '2018',
    imDbRating: '5.7'
  },
    {
    title: 'jurassic World El reino caido',
    image: 'https://es.web.img2.acsta.net/pictures/18/04/19/11/20/0552856.jpg',
    year: '2018',
    imDbRating: '5.7'
  },
    {
    title: 'jurassic World El reino caido',
    image: 'https://es.web.img2.acsta.net/pictures/18/04/19/11/20/0552856.jpg',
    year: '2018',
    imDbRating: '5.7'
  },
    {
    title: 'jurassic World El reino caido',
    image: 'https://es.web.img2.acsta.net/pictures/18/04/19/11/20/0552856.jpg',
    year: '2018',
    imDbRating: '5.7'
  },
    {
    title: 'jurassic World El reino caido',
    image: 'https://es.web.img2.acsta.net/pictures/18/04/19/11/20/0552856.jpg',
    year: '2018',
    imDbRating: '5.7'
  },
    {
    title: 'jurassic World El reino caido',
    image: 'https://es.web.img2.acsta.net/pictures/18/04/19/11/20/0552856.jpg',
    year: '2018',
    imDbRating: '5.7'
  },
]

export default defineComponent({
  name: 'Home',
  components: {
    Banner,
    Section
  },
  setup() {
    const navSectionOne: PropsNav[] = [
      { icon: 'trending_up', label: 'Trends Now' },
      { icon: 'local_fire_department', label: 'Popular' },
      { icon: 'star', label: 'Premieres' },
      { icon: 'add', label: 'Recently Added' },
    ];

    const navSectionTwo: PropsNav[] = [
      { icon: 'movie', label: 'Movies' },
      { icon: 'live_tv', label: 'Series' },
      { icon: 'done', label: 'Original Series' },
      { icon: 'search', label: 'Search' },
    ];

    

    return { navSectionOne, navSectionTwo, dataSectionOne }
  },
});
</script>

<style>

</style>