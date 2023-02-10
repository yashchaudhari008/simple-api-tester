<script>
import { store } from '../store.js'
export default {
    emits: ['submitForm'],
    data() {
        return {
            store
        }
    },
    methods: {
        async handleSubmit(e) {
            e.preventDefault();
            this.$emit('submitForm', e);
        }
    }
}
</script>
<template>
    <form @submit="handleSubmit">
        <div>
            <select id="REQUEST_METHOD" v-model="store.REQUEST_METHOD">
                <option value="GET">GET</option>
                <option value="POST">POST</option>
            </select>
            <input id="REQUEST_URL" type="text" v-model="store.REQUEST_URL" placeholder="https://api/api_endpoint"/>
            <button type="submit">SEND</button>
        </div>
        <div v-if="store.REQUEST_METHOD === 'POST'">
            <label for="REQUEST_BODY">Body: </label> 
            <textarea id="REQUEST_BODY" v-model="store.REQUEST_BODY" style="resize: none;" rows="5" col="100">
            </textarea>
        </div>
    </form>
</template>