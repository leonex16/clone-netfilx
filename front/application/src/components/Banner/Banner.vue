<template>
  <section class="main-section" role="banner">
    <Slide
      v-for="(product, i) in products"
      :key="i"
      :product="product"
      :show="i === 0"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onBeforeUnmount, ref } from "vue";
import { IMovie } from "../../../../domain/Movie/IMovie";
import { MovieService } from "../../../../domain/Movie/MovieService";
import Slide from "./components/Slide.vue";

export default defineComponent({
  name: "Banner",
  components: {
    Slide,
  },
  setup() {
    const products = ref<IMovie[]>([]);
    const swithSliderInterval = swithSlider();

    onBeforeMount(async () => {
      const movies = await MovieService.getMoviesMock();

      products.value = movies;
    });

    onBeforeUnmount(() => {
      clearInterval(swithSliderInterval);
    });

    function swithSlider() {
      const findSlideActive = (slide: Element) => {
          return !slide.matches(".slide-container--hidden");
        };

      return setInterval(() => {
        const slides = Array.from(document.querySelectorAll("figure.slide-container"));
        let indxAcive = slides.findIndex(findSlideActive);
        const $slideActive = slides.find(findSlideActive);
        const hasSibling = $slideActive?.nextElementSibling;

        hasSibling && indxAcive !== -1
          ? slides[indxAcive + 1].classList.remove("slide-container--hidden")
          : slides[0].classList.remove("slide-container--hidden");

        $slideActive?.classList?.add("slide-container--hidden");
      }, 5000);

    }

    return { products };
  },
});
</script>

<style lang="scss">
@import "../../main.scss";

.main-section {
  min-height: calc(100vh - 75px * 2);
  max-width: 100%;
}
</style>
