<script setup>

import Slider from '../components/shop/Slider.vue'
import Search from '../components/shop/Search.vue'
import Products from '../components/Products.vue'

import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const products = computed(() => {
    return store.state.filterdProducts
})

</script>

<template>
    <Slider />
    <Search />

    <Products :products="products" />
</template>