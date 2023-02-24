<script setup>
import ProductCard from "./ProductCard.vue";

defineProps({
  products: Array,
  title: String,
});

// console.log(props.products)
</script>

<template>
  <section class="container mx-auto px-2 py-6 flex flex-col items-center">
    <h1
      class="text-3xl mb-6 font-lobster text-gray-900 text-center font-semibold"
    >
      {{ title }}
    </h1>

    <slot name="categories"></slot>

    <div
      class="max-w-5xl mx-auto grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-10"
    >
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>

    <slot name="button"></slot>
  </section>
</template>
