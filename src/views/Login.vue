<template>
<div class="container mt-5">
<form class="row justify-content-center"
  @submit.prevent="signIn"
>
  <div class="col-md-6">
    <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
    <div class="mb-2">
      <label for="inputEmail" class="sr-only">Email address</label>
      <input
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email address"
        required
        autofocus
        v-model="user.username"
      />
    </div>
    <div class="mb-2">
      <label for="inputPassword" class="sr-only">Password</label>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        required
        v-model="user.password"
      />
    </div>

    <div class="text-end mt-4">
      <button class="btn btn-lg btn-primary btn-block" type="submit">登入</button>
    </div>
  </div>
</form>
</div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    signIn () {
      const api = `${process.env.VUE_APP_API}admin/signin`
      // console.log(this.user, api)
      this.$http.post(api, this.user)
        .then((res) => {
          if (res) {
            // 課程 v
            // const { token, expired } = res.data
            // 自調整 cookie 生命週期 v
            const { token } = res.data
            const expired = new Date().getTime() + (1000 * 60 * 60 * -8) + (1000 * 10 * 20) // 1000 = 0:01 // 8 為時差

            console.log(res, token, expired)
            console.log(expired, '/', new Date(expired))
            document.cookie = `easonCookie=${token};expires=${new Date(expired)}`

            this.$router.push('/dashboard/products')
          }
        })
    }
  }
}
</script>
