<template>
    <main :class="[mode]">
        <h1>
            Caleb Garratt
            <ThemeSwitcher />
        </h1>
        <Menu/>
        <router-view></router-view>

        <div class="footer">
            Made with Vue.js
        </div>
    </main>
</template>

<script>
import Menu from "@/components/Menu.vue";
import ThemeSwitcher from "@/components/ThemeSwitcher.vue";

export default {
    name: 'App',
    components: { Menu, ThemeSwitcher },
}
</script>

<style lang="scss">
@import "@/styles/main.scss";

</style>
