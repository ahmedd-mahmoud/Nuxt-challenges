<script setup>
const idsAndCounts = useProductIdAndCount();
const totalSpent = ref(0);
const filteredIdsAndCounts = ref([]);

filteredIdsAndCounts.value = Object.values(
  idsAndCounts.value.reduce((uniqueId, item) => {
    if (!uniqueId[item.id] || uniqueId[item.id].count < item.count) {
      uniqueId[item.id] = item;
    }
    return uniqueId;
  }, {})
);

filteredIdsAndCounts.value.forEach((idAndCount) => {
  totalSpent.value = totalSpent.value + idAndCount.price * idAndCount.count;
});

const clearCart = () => {
  idsAndCounts.value = [];
};
</script>

<template>
  <div class="flex flex-col justify-center items-center h-screen -m-4">
    <h1 class="text-5xl mb-6">Thank you for shopping with us</h1>
    <h2 class="text-3xl">Total money spent: ${{ totalSpent }}</h2>
    <NuxtLink
      to="/home"
      class="mt-40 text-2xl bg-gray-500 text-white p-5 rounded-full hover:bg-gray-400"
      @click="clearCart"
      >Go back to home page</NuxtLink
    >
  </div>
</template>

<style scoped></style>
