<script setup>
const { id } = useRoute().params;
const url = "https://dummyjson.com/products/" + id;

const { data: product } = await useFetch(url, { key: id });
</script>

<template>
  <div class="flex items-center justify-center h-screen -my-5 gap-20">
    <img
      :src="product.images[0]"
      :alt="product.title"
      class="rounded-3xl w-1/2"
    />
    <div class="flex flex-col gap-5">
      <span class="text-3xl">{{ product.title }}</span>
      <div>
        Price is:
        <span class="bg-orange-600 px-5 py-2 rounded-3xl text-center w-20">{{
          product.price
        }}</span>
      </div>

      <span class="text-lg w-2/3">{{ product.description }}</span>
      <NuxtLink
        to="/"
        class="w-20 bg-gray-600 text-center rounded-xl py-1 hover:bg-gray-500"
        >Back</NuxtLink
      >
    </div>
  </div>
</template>

<style scoped></style>
