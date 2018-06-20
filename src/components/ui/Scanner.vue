<template>
  <video
    ref="scanner"
    class="scanner"
  />
</template>

<script>
import Instascan from 'instascan'

export default {
  data () {
    return {
      scanner: null
    }
  },
  methods: {
    createScanner () {
      this.scanner = new Instascan.Scanner({ video: this.$refs.scanner })
    },
    listenScan () {
      this.scanner.addListener('scan', content => this.$emit('scan', content))
    },
    runScanner () {
      Instascan.Camera.getCameras()
        .then(cameras => {
          const isCamerasExsist = cameras.length

          if (isCamerasExsist) {
            this.scanner.start(cameras[0])
          }
        })
        .catch(err => {
          console.error(err)
        })
    }
  },
  mounted () {
    this.createScanner()
    this.runScanner()
    this.listenScan()
  }
}
</script>
