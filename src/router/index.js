import { createRouter, createWebHashHistory } from 'vue-router';


import Contact from '@/components/ContactPage.vue';
import About from '@/views/About.vue';
import Login from '@/views/LoginPage.vue';
// import CityList from '@/views/CityList.vue';
import LibraryPage from '@/components/LibraryPage.vue';

const routes = [
    { path: '/', component: LibraryPage, name: 'home' },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/login', component: Login, name: 'login' },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});


export default router
