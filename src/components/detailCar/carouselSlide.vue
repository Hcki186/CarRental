<template>
    <transition :name="direction">
        <div v-show="visibleSlide === index" class="carousel-slide">
            <slot></slot>
        </div>
    </transition>

</template>

<script>
export default {
    props: ["visibleSlide", "index", "direction"],
    name: "carouselSlide",
    data() {
        return {

        }
    }
}
</script>

<style>

</style>