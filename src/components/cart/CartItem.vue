<script setup>
import { useStore } from "vuex";

const store = useStore();

defineProps({
  product: Object,
});

const getImageUrl = (name) => {
  return new URL(`../../assets/products/${name}`, import.meta.url).href;
};

const removeItem = (product) => {
  store.commit("removeItem", product);
};
</script>

<template>
  <div
    class="relative w-full h-44 bg-slate-200 p-2 rounded-lg grid grid-cols-2 grid-rows-2 gap-2 md:grid-cols-6 md:grid-rows-1 md:h-36 items-center"
  >
    <div
      class="flex flex-col col-span-1 row-span-3 items-center justify-center md:col-span-3 md:flex-row md:justify-start md:gap-4 md:row-span-1"
    >
      <div class="h-24 w-24 md:h-36 md:w-36">
        <img
          :src="getImageUrl(product.img)"
          class="w-full h-full object-contain"
          alt=""
        />
      </div>

      <span class="text-lg font-semibold">
        {{ product.title }}
      </span>

      <span class="text-sm font-semibold md:hidden">
        ${{ product.price }}
      </span>
    </div>

    <span class="hidden text-lg font-semibold md:block">
      ${{ product.price }}
    </span>

    <div class="flex flex-col gap-2">
      <span class="text-sm mt-2 font-semibold md:hidden"> QTY </span>

      <div
        class="flex h-max items-center justify-start rounded-lg overflow-hidden w-max"
      >
        <button
          @click=""
          class="py-1 px-4 text-sm font-semibold bg-emerald-400 text-white md:px-2"
        >
          <font-awesome-icon icon="fa-solid fa-minus" />
        </button>

        <span
          class="py-1 px-4 w-12 text-center text-sm font-semibold bg-white md:px-2 md:w-6"
        >
          {{ product.qty }}
        </span>

        <button
          @click=""
          class="py-1 px-4 text-sm font-semibold bg-emerald-600 text-white md:px-2"
        >
          <font-awesome-icon icon="fa-solid fa-plus" />
        </button>
      </div>
    </div>

    <div class="flex flex-col gap-2">
      <span class="text-sm mt-2 font-semibold md:hidden"> Total </span>
      <span
        class="py-1 px-4 bg-emerald-500 rounded-lg text-lg font-semibold md:w-24"
      >
        ${{ product.totalPrice.toFixed(2) }}
      </span>
    </div>

    <button
      @click="removeItem(product)"
      class="absolute h-6 w-6 rounded-full top-3 left-3 flex items-center justify-center bg-red-500 cursor-pointer md:left-auto md:right-3"
    >
      <font-awesome-icon class="text-white text-xs" icon="fa-solid fa-trash" />
    </button>
  </div>
</template>
