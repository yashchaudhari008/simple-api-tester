// store.js
import { reactive } from 'vue'

export const store = reactive({
    REQUEST_METHOD: 'GET',
    REQUEST_URL: 'http://localhost:3000/',
    REQUEST_BODY:'',
    getRequest() {
        return `${this.REQUEST_METHOD} : ${this.REQUEST_URL}`
    }
})