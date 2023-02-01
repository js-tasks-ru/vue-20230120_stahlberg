import { createApp } from './vendor/vue.esm-browser.js';

const counterComponent = {
  name: 'counterComponent',

  data() {
    return {
      count: 0,
    };
  },

  methods: {
    increment() {
      this.count++;
    },
  },
};

const counterApp = createApp(counterComponent);

const vm = counterApp.mount('#counter');
