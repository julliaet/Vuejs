import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router'
import './assets/main.css';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD1vLi2mslFmskeyk7uHMrffCio_8QlLtk",
  authDomain: "weather-82e42.firebaseapp.com",
  projectId: "weather-82e42",
  storageBucket: "weather-82e42.appspot.com",
  messagingSenderId: "202074730197",
  appId: "1:202074730197:web:558ed4e4b508f060bbbc5c",
  measurementId: "G-MZ28WL9FR4"
};


initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app');
