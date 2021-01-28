<template>
    <nav>
        <a href="#" @click.prevent="$router.push('/')">Home</a> | 
        <em v-if="onPage('skills')">Skills</em> <a href="#" @click.prevent="$router.push('/skills')" v-else>Skills</a> | 
        <em v-if="onPage('experience')">Experience</em> <a href="#" @click.prevent="$router.push('/experience')" v-else>Experience</a> |
        <em v-if="onPage('education')">Education</em> <a href="#" @click.prevent="$router.push('/education')" v-else>Education</a> |
        <em v-if="onPage('portfolio')">Portfolio</em> <a href="#" @click.prevent="$router.push('/portfolio')" v-else>Portfolio</a>
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