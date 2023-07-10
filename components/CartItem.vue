<script setup>
const props = defineProps({
  product: {
    type: Object,
  },
  cartProducts: {
    type: Array,
  },
});
const idsAndCounts = useProductIdAndCount();
const countIncrement = () => {
  props.product.count++;
  idsAndCounts.value.push({
    id: props.product.id,
    count: props.product.count,
    price: props.product.price,
  });
};
const countDecrement = (id) => {
  if (props.product.count > 1) {
    props.product.count--;
    for (let i = 0; i < idsAndCounts.value.length; i++) {
      if (idsAndCounts.value[i].id === id) {
        idsAndCounts.value.splice(i, 1);
        break;
      }
    }
  }
};
</script>

<template>
  <div
    class="w-[65rem] bg-[#B2B2B2] grid grid-cols-4 place-items-center px-4 py-3"
  >
    <span class="text-xl">{{ product.title }}</span>
    <span class="text-lg">${{ product.price }}</span>
    <span class="text-lg flex items-center gap-4 px-4 py-2 bg-white rounded-2xl"
      ><button class="text-4xl mb-2" @click="() => countDecrement(product.id)">
        -
      </button>
      Items:
      {{ product.count }}
      <button class="text-4xl mb-2" @click="countIncrement">+</button></span
    >
    <button
      class="flex items-center px-12 py-4 bg-white rounded-2xl hover:bg-slate-100"
      @click="$emit('deleteCartItem')"
    >
      <img src="../assets/icons/mdi_delete.svg" alt="delete-icon" /> Remove
    </button>
  </div>
</template>

<style scoped></style>
