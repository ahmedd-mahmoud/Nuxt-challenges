<script setup>
const props = defineProps({
  product: {
    type: Object,
  },
});
</script>

<template>
  <div
    class="w-[60rem] bg-[#B2B2B2] grid grid-cols-3 place-items-center px-4 py-3"
  >
    <span class="text-xl">{{ product.title }}</span>
    <span class="text-lg">${{ product.price }}</span>
    <button
      class="flex items-center px-12 py-4 bg-white rounded-2xl hover:bg-slate-100"
    >
      <img src="../assets/icons/mdi_delete.svg" alt="delete-icon" /> Remove
    </button>
  </div>
</template>

<style scoped></style>
