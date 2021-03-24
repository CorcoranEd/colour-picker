<template>
  <div class="border-b border-grey-100 py-2">
    <div class="flex flex-row justify-between">
      <div class="flex flex-row space-x-2 items-center">
        <img class="h-8" src="@/assets/images/logo.png" />
        <h5 class="mb-0 whitespace-no-wrap">Colour Picker</h5>
      </div>
      <div class="w-1/4 px-2">
        <select
          v-model="selectedProduct"
          class="w-full border border-gray-200 p-2 focus:outline-none focus:border-blue-700 cursor-pointer bg-white"
        >
          <option
            v-for="(product, key) in products"
            :key="key"
            :value="product"
          >
            {{ product.name }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['products']),
    selectedProduct: {
      get() {
        return this.$store.state.activeProduct
      },
      set(value) {
        this.$store.dispatch('SET_PRODUCT', value)
      },
    },
  },
}
</script>

<style scoped>
select {
  background: url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0Ljk1IDEwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9LmNscy0ye2ZpbGw6IzQ0NDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmFycm93czwvdGl0bGU+PHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iNC45NSIgaGVpZ2h0PSIxMCIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIxLjQxIDQuNjcgMi40OCAzLjE4IDMuNTQgNC42NyAxLjQxIDQuNjciLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMy41NCA1LjMzIDIuNDggNi44MiAxLjQxIDUuMzMgMy41NCA1LjMzIi8+PC9zdmc+)
    no-repeat #fff;
  -moz-appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-position: right 5px top;
}
</style>
