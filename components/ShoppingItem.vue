<script setup>
const props = defineProps({
  product: {
    type: Object,
  },
});
const ids = useProductId();
const handleAdd = () => {
  ids.value = [...ids.value, props.product.id];
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
      @click="handleAdd"
    >
      + add to cart
    </button>
  </div>
</template>

<style scoped></style>
