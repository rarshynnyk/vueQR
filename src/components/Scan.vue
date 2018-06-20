<template>
  <div class="scan">
    <div v-if="result">
      <div class="scan__result">
        {{result}}
      </div>
      <div class="scan__reset">
        <button
          type="button"
          class="btn"
          @click="resetScanner"
        >
          Reset
        </button>
      </div>
    </div>
    <div v-else>
      <h1>Scan your code</h1>
      <Scanner
        @scan="onScan"
      />
    </div>
  </div>
</template>

<script>
import Scanner from './ui/Scanner'

export default {
  data () {
    return {
      result: null
    }
  },
  components: {
    Scanner
  },
  methods: {
    onScan (result) {
      this.result = result
    },
    resetScanner () {
      this.result = null
    }
  }
}
</script>

<style scoped>
  .scan {
    text-align: center;
  }

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
  }
</style>
