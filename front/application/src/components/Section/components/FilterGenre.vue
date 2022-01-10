<template>
  <div class="filter-genre-container">
    <span class="filter-genre-container__arow material-icons" role="move_left"
      >chevron_left</span
    >
    <Button
      v-for="genre in genres"
      :key="genre.genreId"
      :buttonText="genre.genreDesc"
      :toggleBtn="true"
      activeClass="filter-genre-container__genre--active"
      customClass="filter-genre-container__genre btn-primary--400"
      @click="handleClickGenre"
    />
    <span class="filter-genre-container__arow material-icons" role="move_right"
      >chevron_right</span
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "../../Button.vue";

export default defineComponent({
  name: "FilterGenre",
  props: {
    sectionId: String,
  },
  components: {
    Button,
  },
  setup(props) {
    const genres = [
      { genreId: "Action", genreDesc: "Action" },
      { genreId: "Adventure", genreDesc: "Adventure" },
      { genreId: "Animation", genreDesc: "Animation" },
      { genreId: "Biography", genreDesc: "Biography" },
      { genreId: "Comedy", genreDesc: "Comedy" },
      { genreId: "Crime	", genreDesc: "Crime	" },
      { genreId: "Documentary", genreDesc: "Documentary" },
      { genreId: "Drama", genreDesc: "Drama" },
      { genreId: "Family", genreDesc: "Family" },
      { genreId: "Fantasy", genreDesc: "Fantasy" },
      { genreId: "Film Noir", genreDesc: "Film Noir" },
      { genreId: "History	", genreDesc: "History	" },
      { genreId: "Horror", genreDesc: "Horror" },
      { genreId: "Music", genreDesc: "Music" },
      { genreId: "Musical", genreDesc: "Musical" },
      { genreId: "Mystery", genreDesc: "Mystery" },
      { genreId: "Romance", genreDesc: "Romance" },
      { genreId: "Sci-Fi	", genreDesc: "Sci-Fi	" },
      { genreId: "Short Film", genreDesc: "Short Film" },
      { genreId: "Sport", genreDesc: "Sport" },
      { genreId: "Superhero", genreDesc: "Superhero" },
      { genreId: "Thriller", genreDesc: "Thriller" },
      { genreId: "War", genreDesc: "War" },
      { genreId: "Western", genreDesc: "Western" },
    ];

    const genresActive: string[] = [];

    function handleClickGenre(evt: PointerEvent) {
      const $self = evt.target as HTMLButtonElement;
      const genre = $self.textContent!.toLowerCase();
      const $posts = getPostsOfFilter();

      managementGenres(genre);
      filterPosts($posts);

      const areHidden = areAllPostHidden($posts);
      showNotFoundIcon(areHidden);
    }

    function managementGenres(genre: string) {
      const index = genresActive.indexOf(genre);
      index === -1 ? genresActive.push(genre) : genresActive.splice(index, 1);
    }

    function getPostsOfFilter(): NodeListOf<HTMLDivElement> {
      return document.querySelectorAll(
        `div#${props.sectionId}.section-body-container div[role="post"]`
      );
    }

    function transition(
      $el: HTMLElement,
      addClass: string,
      removeClass: string
    ) {
      $el.classList.remove(removeClass);
      $el.classList.add(addClass);

      setTimeout(() => {
        const isVisible = addClass === "animate__fadeIn";
        $el.style.display = isVisible ? "block" : "none";
      }, 200);
    }

    function getGenreListOfPosts($post: HTMLDivElement): string[] {
      const genresListRaw = $post.dataset?.genreList;
      const genresList = genresListRaw?.split(",") ?? [];
      return genresList.map((genre) => genre.toLowerCase());
    }

    function areAllPostHidden($posts: NodeListOf<HTMLDivElement>) {
      return (
        Array.from($posts).some((post) =>
          post.classList.contains("animate__fadeIn")
        ) === false
      );
    }

    function showNotFoundIcon(areHidden: boolean) {
      const $notFoundIcon = document.getElementById(`${props.sectionId}-no-movie`)!;

      areHidden
        ? transition($notFoundIcon, "animate__fadeIn", "animate__fadeOut")
        : transition($notFoundIcon, "animate__fadeOut", "animate__fadeIn")
    }

    function filterPosts($posts: NodeListOf<HTMLDivElement>): void {
      $posts?.forEach(($post) => {
        // GENRES ACTIVE EMPTY
        if (genresActive.length === 0) {
          transition($post, "animate__fadeIn", "animate__fadeOut");
          return;
        }

        const genreList = getGenreListOfPosts($post);
        const isMatch = genresActive.some((genre) =>
          genreList.includes(genre.toLowerCase())
        );

        isMatch
          ? transition($post, "animate__fadeIn", "animate__fadeOut")
          : transition($post, "animate__fadeOut", "animate__fadeIn");

      });
    }

    return { genres, handleClickGenre };
  },
});
</script>

<style lang="scss">
@import "../../../main.scss";

.filter-genre-container {
  display: flex;
  position: relative;
  max-width: $max-width-container;
  margin: $margin auto;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
}
.filter-genre-container__genre {
  position: relative;
  padding: 0 $padding / 4;
  text-transform: capitalize;
  margin-left: $margin * 1.2;

  &--active {
    border: 2px solid $secondary-500;

    & > span {
      margin-right: 1rem;
    }

    &::after{
      content: "x";
      position: absolute;
      top: 8px;
      right: 12px;
      font-size: 14px;
      font-weight: bold;
      text-transform: lowercase;
      color: $text-color-primary;
    }
  }
}
.filter-genre-container__arow {
  position: sticky;
  top: 0;
  color: $text-color-primary;
  cursor: pointer;
  font-size: 2.5rem;
  width: 50px;
  text-align: center;
  background-color: $primary-500;
  @include transition(color);

  &[role="move_left"] {
    left: 0;
  }

  &[role="move_right"] {
    right: 0;
  }

  &:hover {
    color: $text-color-primary--hover;
  }
  &:active {
    color: $text-color-primary--active;
  }
}

.filter-post--hiiden {
  display: none;
}
</style>
