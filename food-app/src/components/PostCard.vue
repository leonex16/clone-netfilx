<template>
  <div class="post-container">
    <figure class="post-content">
      <img
        src="https://es.web.img2.acsta.net/pictures/18/04/19/11/20/0552856.jpg"
        alt=""
        class="post-content__img"
      />
      <figcaption class="post-information">
        <h4 class="post-information__title">jurassic World El reino caido</h4>
        <div class="post-detail">
          <span class="post-detail__year">2018</span>
          <div class="post-actions">
            <span class="post-detail__ico material-icons">favorite</span>
            <span class="post-detail__ico material-icons">visibility</span>
          </div>
          <div class="post-calification">
            <span class="post-calification__ico material-icons">star</span>
            <span class="post-calification__label">1.1</span>
          </div>
        </div>
      </figcaption>
    </figure>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PostCard",
});
</script>

<style lang="scss">
@import "../../../main.scss";

.post-container {
  width: 160px;
  height: auto;
}
.post-content {
}
.post-content__img {
  width: 100%;
  border-radius: 5px;
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
