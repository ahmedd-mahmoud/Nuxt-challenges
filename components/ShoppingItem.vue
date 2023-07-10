<script setup>
const props = defineProps({
  product: {
    type: Object,
  },
});
const products = useProducts();
const idsAndCounts = useProductIdAndCount();
const count = ref(0);
const lastIndexOfArray = ref(0);

const handleAdd = (id) => {
  count.value++;
  idsAndCounts.value.push({
    id: props.product.id,
    count: count.value,
    price: props.product.price,
  });
  lastIndexOfArray.value = idsAndCounts.value.length - 1;
  products.value.forEach((product) => {
    if (id === product.id) {
      product.count = count.value;
    }
  });
};
</script>

<template>
  <div class="card">
    <img
      class="w-5/6 h-1/2 mt-4"
      :src="product.images[0]"
      :alt="product.title"
    />
    <span class="text-2xl">
      {{ product.title }}
    </span>
    <span class="text-xl mb-2"> ${{ product.price }} </span>
    <button
      class="py-1 bg-white rounded-2xl text-center w-1/2 mb-4 ml-auto hover:bg-slate-100"
      @click="() => handleAdd(product.id)"
    >
      + add to cart
    </button>
  </div>
</template>

<style scoped></style>
