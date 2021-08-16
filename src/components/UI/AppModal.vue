<template>
  <div class="modal__overlay" @click="close">
    <div @click.stop class="modal">
      <img
        class="modal__close"
        src="@/assets/img/close.svg"
        alt="close modal"
        @click="close"
      />
      <header class="modal__header">
        <slot name="header" />
      </header>
      <section class="modal__body">
        <slot name="body"> </slot>
      </section>
      <footer class="modal__footer">
        <slot name="footer" />
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-modal",
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.modal__overlay {
  position: fixed;
  z-index: 10;
  max-height: 100%;
  background-color: #e5e5e5;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow-y: auto;
  display: flex;
}
.modal {
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 2rem;
  background-color: #fff;
  border-radius: 30px;
  width: 552px;
  cursor: pointer;
  margin: auto;
  @media #{$media-tablet} {
    width: 453px;
  }
  @media #{$media-mobile} {
    width: 100%;
    min-height: 100%;
    border-radius: 0;
    padding: 2rem 1rem;
  }
}
.modal__close {
  top: 22px;
  right: 18px;
  padding: 5px;
  position: absolute;
  transition: transform 0.2s ease-in;
  &:hover {
    transform: scaleX(-1);
  }
}
.modal__header {
  font-weight: 500;
  font-size: 28px;
  line-height: 1.5;
  margin-bottom: 1rem;
}
.modal__body {
  display: flex;
  flex: 1;
  flex-direction: column;
}
.modal__footer {
  margin-top: 2.5rem;
}
</style>