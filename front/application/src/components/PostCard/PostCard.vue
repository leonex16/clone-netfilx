<template>
  <div
    class="post-container animate__animated animate__faster"
    :data-genre-list="
      Math.round(Math.random()) === 0 ? 'action,animation' : 'biography,comedy'
    "
    role="post"
  >
    <router-link
      :to="{ name: 'movie', params: { id: 'id', name: post.title } }"
    >
      <figure class="post-content">
        <img
          :src="removeWhiteSpaces(post.image)"
          :alt="post.title"
          class="post-content__img"
          loading="lazy"
          :onerror="`this.src='${imgDefault}'`"
          onload="this.nextElementSibling.classList.add('post-content__loader--hidden')"
        />
        <div class="post-content__loader"></div>
        <PostCardSummary :summary="PostCardSummary" />
        <figcaption class="post-information">
          <h4 class="post-information__title">{{ post.title }}</h4>
          <div class="post-detail">
            <span class="post-detail__year">{{ post.year }}</span>
            <div class="post-actions">
              <span class="post-detail__ico material-icons">favorite</span>
              <span class="post-detail__ico material-icons">visibility</span>
            </div>
            <div class="post-calification">
              <span class="post-calification__ico material-icons">star</span>
              <span class="post-calification__label"
                >{{ post.imDbRating }}
              </span>
            </div>
          </div>
        </figcaption>
      </figure>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import PostCardSummary from "./components/PostCardSummary.vue";
import { IMDBTitle } from "../../shared/interfaces/IMDbTitle";
import imgDefault from "@/assets/no-image.png";

export default defineComponent({
  name: "PostCard",
  props: {
    post: { type: Object as PropType<IMDBTitle> },
  },
  components: {
    PostCardSummary,
  },
  setup(props) {
    // https://via.placeholder.com/150x250/1f1f1f/FFFFFF?text=No+Image+Available
    const { title, runtimeStr, plot } = props.post as any;

    const PostCardSummary = {
      title: title,
      runtimeStr: runtimeStr,
      plot: plot,
      url: title,
    };

    const removeWhiteSpaces = (str: string) => str.replace(/\s/g, "");

    const loadedImage = (self: HTMLImageElement) =>
      self.classList.add("post-content__loader--hidden");

    return {
      PostCardSummary,
      imgDefault,
      removeWhiteSpaces,
      loadedImage,
    };
  },
});
</script>

<style lang="scss">
@import "../../main.scss";

.post-container {
  position: relative;
  max-width: 180px;
}
.post-content {
}
.post-content__loader {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;

  border: 2px solid $secondary-500;
  border-top: 2px solid $primary-300;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 2s linear infinite;

  &--hidden {
    display: none;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.post-content__img {
  width: 180px;
  height: 280px;
  border-radius: 5px;
  object-fit: cover;
  transition: transform 200ms linear 500ms, filter 200ms linear 500ms;

  &:hover {
    transform: scale(1.2);
    filter: blur(4px) brightness(0.5);
  }
}
.post-information {
}
.post-information__title {
  color: $text-color-primary;
  text-transform: capitalize;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: $margin / 2;
}
.post-detail {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.post-detail__year {
  color: $text-color-primary--disabled;
  font-size: 0.8rem;
}
.post-actions {
  flex-grow: 1;
  text-align: right;
  line-height: 1rem;
}
.post-detail__ico {
  color: $text-color-primary;
  cursor: pointer;
  font-size: 1rem;
  margin: auto $margin / 2;
  @include transition(color);

  &:hover {
    color: $text-color-primary--hover;
  }
}
.post-calification {
  display: flex;
  align-items: flex-start;
}
.post-calification__ico {
  color: $yellow-500;
  font-size: 1rem;
}
.post-calification__label {
  color: $yellow-500;
  font-family: "sans-serif";
  font-size: 0.8rem;
  margin-left: $margin / 4;
}
</style>

