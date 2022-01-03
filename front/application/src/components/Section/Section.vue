<template>
  <section class="main-section-container">
    <header class="section-nav-container">
      <Nav :links="navElements" />
      <FilterGenre />
    </header>
    <div class="section-body-container">
      <div class="section-body-container__carousel" v-if="mountPostOnCarousel">
        <Carousel :posts="posts" />
      </div>
      <div class="section-body-container__posts" v-else>
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
    mountPostOnCarousel: { type: Boolean },
  },
  components: {
    Nav,
    FilterGenre,
    Carousel,
    PostCard,
  },
});
</script>

<style lang="scss">
@import "../../main.scss";

.main-section-container {
  max-width: $max-width-container;
  margin: auto;
}
.section-nav-container {
  & > * {
    margin: $margin auto;
  }
}
.section-body-container {
  margin: $margin * 2 auto;
}

.section-body-container__carousel {
  max-width: 100%;
}

.section-body-container__posts {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  max-width: 100%;
  margin: auto;
  justify-items: center;
}
</style>
