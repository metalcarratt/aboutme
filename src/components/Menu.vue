<template>
    <nav>
        <a href="#" @click.prevent="$router.push('/')">Home</a> | 
        <em v-if="onPage('work')">My work</em> <a href="#" @click.prevent="$router.push('/work')" v-else>My work</a> | 
        <em v-if="onPage('projects')">My projects</em> <a href="#" @click.prevent="$router.push('/projects')" v-else>My projects</a> | 
        <em v-if="onPage('interests')">My interests</em> <a href="#" @click.prevent="$router.push('/interests')" v-else>My interests</a>
    </nav>
</template>

<script>
export default {
    methods: {
        onPage(page) {
            return this.$router.currentRoute.path.includes(page);
        }
    }
}
</script>