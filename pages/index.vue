<script setup>
const { data } = await useFetch("https://dummyjson.com/products");
console.log(data.value.products);
</script>

<template>
  <vitePwaManifest />
  <h1 class="text-4xl mb-6 ml-9">Blog</h1>
  <div class="flex flex-wrap gap-10 mt-5 ml-9">
    <div v-for="product in data.products">
      <NuxtLink :to="`/${product.id}`" class="card">
        <BlogCard :product="product" />
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
