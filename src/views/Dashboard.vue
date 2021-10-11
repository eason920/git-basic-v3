<template>
<div>Dashboard</div>
</template>

<script>
export default {
  created () {
    // 將 cookie 中的 token 取出 v
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)easonCookie\s*=\s*([^;]*).*$)|^.*$/, '$1')
    console.log(token)

    // 將 token 存入 header，借以由 header 發送 v
    this.$http.defaults.headers.common.Authorization = token

    const api = `${process.env.VUE_APP_API}api/user/check`
    this.$http.post(api)
      .then((res) => {
        console.log(res)
        if (!res.data.success) {
          this.$router.push('/login')
        }
      })
  }
}
</script>
