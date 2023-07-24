import { createRouter, createWebHashHistory } from 'vue-router';
import list from '@/components/CurrencyList.vue';
import converter from '@/components/CurrencyConverter.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [

        {
            path: '/',
            component: list
        },
        {
            path: '/converter',
            component: converter,
        }
    ]
});

export default router;
