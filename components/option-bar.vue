<template>
  <div class="border-l border-grey-100 space-y-8 p-4">
    <div>
      <h6>Trim colour</h6>
      <div class="flex flex-row flex-wrap -mx-2">
        <div
          v-for="trim in activeProduct.colours.trim"
          :key="trim"
          class="w-1/2"
        >
          <div
            class="border m-2"
            :class="[
              trimColour === trim ? 'border-breville' : 'border-grey-200',
            ]"
          >
            <label
              class="flex flex-row items-center p-2 cursor-pointer"
              :for="`${activeProduct.name}-trim-${trim}`"
              ><input
                :id="`${activeProduct.name}-trim-${trim}`"
                v-model="trimColour"
                type="radio"
                :value="trim"
                class="w-6 mb-0 mr-2"
              />{{ trim }}</label
            >
          </div>
        </div>
      </div>
    </div>

    <div>
      <h6>Body colour</h6>
      <div class="flex flex-row flex-wrap -mx-2">
        <div
          v-for="base in activeProduct.colours.base"
          :key="base"
          class="w-1/2"
        >
          <div
            class="border m-2"
            :class="[
              baseColour === base ? 'border-breville' : 'border-grey-200',
            ]"
          >
            <label
              class="flex flex-row items-center p-2 cursor-pointer"
              :for="`${activeProduct.name}-base-${base}`"
              ><input
                :id="`${activeProduct.name}-base-${base}`"
                v-model="baseColour"
                type="radio"
                :value="base"
                class="w-6 mb-0 mr-2"
              />{{ base }}</label
            >
          </div>
        </div>
      </div>
    </div>

    <div>
      <button
        v-if="activeColours.trim !== null"
        class="bg-breville text-white font-serif font-bold px-4 py-2"
        @click="addToComparison"
      >
        add to comparison
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['activeProduct', 'activeColours']),
    trimColour: {
      get() {
        return this.$store.state.activeColours.trim
      },
      set(value) {
        const payload = {
          type: 'trim',
          colour: value,
        }
        this.$store.dispatch('SET_COLOUR', payload)
      },
    },
    baseColour: {
      get() {
        return this.$store.state.activeColours.base
      },
      set(value) {
        const payload = {
          type: 'base',
          colour: value,
        }
        this.$store.dispatch('SET_COLOUR', payload)
      },
    },
  },
  methods: {
    addToComparison() {
      const payload = {
        type: this.activeProduct.name,
        item: {
          trim: this.trimColour,
          base: this.baseColour,
        },
      }
      this.$store.dispatch('SAVE_ITEM', payload)
    },
  },
}
</script>
