<template>
  <article class="filters-calification">
    <section class="filter-by">
      <header class="filter-by__header">
        <span class="filter-by__label">Sort By</span>
      </header>
      <div class="filter-by__year">
        <span class="material-icons filter-by__ico">arrow_drop_down</span>
        <select
          name="year-select"
          id="year-select"
          class="filter-by__select"
          @change="handleChangeSelect"
        >
          <option value="-1" selected>Year</option>
          <option value="1">2000</option>
        </select>
      </div>
      <div class="filter-by__property">
        <span class="material-icons filter-by__ico">arrow_drop_down</span>
        <select
          name="property-select"
          id="property-select"
          class="filter-by__select"
          @change="handleChangeSelect"
        >
          <option value="-1" selected>Sort</option>
          <option value="1">A-Z</option>
        </select>
      </div>
    </section>
    <section class="filter-slice">
      <div class="filter-slice__container">
        <span class="material-icons filter-slice__ico">star</span>
        <input
          type="range"
          name="stars-slice"
          id="stars-slice"
          class="filter-slice__range"
          min="1"
          value="5"
          max="10"
          @input="handleInputRange"
        />
        <span class="filter-slice__max-calification">10</span>
      </div>
    </section>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FilterCalification",
  setup() {
    const handleChangeSelect = (event: Event) => {
      const self = event.target as HTMLSelectElement;
      const { selectedIndex } = self;
      const isNotOptionPlaceholder = selectedIndex !== 0;

      self.classList.toggle(
        "filter-by__select--active",
        isNotOptionPlaceholder
      );
    };

    const handleInputRange = (event: Event) => {
      const self = event.target as HTMLInputElement;
      const { value } = self;
      self.style.background = `linear-gradient(
        to right,
        #f4ba0b 0%,
        #f4ba0b ${+value * 10}%,
        #cccccc ${+value * 10 - 100}%,
        #cccccc 100%
      )`;
    };

    return {
      handleChangeSelect,
      handleInputRange,
    };
  },
});
</script>

<style lang="scss">
@import "../../../main.scss";
.filters-calification {
  display: flex;
  justify-content: space-between;
  margin-bottom: $margin * 1.5;
}
.filter-by {
  display: flex;
  gap: 1rem;
}
.filter-by__header {
  display: inline;
  padding-top: 11px;
  font-size: .8rem;
  font-weight: bold;
}
.filter-by__label {
  color: $text-color-primary
}
.filter-by__year {
  position: relative;
}
.filter-by__property {
  position: relative;
}
.filter-by__select {
  background-color: $primary-400;
  color: $text-color-primary;
  text-transform: capitalize;
  font-weight: bold;
  border-radius: 200px;
  padding: $padding / 2;
  @include transition(background-color);
  min-width: 100px;
  text-align-last: center;
  appearance: none;

  &--active {
    border: 2px solid $secondary-500;
  }

  &:hover {
    background-color: $primary-300;
  }
  &:active {
    background-color: $primary-300;
  }
}
.filter-by__ico {
  position: absolute;
  right: 3px;
  top: 50%;
  transform: translateY(-50%);
  color: $text-color-primary;
  font-size: 1.5rem;
  pointer-events: none;
}
.filter-slice {
}
.filter-slice__container {
  margin-right: 1rem;
}
.filter-slice__ico {
  color: $yellow-500;
  font-size: 1rem;
  margin-right: 1.5rem;
  position: relative;
  top: 5px;
}
.filter-slice__range {
  position: relative;
  appearance: none;
  height: 5px;
  border-radius: 5px;
  background: linear-gradient(
    to right,
    $yellow-500 0%,
    $yellow-500 50%,
    $text-color-primary 50%,
    $text-color-primary 100%
  );
  outline: none;
  opacity: 0.9;
  transition: opacity 0.2s linear, background 200ms linear;

  &::before,
  &::after {
    position: absolute;
    top: -5px;
    font-size: 0.8rem;
    color: $text-color-primary;
    font-weight: bold;
  }
  &::before {
    content: "1";
    left: -15px;
  }

  &::after {
    content: "10";
    right: -20px;
  }

  &::-webkit-slider-thumb {
    appearance: none;
    border-radius: 15px;
    width: 15px;
    height: 15px;
    cursor: pointer;
    background-color: #fff;
  }

  &:hover {
    opacity: 1;
  }
}
.filter-slice__max-calification {
}
</style>
