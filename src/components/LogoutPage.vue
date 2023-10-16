<template>
    <div>
      <v-card>
      </v-card>
      <v-btn color="error" @click="logout" block>
        ออกจากระบบ
      </v-btn>
    </div>
  </template>

<script>
export default {

  methods: {

    logout () {
      localStorage.removeItem('authToken')
      this.$router.push('/login')

      alert('ออกจากระบบสำเร็จ')
    }
  }
}
</script>

  <style>
  </style>
