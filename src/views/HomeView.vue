<script setup>
import Hero from '../components/home/Hero.vue'
import Products from '../components/Products.vue'
import Features from '../components/home/Features.vue'
import Categories from '../components/Categories.vue'
import Cta from '../components/home/Cta.vue'
import About from '../components/home/About.vue'
import Newsletter from '../components/home/Newsletter.vue'

import { bestSelling } from '../products.json'

import { computed, onUnmounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const products = computed(() => {
    return store.state.filterdProducts.slice(0, 8)
})

onUnmounted(() => {
    store.commit('toggleCategory', 'all')
    store.dispatch('filterProducts')
})

</script>

<template>
    <Hero />
    <Products :products="products" title="Featured Products">

        <template #categories>
            <Categories />
        </template>

        <template #button>
            <router-link :to="{name: 'shop'}" class="mt-6 px-10 py-2 rounded-full border-2 border-emerald-600 text-slate-900 font-bold bg-gradient-to-l hover:from-emerald-700 hover:to-green-800 hover:text-white">
            View More
            </router-link>
        </template>
        
    </Products>
    <Features />

    <Products :products="bestSelling" title="Our Best Selling Products"/>

    <Cta />

    <About />

    <Newsletter />

</template>

