<template>
    <a class="compare-link" :href="href">{{text}}</a>
</template>

<script setup>
defineProps({
    text: String,
    href: String
})
</script>

<style scoped>
.compare-link {
    font-weight: 700;
    color: black;
    text-decoration: underline;
}
</style>