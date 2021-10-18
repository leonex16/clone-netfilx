<template>
  <section class="main-section" role="banner">
    <Slide style="opacity: 1"/>
    <Slide style="opacity: 0" mainClass="slide-container--hidden"/>
  </section>
</template>
    <figure class="hero-image hero-image--hidden">
      <img
        src="https://blogdesuperheroes.es/wp-content/plugins/BdSGallery/BdSGaleria/19050.jpg"
        alt=""
        class="hero-image__cover"
      />
      <figcaption class="cover-image">
        <div class="cover-image-duration">
          <span class="cover-image-duration__label">Duration: </span>
          <span class="cover-image-duration__value">51m</span>
        </div>
        <div class="cover-information">
          <!-- Calification -->
          <span class="cover-information__label material-icons">star</span>
          <span class="cover-information__value">7.5</span>
          <!-- Number of Seasons -->
          <span class="cover-information__label">Season</span>
          <span class="cover-information__value">10</span>
          <!-- Number of Episodes -->
          <span class="cover-information__label">Episode</span>
          <span class="cover-information__value">22</span>
        </div>
        <div class="cover-content">
          <h1 class="cover-content__title">The walking dead</h1>
          <p class="cover-content__resume">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam odio
            culpa pariatur, dolorem in unde corporis nam est ab rem ducimus
            commodi modi laudantium eaque eveniet magni corrupti laboriosam at!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam odio
            culpa pariatur, dolorem in unde corporis nam est ab rem ducimus
            commodi modi laudantium eaque eveniet magni corrupti laboriosam at!
          </p>
          <div class="cover-actions">
            <Button
              buttonText="WATCH"
              customClass="btn-secondary btn-secondary--shadow"
              iconText="play_arrow"
            />
            <span></span>
            <Button
              buttonText="ADD LIST"
              customClass="btn-primary"
              iconText="add"
            />
          </div>
        </div>
      </figcaption>
    </figure>

<script lang="ts">
import { defineComponent, onBeforeMount, onBeforeUnmount, ref } from "vue";
import { IMDbService } from "../../services/IMDbService";
import { OptsTitle, IMDBTitle } from "../../shared/interfaces/IMDbTitle";
import Slide from "./components/Slide.vue";

export default defineComponent({
  name: "Banner",
  components: {
    Slide,
  },
  setup() {
    const products = ref<IMDBTitle[]>([]);
    const _IMDbService = IMDbService;
    const swithSlider = setInterval(() => {
      const slides = document.querySelectorAll("figure.slide-container");
      slides.forEach( slide => {
        slide.matches('.slide-container--hidden')
          ? slide.classList.remove("slide-container--hidden")
          : slide.classList.add("slide-container--hidden");
      });
    }, 5000);

    onBeforeMount( async () => {
      const idTvs: string[] = await _IMDbService.MostPopularIdTVs( 5 );
      const opt: OptsTitle[] = ['Images', 'Posters', 'Ratings', 'Trailer'];
      const data: IMDBTitle[] = [];

      idTvs.forEach( async idTv => {
        const titleData: IMDBTitle = await _IMDbService.Title( idTv, opt );
        data.push( titleData );
      });

      products.value = data;
    });

    onBeforeUnmount( () => {
      clearInterval(swithSlider);
    });
  },
});
</script>

<style lang="scss">
@import "../../main.scss";

.main-section {
  min-height: calc(80vh - 75px);
  max-width: 100%;
}
</style>
