<template>
  <div
    v-if="savedItems[activeProduct.name].length !== 0"
    class="border-t border-grey-100"
  >
    <div class="border-b p-2 cursor-pointer text-center" @click="toggle">
      <span v-if="!hidden">Hide</span>
      <span v-else>Show</span> Comparison
      <span class="bg-breville text-white text-xs px-2 py-1 rounded-full">
        {{ savedItems[activeProduct.name].length }}</span
      >
    </div>

    <div v-if="!hidden" class="mt-4 flex flex-row space-x-12">
      <div
        v-for="item in savedItems[activeProduct.name]"
        :key="`${activeProduct.name}-${item.trim}-${item.base}`"
        class="w-1/5 relative"
      >
        <img
          :src="`/colour-picker/assets/images/${activeProduct.name}/${item.trim}-${item.base}.png`"
        />
        <p class="w-full text-center">{{ item.trim }} {{ item.base }}</p>
        <img
          class="absolute top-0 right-0 w-6 h-6"
          src="@/assets/images/cross.svg"
          @click="removeFromComparison"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      hidden: false,
    }
  },
  computed: {
    ...mapGetters(['savedItems', 'activeProduct']),
  },
  methods: {
    removeFromComparison() {
      const payload = {
        type: this.activeProduct.name,
        item: {
          trim: this.trimColour,
          base: this.baseColour,
        },
      }
      this.$store.dispatch('REMOVE_ITEM', payload)
    },
    toggle() {
      this.hidden = !this.hidden
    },
  },
}
</script>
