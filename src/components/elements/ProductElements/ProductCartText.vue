<template>
    <span class="product-cart-text">{{text}}</span>
</template>

<script setup>
defineProps({
    text: String
})
</script>

<style scoped>
.product-cart-text {
    font-size: 0.9rem;
    color: #757575;
}
</style>