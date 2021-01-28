<template>
    <li
        @mouseover="hover = true"
        @mouseout="hover = false"
    >
        <span class="hoverTitle" v-if="hover"><span>New skill</span></span>
        <slot></slot> <span class="skillNew">+</span>
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