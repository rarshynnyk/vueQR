export default {
  setItem (name, value) {
    return localStorage.setItem(name, value)
  },

  getItem (name) {
    return localStorage.getItem(name)
  }
}
