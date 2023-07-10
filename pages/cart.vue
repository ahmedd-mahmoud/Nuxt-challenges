<script setup>
const products = useProducts();
const idsAndCounts = useProductIdAndCount();
const cartProducts = ref([]);
const cartProductsSearchResults = ref([]);
const isSearchResults = ref(true);

const deleteCartItem = (id) => {
  cartProducts.value.forEach((product, index) => {
    if (id === product.id) {
      cartProducts.value.splice(index, 1);
    }
  });

  idsAndCounts.value = idsAndCounts.value.filter((idAndCount) => {
    return idAndCount.id !== id;
  });
};

cartProducts.value = products.value.filter((product) => {
  return idsAndCounts.value.some((obj) => {
    return product.id === obj.id;
  });
});
cartProductsSearchResults.value = cartProducts.value;

const searchResults = (query) => {
  cartProductsSearchResults.value = cartProducts.value.filter((product) => {
    return product.title.toLowerCase().includes(query.toLowerCase());
  });
  cartProductsSearchResults.value.length > 0
    ? (isSearchResults.value = true)
    : (isSearchResults.value = false);
};
</script>

<template>
  <Navbar @search="searchResults" />
  <div
    class="flex flex-col gap-10 items-center"
    v-if="isSearchResults && cartProducts.length > 0"
  >
    <div v-for="product in cartProductsSearchResults" :key="product.id">
      <CartItem
        :product="product"
        :cartProducts="cartProducts"
        @deleteCartItem="() => deleteCartItem(product.id)"
      />
    </div>
  </div>
  <span
    v-else-if="cartProducts.length === 0"
    class="flex justify-center text-xl"
    >No items in your shopping cart</span
  >
  <span v-else class="flex justify-center text-xl"
    >No product matches your search</span
  >
  <div class="flex justify-center mt-20 gap-10">
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
</template>

<style scoped></style>
