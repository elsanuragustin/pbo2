import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.css";
import VueSupabase from 'vue-supabase';


Vue.use(VueSupabase, {
  supabaseUrl: "https://axikrqxpfcovlhlqfqla.supabase.co",
  supabaseKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQyOTk4NDU5LCJleHAiOjE5NTg1NzQ0NTl9.dGyMfXGJgAIAYzpeyskVXr63zeZIOfbNcJskUNJG1zQ",
  supabaseOptions: {},
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
