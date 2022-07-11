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
        children: [
            { path: 'main', component: HelloWorld },
            { path: 'vue', component: MicroLayout },
            { path: 'react', component: MicroLayout },
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