<script>
export default {
    emits:['inc','dec'],
    props: {
        count: Number
    },
    methods: {
        inc(){
            this.$emit('inc');
        },
        dec(){
            this.$emit('dec');
        }
    }
}
</script>
<template>
    <p>Count : {{ count }}</p>
    <button @click="inc">Increment</button>
    <button @click="dec" v-if="count > 0">Decrement</button>
</template>