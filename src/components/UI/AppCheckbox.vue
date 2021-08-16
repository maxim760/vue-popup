<template>
  <input
    hidden
    class="checkbox__input"
    type="checkbox"
    :id="id"
    :name="name"
    :disabled="disabled"
    :value="value"
    @change="change"
  />
  <label :for="id" class="checkbox__label">
    <div class="checkbox__icon" />
    <slot />
  </label>
</template>

<script>
export default {
  name: "app-checkbox",
  props: {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    value: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
  },
  methods: {
    change(e) {
      console.log("change");
      this.$emit("updateValue", e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.checkbox__label {
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
}
.checkbox__input:not(:disabled) + .checkbox__label {
  cursor: pointer;
}
.checkbox__icon {
  position: relative;
  margin-right: 15px;
  width: 20px;
  height: 20px;
  border-radius: $radius;
  background: #fff;
  border: 1px solid $gray800;
  .checkbox__input:not(:disabled) + .checkbox__label &:hover {
    border-color: #000;
  }
  .checkbox__input:disabled + .checkbox__label &:hover {
    cursor: not-allowed;
  }
  &:active {
    background: $red-gradient;
  }
  .checkbox__input:disabled + .checkbox__label & {
    background: $gray900;
    pointer-events: none;
  }
  .checkbox__input:checked + .checkbox__label & {
    background: $red-gradient;
  }
  .checkbox__input:checked + .checkbox__label &::after,
  &:active::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: url("../../assets/img/checkbox.svg");
    background-repeat: no-repeat;
    background-position: center;
  }
}
</style>