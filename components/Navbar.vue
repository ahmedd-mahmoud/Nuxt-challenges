<script setup>
const query = ref(null);

const route = useRoute().path;
const isCartPath = computed(() => {
  return route === "/cart" ? true : false;
});
</script>

<template>
  <div class="flex justify-between items-center mx-4 mt-4 mb-16">
    <NuxtLink to="/">Mahran's Shop</NuxtLink>
    <input
      v-model="query"
      placeholder="Search any product"
      class="rounded-3xl bg-gray-200 border-2 border-gray-400 w-1/4 px-4 py-3 mx-auto"
      @change="$emit('search', query)"
    />
    <NuxtLink v-show="!isCartPath" to="/cart"
      ><img src="../assets/icons/ion_cart.svg" alt="cart"
    /></NuxtLink>
  </div>
</template>

<style scoped></style>
