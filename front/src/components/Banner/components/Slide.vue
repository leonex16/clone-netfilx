<template>
      <figure :class="generateMainClass">
      <img
        src="https://www.plumbagos.com/wp-content/uploads/2020/08/Cover-7DS.jpg"
        alt=""
        class="slide-container__cover"
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
          <span class="cover-information__value">5</span>
          <!-- Number of Episodes -->
          <span class="cover-information__label">Episode</span>
          <span class="cover-information__value">12</span>
        </div>
        <div class="cover-content">
          <h1 class="cover-content__title">The seven deadly sins</h1>
          <p class="cover-content__resume">
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
              customClass="btn-primary--500"
              iconText="add"
            />
          </div>
        </div>
      </figcaption>
    </figure>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IMDBTitle } from "../../../shared/interfaces/IMDbTitle";
import Button from "../../Button.vue";

export default defineComponent({
  name: "Slide",
  props: {
    mainClass: String,
    product: { type: Object as PropType<IMDBTitle>},
  },
  components: {
    Button,
  },
  setup(p) {

    console.log(p)
  },
  computed: {
    generateMainClass() {
      return `slide-container ${this.mainClass}`
    }
  }
});
</script>

<style lang="scss">
@import "../../../main.scss";

.slide-container {
  position: absolute;
  top: 0;
  left: 0;
  @include transition(opacity, .5s);

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-color: hsla(0, 0, 0, 0.5);
    height: 100%;
    width: 100%;
  }
}
.slide-container--hidden {
  opacity: 0;
  touch-action: none;
}
.slide-container__cover {
  max-height: 80vh;
  min-height: 80vh;
  width: 100vw;
  object-fit: cover;
  object-position: top;
}
.cover-image {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 200;
  max-width: $max-width-container;
  width: 100%;
}
.cover-image-duration {
  color: $text-color-primary;
  font-weight: bold;
  margin-bottom: $margin;
}
.cover-image-duration__label {
  color: $text-color-primary--active;
  font-weight: bold;
}
.cover-image-duration__value {
  color: $text-color-primary;
  font-weight: bold;
}
.cover-information {
}
.cover-information__label {
  color: $text-color-primary;
  font-weight: bold;

  &:nth-child(1) {
    color: $yellow-300;
    font-size: 1rem;
    line-height: 0rem;
  }
}
.cover-information__value {
  color: $secondary-500;
  font-weight: bold;
  margin: auto $margin / 2;

  &:nth-child(2) {
    color: $text-color-primary;
  }
}
.cover-content {
  width: 500px;
}
.cover-content__title {
  font-size: 3rem;
  text-transform: capitalize;
  color: $text-color-primary;
}
.cover-content__resume {
  color: $text-color-primary;
  line-height: 1.5rem;
  text-align: justify;
}
.cover-actions {
  display: flex;
  margin: $margin auto;

  & > span {
    margin: auto $margin;
  }
}

</style>