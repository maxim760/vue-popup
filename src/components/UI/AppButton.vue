<template>
  <button
    :disabled="disabled"
    :class="{
      button: !text,
      text,
      [size]: true,
      fullwidth,
      outlined: outlined && !text,
    }"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "app-button",
  props: {
    size: {
      type: String, // "small" | "big"
      default: "small",
    },
    fullwidth: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    text: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.button {
  width: fit-content;
  background: linear-gradient(
      255.35deg,
      #dc3131 0.83%,
      rgba(255, 79, 79, 0) 108.93%
    ),
    #ff5e56;
  padding: 1em 2em;
  box-shadow: 0px 0px 24px rgba(234, 0, 41, 0.33);
  border-radius: $radius;
  font-weight: 500;
  line-height: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  transition: background 0.2s ease-in;
  &:hover,
  &:active {
    background: $red;
  }
  &:disabled {
    cursor: not-allowed;
    background: $gray900;
  }
}
.outlined {
  background-color: transparent;
  border: 1px solid white;
  &:hover,
  &:active {
    background-color: #fff;
    color: black;
  }
}
.big {
  font-size: 16px;
  height: 56px;
}
.small {
  font-size: 12px;
  height: 40px;
}
.text {
  width: fit-content;
  color: $red;
  font-weight: 500;
  font-size: 0.875rem;

  transition: color 0.15s ease-in;
  &:hover {
    color: $orange;
  }
  &:active {
    color: $red;
  }
}
.fullwidth {
  width: 100%;
}
</style>