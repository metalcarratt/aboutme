<template>
    <li
        @mouseover="hover = true"
        @mouseout="hover = false"
    >
        <span class="hoverTitle" v-if="hover"><span>1-2 years</span></span>
        <slot></slot> <span class="skillLow">^</span>
    </li>
</template>

<script>
export default {
    data() {
        return {
            hover: false
        }
    }
}
</script>