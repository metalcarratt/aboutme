<template>
    <span class="themeSwitcher">
        <font-awesome-icon icon="sun" @click="changeToLightMode" :class="sunIconClass" />
        <font-awesome-icon icon="moon" @click="changeToDarkMode" :class="moonIconClass" />
    </span>
</template>

<script>
const DARK_MODE = 'darkMode';
const LIGHT_MODE = 'lightMode';
const SELECTED_CLASS = 'selected';

export default {
    data() {
        return {
            mode: LIGHT_MODE
        }
    },
    mounted() {
        this.changeToLightMode();
    },
    computed: {
        sunIconClass() {
            return this.mode === LIGHT_MODE ? SELECTED_CLASS : ''
        },
        moonIconClass() {
            return this.mode === DARK_MODE ? SELECTED_CLASS : '';
        }
    },
    methods: {
        changeToLightMode() {
            document.body.classList.add(LIGHT_MODE);
            document.body.classList.remove(DARK_MODE);
            this.mode = LIGHT_MODE;
        },
        changeToDarkMode() {
            document.body.classList.add(DARK_MODE);
            document.body.classList.remove(LIGHT_MODE);
            this.mode = DARK_MODE;
        }
    }
}
</script>