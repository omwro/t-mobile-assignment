<template>
    <figure>
        <img :src="backImageUrl"
             :alt="`product back image of ${title}`"
             class="product-back-image"/>
        <img :src="frontImageUrl"
             :alt="`product front image of ${title}`"
             class="product-front-image"/>
        <div v-if="stickers" class="sticker-container">
            <div v-for="sticker in stickers" class="sticker">{{sticker}}</div>
        </div>
    </figure>
</template>

<script setup>
defineProps({
    title: String,
    frontImageUrl: String,
    backImageUrl: String,
    stickers: Array
})
</script>

<style scoped lang="scss">
.product-card:hover {
    img {
        transition: 300ms ease-in-out;
    }

    .product-front-image {
        left: 20%;

        &.wide {
            left: 40%;
        }
    }

    .product-back-image {
        left: -20%;

        &.wide {
            left: -40%;
        }
    }
}

figure {
    position: relative;
    margin: 0;

    @media (min-width: 768px) {
        margin: 1em 40px;
    }

    img {
        max-width: 150px;
        transition: 300ms ease-in-out;
    }

    .product-front-image {
        position: relative;
        left: 10%;
    }

    .product-back-image {
        position: absolute;
        left: -10%;
    }

    .sticker-container {
        position: absolute;
        display: flex;
        flex-direction: column;
        gap: 3px;
        left: -10%;
        bottom: 10%;

        .sticker {
            background-color: #e20074;
            color: #fff;
            font-weight: bold;
            width: max-content;
            padding: 0 6px;
        }
    }
}
</style>