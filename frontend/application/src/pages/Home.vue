<template>
  <main class="main-container">
    <Banner/>
    <Section :mountPostOnCarousel="true" :navElements="navSectionOne" :posts="dataSectionOne"/>
    <Section :mountPostOnCarousel="false" :navElements="navSectionTwo" :posts="dataSectionTwo"/>
  </main>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, ref } from 'vue';
import { IMovie } from '../../../domain/Movie/IMovie';
import { MovieService } from '../../../domain/Movie/MovieService';
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

    const dataSectionOne = ref<IMovie[]>([]);
    const dataSectionTwo = ref<IMovie[]>([]);

    onBeforeMount(async () => {
      const movies = await MovieService.getTopMoviesMock();

      dataSectionOne.value = movies.filter( (_, i) => i <= 10 );
      dataSectionTwo.value = movies.filter( (_, i) => i > 10 && i <= 20 );
    });

    return { navSectionOne, navSectionTwo, dataSectionOne, dataSectionTwo }
  },
});
</script>

<style>
.main-container {
  background-color: transparent;
}
</style>