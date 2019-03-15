import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Live from './live/Live.vue';
import First from './first/First.vue';
import Second from './second/Second.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/live',
            name: 'live',
            component: Live,
        },
        {
            path: '/first',
            name: 'first',
            component: First,
        },
        {
            path: '/second',
            name: 'second',
            component: Second,
        },
    ],
});
