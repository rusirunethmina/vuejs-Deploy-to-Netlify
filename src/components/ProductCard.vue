<script setup>
import { ref } from "vue";

const isFav = ref(false);

const props = defineProps(["product"]);

const getImageUrl = (name) => {
  return new URL(`../assets/products/${name}`, import.meta.url).href;
};

const addToCart = () => {
  console.log("hello");
};
</script>

<template>
  <router-link
    :to="{ name: 'product', params: { id: product.id } }"
    class="relative bg-slate-50 shadow-xl w-full p-4 flex flex-col items-center rounded-lg text-slate-900 hover:bg-gradient-to-t from-emerald-900 to-emerald-500 hover:text-white"
  >
    <div class="w-full h-40">
      <img
        class="w-full h-full object-contain"
        :src="getImageUrl(product.img)"
        alt=""
      />
    </div>

    <div>
      <h2 class="text-lg font-bold text-center">{{ props.product.title }}</h2>
      <h2 class="text-lg text-emerald-500 font-extrabold text-center">
        ${{ props.product.price }}
      </h2>
    </div>

    <button
      @click.prevent="addToCart"
      class="bg-gradient-to-r mt-2 w-max from-emerald-500 to-green-600 px-4 py-2 rounded-full text-white font-bold hover:from-emerald-700 hover:to-green-800"
    >
      Add to cart
    </button>

    <font-awesome-icon
      class="absolute top-2 right-2 text-green-300 h-6 w-6"
      :icon="isFav ? 'fa-solid fa-heart' : 'fa-regular fa-heart'"
      @click.prevent="() => (isFav = !isFav)"
    />
  </router-link>
</template>
