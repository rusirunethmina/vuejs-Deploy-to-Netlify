<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

const store = useStore();
const router = useRouter();

const userError = ref(false);
const passwordError = ref(false);
const nameError = ref(false);
const emailError = ref(false);

const name = ref("");
const username = ref("");
const password = ref("");
const email = ref("");

const Login = () => {
  if (!name.value) return (nameError.value = true);
  if (!email.value) return (emailError.value = true);
  if (!username.value) return (userError.value = true);
  if (!password.value) return (passwordError.value = true);

  store.commit("initUser", true);
  router.push({ name: "home" });
};
</script>

<template>
  <section class="h-screen grid place-items-center">
    <div
      class="w-full h-full flex flex-col items-center justify-center gap-4 bg-white bg-opacity-20 backdrop-blur-md md:w-2/4 md:max-w-xl md:h-max md:rounded-lg text-slate-900 p-6 md:px-16"
    >
      <h1 class="text-3xl font-semibold mb-3">Register</h1>

      <div class="relative w-full max-w-lg mx-auto md:max-w-none">
        <input
          type="text"
          placeholder="Enter your name"
          :class="nameError && 'border-red-900'"
          v-model="name"
          class="w-full py-2 px-10 text-sm font-semibold bg-transparent border border-slate-900 rounded-lg focus:outline-none"
        />

        <font-awesome-icon
          class="text-lg absolute left-4 my-auto top-0 bottom-0"
          icon="fa-solid fa-user"
        />

        <small
          v-show="nameError"
          class="absolute text-sm text-red-900 text-extrabold left-0 right-0 -bottom-5 ml-10"
          >Please enter your name</small
        >
      </div>

      <div class="relative w-full mt-6 max-w-lg mx-auto md:max-w-none">
        <input
          type="text"
          placeholder="Enter your Email"
          :class="emailError && 'border-red-900'"
          v-model="email"
          class="w-full py-2 px-10 text-sm font-semibold bg-transparent border border-slate-900 rounded-lg focus:outline-none"
        />

        <font-awesome-icon
          class="text-lg absolute left-4 my-auto top-0 bottom-0"
          icon="fa-solid fa-at"
        />

        <small
          v-show="emailError"
          class="absolute text-sm text-red-900 text-extrabold left-0 right-0 -bottom-5 ml-10"
          >Please enter your email</small
        >
      </div>

      <div class="relative w-full mt-6 max-w-lg mx-auto md:max-w-none">
        <select
          id="countries"
         class="w-full py-2 px-10 text-sm font-semibold bg-transparent border border-slate-900 rounded-lg focus:outline-none"
        >
          <option>Select User type</option>
          <option>Seller</option>
          <option>Buyer</option>
        </select>
          <font-awesome-icon
          class="text-lg absolute left-4 my-auto top-0 bottom-0"
          icon="fa-solid fa-user"
        />
      </div>

      <div class="relative w-full mt-6 max-w-lg mx-auto md:max-w-none">
        <input
          type="password"
          placeholder="Enter your password"
          :class="passwordError && 'border-red-900'"
          v-model="password"
          class="w-full py-2 px-10 text-sm font-semibold bg-transparent border border-slate-900 rounded-lg focus:outline-none"
        />

        <font-awesome-icon
          class="text-lg absolute left-4 my-auto top-0 bottom-0"
          icon="fa-solid fa-key"
        />

        <small
          v-show="passwordError"
          class="absolute text-sm text-red-900 text-extrabold left-0 right-0 -bottom-5 ml-10"
          >Please enter your password</small
        >
      </div>

      <button
        @click="Login"
        class="bg-gradient-to-r mt-6 w-32 from-emerald-500 to-green-600 px-4 py-2 rounded-full text-white font-bold hover:from-emerald-700 hover:to-green-800"
      >
        Login
      </button>

      <p class="text-sm font-semibold my-2">
        Already have an account?
        <router-link
          :to="{ name: 'login' }"
          class="bg-green-500 text-white px-1"
          >Login</router-link
        >
      </p>
    </div>
  </section>
</template>

<style scoped>
section {
  background-image: url("../assets/bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>
