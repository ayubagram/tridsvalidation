import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#0e1f58',
        secondary: '#3499a9',
        accent: '#8c9eff',
        error: '#b71c1c',
      },
    },
  },  
});
