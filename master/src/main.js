import './registerServiceWorker'

import { registerMicroApps, start } from 'qiankun'

registerMicroApps([
  {
    name: 'simple',
    entry: 'http://localhost:10011/simple/',
    container: '#approval-slot',
    activeRule: '/simple'
  }
])
start({
  singular: false
})
