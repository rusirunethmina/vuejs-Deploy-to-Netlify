<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const cart = computed(() => {
  return store.state.cart;
});

const totalPrice = computed(() => {
  return store.state.cartTotal;
});

const user = computed(() => {
  return store.state.user;
});

const logout = () => {
  store.commit("initUser", false);
};
</script>

<template>
  <nav class="fixed top-0 bg-white shadow-lg w-screen py-5 z-50">
    <div class="px-2 flex items-center justify-between md:container md:mx-auto">
      <!-- Menu button  -->
      <div
        class="bg-gradient-to-r from-emerald-500 to-green-600 p-2 h-10 w-10 rounded-full flex items-center justify-center cursor-pointer lg:hidden"
      >
        <font-awesome-icon class="text-white" icon="fa-solid fa-bars" />
      </div>

      <!-- Logo  -->

      <router-link
        :to="{ name: 'home' }"
        :class="!user ? 'flex-1 lg:flex-none mr-8 lg:mr-0' : ''"
        class="flex justify-center"
      >
        <font-awesome-icon
          class="text-emerald-600 h-6 w-6"
          icon="fa-solid fa-leaf"
        />
        <h1 class="text-teal-900 text-2xl font-bold font-lobster">
          GreenFoods
        </h1>
      </router-link>

      <!-- Nav Links  -->
      <div class="hidden space-x-6 lg:flex">
        <router-link
          :to="{ name: 'home' }"
          class="text-lg font-semibold text-emerald-900 hover:text-emerald-500"
        >
          Home
        </router-link>

        <router-link
          :to="{ name: 'shop' }"
          class="text-lg font-semibold text-emerald-900 hover:text-emerald-500"
        >
          Shop
        </router-link>

        <!-- <router-link to="#" class="text-lg font-semibold text-emerald-900 hover:text-emerald-500">
                    Products
                </router-link> -->

        <router-link
          to="#"
          class="text-lg font-semibold text-emerald-900 hover:text-emerald-500"
        >
          About us
        </router-link>

        <router-link
          to="#"
          class="text-lg font-semibold text-emerald-900 hover:text-emerald-500"
        >
          Contact
        </router-link>
      </div>

      <!-- Cart Icon  -->
      <div v-show="user" class="flex items-center">
        <router-link
          :to="{ name: 'cart' }"
          class="relative p-2 h-10 w-10 flex items-center justify-center cursor-pointer"
        >
          <font-awesome-icon
            class="text-emarald-900 h-6 w-6"
            icon="fa-solid fa-cart-shopping"
          />

          <div
            class="absolute -top-1 right-0 h-max w-5 flex items-center justify-center rounded-full bg-emerald-600 text-white"
          >
            <small>
              {{ cart.length }}
            </small>
          </div>
        </router-link>

        <p class="hidden text-sm text-emerald-900 font-bold lg:block">
          ${{ totalPrice.toFixed(2) }}
        </p>

        <button
          @click="logout"
          class="hidden p-2 h-10 w-10 ml-4 items-center justify-center cursor-pointer lg:flex"
        >
          <font-awesome-icon
            class="text-emarald-900 h-5 w-5"
            icon="fa-solid fa-right-from-bracket"
          />
        </button>
      </div>

      <!-- Login and Register  -->
      <div v-show="!user" class="items-center gap-2 hidden lg:flex">
        <router-link
          :to="{ name: 'login' }"
          class="text-lg font-semibold text-emerald-900 hover:text-emerald-500"
        >
          Login
        </router-link>

        <div class="h-6 w-0.5 bg-emerald-900"></div>

        <router-link
          :to="{ name: 'register' }"
          class="text-lg font-semibold text-emerald-900 hover:text-emerald-500"
        >
          Register
        </router-link>
      </div>
    </div>
  </nav>
</template>
