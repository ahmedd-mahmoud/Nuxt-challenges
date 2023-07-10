<script setup>
const query = ref(null);
const idsAndCounts = useProductIdAndCount();
const route = useRoute().path;
const isCartPath = computed(() => {
  return route === "/cart" ? true : false;
});
</script>

<template>
  <div
    class="w-full flex justify-between items-center py-4 mb-16 bg-white border-b-2 sticky top-0"
  >
    <NuxtLink to="/">Mahran's Shop</NuxtLink>
    <input
      v-model="query"
      placeholder="Search any product"
      class="rounded-3xl bg-gray-200 border-2 border-gray-400 w-1/4 px-4 py-3 mx-auto"
      @change="$emit('search', query)"
    />
    <NuxtLink v-show="!isCartPath" to="/cart" class="relative">
      <img src="../assets/icons/ion_cart.svg" alt="cart" />
      <div
        class="bg-green-400 w-1/3 rounded-full flex justify-center absolute bottom-0 right-0"
        v-if="idsAndCounts.length > 0"
      >
        {{ idsAndCounts.length }}
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped></style>
