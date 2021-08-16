<template>
  <div :key="year" class="checkbox">
    <app-checkbox :id="`year_${year}`" name="payment">
      <div>
        {{ formatPayment }}
        <span class="year">{{ formatYear }}</span>
      </div>
    </app-checkbox>
  </div>
</template>

<script>
import { formatNumberIntoAdjective } from "@/utils/formatNumberIntoAdjective";
export default {
  props: {
    year: {
      type: Number,
      required: true,
    },
    payment: {
      type: Number,
      required: true,
    },
  },
  computed: {
    formatYear() {
      return `${formatNumberIntoAdjective(this.year)} год`;
    },
    formatPayment() {
      return `${this.payment.toLocaleString()} рублей`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.checkbox {
  padding: 1rem 0;
  cursor: default;
  border-bottom: 1px solid $gray800;
}
.year {
  color: #808080;
}
</style>