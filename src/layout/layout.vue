<template>
  <div class="layout">
    <Sidebar class="sidebar" :menu="menuConfig"></Sidebar>
    <div class="main">
      <Header class="header"></Header>  
      <Content class="content"></Content>
      <Footer class="footer"></Footer>
    </div>
  </div>
</template>

<script lang="ts">
	import { defineComponent } from "vue";
	import Header from "./header.vue";
	import Sidebar from "./sidebar.vue";
	import Footer from "./footer.vue";
	import Content from "./content.vue";
	import { menu } from "@/config/menu";

	export default defineComponent({
		name: "Layout",
		components: {
			Header,
			Sidebar,
			Footer,
			Content,
		},
    setup() {
      const menuConfig = menu;

      console.log(menuConfig)

      return {
        menuConfig
      }
    }
	});
</script>

<style lang="less" scoped>

.layout {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;

  .main {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
  }

  .content {
    flex: 1 1 auto;
  }
}

</style>
