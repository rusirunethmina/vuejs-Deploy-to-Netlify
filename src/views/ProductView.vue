<script setup>

import { useStore } from 'vuex'
import { computed, ref, watch, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { Swiper, SwiperSlide } from "swiper/vue";
  
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import "../assets/css/customSwiper.css"
  
import { Pagination, Navigation } from "swiper";


const store = useStore()
const route = useRoute()
const product = ref({})
const products = store.state.filterdProducts


const modules = ref([
    Pagination, Navigation
])

const pagination = ref({
    clickable: true
})


const qty = ref(1)

const totalPrice = computed(() => {
    return product.value.price * qty.value
})

const fetchProduct = (id) => {
    product.value = products.filter(product => {
        return product.id == id
    })

    product.value = product.value[0]
}

onMounted(() => {
    fetchProduct(route.params.id)
    document.title = `${product.value.title} | GreenFoods`
})


const increaseQty = () => {
    if(qty.value < 10) {
        qty.value ++
    }
}

const decreaseQty = () => {
    if(qty.value > 1) {
        qty.value --
    }
}

const addToCart = () => {
    product.value.qty = qty.value
    product.value.totalPrice = totalPrice.value

    store.commit('addToCart', product.value)
}

</script>

<template>
    
    <section class="mt-20 grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1">

        <div class="h-full w-full max-w-lg mx-auto p-4 md:py-24 md:pl-10 md:max-w-none">
            <swiper
                :slidesPerView="1"
                :centeredSlides="true"
                :modules="modules"
                :loop="true"
                :navigation="true"
                :pagination="pagination"
                class="w-full h-full rounded-lg"
            >

                
                <swiper-slide>

                <img src="../assets/deals/image_1.jpg" class="w-full h-full object-cover" alt="">

                </swiper-slide>

                <swiper-slide>

                <img src="../assets/deals/image_2.jpg" class="w-full h-full object-cover" alt="">

                </swiper-slide>

                <swiper-slide>

                <img src="../assets/deals/image_3.jpg" class="w-full h-full object-cover" alt="">

                </swiper-slide>

            </swiper>
        </div>

        <div class="h-full w-full max-w-lg mx-auto p-4 md:py-24 md:px-10 md:max-w-none">

            <div class="h-full w-full p-10 rounded-lg bg-slate-100 flex items-center flex-col gap-1 justify-center text-slate-900">

                <h1 class="text-2xl font-bold md:text-3xl lg:text-4xl">
                    {{ product.title }}
                </h1>

                <p class="text-sm md:text-lg text-center">
                    {{ product.desc }} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat nam in fuga quisquam a soluta minus numquam neque.
                </p>

                <div class="flex items-center justify-center gap-2 mt-5">
                    <span class="py-1 px-2 bg-emerald-600 text-white rounded-lg text-xl font-semibold">
                        ${{ product.price }}
                    </span>

                    <p class="text-sm font-semibold">
                        {{ product.size }}
                    </p>
                </div>

                <div class="flex items-center justify-center gap-2 mt-5">

                    <div class="flex items-center justify-center rounded-lg overflow-hidden">

                        <button @click="decreaseQty" class="py-1 px-4 text-sm font-semibold bg-emerald-400 text-white">
                            <font-awesome-icon  icon="fa-solid fa-minus" />
                        </button>

                        <span class="py-1 px-4 w-12 text-center text-sm font-semibold bg-white">
                            {{ qty }}
                        </span>

                        <button @click="increaseQty" class="py-1 px-4 text-sm font-semibold bg-emerald-600 text-white">
                            <font-awesome-icon icon="fa-solid fa-plus" />
                        </button>

                    </div>

                    <span class="py-1 px-4 bg-emerald-800 text-white rounded-lg text-sm font-semibold">
                        ${{ totalPrice.toFixed(2) }}
                    </span>

                </div>

                <button @click="addToCart" class="bg-gradient-to-r mt-5 w-full md:w-56 from-emerald-500 to-green-600 px-4 py-2 rounded-full text-white font-bold hover:from-emerald-700 hover:to-green-800">
                    Add to cart
                </button>

            </div>

        </div>

    </section>

</template>


<style scoped>

section {
    height: calc(100vh - 5rem)
}



</style>