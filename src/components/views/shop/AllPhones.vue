<template>
    <h1>Alle telefoons</h1>
    <BrandFilter :brands="getSortedBrands()" @brand-changes="onActiveBrandChanges"/>
    <div class="product-count">{{products.length}} telefoons</div>
    <ul class="product-container">
        <li v-for="product in products">
            <ProductCard :product="product"/>
        </li>
    </ul>
</template>

<script setup lang="ts">
import BrandFilter from "../../elements/BrandFilter.vue";
import ProductCard from "../../elements/ProductCard.vue";
import {getProductsByBrand, getSortedBrands} from "../../../utilities/useData";
import {ref} from "vue";
import Product from "../../../models/Product";

let products = ref<Array<Product>>([]);
const onActiveBrandChanges = (newActiveBrands: Array<string>) => {
    products.value = getProductsByBrand(newActiveBrands);
}
onActiveBrandChanges([])
</script>

<style scoped lang="scss">
.product-count {
    font-size: 1.25rem;
    font-weight: 700;
}
.product-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;

    @media (min-width: 768px) {
        flex-direction: row;
    }

    li {
        padding: 16px;
    }
}
</style>