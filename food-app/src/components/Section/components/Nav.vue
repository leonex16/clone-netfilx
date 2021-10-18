<template>
  <nav class="nav-container">
    <ul class="nav-links">
      <li v-for="link in links" :key="link.icon" class="nav-link">
        <span class="nav-link__ico material-icons">{{ link.icon }}</span>
        <span class="nav-link__label">{{ link.label }}</span>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { PropsNav } from "../../../shared/interfaces/Props";

export default defineComponent({
  name: "Nav",
  props: {
    links: { type: Object as PropType<PropsNav[]> },
  },
});
</script>

<style lang="scss">
@import "../../../main.scss";

.nav-container {
  max-width: $max-width-container;
  margin: auto;
  border-bottom: 1px solid $primary-400;
}
.nav-links {
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  margin: $margin auto;
}
.nav-link {
  display: flex;
  align-items: center;
  color: $text-color-primary;
  font-size: 1rem;
  cursor: pointer;
  @include transition(color);

  &--active {
    position: relative;
    color: $text-color-primary--active;
    font-size: 1.5rem;
    font-weight: bold;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -8px;
      margin: auto;
      background-color: $secondary-500;
      border-radius: 100%;
      height: 6px;
      width: 6px;
    }
  }

  &:hover {
    color: $text-color-primary--hover;
  }
}
.nav-link__ico {
  margin: auto $margin;
}
.nav-link__label {
}
</style>
