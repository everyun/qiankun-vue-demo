import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

function render() {
  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('react app bootstraped');
}

export async function unmount() {
  console.log('call unmount')
  document.querySelector('#approval-slot').style.display = 'none'

}

export const mount = async () => {
  document.querySelector('#approval-slot').style.display = 'block'
  render()
};