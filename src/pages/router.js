import Vue from 'vue'
import VueRouter from 'vue-router';

const routes = [
    { path: '/', component: () => import("./Home.vue") },
    { path: '/work', component: () => import("./Work.vue") },
    { path: '/projects', component: () => import("./Projects.vue") },
    { path: '/interests', component: () => import("./Interests.vue") },
    { path: '/contact', component: () => import("./Contact.vue") },
    { path: '/skills', component: () => import("./Skills.vue") },
    { path: '/experience', component: () => import("./Experience.vue") },
    { path: '/education', component: () => import("./Education.vue") },
    { path: '/portfolio', component: () => import("./Portfolio.vue") }
]

Vue.use(VueRouter);

const router = new VueRouter({
    routes
});

export default router;