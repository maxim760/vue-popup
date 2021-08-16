<template>
  <div class="app">
    <app-button @click="openModal" outlined>Налоговый вычет</app-button>
    <transition name="fade">
      <tax-calc-modal v-if="isVisibleModal" @close="closeModal" />
    </transition>
  </div>
</template>

<script>
import TaxCalcModal from "./components/TaxCalcModal.vue";
export default {
  components: { TaxCalcModal },
  name: "App",

  data() {
    return {
      isVisibleModal: false,
    };
  },
  methods: {
    openModal() {
      this.isVisibleModal = true;
    },
    closeModal() {
      this.isVisibleModal = false;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.app {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $red-gradient;
}
</style>
