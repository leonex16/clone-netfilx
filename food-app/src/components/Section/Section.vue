<template>
  <section class="main-section-container">
    <header class="section-nav-container">
      <Nav :links="navElements"/>
      <FilterGenre />
    </header>
    <div class="section-body-container">
        <Carousel v-if="mountPostOnCarousel" :posts="data"/>
      <div class="section-body-container__post" v-else >
        <PostCard v-for="post in posts" :key="post" :post="post" />
      </div>
    </div>
  </section>  
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { PropsNav } from "../../shared/interfaces/Props";
import { IMDBTitle } from "../../shared/interfaces/IMDbTitle";
import PostCard from "../PostCard.vue";
import Nav from "./components/Nav.vue";
import Carousel from "../Carousel/Carousel.vue";
import FilterGenre from "./components/FilterGenre.vue";

export default defineComponent({
  name: "Section",
  props: {
    navElements: { type: Object as PropType<PropsNav[]> },
    posts: { type: Object as PropType<IMDBTitle[]> },
    mountPostOnCarousel: { type: Boolean }
  },
  components: {
    Nav,
    FilterGenre,
    Carousel,
    PostCard
  },
  data() {
    const { navElements, posts, mountPostOnCarousel } = this;
    return { navElements, posts, mountPostOnCarousel }
  }
});
</script>

<style lang="scss">
@import "../../main.scss";

.main-section-container {
  }
.section-nav-container {
  & > * {
    margin: $margin auto;
  }

}
.section-body-container {
  margin: $margin * 2 auto;

}

.section-body-container__posts {

}
</style>
