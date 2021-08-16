<template>
  <app-modal @close="closeModal">
    <template v-slot:header> Налоговый вычет </template>

    <template v-slot:body>
      <p class="description">
        Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер
        налогового вычета составляет не более 13% от своего официального
        годового дохода.
      </p>
      <Form class="form" @submit="onSubmitSalary" :validation-schema="schema">
        <app-input
          type="number"
          name="salary"
          label="Ваша зарплата в месяц"
          placeholder="Введите данные"
          fullwidth
        />
        <app-input
          type="number"
          name="flat"
          fullwidth
          label="Цена квартиры"
          placeholder="Введите данные"
        />
        <app-button type="submit" text>Рассчитать</app-button>
      </Form>
      <div v-if="payments" class="checkboxes">
        <payment-item
          v-for="{ year, payment } in payments"
          :key="year"
          :year="year"
          :payment="payment"
        />
      </div>
      <div class="question">
        <span>Что уменьшаем</span>
        <div class="tags">
          <app-tag v-model:active="payment">Платёж</app-tag>
          <app-tag v-model:active="term">Срок</app-tag>
        </div>
      </div>
    </template>

    <template v-slot:footer>
      <app-button fullwidth>Добавить</app-button>
    </template>
  </app-modal>
</template>

<script>
import { Form } from "vee-validate";
import * as yup from "yup";
import { getPaymentsByYear } from "@/utils/getPaymentsByYear";
import PaymentItem from "./PaymentItem.vue";
export default {
  components: {
    Form,
    PaymentItem,
  },
  props: {
    isVisibleModal: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    const schema = yup.object({
      salary: yup
        .number()
        .typeError("Необходимо указать число")
        .required("Обязательное поле")
        .positive("Укажите число больше нуля")
        .integer("Укажите целое число"),
      flat: yup
        .number()
        .typeError("Необходимо указать число")
        .required("Обязательное поле")
        .positive("Укажите число больше нуля")
        .integer("Укажите целое число"),
    });
    return {
      payment: true,
      term: false,
      payments: null,
      schema,
    };
  },

  methods: {
    closeModal() {
      this.$emit("close");
    },
    onSubmitSalary(values) {
      this.payments = getPaymentsByYear(values);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.description {
  color: #808080;
  font-size: 14px;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}
.form {
  & > * {
    margin-bottom: 0.5rem;
  }
}

.question {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  @media #{$media-mobile} {
    & > * {
      width: 100%;
    }
  }
}
.tags {
  display: flex;
  align-items: center;
  & > * + * {
    margin-left: 0.5rem;
  }
  & > *:first-child {
    margin-left: 2rem;
  }
  @media #{$media-mobile} {
    margin-top: 1.5rem;
    & > *:first-child {
      margin-left: 0;
    }
  }
}
.checkboxes {
  margin-bottom: 1.25rem;
}
</style>