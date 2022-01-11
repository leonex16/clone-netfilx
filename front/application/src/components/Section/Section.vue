<template>
  <section class="main-section-container">
    <header class="section-nav-container">
      <Nav :links="navElements" />
      <FilterGenre :sectionId="sectionId" />
    </header>
    <div :id="sectionId" class="section-body-container">
      <img
        :id="`${sectionId}-no-movie`"
        :class="{ 'section-body-container__img': mountPostOnCarousel }"
        class="
          section-body-container__img
          animate__animated animate__faster
          section-body-container__img
        "
        src="../../assets/no-movie.svg"
        alt="No Movies"
      />
      <div class="section-body-container__carousel" v-if="mountPostOnCarousel">
        <Carousel :sectionId="sectionId" :posts="posts" />
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
import PostCard from "../PostCard/PostCard.vue";
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
  setup() {
    return {
      sectionId: new Date().getTime().toString(36),
    };
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
  position: relative;
  margin: $margin * 2 auto;
}

.section-body-container__img {
  display: none;
  margin: auto;
  width: 180px;
  height: 180px;
  filter: invert(0.8);

  position: absolute;
  inset: 0;
  margin: auto;

  &--show {
    display: block;
  }
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
  min-height: 702px; // TWICE ROWS HEIGHT
}
</style>
