<template>
  <div>
    <div class="scan__result">
      <!-- {{result}} -->
    </div>
    <div class="scan__reset">
      <router-link
        to="/scan"
        class="btn"
      >
        Reset
      </router-link>
    </div>
  </div>
</template>

<script>
export default {}
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
