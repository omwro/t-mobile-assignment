<template>
    <p>Filter op</p>
    <ul class="brands-filter-container">
        <li v-for="brand in brands"
            :key="brand.name"
            class="brand-filter-item"
            :class="{'active': isBrandActive(brand.name)}"
            @click="toggleBrandActive(brand.name)">
            <img :src="brand.imageUrl" :alt="'Brand logo of'+brand.name"/>
        </li>
    </ul>
</template>

<script setup lang="ts">
import {ref} from "vue";

defineProps({
    brands: Array
})

const emit = defineEmits(['brand-changes'])

let activeBrands = ref<Array<string>>([]);
const isBrandActive = (brand: string) => activeBrands.value.includes(brand)
const toggleBrandActive = (brand: string) => {
    isBrandActive(brand) ?
        activeBrands.value.splice(activeBrands.value.indexOf(brand), 1) :
        activeBrands.value.push(brand)
    emit("brand-changes", activeBrands.value)
}
</script>

<style scoped lang="scss">
.brands-filter-container {
    display: flex;
    flex-direction: row;
    gap: 8px;
    list-style: none;
    padding-left: 0;
    overflow-x: auto;
    margin-top: 0;

    .brand-filter-item {
        display: flex;
        align-items: center;
        flex-shrink: 0;
        padding: 8px 16px;
        border: 1px solid #d0d0d0;
        border-radius: 4px;
        cursor: pointer;
        margin: 1px;

        &:hover, &.active {
            margin: 0;
            border: 2px solid #e20074;
        }

        img {
            height: 25px;
        }
    }
}

p {
    margin: 0 0 8px;
    color: #757575;
}
</style>