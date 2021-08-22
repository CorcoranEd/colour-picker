const toaster = {
  name: 'toaster',
  colours: {
    trim: ['copper', 'brass'],
    base: [
      'BSS',
      'BTR',
      'BST',
      'DBL',
      'RGP',
      'OYS',
      'SST',
      'GSP',
      'RVC',
      'OLT',
      'ALM',
    ],
  },
}

export const state = () => ({
  activeProduct: toaster,
  activeColours: {
    trim: null,
    base: 'BSS',
  },
  products: [toaster],
  savedItems: {
    toaster: [],
  },
})

export const mutations = {
  SET_PRODUCT(state, payload) {
    state.activeProduct = payload
  },
  SET_COLOUR(state, payload) {
    state.activeColours[payload.type] = payload.colour
  },
  SAVE_ITEM(state, payload) {
    const foundIndex = state.savedItems[payload.type].findIndex(
      (item) =>
        item.trim === payload.item.trim && item.base === payload.item.base
    )

    if (foundIndex === -1) {
      state.savedItems[payload.type].push(payload.item)
    }
  },
  REMOVE_ITEM(state, payload) {
    const foundIndex = state.savedItems[payload.type].findIndex(
      (item) => item === payload.item
    )

    state.savedItems[payload.type].splice(foundIndex, 1)
  },
}

export const getters = {
  activeProduct: (state) => {
    return state.activeProduct
  },
  activeColours: (state) => {
    return state.activeColours
  },
  savedItems: (state) => {
    return state.savedItems
  },
  products: (state) => {
    return state.products
  },
}

export const actions = {
  SET_PRODUCT({ commit }, payload) {
    commit('SET_PRODUCT', payload)
  },
  SET_COLOUR({ commit }, payload) {
    commit('SET_COLOUR', payload)
  },
  SAVE_ITEM({ commit }, payload) {
    commit('SAVE_ITEM', payload)
  },
  REMOVE_ITEM({ commit }, payload) {
    commit('REMOVE_ITEM', payload)
  },
}
