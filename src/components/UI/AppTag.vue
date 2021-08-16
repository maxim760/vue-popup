<template>
  <button class="tag" :class="{ active }" @click="toggle">
    <slot />
    <span class="tag__add">
      <slot name="add" />
    </span>
  </button>
</template>

<script>
export default {
  name: "app-tag",
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggle() {
      this.$emit("update:active", !this.active);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.tag {
  cursor: pointer;
  width: fit-content;
  display: flex;
  font-size: 14px;
  line-height: 1.7;
  padding: 6px 12px;
  border-radius: 50px;
  color: black;
  background: #eef0f2;
  transition: background 0.1s ease-in;
  &.active,
  &:active {
    background: $red-gradient;
    color: white;
  }
  &:not(:active):hover {
    background: $gray800;
    color: black;
  }
}

.tag__add {
  margin-left: 5px;
  color: #808080;
  .tag.active &,
  .tag:active & {
    color: inherit;
  }
  .tag:not(:active):hover & {
    color: #808080;
  }
}
</style>