<template>
  <div class="carousel-container">
    <div class="carousel-content">
      <span class="carousel-content__left material-icons" role="prev-post"
        >chevron_left</span
      >
      <div class="carousel-content__posts">
        <PostCard v-for="(post, i) in posts" :key="i" :post="post" />
      </div>
      <span class="carousel-content__right material-icons" role="next-post"
        >chevron_right</span
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import PostCard from "../PostCard/PostCard.vue";
import { IMDBTitle } from "../../shared/interfaces/IMDbTitle";

export default defineComponent({
  name: "Carousel",
  props: {
    posts: { type: Object as PropType<IMDBTitle[]> },
    sectionId: String,
  },
  components: {
    PostCard,
  },
});
</script>

<style lang="scss">
@import "../../main.scss";

.carousel-container {
  position: relative;
  // background: blue;
}
.carousel-content {
  display: flex;
  max-width: $max-width-container + 80px;
  position: relative;
  margin: auto;
  overflow-x: scroll;
  // background: yellow;

  & > div {
    margin-right: $margin * 2;
  }
  &::-webkit-scrollbar {
    display: none;
  }
}
.carousel-content__left {
  left: 0;
  box-shadow: 10px 0 25px 45px $primary-500;
}
.carousel-content__right {
  right: 0;
  box-shadow: -10px 0 25px 45px $primary-500;
}
.carousel-content__left,
.carousel-content__right {
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  z-index: 1;

  background-color: $primary-500;
  color: $text-color-primary;
  cursor: pointer;
  font-size: 2.8rem;

  &:hover {
    color: $text-color-primary--hover;
  }
  &:active {
    color: $text-color-primary--active;
  }
}
.carousel-content__posts {
  flex-grow: 1;
  display: flex;
  align-items: center;
  gap: $margin * 2;
  min-height: 335px; // HEIGHT OF POST CARD 
}
</style>