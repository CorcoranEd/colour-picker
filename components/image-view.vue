<template>
  <div class="flex flex-col items-center justify-center">
    <img
      v-if="activeColours.trim !== null"
      :src="`/colour-picker/assets/images/${activeProduct.name}/${activeColours.trim}-${activeColours.base}.png`"
      class="w-3/4 h-auto"
    />
    <img
      v-else
      :src="`/colour-picker/assets/images/${activeProduct.name}/base.png`"
      class="w-3/4 h-auto"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['activeProduct', 'activeColours']),
  },
}
</script>
