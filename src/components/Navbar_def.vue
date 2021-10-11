<template>
<div id="nav">
  <router-link to="/">Home</router-link> |
  <router-link to="/members">Members</router-link> |
  <router-link to="/about">About</router-link> |
  <router-link to="/vvd">VVD</router-link> |
  <router-link to="/login">Login</router-link> |
  <router-link to="/dashboard">Dashboard</router-link>
</div>
</template>

<style lang="sass">
#nav
  padding: 30px

  a
    font-weight: bold
    color: #2c3e50

    &.router-link-exact-active
      color: #42b983
</style>
