<template>
  <div class="carousel-container">
    <div class="carousel-content">
      <span class="carousel-content-left material-icons" role="prev-post">chevron_left</span>
      <PostCard v-for="(post, i) in posts" :key="i" :post="post" />
      <span class="carousel-content-right material-icons" role="next-post">chevron_right</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import PostCard from "../PostCard.vue";
import { IMDBTitle } from "../../shared/interfaces/IMDbTitle";

export default defineComponent({
  name: 'Carousel',
  props: {
    posts: { type: Object as PropType<IMDBTitle[]> }
  },
  components: {
    PostCard
  }
})
</script>

<style lang="scss">
@import '../../main.scss';

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
.carousel-content-left,
.carousel-content-right {
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;

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
.carousel-content-left {
  left: 0;
  box-shadow: 10px 0 25px 45px $primary-500;
}
.carousel-content-right {
  right: 0;
  box-shadow: -10px 0 25px 45px $primary-500;

}
</style>