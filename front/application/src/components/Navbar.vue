<template>
  <header class="header-container">
    <nav class="navbar-container">
      <section class="navbar-section">
        <a href="#" class="navbar-brand">
          <img
            src="../assets/logo.svg"
            alt="Netflix Logo"
            class="navbar-brand__img"
          />
        </a>
      </section>
      <section class="navbar-section">
        <ul class="navbar-links">
          <li class="navbar-link navbar-link--active">
            <a href="#" class="navbar-link__anchor">Home</a>
            <span class="navbar-link__ico material-icons">circle</span>
          </li>
          <li class="navbar-link">
            <a href="#" class="navbar-link__anchor">Movies</a>
            <span class="navbar-link__ico material-icons">circle</span>
          </li>
          <li class="navbar-link">
            <a href="#" class="navbar-link__anchor">Series</a>
            <span class="navbar-link__ico material-icons">circle</span>
          </li>
          <li class="navbar-link">
            <a href="#" class="navbar-link__anchor">My List</a>
            <span class="navbar-link__ico material-icons-outlined"
              >expand_more</span
            >
          </li>
        </ul>
      </section>
      <section class="navbar-section">
        <div class="buttons-container">
          <div class="buttons-actions">
            <div class="buttons-action">
              <span
                class="buttons-action__ico material-icons-outlined"
                role="button"
                >search</span
              >
              <div class="action-container"></div>
            </div>
            <div class="buttons-action">
              <span
                class="buttons-action__ico material-icons-outlined"
                role="button"
                >notifications</span
              >
              <div class="action-container"></div>
            </div>
            <div class="buttons-action">
              <span
                class="buttons-action__ico material-icons-outlined"
                role="button"
                >face</span
              >
              <div class="action-container"></div>
            </div>
          </div>
        </div>
      </section>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",
});
</script>

<style lang="scss">
@import "../main.scss";

.header-container {
  position: sticky;
  z-index: 1000;
  background-color: rgba($primary-900, 0.2);
}
.navbar-container {
  display: flex;
  max-width: $max-width-container;
  margin: auto;
  padding: $padding * 1.5 0;
}
.navbar-section {
  &:nth-child(2) {
    flex-grow: 3;
  }
}
.navbar-brand {
}
.navbar-brand__img {
  height: auto;
  width: 100px;
}
.navbar-links {
  display: flex;
  justify-content: flex-end;
}
.navbar-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  color: $text-color-primary;
  list-style: none;
  margin: auto $margin * 2.5;

  &:nth-child(4) .navbar-link__ico {
    display: block;
    right: -25px;
    bottom: 0;
    font-size: 1.5rem;
    color: $text-color-primary;
  }

  &--active {
    color: $text-color-primary--active;

    & .navbar-link__ico {
      display: block;
    }

    &:hover .navbar-link__ico {
      color: $secondary-500 !important;
    }
  }

  &:hover .navbar-link__anchor,
  &:hover .navbar-link__ico {
    color: $text-color-primary--hover;
  }
}
.navbar-link__anchor {
  color: $text-color-primary;
  font-weight: bold;
  text-decoration: none;
  @include transition(color);
}
.navbar-link__ico {
  display: none;
  position: absolute;
  bottom: -10px;
  color: $secondary-500;
  font-size: 8px;
  @include transition(color);
}
.buttons-container {
}
.buttons-actions {
  display: flex;
}
.buttons-action {
  margin: auto $margin;
}
.buttons-action__ico {
  color: $text-color-primary;
  cursor: pointer;
  @include transition(color);

  &:hover {
    color: $text-color-primary--hover;
  }

  &:active {
    color: $text-color-primary--active;
  }
}
.action-container {
}
</style>
