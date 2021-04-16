export const state = () => ({
  language: undefined,
})

export const mutations = {
  change(state, lang) {
    state.language = lang
  },
}
