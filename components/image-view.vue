<template>
  <div class="flex flex-col items-center justify-center">
    <img
      v-if="activeColours.trim !== null"
      :src="`/colour-picker/assets/images/${activeProduct.name}/${activeColours.trim}-${activeColours.base}.png`"
      class="w-2/3"
    />
    <img
      v-else
      :src="`/colour-picker/assets/images/${activeProduct.name}/base.png`"
      class="w-2/3"
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
