<template>
    <main>
        <h1>Caleb Garratt</h1>
        <Menu/>
        <router-view></router-view>

        <div class="footer">
            Made with Vue.js
        </div>
    </main>
</template>

<script>
import Menu from "@/components/Menu.vue";

export default {
    name: 'App',
    components: { Menu }
}
</script>

<style lang="scss">
@import "@/styles/main.scss";

</style>
