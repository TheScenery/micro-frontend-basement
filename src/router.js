import { createRouter, createWebHistory } from 'vue-router';
import BaseLayout from './components/Layout.vue';
import MicroLayout from './components/MicroLayout.vue';
import HelloWorld from './components/HelloWorld.vue';

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    {
        path: '/',
        component: BaseLayout,
        redirect: '/main',
        children: [
            { path: 'main', component: HelloWorld },
            { path: 'vue', component: MicroLayout, meta: { name: 'vue', entry: '//localhost:8082' } },
            { path: 'react', component: MicroLayout, meta: { name: 'react', entry: '//localhost:3000' } },
            { path: 'router', component: MicroLayout, meta: { name: 'router', entry: '//localhost:8083' } },
        ]
    },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

export default router;