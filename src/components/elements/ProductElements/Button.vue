<template>
    <a class="button" :href="href">{{text}}</a>
</template>

<script setup>
defineProps({
    text: String,
    href: String
})
</script>

<style scoped>
.button {
    background-color: #e20074;
    color: #fff;
    width: 100%;
    text-align: center;
    text-decoration: none;
    padding: 0 18px;
    line-height: 48px;
    border-radius: 4px;
    font-weight: 800;
    font-size: 1rem;
    margin-top: 16px;
}
</style>