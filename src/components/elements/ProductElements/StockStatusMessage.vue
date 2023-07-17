<template>
    <span class="stock-status-message">{{ message }}</span>
</template>

<script setup>
defineProps({
    message: String
})

</script>

<style scoped lang="scss">
.stock-status-message {
    color: #23a96f;

    &::before {
        content: "";
        display: inline-block;
        background-color: #23a96f;
        height: 8px;
        width: 8px;
        border-radius: 100%;
        margin: 0 5px 2px 0;
    }
}
</style>