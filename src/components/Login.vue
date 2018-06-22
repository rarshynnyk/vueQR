<template>
  <div class="login">
    <h1>{{ $t('auth.header') }}</h1>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label
          for="login"
          class="control-label"
        >
          {{ $t('auth.label.login') }}
        </label>
        <input
          v-model="userData.login"
          type="text"
          id="login"
          class="form-control"
        >
      </div>
      <div class="form-group">
        <label
          for="password"
          class="control-label"
        >
          {{ $t('auth.label.password') }}
        </label>
        <input
          v-model="userData.password"
          type="password"
          id="password"
          class="form-control"
        >
      </div>
      <div class="form-group">
        <button
          class="btn btn-block"
        >
          {{ $t('auth.submitBtn') }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userData: {
        login: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit () {
      const isValid = this.validateLogin(this.userData)
      if (isValid) {
        this.$store.dispatch('auth/login', this.userData)
      }
    },
    validateLogin (data) {
      return Object.values(data).every(item => item.length !== 0)
    }
  }
}
</script>

<style scoped>
  .login {
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
  }

  .control-label {
    display: block;
    margin-bottom: 5px;
    text-align: left;
  }

  .form-group {
    margin-bottom: 20px;
  }

  .form-control {
    font-size: 16px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
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

  .btn-block {
    display: block;
    width: 100%;
  }
</style>
