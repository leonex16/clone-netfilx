<template>
  <div class="carousel-container">
    <div class="carousel-content">
      <span class="carousel-content-left material-icons" role="prev-post">chevron_left</span>
      <PostCard v-for="post in posts" :key="post.id" />
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
    posts: { type: Object as PropType<IMDBTitle> }
  },
  components: {
    PostCard
  }
})
</script>

<style lang="scss">
@import '../../../main.scss';
</style>