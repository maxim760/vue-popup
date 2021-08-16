<template>
  <label class="wrapper" :class="{ fullwidth }">
    <span class="label" v-if="label">{{ label }}</span>
    <input
      :type="type"
      :placeholder="placeholder"
      class="input"
      :name="name"
      :class="{ error: errorMessage }"
      :value="inputValue"
      @input="handleChange"
      @blur="handleBlur"
    />
    <span class="error__message" v-if="errorMessage">{{ errorMessage }}</span>
  </label>
</template>

<script>
import { useField } from "vee-validate";
export default {
  name: "app-input",
  props: {
    modelValue: {
      type: [String, Number],
    },
    type: {
      type: String,
      default: "text",
    },
    label: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    fullwidth: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const {
      value: inputValue,
      errorMessage,
      handleBlur,
      handleChange,
    } = useField(props.name, undefined, {
      initialValue: props.modelValue,
    });
    return {
      handleChange,
      handleBlur,
      errorMessage,
      inputValue,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.wrapper {
  display: flex;
  flex-direction: column;
  width: fit-content;
  &.fullwidth {
    width: 100%;
  }
}
.label {
  font-size: 14px;
  line-height: 1.7;
  color: black;
  margin-bottom: 8px;
}
.input {
  outline: none;
  font-size: 14px;
  line-height: 1.7;
  color: black;
  border-radius: 3px;
  border: 1px solid $gray800;
  padding: 8px 10px;
  &:hover {
    border-color: #000;
  }
  &::placeholder {
    color: gray800;
  }
  &:disabled {
    border-color: #808080;
  }
  &.error {
    border-color: #ea0029;
  }
}
.error__message {
  margin-top: 4px;
  color: #ea0029;
  font-size: 10px;
}
</style>