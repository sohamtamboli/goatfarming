export const state = () => ({
  language: process.server
    ? undefined
    : localStorage.getItem('language') || 'english',
})

export const mutations = {
  change(state, lang) {
    state.language = lang
  },
}
