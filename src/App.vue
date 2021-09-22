<template>
  <div class="root">
    <el-card :body-style="{ padding: 0 }">
      <Layout class="layout"></Layout>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ElCard } from 'element-plus';
import Layout from 'layout/layout.vue';


export default defineComponent({
  name: 'App',
  components: {
    Layout,
    ElCard,
  }
});
</script>

<style lang="less" scoped>

  .root {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    &::after,  &::before{
      content: '';
      display: block;
      clear: both;
    }

    .layout {
      width: 53vw;
      height: 74vh;
    }
  }

</style>
