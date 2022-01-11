
<template>
  <section class="post-summary">
    <header class="post-summary__header">
      <h4 class="post-summary__title">{{ summary.title }}</h4>
      <p class="post-summary__duration">{{ summary.runtimeStr }}</p>
    </header>
    <div class="post-summary__content">
      <p class="post-summary__plot">{{ summary.plot }}</p>
      <router-link to="/post/{ url }" class="post-summary__btn">
        <Button
          buttonText="WATCH"
          customClass="btn-secondary btn-secondary--shadow"
          iconText="play_arrow"
        />
      </router-link>
    </div>
    <footer class="post-summary__footer">
      <span class="post-summary__ico material-icons">favorite</span>
      <span class="post-summary__ico material-icons">add</span>
      <span class="post-summary__ico material-icons">visibility</span>
    </footer>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Button from "../../Button.vue";

interface PostCardSummaryProps {
  title: string;
  runtimeStr: string;
  plot: string;
  url: string;
}

export default defineComponent({
  name: "PostCardSummary",
  props: {
    summary: { type: Object as PropType<PostCardSummaryProps> },
  },
  components: {
    Button,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
@import '../../../main.scss';

.post-summary {
  background: #fff;
  position: absolute;
  top: 0;

  display: flex;
  flex-direction: column;

  height: 280px * 1.2; // Scale
  width: 100%;
  padding: 0.5rem;
}

.post-summary__header {
  display: flex;
}

.post-summary__title {
  flex-grow: 1;
}

.post-summary__duration {}

.post-summary__content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.post-summary__plot {}

.post-summary__btn {
    transform: scale(0.8);
    margin-bottom: $margin;
}

.post-summary__footer {
  display: flex;
  justify-content: space-around;
}

.post-summary__ico {}

</style>