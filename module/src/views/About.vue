<template>
  <CheckboxGroup v-model="filterParams">
    <Checkbox v-for="(item, index) in filterList" :key="index" :label="item.typeKey">
      <!--      <span class="labelName">{{item['typeName' + language]}}</span>-->
      <!--      <span class="count" v-if="item.count > 0">{{isEnglish ? ' ('+ item.count + ')' : '（'+ item.count + '）'}}</span>-->
    </Checkbox>
  </CheckboxGroup>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'

  import { CheckboxGroup, Checkbox } from 'element-ui';



  export default {
    name: 'About',
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
            typeKey: 'element-' + index
          }
        })
      }
    },
  }
</script>
