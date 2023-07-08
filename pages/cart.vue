<script setup>
const products = useProducts();
const ids = useProductId();
const cartProducts = ref([]);
const cartProductsSearchResults = ref([]);

cartProducts.value = products.value.filter((product) => {
  return ids.value.some((id) => {
    return product.id === id;
  });
});

cartProductsSearchResults.value = cartProducts.value;

const searchResults = (query) => {
  cartProductsSearchResults.value = cartProducts.value.filter((product) => {
    return product.title.toLowerCase().includes(query.toLowerCase());
  });
  console.log(cartProductsSearchResults.value);
};
</script>

<template>
  <Navbar @search="searchResults" />
  <div class="flex flex-col gap-10 items-center">
    <div v-for="product in cartProductsSearchResults">
      <CartItem :product="product" />
    </div>
    <div class="flex gap-10">
      <NuxtLink
        to="/checkout"
        class="text-center px-20 py-4 bg-yellow-300 rounded-2xl hover:bg-yellow-200"
        >Check Out</NuxtLink
      >
      <NuxtLink
        to="/home"
        class="text-center px-12 py-4 bg-gray-500 rounded-2xl hover:bg-gray-400"
        >Back</NuxtLink
      >
    </div>
  </div>
</template>

<style scoped></style>
