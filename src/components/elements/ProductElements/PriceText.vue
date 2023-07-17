<template>
    <div class="product-price-row">
        <span class="product-price">{{ priceText }}</span>
        <span class="product-price-text">{{periodText}}</span>
        <div class="product-info-tooltip">
            <span>&#9432;</span>
            <div class="product-info-tooltip-block">
                <span>Maandelijks</span>
                <span>Abonnement 2 jaar {{subscriptionPrice}}</span>
                <span>Toestelkrediet 2 jaar {{deviceCreditPrice}}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    priceText: String,
    periodText: String,
    subscriptionPrice: String,
    deviceCreditPrice: String
})
</script>

<style scoped lang="scss">
.product-price-row {
    .product-price {
        font-weight: 700;
        font-size: 1.25rem;
    }

    .product-price-text {
        font-size: 0.8rem;
        vertical-align: top;
    }

    .product-info-tooltip {
        height: 32px;
        width: 32px;
        font-size: 24px;
        font-weight: 600;
        padding-left: 8px;
        display: inline-block;
        position: relative;

        &:hover .product-info-tooltip-block{
            display: flex;
        }

        .product-info-tooltip-block {
            display: none;
            position: absolute;
            height: auto;
            width: 250px;
            background-color: #262626;
            bottom: 35px;
            left: -112px;
            border-radius: 4px;
            color: white;
            flex-direction: column;
            font-size: 15px;
            padding: 8px;

            &:after {
                content: "";
                position: absolute;
                border-left: 8px solid transparent;
                border-right: 8px solid transparent;
                border-top: 8px solid #262626;
                bottom: -7px;
                left: 50%;
            }

            :first-child {
                font-weight: bolder;
            }
        }
    }
}
</style>