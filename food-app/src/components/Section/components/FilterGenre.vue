<template>
  <div class="filter-genre-container">
    <span class="filter-genre-container__arow material-icons" role="move_left"
      >chevron_left</span
    >
    <Button
      v-for="genre in genres"
      :key="genre.genreId"
      :buttonText="genre.genreDesc"
      customClass="filter-genre-container__genre btn-primary--400"
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
  components: {
    Button,
  },
  data() {
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

    return { genres };
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
  padding: $padding / 2 $padding / 4;
  text-transform: capitalize;
  margin-left: $margin;
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
</style>

Popular Movies by Genre { genreId: 'Action', genreDesc: 'Action' }, { genreId:
'Adventure', genreDesc: 'Adventure' }, { genreId: 'Animation', genreDesc:
'Animation' }, { genreId: 'Biography', genreDesc: 'Biography' }, { genreId:
'Comedy', genreDesc: 'Comedy' }, { genreId: 'Crime ', genreDesc: 'Crime ' }, {
genreId: 'Documentary', genreDesc: 'Documentary' }, { genreId: 'Drama',
genreDesc: 'Drama' }, { genreId: 'Family', genreDesc: 'Family' }, { genreId:
'Fantasy', genreDesc: 'Fantasy' }, { genreId: 'Film Noir', genreDesc: 'Film
Noir' }, { genreId: 'History ', genreDesc: 'History ' }, { genreId: 'Horror',
genreDesc: 'Horror' }, { genreId: 'Music', genreDesc: 'Music' }, { genreId:
'Musical', genreDesc: 'Musical' }, { genreId: 'Mystery', genreDesc: 'Mystery' },
{ genreId: 'Romance', genreDesc: 'Romance' }, { genreId: 'Sci-Fi ', genreDesc:
'Sci-Fi ' }, { genreId: 'Short Film', genreDesc: 'Short Film' }, { genreId:
'Sport', genreDesc: 'Sport' }, { genreId: 'Superhero', genreDesc: 'Superhero' },
{ genreId: 'Thriller', genreDesc: 'Thriller' }, { genreId: 'War', genreDesc:
'War' }, { genreId: 'Western', genreDesc: 'Western' }, Popular TV Series by
Genre Action Adventure Animation Biography Comedy Crime Documentary Drama Family
Fantasy Game Show History Horror Music Musical Mystery News Reality-TV Romance
Sci-Fi Sport Superhero Talk Show Thriller War Western
