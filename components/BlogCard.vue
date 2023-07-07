<script setup>
const { product } = defineProps(["product"]);
</script>

<template>
  <img
    class="w-full h-2/4 rounded-t-xl"
    :src="product.images[0]"
    :alt="product.title"
  />
  <span class="text-2xl">
    {{ product.title }}
  </span>
  <span class="py-1 bg-gray-600 rounded-2xl text-center w-11/12 mb-10">{{
    product.category
  }}</span>
</template>

<style scoped></style>
