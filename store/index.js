export const state = () => ({
  images: []
})

export const mutations = {
  add(state, data) {
    state.images.push(data)
  }
}

export const getters = {
  getImageBatch: (state) => (page) => {
    return state.images[0]
  }
}