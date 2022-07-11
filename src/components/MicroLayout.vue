<template>
    <div ref="container">微前端容器</div>
</template>

<script>
import { loadMicroApp } from 'qiankun';

let app = null;

export default {
    name: 'MicroLayout',

    methods: {
        loadMicroApp() {
            if (app) {
                app.unmount();
            }
            const appConfig = { ...this.$route.meta, container: this.$refs.container }
            console.log(appConfig)
            app = loadMicroApp(appConfig, { sandbox: { strictStyleIsolation: true } })
            console.log(app)
        }
    },

    mounted() {
        this.loadMicroApp();
        this.$watch('$route.meta.name', () => {
            this.loadMicroApp();
        })
    }
}
</script>