import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

const meetupTitlesComponent = {
  name: 'meetupTitlesComponent',

  data() {
    return {
      IdValue: '1',
      meetupTitle: '',
    };
  },

  watch: {
    IdValue: {
      immediate: true,
      handler(newIdValue) {
        fetchMeetupById(newIdValue).then((meetup) => {
          this.meetupTitle = meetup.title;
        });
      },
    },
  },
};

const meetupTitlesApp = createApp(meetupTitlesComponent);
const vm = meetupTitlesApp.mount('#meetupTitles');
