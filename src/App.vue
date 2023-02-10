<script>
import { store } from './store.js'
import RequestForm from "./components/Form.vue"
export default {
  components: { RequestForm },
  data() {
    return {
      store,
      RESPONSE: {},
    }
  },
  methods: {
    async handleSubmit(e){
      let res = await fetch(store.REQUEST_URL, {
        method: store.REQUEST_METHOD,
        ...((store.REQUEST_METHOD === 'POST') ? 
        {
          headers: {
            'Content-Type': 'application/json'
          },
          body: store.REQUEST_BODY
        }: null)
      })
      this.RESPONSE = await res.json();
    }
  }
}
</script>
<template>
  <h1 class="textEllipse">{{ store.getRequest() }}</h1>
  <RequestForm  @submitForm="handleSubmit"/>
  <pre v-if="Object.keys(RESPONSE).length > 0">{{ RESPONSE }}</pre>
  <pre v-else>Empty/No Response</pre>
  <footer>
    © Copyright 2022-23 | Made with ❤️ by Yash Chaudhari
  </footer>
</template>

<style scoped>
</style>
