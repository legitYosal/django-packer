<template>
  <div id="hello-world-container">
    {{ message }} {{ counter }}
  </div>
</template>

<script>
export default {
    delimiters: ['[[', ']]'],
    awefawf: 'afewaf',
    data() {
        return {
            message: 'This is rendered from test',
            counter: 0,
        }
    },
    methods: {
        increment() {
            setTimeout(() => {
                this.counter ++
                this.increment()
            }, 500)
        }
    },
    mounted() {
        this.increment()
    }
}
</script>

<style lang="scss">
$test: #eee;
#hello-world-container   {
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  color: blue;
  background: $test;
}
</style>