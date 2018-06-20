<template>
  <div class="scan">
    <h1>Scan your code</h1>
    <Scanner
      @scan="onScan"
    />
  </div>
</template>

<script>
import Scanner from './ui/Scanner'

export default {
  components: {
    Scanner
  },
  methods: {
    onScan (result) {
      this.$store.dispatch('qr/setCode', result)
      this.$router.push({ path: 'result' })
    }
  }
}
</script>

