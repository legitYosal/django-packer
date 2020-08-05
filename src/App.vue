<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
    delimiters: ['[[', ']]'],
    template: '#vue-app',
    components: {
        'just-a-test': HelloWorld,
    },
    data() {
        return {
            message: 'Hello Vue!'
        }
    },
}
</script>