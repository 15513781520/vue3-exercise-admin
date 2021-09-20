<template>
  <div class="root">
    <Header class="header"></Header>
    <div class="main">
      <Sidebar class="sidebar"></Sidebar>
      <Content class="content"></Content>
    </div>
    <Footer class="footer"></Footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from 'layout/header.vue';
import Sidebar from 'layout/sidebar.vue';
import Footer from 'layout/footer.vue';
import Content from 'layout/content.vue';


export default defineComponent({
  components: {
    Header,
    Sidebar,
    Footer,
    Content
  }
});
</script>

<style lang="less" scoped>

.root {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  .main {
    flex: 1 1 auto;
    display: flex;
    flex-direction: row;
  }

}



</style>
