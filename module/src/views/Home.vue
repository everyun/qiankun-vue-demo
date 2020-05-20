<template>
  <CheckboxGroup v-model="filterParams">
    <Checkbox v-for="(item, index) in filterList" :key="index" :label="item.typeKey">
    </Checkbox>
  </CheckboxGroup>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

import { CheckboxGroup, Checkbox } from 'iview';



export default {
  name: 'Home',
  components: {
    HelloWorld,
    CheckboxGroup,
    Checkbox
  },
  data() {
    return {
      filterParams: [],
      filterList: Array.from({length: 200}).map((item, index) => {
        return {
          typeKey: 'iview' + index
        }
      })
    }
  },
}
</script>
