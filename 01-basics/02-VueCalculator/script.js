import { createApp } from './vendor/vue.esm-browser.js';

const calculatorComponent = {
  name: 'calculatorComponent',

  data() {
    return {
      number1: '',
      number2: '',
      operation: 'sum',
    };
  },

  computed: {
    result() {
      if (!Number.isFinite(this.number1)) return '';
      if (!Number.isFinite(this.number2)) return '';

      const resultCalculator = {
        sum: (num1, num2) => num1 + num2,
        subtract: (num1, num2) => num1 - num2,
        multiply: (num1, num2) => num1 * num2,
        divide: (num1, num2) => num1 / num2,
      };

      const resultValue = resultCalculator[this.operation](this.number1, this.number2);
      return Number.isFinite(resultValue) ? resultValue : '';
    },
  },
};

const calculatorApp = createApp(calculatorComponent);

const vm = calculatorApp.mount('#calculator');
