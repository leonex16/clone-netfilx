<template>
  <button :class="generateClass()" @click="handleClickBtn">
    <span class="btn__ico material-icons">{{ iconText }}</span>
    <span class="btn__text">{{ buttonText }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Button",
  props: {
    customClass: String,
    disabledClass: String,
    activeClass: String,
    iconText: String,
    buttonText: String,
    toggleBtn: Boolean,
  },
  setup(props: any) {
    const generateClass = () => {
      return `btn ${props.customClass}`;
    };

    const handleClickBtn = (evt: PointerEvent) => {
      const $self = evt.target as HTMLButtonElement;
      $self.classList.toggle(props.activeClass);
    };

    return { generateClass, handleClickBtn: props.toggleBtn ? handleClickBtn : () => {} };
  },
});
</script>

<style lang="scss">
@import "../main.scss";

.btn {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 150px;
  border-radius: 200px;
  padding: $padding $padding / 2;
  @include transition(background-color);
}
.btn-primary--500 {
  background-color: $primary-500;

  &:hover {
    background-color: $primary-400;
  }
  &:active {
    background-color: $primary-400;
  }
}
.btn-primary--400 {
  background-color: $primary-400;

  &:hover {
    background-color: $primary-300;
  }
  &:active {
    background-color: $primary-300;
  }
}
.btn-primary--300 {
  background-color: $primary-300;

  &:hover {
    background-color: $primary-200;
  }
  &:active {
    background-color: $primary-200;
  }
}
.btn-secondary {
  background-color: $secondary-500;

  &--active {
    background-color: $secondary-600;
  }

  &:hover {
    background-color: $secondary-400;
  }
  &:active {
    background-color: $secondary-400;
  }
}
.btn-secondary--shadow {
  box-shadow: 2px 2px 10px $secondary-600;
}
.btn__ico {
  pointer-events: none;
  color: $text-color-primary;
  margin-right: $margin / 2;
}
.btn__text {
  pointer-events: none;
  color: $text-color-primary;
  font-weight: bold;
}
</style>
