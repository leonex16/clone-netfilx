<template>
  <section class="main-section-container">
    <header class="section-nav-container">
      <Nav :links="links"/>
      <FilterGenre />
    </header>
    <div class="section-body-container">
      <PostCard />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { PropsNav } from "../../shared/interfaces/Props";
import Nav from './components/Nav.vue';
import FilterGenre from './components/FilterGenre.vue';
import PostCard from '../PostCard.vue';

export default defineComponent({
  name: "Section",
  components: {
    Nav,
    FilterGenre,
    PostCard
  },
  data() {
    const links: PropsNav[] = [
      { icon: 'trending_up', label: 'Trends Now' },
      { icon: 'local_fire_department', label: 'Popular' },
      { icon: 'star', label: 'Premieres' },
      { icon: 'add', label: 'Recently Added' },
    ];

    return {links}
  }
});
</script>

<style lang="scss">
@import "../../main.scss";

.main-section-container {

}
.section-nav-container {

}
.section-body-container {
  margin: $margin auto;
  margin-bottom: 0;
  max-width: $max-width-container;
  background-color: red;
}
</style>
