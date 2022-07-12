<template>
    <div ref="container">微前端容器</div>
</template>

<script>
import { loadMicroApp } from 'qiankun';
export default {
    name: 'MicroLayout',

    data() {
        return { app: null, }
    },

    methods: {
        loadMicroApp() {
            if (this.app) {
                this.app.unmount();
            }
            const appConfig = { ...this.$route.meta, container: this.$refs.container }
            console.log(appConfig)
            this.app = loadMicroApp(appConfig, { sandbox: { experimentalStyleIsolation: true } })
        }
    },

    mounted() {
        this.loadMicroApp();
    },

    updated() {
        this.loadMicroApp();
    },

    beforeUnmount() {
        if (this.app) {
            this.app.unmount();
        }
        this.app = null;
    }
}
</script>