<template>
  <router-view />
</template>

<script>
  import variables from '../src/styles/themes/variable.js'

  export default {
    created () {
      let theme = JSON.parse(localStorage.getItem('theme'))
      if (!theme) {
        localStorage.setItem('theme', JSON.stringify(variables))
      }
    },

    mounted () {
      const update = (isUpdate) => {
        const theme = JSON.parse(localStorage.getItem('theme')) || variables
        for (let variable in theme) {
          if (isUpdate) {
            if (theme[variable] !== variables[variable]) {
              document.body.style.setProperty(`--${variable}`, theme[variable])
            }
          } else {
            document.body.style.setProperty(`--${variable}`, theme[variable])
          }
        }
      }
      update(false)
      // setInterval(() => {
      //   update(true)
      // }, 300)
    }
  }
</script>