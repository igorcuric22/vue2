import { createApp } from 'vue'

import App from './App.vue'
import SlotComp2 from './SlotComp2.vue'

const app = createApp(App)
app.component('slot-comp2', SlotComp2)
app.mount('#app')
                  