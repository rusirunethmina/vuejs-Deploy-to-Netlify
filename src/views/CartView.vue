<script setup>

import CartItem from '../components/cart/CartItem.vue'
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const cart = computed(() => {
    return store.state.cart
})

const totalPrice = computed(() => {
   return store.state.cartTotal
})

</script>

<template>
    
    <section class="mt-20">

        <div v-show="cart.length > 0" class="container mx-auto h-full p-5 flex flex-col gap-10 lg:flex-row-reverse">
            
            <div class="bg-slate-200 w-full h-max shadow-sm p-4 rounded-lg lg:w-1/3 flex flex-col text-slate-900">

                <h1 class="text-2xl font-semibold">
                    Order Summary
                </h1>

                <div class="h-thin w-full my-2 bg-slate-900"></div>

                <div class="flex items-center justify-between mt-4">
                    <h2 class="text-sm font-semibold">
                        Items {{ cart.length }}
                    </h2>

                    <span class="py-1 px-4 bg-emerald-300 rounded-lg text-sm font-semibold">
                        ${{ totalPrice.toFixed(2) }}
                    </span>
                </div>

                <div class="flex items-center justify-between mt-4">
                    <h2 class="text-sm font-semibold">Shipping</h2>

                    <span class="py-1 px-4 bg-emerald-100 rounded-lg text-sm font-semibold">
                        $0.00
                    </span>
                </div>

                <div class="flex items-center justify-between my-4">
                    <h2 class="text-sm font-semibold">Discount</h2>

                    <span class="py-1 px-4 bg-emerald-100 rounded-lg text-sm font-semibold">
                        $0.00
                    </span>
                </div>

                <div class="h-thin w-full my-2 bg-slate-900"></div>

                <div class="flex items-center justify-between my-4">
                    <h2 class="text-lg font-semibold">Total Cost</h2>

                    <span class="py-1 px-4 bg-emerald-500 rounded-lg text-lg font-semibold">
                        ${{ totalPrice.toFixed(2) }}
                    </span>
                </div>

                <button class="bg-gradient-to-r mt-5 w-full from-emerald-500 to-green-600 px-4 py-2 rounded-lg text-white font-bold hover:from-emerald-700 hover:to-green-800">
                    CHECKOUT
                </button>

            </div>

            <div class="bg-slate-100 rounded-lg w-full p-4 h-max shadow-sm lg:w-2/3 flex flex-col text-slate-900">
                <h1 class="text-2xl font-semibold">
                    Shopping Cart
                </h1>

                <div class="h-thin w-full my-2 bg-slate-900"></div>

                <div class="hidden md:grid w-full p-2 grid-cols-6 gap-2">
                    <h2 class="text-lg font-semibold col-span-3">Product</h2>
                    <h2 class="text-lg font-semibold">Price</h2>
                    <h2 class="text-lg font-semibold">QTY</h2>
                    <h2 class="text-lg font-semibold">Total</h2>
                </div>

                <div class="w-full flex flex-col gap-4 mt-4">
                    <CartItem v-for="product in cart" :product="product" :key="product.id" />
                </div>
            </div>

        </div>

        <div v-show="cart.length < 1" class="w-full h-72 px-6 text-slate-900 flex flex-col items-center justify-center">
            <h2 class="text-3xl text-center">
                No items in cart!
            </h2>

            <router-link :to="{name: 'shop'}" class="bg-gradient-to-r mt-4 from-emerald-500 to-green-600 px-4 py-2 rounded-full text-white font-bold hover:from-emerald-700 hover:to-green-800">
                Shop Now
            </router-link>
        </div>

    </section>

</template>


<style scoped>

section {
    min-height: calc(100vh - 5rem)
}



</style>