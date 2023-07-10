<script setup>
const { data } = await useFetch("https://dummyjson.com/products");
const products = useProducts();
const isSearchResults = ref(true);
if (products.value.length === 0) {
  products.value = data.value.products;
}

const searchResults = (query) => {
  products.value = data.value.products.filter((product) => {
    return product.title.toLowerCase().includes(query.toLowerCase());
  });
  products.value.length > 0
    ? (isSearchResults.value = true)
    : (isSearchResults.value = false);
};
</script>

<template>
  <Navbar @search="searchResults" />
  <div v-if="isSearchResults" class="flex flex-wrap mx-16 gap-5">
    <div v-for="product in products" :key="product.id">
      <ShoppingItem :product="product" />
    </div>
  </div>
  <span v-else class="flex justify-center text-xl"
    >No product matches your search</span
  >
</template>

<style scoped></style>
