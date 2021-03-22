<template>
  <div class="flex flex-row space-x-12 border-t border-grey-100 pt-8">
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
</template>

<script>
import { mapGetters } from 'vuex'

export default {
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
  },
}
</script>
