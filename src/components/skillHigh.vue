<template>
    <li
        @mouseover="hover = true"
        @mouseout="hover = false"
    >
        <span class="hoverTitle" v-if="hover"><span>5+ years</span></span>
        <slot></slot> <span class="skillHigh">^^^</span>
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