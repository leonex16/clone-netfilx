
<template>
  <section class="post-summary post-summary--hidden">
    <header class="post-summary__header">
      <h4 class="post-summary__title">{{ summary.title }}</h4>
      <p class="post-summary__duration">{{ summary.runtimeStr }}</p>
    </header>
    <div class="post-summary__content">
      <p class="post-summary__plot">{{ summary.plot || 'ESTO ES UN TEXTO MUY LARGO, PERO DEMASIADO LARGO PAR ALO QUE BUSCA , PLATANO' }}</p>
      <router-link to="/post/{ url }" class="post-summary__btn">
        <Button
          buttonText="WATCH"
          customClass="btn-secondary btn-secondary--shadow post-summary__btn"
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
    return { };
  },
});
</script>

<style lang="scss">
@import "../../../main.scss";

.post-summary {
  position: absolute;
  top: -28px;
  left: -18px;

  display: flex;
  flex-direction: column;
  height: calc(280px * 1.2); // Scale PostCard
  width: calc(100% * 1.2); // Scale PostCard
  padding: 0.5rem;

  border-radius: 5px;
  pointer-events: none;
  transition: visibility 200ms linear, opacity 200ms linear;
  transition-delay: 500ms;

  &--hidden {
    visibility: hidden;
    opacity: 0;
  }
}

.post-summary__header {
  display: flex;
  color: #FFF;
  margin: $margin auto;
}

.post-summary__title {
  flex-grow: 1;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 180px;
}

.post-summary__duration {
}

.post-summary__content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.post-summary__plot {
  color: #FFF;
  font-size: 14px;
}

.post-summary__btn {
  transform: scale(0.9);
  margin-bottom: $margin;
  pointer-events: auto;
}

.post-summary__footer {
  display: flex;
  justify-content: space-around;
  color: #FFF;
}

.post-summary__ico {
}
</style>