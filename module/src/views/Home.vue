<template>
<!--  <CheckboxGroup v-model="filterParams">-->
<!--    <Checkbox v-for="(item, index) in filterList" :key="index" :label="item.typeKey">-->
<!--      &lt;!&ndash;      <span class="labelName">{{item['typeName' + language]}}</span>&ndash;&gt;-->
<!--      &lt;!&ndash;      <span class="count" v-if="item.count > 0">{{isEnglish ? ' ('+ item.count + ')' : '（'+ item.count + '）'}}</span>&ndash;&gt;-->
<!--    </Checkbox>-->
<!--  </CheckboxGroup>-->
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
