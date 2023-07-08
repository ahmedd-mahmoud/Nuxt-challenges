<script setup>
const { data } = await useFetch("https://dummyjson.com/products");
const products = useProducts();
products.value = data.value.products;

const searchResults = (query) => {
  products.value = data.value.products.filter((product) => {
    return product.title.toLowerCase().includes(query.toLowerCase());
  });
};
</script>

<template>
  <Navbar @search="searchResults" />
  <div class="flex flex-wrap mx-16 gap-5">
    <div v-for="product in products">
      <ShoppingItem :product="product" />
    </div>
  </div>
</template>

<style scoped></style>
