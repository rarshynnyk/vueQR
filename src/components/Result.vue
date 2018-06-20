<template>
  <div>
    <div class="scan__result">
      {{result}}
    </div>
    <div class="scan__reset">
      <button
        type="button"
        class="btn"
        @click="resetCode"
      >
        Reset
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      result: state => state.qr.code
    })
  },
  methods: {
    resetCode () {
      this.$store.dispatch('qr/resetCode')
      this.$router.push({ path: 'scan' })
    }
  },
  mounted () {
    if (!this.result.length) {
      this.resetCode()
    }
  }
}
</script>

<style scoped>
  .scan__result {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .btn {
    display: inline-block;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    background: #4bb685;
    border: 1px solid #4bb685;
    color: #fff;
    outline: none;
    padding: 10px 20px;
    border-radius: 100px;
    cursor: pointer;
    text-decoration: none;
  }
</style>
