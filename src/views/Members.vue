<template>
<div>
  <Card title="is demo 05"/>
  <Card :title="v"/>
</div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  components: {
    Card
  },
  data () {
    return {
      v: process.env.VUE_APP_API
    }
  }
}
</script>
