<template>
    <div class="product-card">
        <ProductCardImage :title="product.getDeviceTitle()"
                          :front-image-url="product.getDeviceFrontImage(T_MOBILE_MEDIA_BASE_URL)"
                          :back-image-url="product.getDeviceBackImage(T_MOBILE_MEDIA_BASE_URL)"
                          :stickers="product.getStickerArray()"/>
        <div class="product-card-body">
            <h3>{{ product.getDeviceTitle() }}</h3>
            <StockStatusMessage :message="product.getDeviceStockStatus(true)"/>
            <ProductCartText :text="product.getFirstServiceName()"/>
            <PriceText :price-text="product.getDeviceMonthlyPrice()"
                       period-text="/mnd"
                       :subscription-price="product.getCoreServiceMonthlyPrice()"
                       :device-credit-price="product.getDeviceMonthlyInstallmentPrice()"/>
            <ProductCartText :text="product.getDeviceUpfrontPriceText()"/>
            <Button text="Bekijk" href="#"/>
            <CompareLink text="Vergelijk telefoon" href="#"/>
        </div>
    </div>
</template>

<script setup>
import Product from "../../models/Product";
import StockStatusMessage from "./ProductElements/StockStatusMessage.vue";
import ProductCardImage from "./ProductElements/ProductCardImage.vue";
import Button from "./ProductElements/Button.vue";
import CompareLink from "./ProductElements/CompareLink.vue";
import PriceText from "./ProductElements/PriceText.vue";
import ProductCartText from "./ProductElements/ProductCartText.vue";

defineProps({
    product: Product
})

const T_MOBILE_MEDIA_BASE_URL = "https://t-mobile.nl"

</script>

<style scoped lang="scss">
.product-card {
    display: flex;
    flex-direction: row;
    background-color: #f6f6f6;
    padding: 24px;
    gap: 8px;
    transition: box-shadow 300ms ease-in-out;
    position: relative;
    cursor: pointer;

    @media (min-width: 768px) {
        flex-direction: column;
    }

    .product-card-body {
        display: flex;
        flex-direction: column;
    }

    &:hover {
        transition: box-shadow 300ms ease-in-out;
        box-shadow: inset 0 0 1px #ededed, 0 0 2px 0 rgba(0,0,0,.12), 0 12px 24px 0 rgba(0,0,0,.24);
    }

    h3 {
        font-size: 1.25rem;
        font-weight: 700;
        margin-bottom: 0;
    }
}
</style>