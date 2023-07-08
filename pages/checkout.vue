<script setup>
const products = useProducts();
</script>

<template>
  <div class="flex flex-col justify-center items-center h-screen -m-4">
    <h1 class="text-5xl mb-6">Thank you for shopping with us</h1>
    <h2 class="text-3xl">$ [total money spent]</h2>
    <NuxtLink
      to="/home"
      class="mt-40 text-2xl bg-gray-500 text-white p-5 rounded-full hover:bg-gray-400"
      >Go back to home page</NuxtLink
    >
  </div>
</template>

<style scoped></style>
