import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import * as firebase from 'firebase'
 
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBBqWaihSttI7d7yU87lDzpaKyP5ZEfyzc',
    libraries: 'places', 
  },
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),

  created () {
    firebase.initializeApp({
      apiKey: "AIzaSyDX3JhPxVsNv9Vz3Jyi2R6Lil6E6KHJMV0",
      authDomain: "hopperplan.firebaseapp.com",
      databaseURL: "https://hopperplan.firebaseio.com",
      projectId: "hopperplan",
      storageBucket: "hopperplan.appspot.com",
      messagingSenderId: "434194510357",
      appId: "1:434194510357:web:e1b174ddd4bd861d"
    });
  }
}).$mount('#app')
